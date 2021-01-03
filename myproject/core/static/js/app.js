axios.defaults.xsrfHeaderName = 'X-CSRFToken'
axios.defaults.xsrfCookieName = 'csrftoken'

const endpoint = 'http://localhost:8000/'

Vue.filter("formatPrice", value => (value / 1).toFixed(2).replace('.', ',').toString().replace(/\B(?=(\d{3})+(?!\d))/g, "."))

var app = new Vue({
  el: '#app',
  delimiters: ['${', '}'],
  data: {
    cartItems: [],
    currentProduct: {
      name: null,
      quantity: 0,
      price: 0.0
    },
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
  },
  methods: {
    addProduct() {
      this.cartItems.push(this.currentProduct);
      this.currentProduct = {
        name: null,
        quantity: 0,
        price: 0.0
      };
    }
  }
})