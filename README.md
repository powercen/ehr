#ehr
mmState0.9需要注意：<br/>

1、与avalon1.5x（语法变更）搭配的时候需要修改avalon.js
<pre>
var Event = window.$eventManager = avalon.define("$eventManager", function (vm) {
        vm.$flag = 0;
        vm.uiqKey = function () {
            vm.$flag++
            return "flag" + vm.$flag++
        }
    })

=====>>

var Event = window.$eventManager = avalon.define({
        $id:'$eventManager',
        $flag : 0,
        uiqKey:function () {
            vm.$flag++
            return "flag" + vm.$flag++
        }
    })
    
</pre>
2、与webpack集成时需要
    <pre>npm install imports-loader 且require("imports?require=>false!mmState");</pre>
	
