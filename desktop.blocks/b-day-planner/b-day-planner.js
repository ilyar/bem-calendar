modules.define('i-bem__dom', ['jquery', 'dom', 'events'], function(provide, $, dom, events, BEMDOM) {

    BEMDOM.decl('b-day-planner', {


        onSetMod: {

            js: function() {
                var bEvents = this.findBlockInside('b-events-of-day'),
                    bNewEvents = this.findBlockInside('b-new-event');
                this.findBlockInside('b-new-event').on('new-event', function(e, data) {
                    bEvents.addEvent(data.name);
                }, this);
                this.findBlockInside('b-day-selector').on('update-date', function(e,data){
                    bNewEvents.addDate(data.name);
                }, this)
            }
        }
    });

    provide(BEMDOM);
});




