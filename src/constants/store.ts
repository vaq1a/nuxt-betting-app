import type {ChatFlagLanguages} from "~/types/chatFlags";

const state: {
    activeChatLang: ChatFlagLanguages
} = reactive({
    activeChatLang: 'EN',
})

const setActiveChatLang = (lang: ChatFlagLanguages) => {
    if (lang === unref(getActiveChatLang)) return

    state.activeChatLang = lang
}

export const store = readonly({
    state,
    setActiveChatLang,
})

export const getActiveChatLang = computed(() => store.state.activeChatLang)
