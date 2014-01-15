modules.define('i-bem__dom', ['jquery', 'dom', 'events'], function(provide, $, dom, events, BEMDOM) {

    BEMDOM.decl('b-events-of-day', {
        updateEvent: function() {
             BEMDOM.append(this.findElem('list'), '');
        },
        addEvent: function(event) {
            BEMDOM.append(this.findElem('list'), BEMHTML.apply({
                block: 'b-event',
                name: event['15/1'][0]['strEvent']
            }));
        }
    });

    provide(BEMDOM);
});