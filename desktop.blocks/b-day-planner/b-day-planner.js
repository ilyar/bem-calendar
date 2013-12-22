modules.define('i-bem__dom', ['jquery', 'dom', 'events'], function(provide, $, dom, events, BEMDOM) {

    BEMDOM.decl('b-day-planner', {

        onSetMod: {

            js: function() {
                var events = this.findBlockInside('b-events-of-day');

                this.findBlockInside('b-new-event').on('new-event', function(e, data) {
                    events.addEvent(data.name);
                }, this);

            }
        }

    });

    provide(BEMDOM);
});




