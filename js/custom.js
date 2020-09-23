;
let mainCpn = Vue.extend({
    template:'#mainTemp'
});

let mainnav = Vue.component('mainnav',mainCpn)
const vm = new Vue({
    el:"#app",
    data:{
    
    }
});