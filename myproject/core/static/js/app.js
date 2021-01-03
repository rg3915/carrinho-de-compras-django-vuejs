axios.defaults.xsrfHeaderName = 'X-CSRFToken'
axios.defaults.xsrfCookieName = 'csrftoken'

const endpoint = 'http://localhost:8000/'

Vue.filter("formatPrice", value => (value / 1).toFixed(2).replace('.', ',').toString().replace(/\B(?=(\d{3})+(?!\d))/g, "."))

var app = new Vue({
  el: '#app',
  delimiters: ['${', '}'],
  data: {
    cartItems: [
      {id: 1, product: 'Caneta azul', quantity: 10, price: 2.05},
      {id: 2, product: 'Caneta vermelha', quantity: 16, price: 2.05},
      {id: 3, product: 'Caneta preta', quantity: 1200, price: 2.05},
      {id: 4, product: 'Caneta verde', quantity: 100, price: 2.05}
    ],
    products: []
  },
  // created() {
  //   axios.get(endpoint + 'api/products/')
  //     .then(response => {
  //       this.products = response.data.data;
  //     })
  // }
  computed: {
    cartValue() {
      return this.cartItems.reduce((prev, curr) => {
        return prev + (curr.price * curr.quantity);
      }, 0).toFixed(2);
    }
  }
})