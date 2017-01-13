/**
 * Created by Veket on 2015/11/1.
 */
ctApp.directive('datetimepicker', function() {
    return {
        restrict: 'A',
        require:'?ngModel',
        scope: { select: '&'},
        link: function(scope, element, attrs, ngModel) {
            if(!ngModel) return;
            element.on('change',function(){ element.next().focus() });
            var type=attrs.type||'date';
            var options = {timeFormat:'HH:mm:ss',dateFormat:'yy-mm-dd'};
            options=_.defaults(options, attrs.options||{});
            options=_.defaults(options, scope.options||{});

            var updateModel = function(dateTimeTxt) {
                scope.$apply(function() {
                    ngModel.$setViewValue(dateTimeTxt);
                });
            };
            options.onSelect = function(dateTimeTxt, picker) {
                updateModel(dateTimeTxt);
                if(scope.select) {
                    scope.$apply(function() {
                        scope.select({date: dateTimeTxt});
                    });
                }
            };
            if(type=='date'){
                element.datepicker(options);
            }else if(type=='datetime'){
                element.datetimepicker(options);
            }
        }
    };
}).directive('helloComponent',function (reactDirective) {
    var helloComponent=React.createClass({
        render:function(){
            var testStyle = {
                height: this.props.height || '51px',
                margin: this.props.margin || '10px'
            };
            return (
                React.createElement("div", {style:testStyle}, 'hello react!')
            );
        }
    });
    return reactDirective(helloComponent);
})
;