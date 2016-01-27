export function configure(aurelia) {
    aurelia.use
        .standardConfiguration()
        .developmentLogging()
        .plugin('aurelia-ui-components');

    aurelia.start().then(a => a.setRoot('src/app'));
}