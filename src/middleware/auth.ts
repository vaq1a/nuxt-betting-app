import {ROUTE_PATHES_HOME, ROUTE_PATHES_LOGIN} from "~/constants/routePathes";
import {EndPointsService} from "~/services/endPointsService";
import type {TCheckRefreshTokenResponse} from "~/types/endPointsServiceTypes";

export default defineNuxtRouteMiddleware(async (to) => {
    const {data: isAuth} = await useFetch<TCheckRefreshTokenResponse>(EndPointsService.localCheckRefreshToken)

    if (!unref(isAuth) && to.path !== ROUTE_PATHES_LOGIN) {
        console.log('!login => home')
        return navigateTo(ROUTE_PATHES_LOGIN)
    }

    if ((to.path === ROUTE_PATHES_LOGIN) && unref(isAuth)) {
        console.log('login => home')
        return navigateTo(ROUTE_PATHES_HOME)
    }

    return
});
