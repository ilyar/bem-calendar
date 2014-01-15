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
                name = this.nameInput.getVal();

            if (!(minutes && hours && name)) {
                alert('Необходимо ввести недостающие данные в поле "Время" или "Событие"');

            } else {

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




