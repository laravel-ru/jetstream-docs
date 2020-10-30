module.exports = [
    {
        title: "Начало",
        collapsable: false,
        children: [
            'introduction',
            'installation',
        ],
    }, {
        title: "Функции",
        collapsable: false,
        children: prefix('features', [
            'authentication',
            'profile-management',
            'security',
            'api',
            'teams',
        ]),
    }, {
        title: "Стеки",
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
