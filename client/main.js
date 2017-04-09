'use strict';

import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.hello.onCreated(
    () => Template.instance().counter = new ReactiveVar(1));
Template.hello.helpers({
    counter() { return Template.instance().counter.get(); },
});

Template.hello.events({
    'click button' (event, instance) {
        const cnt = instance.counter;
        cnt.set(cnt.get() * 2 + 1);
    },
});