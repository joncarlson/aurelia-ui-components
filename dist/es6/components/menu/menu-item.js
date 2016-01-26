import {bindable, containerless} from 'aurelia-framework'

@containerless()
export class MenuItem {

    @bindable title = ''
    @bindable iconClass = ''
    @bindable url = '#'

}