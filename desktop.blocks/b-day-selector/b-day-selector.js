modules.define('i-bem__dom', ['jquery', 'dom', 'events'], function(provide, $, dom, events, BEMDOM) {
    
    BEMDOM.decl('b-day-selector', {

        onSetMod: {

            js: function() {

                var date = new Date(this.params.currentDate);

                this.findBlockOn('prev-day', 'button').on('click', function() {
                    date.setDate(date.getDate() - 1);
                    this._updateCurrent(date);
                     this.trigger('update-date', { name: date });
                }, this);

                this.findBlockOn('next-day', 'button').on('click', function() {
                    date.setDate(date.getDate() + 1);
                    this._updateCurrent(date);
                    this.trigger('update-date', { name: date });
                }, this);

            }
        },

        _updateCurrent: function(current) {
            BEMDOM.update(this.elem('current-day'), current.getDate() + '/' + (current.getMonth() + 1));

        }
    });

    provide(BEMDOM);
});




