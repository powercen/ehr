/**
 * Created by otherlite on 2015/12/7.
 */
avalon.state("login", {
    url: "/login",
    views: {
        "dm": avalon.demandLoad(function (deferred) {
            require.ensure([], function () {
                deferred.resolve(require('dm-login/dm-login.js'));
            });
        })
    }
});
avalon.state("index", {
    abstract: true,
    url: "/index",
    views: {
        "dm": avalon.demandLoad(function (deferred) {
            require.ensure([], function () {
                deferred.resolve(require('dm-index/dm-index.js'));
            });
        })
    }
});
avalon.state("index.home", {
    url: "/home",
    views: {
        "home": avalon.demandLoad(function (deferred) {
            require.ensure([], function () {
                deferred.resolve(require('dm-home/dm-home.js'));
            });
        })
    }
});
avalon.state("index.staff", {
    url: "/staff",
    views: {
        "home": avalon.demandLoad(function (deferred) {
            require.ensure([], function () {
                deferred.resolve(require('dm-staff/dm-staff.js'));
            });
        })
    }
});
avalon.state("index.setting", {
    url: "/setting",
    views: {
        "home": avalon.demandLoad(function (deferred) {
            require.ensure([], function () {
                deferred.resolve(require('dm-setting/dm-setting.js'));
            });
        })
    }
});

avalon.history.start({
    //html5Mode:true // >=IE10
});
avalon.router.when(['/'], '/index/home');
if (!avalon.router.getLastPath() || avalon.router.getLastPath() == 'index.html') {
    avalon.router.go('index.home');
}