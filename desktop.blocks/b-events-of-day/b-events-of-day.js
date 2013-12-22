modules.define('i-bem__dom', ['jquery', 'dom', 'events'], function(provide, $, dom, events, BEMDOM) {

    BEMDOM.decl('b-events-of-day', {

        addEvent: function(event) {
            BEMDOM.append(this.findElem('list'), BEMHTML.apply({
                block: 'b-event',
                name: event
            }));
        }
    });

    provide(BEMDOM);
});




