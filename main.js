const app = Vue.createApp({
    data: function(){
        return {
            product: 'Socks',
            // productDescription: 'You can choose a color for your',
            image: './assets/images/socks_blue.jpg',
            inventory: 8,
            onSale: true,
            details: ['50% cotton', '30% wool', '20% poluester'],
            sizes: ['S', 'M', 'L'],
            variants: [ {id: 2234, color: 'blue'}, {id: 2235, color: 'green'}]
            // url: 'https://www.zealand.dk/'
        }
    }
})
