import {inject} from 'aurelia-framework'

@inject(Element)
export class SlideOutNavigation {

    constructor(element) {
        this.element = element

        alert('got it!');
    }

}
