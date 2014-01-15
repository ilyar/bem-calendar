modules.define('i-bem__dom', ['jquery', 'dom', 'events'], function(provide, $, dom, events, BEMDOM) {

    BEMDOM.decl('b-day-planner', {

        onSetMod: {

            js: function() {
                this.dayEventsBlock = this.findBlockInside('b-events-of-day');
                this.newEventsBlock = this.findBlockInside('b-new-event');

                this.newEventsBlock.on('new-event', this.onAddEvent, this);

                this.findBlockInside('b-day-selector').on('change-date', function(e, data) {
                    this.current = data.current;
                }, this);

                var saved = localStorage.getItem('bem-calendar-events');

                this.events = saved ? JSON.parse(saved) : {};
                this.current = new Date();

                // убрать
                block = this;
            }
        },

        onAddEvent: function(e, data) {
            var key = this.current.getDate() + '/' + this.current.getMonth();

            this.events[key] || (this.events[key] = []);

            this.events[key].push(data);
            this._sort(this.events[key]);
            localStorage.setItem('bem-calendar-events', JSON.stringify(this.events));
        },

        _sort: function(array) {
            if (array.length == 1) return;

            for (var i = array.length - 1; i > 0; i--) {
                for (var j = 0; j < i; j++) {
                    var valLeft = parseInt((array[j]['hours'] + '' + array[j]['minutes'])),
                        valRight = parseInt((array[j + 1]['hours'] + '' + array[j + 1]['minutes']));

                    if (valLeft > valRight) {
                        var temp = array[j];

                        array[j] = array [j + 1];
                        array[j + 1] = temp;
                    }
                }
            }
        }

    });

    provide(BEMDOM);
});




