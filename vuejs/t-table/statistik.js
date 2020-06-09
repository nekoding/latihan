var app = new Vue({
    el: '#app',
    data: {
        df : '',
        maximum: 10,
        total: 0,
        t_table: null
    },
    mounted() {
        fetch('https://raw.githubusercontent.com/nekoding/latihan/master/python/t-table_generator/data.json')
        .then(response => response.json())
        .then(data => {
            this.t_table = data;
            this.total = Object.keys(data).length;
        })
    },

})