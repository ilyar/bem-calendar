modules.define('i-bem__dom', ['jquery', 'dom', 'events'], function(provide, $, dom, events, BEMDOM) {

    BEMDOM.decl('b-events-of-day', {

        addEvent: function(events) {
            var listElem = this.findElem('list'),
                list = events.event[events.key];

            BEMDOM.update(listElem, '');

            BEMDOM.append(listElem, BEMHTML.apply(
                this._mapForBEMHTML(list)
            ));
        },

        _mapForBEMHTML: function(list) {

            if (!list) {
                list = [{ name: 'На текущий день событий не запланировано', hours: '', minutes: '' }];
            }

            var content = list.map(function(item) {
                    return {
                        block: 'b-event',
                        cont: item['hours'] + ':' + item['minutes'] + ' ' + item['name']
                    };
                });

            return content;
        }
    });

    provide(BEMDOM);
});