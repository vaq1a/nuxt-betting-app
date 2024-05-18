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
        path: 'jackpot',
        price: '$ 0',
    },
    {
        id: 3,
        iconName: 'pvpMines',
        title: 'pvp mines',
        path: 'pvp-mines',
        price: '$ 0',
    },
    {
        id: 4,
        iconName: 'coinflip',
        title: 'coinflip',
        path: 'coinflip',
        price: '$ 100',
    },
    {
        id: 5,
        iconName: 'mines',
        title: 'mines',
        path: 'mines',
        label: 'new!',
    }
]