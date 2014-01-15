modules.define('i-bem__dom', ['jquery', 'dom', 'events'], function(provide, $, dom, events, BEMDOM) {

    BEMDOM.decl('b-new-event', {

        addDate: function(x){
            if (x) {
                this.temp = x;
                _this = this;
            }
            if(this.temp){
            function zam(){ if (!x) return _this.temp }
            return zam();
            }
        },
        onSetMod: {
            js: function() {

                var hoursOfEvent = this.findBlockOn('event-hours', 'input'),
                    minutesOfEvent = this.findBlockOn('event-minutes', 'input'),
                    stringOfEvent =  this.findBlockOn('event-name', 'input'),
                    data = {},
                    _this = this;

                this.findBlockOn('add-button', 'button').on('click', function() {

                    if(hoursOfEvent.getVal() && minutesOfEvent.getVal() && stringOfEvent.getVal()) {
                        var date = _this.addDate() || new Date();
                        item = data[ date.getDate()+ '/' + (date.getMonth()+1)] || new Array();
                        item.push({ hours: hoursOfEvent.getVal(), minutes: minutesOfEvent.getVal(), strEvent: stringOfEvent.getVal() })
                        if(item.length != 1){
                             for( var i = item.length-1; i > 0; i-- ){
                                for ( var j = 0; j < i; j++ ){
                                     if ( parseInt((item[j]['hours'] + '' + item[j]['minutes'])) > parseInt((item[j+1]['hours'] + '' + item[j+1]['minutes']))){
                                            var temp = item[j];

                                            item[j] = item [j+1];
                                            item[j+1] = temp;
                                     }
                                }
                             }
                        }
                    data[ date.getDate()+ '/' + (date.getMonth()+1)] = item;
                    //alert(data[date.getDate()+ '/' + (date.getMonth()+1)][0]['hours'] + ':' + data[date.getDate()+ '/' + (date.getMonth()+1)][0]['minutes'] + ' ' + data[date.getDate()+ '/' + (date.getMonth()+1)][0]['strEvent'] );
                    this.trigger('new-event', { name: data });
                    }
                    else(alert('Необходимо ввести недостающие данные в поле "Время" или "Событие"'));
                }, this);
            }
        }
    });

    provide(BEMDOM);
});




