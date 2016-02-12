import {containerless, inject, inlineView} from 'aurelia-framework'
import {EventAggregator} from 'aurelia-event-aggregator'

@containerless()
@inlineView(`
<template>
	<nav class="menu menu--side" class.bind="open === true ? 'open' : ''">
		<content></content>
	</nav>
</template>
`)
@inject(EventAggregator)
export class Menu {

    open = false

    constructor(events) {
        events.subscribe('menu:toggle-open', (open) => this.open = open)
    }

}
