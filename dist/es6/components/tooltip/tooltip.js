import {containerless} from 'aurelia-framework'

@containerless()
export class Tooltip {

    showing = false

    constructor() {
        events.subscribe('tooltip:toggle-showing', (showing) => this.showing = showing)
    }

    toggle() {
        this._show = !this._show
        this.events.publish('tooltip:toggle-showing', this._show)

    }
}
