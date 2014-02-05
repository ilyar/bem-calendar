modules.define('i-bem__dom', ['jquery', 'dom', 'events'], function(provide, $, dom, events, BEMDOM) {

    BEMDOM.decl('b-events-of-day', {

        renderEvents: function(events) {
            var listElem = this.findElem('list');

            this.events = events;

            BEMDOM.update(listElem, '');

            BEMDOM.append(listElem, BEMHTML.apply(
                this._getEventsBEMJSON(events)
            ));
        },

        /**
         *  Преобразование хеша, хранящего время и  событие,  в BEMJSON.
         * @param {Array} list - массив событий для текущего дня
         * @returns {BEMJSON}
         * @private
         */
        _getEventsBEMJSON: function(list) {

            if (!list || !list.length) {
               return [{ block: 'b-events-of-day', elem: 'empty', content: 'На текущий день событий не запланировано' }];
            }

            return list.map(function(item) {

                return {
                    block: 'b-event',
                    cont: item['hours'] + ':' + item['minutes'] + ' ' + item['name']
                };
            });
        }
    },
    {
        live: function() {

            this.liveBindTo('item', 'click', function(e){
                var inputCont = $(e.currentTarget).text(),
                    i = 0,
                    item,
                    contItem;

                do {

                    item = this.events[i];
                    contItem = item['hours'] + ':' + item['minutes'] + ' ' + item['name'];
                    i++;

                } while (i < this.events.length && inputCont != contItem);

                this.findBlockOutside('b-day-planner').findBlockInside('b-edit-event').showEditBox(item, events);

            });

            return false;
        }
    });

    provide(BEMDOM);
});
