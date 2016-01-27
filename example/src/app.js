export class App {

    links = [
        {
            title: 'Home',
            url: '#/home',
            iconClass: 'fa fa-home'
        },

        {
            title: 'Admin',
            url: '#/admin',
            iconClass: 'fa fa-gear',
            links: [
                {
                    title: 'Subpage Test',
                    url: '#/subpage-test',
                    iconClass: 'fa fa-gear'
                }
            ]
        }
    ]

}