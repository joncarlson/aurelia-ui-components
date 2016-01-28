import {containerless} from 'aurelia-framework'

@containerless()
export class Tooltip {

    showing = false

    toggle() {
        this.showing = !this.showing
    }
}
