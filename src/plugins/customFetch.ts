import {ROUTE_PATHES_LOGIN} from "~/constants/routePathes";
import {EndPointsService} from "~/services/endPointsService";
import type {TGetRefreshTokenResponse} from "~/types/endPointsServiceTypes";

export default defineNuxtPlugin(() => {
    const config = useRuntimeConfig();

    const $customFetch = $fetch.create({
        credentials: 'include',
        baseURL: config.public.backendUrl,
        retryStatusCodes: [401],
        retry: 1,
        async onRequest({ request, options, error }) {
            if (!window) {
                const {data: refreshToken} = await useFetch<TGetRefreshTokenResponse>(EndPointsService.localGetRefreshToken)

                if (unref(refreshToken)) {
                    options.headers = options.headers || {}
                    options.headers.Authorization = `Bearer ${unref(refreshToken)}`
                }
            }
        },
        async onResponseError({ response, options, error, request }) {
            if (response.status === 401 && !window) {
                navigateTo(ROUTE_PATHES_LOGIN)

                return
            }

            if (response.status === 401 && window) {
                const data: { status: number } = await $fetch(`${config.public.backendUrl}${EndPointsService.externalUpdateToken}`, {
                    method: "post",
                    credentials: "include"
                })

                if (data.status === 405) {
                    navigateTo(ROUTE_PATHES_LOGIN)

                    return
                }

                return
            }
        }
    })

    return {
        provide: {
            customFetch: $customFetch
        }
    }
})