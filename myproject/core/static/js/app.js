axios.defaults.xsrfHeaderName = 'X-CSRFToken'
axios.defaults.xsrfCookieName = 'csrftoken'

const endpoint = 'http://localhost:8000/'

Vue.filter("formatPrice", value => (value / 1).toFixed(2).replace('.', ',').toString().replace(/\B(?=(\d{3})+(?!\d))/g, "."))

var app = new Vue({
  el: '#app',
  delimiters: ['${', '}'],
  data: {
    form: {
      customer: null
    },
    cartItems: [],
    currentProduct: {
      pk: null,
      quantity: 0,
      price: 0.0
    },
    products: []
  },
  mounted() {
    axios.get(endpoint + 'api/products/')
      .then(response => {
        this.products = response.data.data;
      })
  },
  computed: {
    cartValue() {
      return this.cartItems.reduce((prev, curr) => {
        return prev + (curr.price * curr.quantity)
      }, 0).toFixed(2)
    }
  },
  methods: {
    submitForm() {
      let bodyFormData = new FormData();

      bodyFormData.append('products', JSON.stringify(this.cartItems));
      bodyFormData.append('customer', JSON.stringify(this.form.customer));

      axios.post('/api/shopping-items/add/', bodyFormData)
        .then((res) => {
          console.log(res);
        })
    },
    addProduct() {
      this.cartItems.push(this.currentProduct)
      this.currentProduct = {
        pk: null,
        quantity: 0,
        price: 0.0
      }
    },
    addLine() {
      this.cartItems.push(
        {
          pk: null,
          quantity: 0,
          price: 0.0
        }
      )
    },
    deleteProduct(item) {
      var idx = this.cartItems.indexOf(item)
      this.cartItems.splice(idx, 1)
    },
    resetForm() {
      this.form = {
        customer: null
      }
      this.cartItems = []
      this.currentProduct = {
        pk: null,
        quantity: 0,
        price: 0.0
      }
    }
  }
})