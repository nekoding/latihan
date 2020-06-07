let app = new Vue({
    el: '#app',
    data: {
        idr: 10000,
        rate: null
    },
    methods: {
        convertRate(money){
            return money * Number(this.idr);
        }
    },
    mounted() {
        fetch('https://api.exchangeratesapi.io/latest?base=IDR')
        .then(response => response.json())
        .then(data => {
            this.rate = data;
        })
    },
})