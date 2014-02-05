modules.define('i-bem__dom', ['jquery', 'dom', 'events'], function(provide, $, dom, events, BEMDOM) {

    BEMDOM.decl('b-edit-event', {

        onSetMod: {

            js: function() {

                this.findBlockOn('button-ok', 'button').on('click', this.addEditEvent, this);
                this.findBlockOn('button-cancel', 'button').on('click', this.hideEditBox, this);
            }
        },

        addEditEvent: function() {

            this.inputVal = this.inputBlock.getVal();
            this.item['name'] = this.inputVal;
            this.domElem.fadeOut(300);
            this.findBlockOutside('b-day-planner').findBlockInside('b-events-of-day').renderEvents(this.events);

        },

        showEditBox: function(item, array) {

            this.inputBlock = this.findBlockOn('show-edit-event', 'input');
            this.inputBlock.setVal(item['name']);
            this.domElem.fadeIn(300);
            this.item = item;
            this.events = array;

        },

        hideEditBox: function() {

            this.domElem.fadeOut(300);
        }
    });
    provide(BEMDOM);
});
