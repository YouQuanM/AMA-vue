new Vue({
    el: '#carousel',
    data: {
        slideList: [
            {
                "clickUrl": "#",
                "desc": "nhwc",
                "image": "http://dummyimage.com/1745x492/f1d65b"
            },
            {
                "clickUrl": "#",
                "desc": "hxrj",
                "image": "http://dummyimage.com/1745x492/40b7ea"
            },
            {
                "clickUrl": "#",
                "desc": "rsdh",
                "image": "http://dummyimage.com/1745x492/e3c933"
            }
        ],
        currentIndex: 0,
        timer: ''
    },
    methods: {
        go() {
            this.timer = setInterval(() => {
                this.autoPlay()
        }, 4000;)
        },
        stop() {
            clearInterval(this.timer);
            this.timer = null
        },
        change(index) {
            this.currentIndex = index
        },
        autoPlay() {
            this.currentIndex++;
            if (this.currentIndex > this.slideList.length - 1) {
                this.currentIndex = 0
            }
        }
    },
    created() {
        this.$nextTick(() => {
            this.timer = setInterval(() => {
            this.autoPlay()
    }, 4000;)
    })
    }
});