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
                // несемантично
                hoursValid = !hours || (parseInt(hours) <= 0) || (parseInt(hours) >= 24),
                minutesValid = !minutes || (parseInt(minutes) <= 0) || (parseInt(minutes) >= 60);

            this.setMod(this.elem('event-hours'), 'color', hoursValid ? 'red' : '');
            this.minutesInput.setMod('color', minutesValid ? 'red' : '');
            this.nameInput.setMod('color', !name ? 'red' : '');

            !hoursValid && !minutesValid && name &&
                this.trigger('new-event', {
                    minutes: minutes,
                    hours: hours,
                    name: name
                });

        }
    });

    provide(BEMDOM);
});




