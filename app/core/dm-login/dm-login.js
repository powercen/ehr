/**
 * Created by otherlite on 2015/12/2.
 */
module.exports = {
    template:require('./dm-login.html'),
    controller:avalon.controller('dm-login', function ($ctrl) {
        require('./dm-login.less');
    })
}