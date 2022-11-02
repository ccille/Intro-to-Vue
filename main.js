const app = Vue.createApp({
    data: function(){
        return {
            cart: 0,
            product: 'Socks',
            // productDescription: 'You can choose a color for your',
            image: './assets/images/socks_blue.jpg',
            inventory: 8,
            onSale: true,
            details: ['50% cotton', '30% wool', '20% poluester'],
            sizes: ['S', 'M', 'L'],
            variants: [ {id: 2234, color: 'blue', image: './assets/images/socks_blue.jpg'}, 
                        {id: 2235, color: 'green', image: './assets/images/socks_green.jpg'}]
            // url: 'https://www.zealand.dk/'
        }
    },
    methods: {
        addToCart(){
            this.cart += 1
        },
        updateImage(variantImage){
            this.image = variantImage
        }
    }
})
