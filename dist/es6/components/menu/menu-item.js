import {bindable, containerless, inlineView} from 'aurelia-framework'

@containerless()
@inlineView(`
<template>
    <li class="menu__item">
        <a class="menu__link" href.bind="item.url">
            <i class="menu__icon" class.bind="item.iconClass"></i>
            <span innerHtml.bind="item.title"></span>
        </a>

        <menu-items>
            <menu-item repeat.for="link of item.links" item.bind="link"></menu-item>
        </menu-items>
    </li>
</template>
`)
export class MenuItem {

    @bindable item = {}

}