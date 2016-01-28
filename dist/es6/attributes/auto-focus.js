import {customAttribute, inject} from 'aurelia-framework'

@customAttribute('auto-focus')
@inject(Element)
export class AutoFocus {

    constructor(element) {
        this.element = element
    }

    attached() {
        this.element.focus()
    }

}
