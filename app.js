new Vue({
    el: '#app',
    data: {
        checkColor: ""
    } ,
    computed: {
        color: function(){
            return this.checkColor;
        }
    },
});   