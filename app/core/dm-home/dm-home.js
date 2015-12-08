/**
 * Created by otherlite on 2015/12/2.
 */
module.exports = {
    template:require('./dm-home.html'),
    controller:avalon.controller('dm-home', function ($ctrl) {
        require('./dm-home.less');
    })
}