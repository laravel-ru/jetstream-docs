module.exports = {
    title: "Laravel Jetstream",
    description: "Красиво оформленный каркас приложений для Laravel",
    base: '/',

    head: require('./head'),

    locales: {
        '/': {
            lang: 'ru',
        },
    },

    themeConfig: {
        logo: '/assets/img/logo.svg',
        displayAllHeaders: true,
        activeHeaderLinks: false,
        searchPlaceholder: 'Нажмите / для поиска',
        lastUpdated: false, // string | boolean
        sidebarDepth: 1,

        repo: 'laravel/jetstream',

        docsRepo: 'laravel-ru/jetstream-docs',
        docsBranch: 'main-ru',
        editLinks: true,
        editLinkText: 'Помогите нам улучшить эту страницу!',

        nav: [
            { text: 'Главная', link: '/', target: '_self' },
        ],

        sidebar: {
            '/1.x/': require('./1.x')
        },
    },
}
