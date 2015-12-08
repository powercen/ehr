/**
 * Created by otherlite on 2015/12/7.
 */
module.exports = {
    template:require('./dm-index.html'),
    controller:avalon.controller('dm-index', function ($ctrl) {
        require('less/grid.less');
        require('less/bg.less');
        require('less/nav.less');
        require('./dm-index.less');
    })
}