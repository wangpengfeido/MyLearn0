/**
 * Created by dell on 2017/4/3.
 */
$(document).ready(function () {
    var p =$('#p1');
    var deferred=$.Deferred();
    setTimeout(function () {
        deferred.resolve();
    },2000);
    // deferred.done(function () {
    //     p.text('完成');
    // });
    deferred.promise().done(function () {
        p.text('完成');
    });
});