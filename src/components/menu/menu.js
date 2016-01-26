import {containerless, inject} from 'aurelia-framework'
import {EventAggregator} from 'aurelia-event-aggregator'

@containerless()
@inject(EventAggregator)
export class Menu {

    open = false

    constructor(events) {
        events.subscribe('menu:toggle-open', (open) => this.open = open)
    }

}
