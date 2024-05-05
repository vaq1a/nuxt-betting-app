import type {SideHeaderNavigationItem} from "~/types/SideHeaderNavigationItem";

export const SIDE_HEADER_NAVIGATION: SideHeaderNavigationItem[] = [
    {
        id: 1,
        iconName: 'squares',
        title: 'main',
        path: '/',
    },
    {
        id: 2,
        iconName: 'jackpot',
        title: 'jackpot',
        path: '/',
        price: '$ 0',
    },
    {
        id: 3,
        iconName: 'pvpMines',
        title: 'pvp mines',
        path: '/',
        price: '$ 100',
        label: 'new!',
    }
]