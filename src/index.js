export * from './components/menu/menu'
export * from './components/menu/menu-item'
export * from './components/menu/menu-toggle'
export * from './components/menu/push-when-menu-open'
export * from './components/tooltip/tooltip'

export function configure(config, callback) {
    config.globalResources(
        './components/menu/menu',
        './components/menu/menu-items',
        './components/menu/menu-item',
        './components/menu/menu-toggle',
        './components/menu/push-when-menu-open',
        './components/tooltip/tooltip'
    )

    if (typeof callback === 'function') {
        callback()
    }
}