import axios from "axios";
import type {TGetRefreshTokenResponse, TUpdateTokenResponse} from "~/types/endPointsServiceTypes";
import {EndPointsService} from "~/services/endPointsService";
import {ROUTE_PATHES_LOGIN} from "~/constants/routePathes";

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
    withCredentials: true
})

axiosInstance.interceptors.request.use(
    async (requestConfig) => {
        console.log('interceptors request ok')
        console.log('interceptors request ok window', window)
        if (!window) {
            console.log('interceptors request ok !window')
            try {
                const { data: refreshToken } = await useFetch<TGetRefreshTokenResponse>(EndPointsService.localGetRefreshToken)
                requestConfig.headers['Authorization'] =  `Bearer ${unref(refreshToken)}`
                requestConfig.headers['Content-Type'] =  "application/json"

                return requestConfig
            } catch (e) {
                console.log('!window interceptors request error', e)
            }

            return requestConfig
        }

        return requestConfig
    },
    (error) => {
        return Promise.reject(error)
    }
)

axiosInstance.interceptors.response.use(
    (responseConfig) => {
        return Promise.resolve(responseConfig)
    },
    async (error) => {
        if (error.response.status === 401 && !window) {
            return navigateTo(ROUTE_PATHES_LOGIN)
        }

        if (error.response.status === 401 && window) {
            const data = await $fetch<TUpdateTokenResponse>(`${import.meta.env.VITE_BACKEND_URL}${EndPointsService.externalUpdateToken}`, {
                method: "post",
                credentials: "include"
            })

            if (data?.status === 405 || data?.status === 401) {
                return navigateTo(ROUTE_PATHES_LOGIN)
            }

            if (!error.config.once) {
                error.config.once = true

                return axiosInstance.request(error.config)
            }

            return Promise.reject(error)
        }
    }
);

export {
    axiosInstance,
}