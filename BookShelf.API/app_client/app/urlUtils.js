// (function () {
//     'use strict';

//     angular.module('app')
//     .provider('urlUtils', function () {

//        console.log("url provider create");
       function urlUtils(){

           //var utils = this;

            var getDebugParam = function (){
                var debugParam = getParameterByName("Debug");
                if(!debugParam) debugParam = 1; //.. on by default
                return debugParam;
            };

            var getParameterByName = function (name, url) {
                if (!url) {
                url = window.location.href;
                }
                name = name.replace(/[\[\]]/g, "\\$&");
                var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
                    results = regex.exec(url);
                if (!results) return null;
                if (!results[2]) return '';
                return decodeURIComponent(results[2].replace(/\+/g, " "));
            };

            return {
                getDebugParam: getDebugParam,
                getParameterByName: getParameterByName
            };
        }

        // this.$get = function () {

        //     return new urlUtils();
        // };

        // this.instance = function(){
        //     utils.$get();
        // }

//     });
// })();
