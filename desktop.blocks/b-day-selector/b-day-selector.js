modules.define('i-bem__dom', ['jquery', 'dom', 'events'], function(provide, $, dom, events, BEMDOM) {
    
    BEMDOM.decl('b-day-selector', {

        onSetMod: {

            js: function() {
                var date = new Date(this.params.currentDate);

                this.findBlockOn('prev-day', 'button').on('click', function() {
                    date.setDate(date.getDate() - 1);
                    this._updateCurrent(date);
                }, this);

                this.findBlockOn('next-day', 'button').on('click', function() {
                    date.setDate(date.getDate() + 1);
                    this._updateCurrent(date);
                }, this);

            }
        },
        /**
         *  1. Отображение даты в календаре (элемент 'current-day')
         *  2. Тригерится событие 'change-date' для отправки текущего объекта Date во время смены дня в календаре
         * @param {Date} current - текущий объект Date
         * @private
         */
        _updateCurrent: function(current) {
            BEMDOM.update(this.elem('current-day'), current.getDate() + '/' + (current.getMonth() + 1));
            this.trigger('change-date', { current: current });
        }
    });

    provide(BEMDOM);
});




