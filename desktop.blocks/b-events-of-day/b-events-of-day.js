modules.define('i-bem__dom', ['jquery', 'dom', 'events'], function(provide, $, dom, events, BEMDOM) {

    BEMDOM.decl('b-events-of-day', {

        renderEvents: function(events) {
            var listElem = this.findElem('list');


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

             this.liveBindTo('list', 'click', function(){

                 alert('ПРивет, братишка');
             })
        }

    });

    provide(BEMDOM);
});
