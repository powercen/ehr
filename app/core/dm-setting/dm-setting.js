/**
 * Created by otherlite on 2015/12/4.
 */
module.exports = {
    template:require('./dm-setting.html'),
    controller:avalon.controller('dm-setting', function ($ctrl) {
        require('./dm-setting.less');
    })
};