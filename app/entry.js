/**
 * Created by otherlite on 2015/11/30.
 */
require("mmStateDemand");
require('domReady')(function () {
    avalon.define({
        $id: "dm",
        ver: 1
    });
    require('./route.js');
    avalon.scan();
});
