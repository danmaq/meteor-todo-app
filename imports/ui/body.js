'use strict';

import { Tasks } from '../api/tasks.js';

import './body.html';

Template.body.helpers({
    tasks() {
        return Tasks.find({}, { sort: { createdAt: -1 } });
    },
});

Template.body.events({
    'submit .new-task' (event) {
        // stop propagation
        event.preventDefault();

        // get value.
        const target = event.target;
        const text = target.text.value;

        // insert to DB.
        Tasks.insert({ text, createdAt: new Date() });

        // clear form.
        target.text.value = '';
    },
});