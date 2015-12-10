#ehr
<pre>
1、先npm install安装webpack依赖<br/>
2、npm run dev-server 可以热部署（IE8下不能实时更新，每次更新代码后必须X掉网页重新进入）<br/>
3、也可以npm run dev或者npm run deploy直接编译<br/>
</pre>
遇到的问题：<br/>

1、因为1.5X语法变更，与avalon1.5x搭配的时候需要修改mmState.js
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
2、与webpack集成时mmState 会报warning，需要禁用require
    <pre>npm install imports-loader 且require("imports?require=>false!mmState");</pre>
3、mmState这个版本貌似有问题，根模板url为'/'时会导致子路由失效
    

	
