modules.define('i-bem__dom', ['jquery', 'dom', 'events'], function(provide, $, dom, events, BEMDOM) {
    
    BEMDOM.decl('b-temp', {

        onSetMod: {

            js: function() {
                this.name = this.params.name;
                this.note = this.findBlockOn('note', 'input');

                var startBtn = this.findBlockOn('start-action', 'button');

                startBtn.on('click', function() {
                    this.startTrash();
                }, this);
            }

        },

        startTrash: function() {
            alert('Рубим на ' + this.name + ' ноту ' + this.note.getVal());
        }

    });

    provide(BEMDOM);
});




