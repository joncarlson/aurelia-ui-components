import {customAttribute, inject} from 'aurelia-framework'
import {EventAggregator} from 'aurelia-event-aggregator'

@customAttribute('push-when-menu-open')
@inject(Element, EventAggregator)
export class PushWhenMenuOpen {

    constructor(element, events) {
        this.element = element

        events.subscribe('menu:toggle-open', (open) => this.push(open))
    }

    attached() {
        this.element.className += ' push-when-menu-open'
    }

    push(open) {
        this.element.className = this.element.className.replace(/(?:^|\s)menu-open(?!\S)/g, '')

        if (open === true) this.element.className += ' menu-open'
    }

}