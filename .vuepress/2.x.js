module.exports = [
    {
        title: "Начало работы",
        collapsable: false,
        children: [
            'introduction',
            'installation',
            'concept-overview',
            'building-your-app',
        ],
    }, {
        title: "Функции",
        collapsable: false,
        children: prefix('features', [
            'authentication',
            'registration',
            'profile-management',
            'password-update',
            'password-confirmation',
            'two-factor-authentication',
            'browser-sessions',
            'api',
            'teams',
        ]),
    }, {
        title: "Функции стека",
        collapsable: false,
        children: prefix('stacks', [
            'livewire',
            'inertia',
        ]),
    }
]

function prefix(prefix, children) {
    return children.map(child => `${prefix}/${child}`)
}
