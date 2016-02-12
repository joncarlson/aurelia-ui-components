import {containerless, inject, inlineView} from 'aurelia-framework'
import {EventAggregator} from 'aurelia-event-aggregator'

@containerless()
@inlineView(`
<template>
    <a href="javascript:;" class="menu__toggle" click.trigger="toggle()">
        <i class="fa fa-bars"></i>
        <content></content>
    </a>
</template>
`)
@inject(EventAggregator)
export class MenuToggle {

    _open = false

    constructor(events) {
        this.events = events

        this.setMenuStateFromCookie()
    }

    get open() {
        return this._open
    }

    set open(open) {
        this._open = open

        this.events.publish('menu:toggle-open', this._open)

        document.cookie = `menuopen=${this._open}`
    }

    toggle() {
        this.open = !this.open
    }

    setMenuStateFromCookie() {
        let cookie = document.cookie.replace(/(?:(?:^|.*;\s*)menuopen\s*\=\s*([^;]*).*$)|^.*$/, '$1')

        this.open = (cookie && (cookie === true || cookie === 'true')) ? true : false
    }

}
