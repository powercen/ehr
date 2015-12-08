/**
 * Created by otherlite on 2015/12/2.
 */
module.exports = {
    template:require('./dm-staff.html'),
    controller:avalon.controller('dm-staff', function ($ctrl) {
        require('./dm-staff.less');
        $ctrl.$onEnter = function(){
            console.log('onEnter');
        };
        $ctrl.$onBeforeUnload = function () {
            console.log('onBeforeUnload');
        };
        $ctrl.$onRendered = function () {
            console.log('onRendered');
        };
        var vm = avalon.define({
            $id:'dm-staff',
            prop: "xxx",
            array: ["aaa", "bbb", "ccc", "ddd"],
            data: {
                aaa: "lll"
            },
            propWatch: "",
            arrayWatch: 4,
            dataAAAWatch: "",
            click: function() {
                vm.prop = new Date - 1;
                vm.data.aaa = new Date - 2;
                vm.array.push(new Date - 3);
            }
        });
        vm.$watch("prop", function(a) {
            vm.propWatch = a + " $watch"
        })

        //在avalon.define外面绑定$watch回调
        vm.$watch("array.length", function(a) {
            vm.arrayWatch = a + " $watch"
        })
        vm.data.$watch("aaa", function(a) {
            vm.dataAAAWatch = a + " $watch"
        })
    })
};