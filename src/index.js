let components = {
    attributes: [
        './attributes/auto-focus',
    ],
    menu: [
        './components/menu/menu',
        './components/menu/menu-items',
        './components/menu/menu-item',
        './components/menu/menu-toggle',
        './components/menu/push-when-menu-open',
    ]
}

export function configure(config, includes=[]) {
    if (!includes.length) includes = Object.keys(components)

    config.globalResources(includes.reduce((resources, key) => {
        return resources.concat(components[key])
    }, []))
}