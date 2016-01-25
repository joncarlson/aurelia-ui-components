export * from './components/slide-out-navigation/index'

export function configure(config, callback) {
  config.globalResources(
    './components/slide-out-navigation/index'
  )

  if (typeof callback === 'function') {
    callback();
  }
}