var app = new Vue({
    el: '#app2',
    data: {
        show: false
    },
    methods: {
        handleClose: function () {
            this.show = false;
        }
    }
});