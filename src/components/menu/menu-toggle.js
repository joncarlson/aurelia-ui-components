import {containerless, inject} from 'aurelia-framework'
import {EventAggregator} from 'aurelia-event-aggregator'

@containerless()
@inject(EventAggregator)
export class MenuToggle {

    constructor(events) {
        this.events = events
        this.open = false
    }

    get open() {
        return this._open
    }

    set open(open) {
        this._open = open

        this.events.publish('menu:toggle-open', this._open)
    }

    toggle() {
        this.open = !this.open
    }

}