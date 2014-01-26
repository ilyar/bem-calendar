modules.define('i-bem__dom', ['jquery', 'dom', 'events'], function(provide, $, dom, events, BEMDOM) {

    BEMDOM.decl('b-new-event', {

        onSetMod: {

            js: function() {
                this.hoursInput = this.findBlockOn('event-hours', 'input');
                this.minutesInput = this.findBlockOn('event-minutes', 'input');
                this.nameInput =  this.findBlockOn('event-name', 'input');

                this.findBlockOn('add-button', 'button').on('click', this.addEvent, this);
            }

        },

        addEvent: function() {
            var minutes = this.minutesInput.getVal(),
                hours = this.hoursInput.getVal(),
                name = this.nameInput.getVal(),
                hoursValid = !hours || (0 >= parseInt(hours)) || (parseInt(hours) >= 24),
                minutesValid = !minutes || (0 >= parseInt(minutes)) || (parseInt(minutes) >= 60),
                a, b, c;

            if (hoursValid) {

                this.hoursInput.setMod('color', 'red');
                a = false;
            }
            else {

                this.hoursInput.delMod('color');
                a = true;
            }
            if (minutesValid) {

                this.minutesInput.setMod('color', 'red');
                b = false;
            }
            else {

                this.minutesInput.delMod('color');
                b = true;
            }

            if (!name) {

                this.nameInput.setMod('color', 'red');
                c = false;
            }
            else {

                this.nameInput.delMod('color');
                c = true;
            }
            if (a && b && c) {

                this.trigger('new-event', {
                    minutes: minutes,
                    hours: hours,
                    name: name
                });
            }
        }
    });

    provide(BEMDOM);
});




