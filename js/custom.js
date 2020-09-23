;
//创建组件

let topBannerCpn = Vue.extend({
    template: '#topBannerTemp',
    data:function () {
        return {
            searchBarFixed:false,
        };
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll)
    },
    methods: {
        handleScroll () {
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
            var offsetTop = document.querySelector('#searchBar').offsetTop
            if (scrollTop >= offsetTop) {
                this.searchBarFixed = true
            } else {
                this.searchBarFixed = false
            }
            // console.log(scrollTop,offsetTop)
        },
    }
    
});

let mainCpn = Vue.extend({
    template:'#mainTemp'
});

let goTopCpn = Vue.extend({
    template:'#goTopTemp',
    data:function () {
        return{
            topDistance:0
        };
    },
    mounted(){
        window.addEventListener('scroll',this.getTopDistance);
    },
    methods:{
        getTopDistance:function () {
            this.topDistance = document.documentElement.scrollTop||document.body.scrollTop||window.pageYOffset
        },
        gotop:function () {
            document.documentElement.scrollTop = 0;
            document.body.scrollTop = 0;
            window.pageYOffset = 0;
        }
    }
});


//注册
let mainnavcpn = Vue.component('mainnavcpn',mainCpn)
let gotopcpn = Vue.component('gotopcpn',goTopCpn)
let topBannercpn = Vue.component('topbannercpn',topBannerCpn)




const vm = new Vue({
    el:"#app",
    data:{
    
    }
});

//jQuery实现回到顶部
// $(window).ready(function () {
//     $(window).scroll(function () {
//         $(window).scrollTop();
//     });
// });


