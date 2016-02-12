import {containerless, inject, inlineView} from 'aurelia-framework'
import {EventAggregator} from 'aurelia-event-aggregator'
import Cookies from 'cookies'

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

    constructor(events) {
        this.events = events
        this.open = false

        // look in cookie
        console.log('Cookie', Cookies)
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