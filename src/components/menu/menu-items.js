import {containerless, inlineView} from 'aurelia-framework'

@containerless()
@inlineView(`
<template>
    <ul class="menu__items">
        <content></content>
    </ul>
</template>
`)
export class MenuItems {

}