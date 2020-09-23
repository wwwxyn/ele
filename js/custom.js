;
//创建组件
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





const vm = new Vue({
    el:"#app",
    data:{
    
    }
});

//jQuery实现回到顶部
$(window).ready(function () {
    $(window).scroll(function () {
        $(window).scrollTop();
    });
});


