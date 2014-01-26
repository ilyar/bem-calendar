modules.define('i-bem__dom', ['jquery', 'dom', 'events'], function(provide, $, dom, events, BEMDOM) {

    BEMDOM.decl('b-day-planner', {

        onSetMod: {

            js: function() {
                this.dayEventsBlock = this.findBlockInside('b-events-of-day');
                this.newEventsBlock = this.findBlockInside('b-new-event');

                this.newEventsBlock.on('new-event', this.onAddEvent, this);

                this.findBlockInside('b-day-selector').on('change-date', function(e, data) {
                    this.current = data.current;
                    this.dayEventsBlock.renderEvents(this._getEventsForCurrentDay());
                }, this);

                var saved = localStorage.getItem('bem-calendar-events');

                this.events = saved ? JSON.parse(saved) : {};
                this.current = new Date();
                this.dayEventsBlock.renderEvents(this._getEventsForCurrentDay());
            }
        },

        onAddEvent: function(e, data) {
            var events = this._getEventsForCurrentDay();

            events.push(data);
            this._sort(events);
            localStorage.setItem('bem-calendar-events', JSON.stringify(this.events));
            this.dayEventsBlock.renderEvents(events);
        },
        /**
         * При помощи ключа: 'число / месяц' хеша Events возвращается необходимый массив
         * @returns {Array} Массив с событиями на текущий день
         * @private
         */
        _getEventsForCurrentDay: function() {
            var key = this.current.getDate() + '/' + this.current.getMonth();

            return this.events[key] || (this.events[key] = []);
        },
        /**
         * Сортировка элемнтов массива по времени методом пузырька
         * @param  {Array} array -  массив с событиями на текущий день
         * @private
         */
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




