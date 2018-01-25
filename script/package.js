var package = new Vue({
    el: '#package',
    data: {
        package1: [
            {
                name: 'iphone 7',
                price: 7199,
                count: 2
            },
            {
                name: 'ipad',
                price: 2888,
                count: 1
            }
        ],
        package2: [
            {
                name: 'app;e',
                price: 3,
                count: 5
            },
            {
                name: 'banana',
                price: 2,
                count: 10
            }
        ]
    },
    computed:{
        prices: function () {
            var prices = 0;
            for(var i = 0; i < this.package1.length; i++){
                prices += this.package1[i].price * this.package1[i].count;
            }
            for(var i = 0; i < this.package2.length; i++){
                prices += this.package2[i].price * this.package2[i].count;
            }
            return prices;
        }
    }

})