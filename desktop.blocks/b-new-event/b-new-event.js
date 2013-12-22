modules.define('i-bem__dom', ['jquery', 'dom', 'events'], function(provide, $, dom, events, BEMDOM) {

    BEMDOM.decl('b-new-event', {

        onSetMod: {

            js: function() {
                var input = this.findBlockOn('event-name', 'input');

                this.findBlockOn('add-button', 'button').on('click', function() {
                    this.trigger('new-event', { name: input.getVal() });
                }, this);
            }
        }
    });

    provide(BEMDOM);
});




