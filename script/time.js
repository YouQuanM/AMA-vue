var padDate = function (value) {
    return value < 10 ? '0' + value : value;
//            在数字小于10的情况下在之前补0
};
var time = new Vue({
    el: '#time',
    data:{
        date: new Date()
    },
    filters:{
        formateDate:function (value) {
            var date = new Date(value);
            var year = date.getFullYear();
            var month = padDate(date.getMonth()+1);
            var day = padDate(date.getDate());
            var hour = padDate(date.getHours());
            var minutes = padDate(date.getMinutes());
            var seconds = padDate(date.getSeconds());
            //整理数据并返回
            return year+'-'+month+'-'+day+' '+hour+':'+minutes+':'+seconds
        }
    },
    mounted:function () {
        var _this = this;
        this.timer = setInterval(function () {
            _this.date = new Date();
        },1000);
    },
    beforeDestory: function () {
        if (this.timer){
            clearInterval(this.timer);
        }
    }
})