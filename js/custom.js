;
//创建组件

let topBannerCpn = Vue.extend({
    template: '#topBannerTemp',
    data:function () {
        return {
            dist:0
        };
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll)
    },
    methods: {
        handleScroll () {
            this.dist = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
            // var searchTop = document.querySelector('#searchBar').offsetTop
            // console.log(searchTop)
            if (this.dist > 20 ) {
                $(".topBannerTemp").addClass("fixed-top");
                $("#infoBar").css("display","none");

            } else {
                $(".topBannerTemp").removeClass("fixed-top");
                $("#infoBar").css("display","block");

            }
            // console.log(scrollTop,offsetTop)
        },
    }

});

let mainCpn = Vue.extend({
    template:'#mainTemp'
});

let typeCpn = Vue.extend({
    template:'#typeTemp',
});

let reCpn = Vue.extend({
    template:'#reTemp'
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
let mouCpn = Vue.extend({
    template:'#mouTemp',
});
let homeCpn = Vue.extend({
    template:'#homeTemp',
});

let shopinfoCpn = Vue.extend({
    template:'#shopinfoTemp',
});
let carCpn = Vue.extend({
    template:'#carTemp',
});
let loginCpn = Vue.extend({
    template:'#loginTemp',
});
let registerCpn = Vue.extend({
    template:'#registerTemp',
});
let buyCpn = Vue.extend({
    template:'#buyTemp'
});
//注册
let mainnavcpn = Vue.component('mainnavcpn',mainCpn)
let gotopcpn = Vue.component('gotopcpn',goTopCpn)
let topBannercpn = Vue.component('topbannercpn',topBannerCpn)
let typecpn = Vue.component('typecpn',typeCpn);
let moucpn = Vue.component('moucpn',mouCpn);
let homecpn = Vue.component('homecpn',homeCpn);
let recpn = Vue.component('recommcpn',reCpn);
let shopinfocpn = Vue.component('shopinfocnp',shopinfoCpn)
let logincpn=Vue.component('logincpn',loginCpn);
let registercpn=Vue.component('registercpn',registerCpn);
let buycpn = Vue.component('buycpn',buyCpn);
let carcpn = Vue.component('carcpn',carCpn);

//配置路由
let routers = [
    {path:'/mou',component: moucpn},
    {path:'/home',component: homecpn},
    {path:'/',component: homecpn},
    {path:'/shop',component: shopinfocpn},
    {path:'/login',component: logincpn},
    {path:'/register',component: registercpn},
    {path:'/buy',component: buyCpn},
    
];
//生成路由实例
let myrouter = new VueRouter({
    routes:routers
});


const vm = new Vue({
    el:"#app",
    data:{
        foodCategory:[],
        recommendMerchant:[],
        recommendsMerchant:[],
        payshopinfo:[],
        count:[]
    },
    router:myrouter,
    mounted(){
        this.$http.get("json/shop.json").then(
            function (res) {
                console.log(res.body.dataZone)
                this.foodCategory = res.body.dataZone.foodCategory;
                this.recommendMerchant=res.body.dataZone.recommendMerchant;
                this.recommendsMerchant = res.body.dataZone.recommendsMerchant;
                this.count = res.body.dataZone.count;
                this.payshopinfo = res.body.dataZone.payshopinfo;
            }
        )
    }
});

//jQuery实现回到顶部
// $(window).ready(function () {
//     $(window).scroll(function () {
//         $(window).scrollTop();
//     });
// });


