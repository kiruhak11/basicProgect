// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {
        enabled: true,

        timeline: {
            enabled: true,
        },
    },
    experimental: {
        typedPages: true,
    },
    modules: [
        '@nuxtjs/eslint-module',
        '@pinia/nuxt',
        '@nuxt/image',
        '@pinia-plugin-persistedstate/nuxt',
        'frog-modal',
        '@nuxtjs/google-fonts',
    ],
    piniaPersistedstate: {
        cookieOptions: {
            sameSite: 'strict',
        },
        storage: 'localStorage',
    },
    runtimeConfig: {
        public: {
            api: process.env.API_URL || '/api',
            yandex_api_key: process.env.YANDEX_API_KEY || '',
        },
    },

    googleFonts: {
        families: {
            'Fira Sans': [400, 500, 600, 700],
            'EB Garamond': [400, 500, 600, 700],
        },
    },
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@import "~/assets/styles/collection/index.scss";',
                },
            },
        },
    },
});
