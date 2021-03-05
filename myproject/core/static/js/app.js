axios.defaults.xsrfHeaderName = 'X-CSRFToken'
axios.defaults.xsrfCookieName = 'csrftoken'

const endpoint = 'http://localhost:8000/'

Vue.filter("formatPrice", value => (value / 1).toFixed(2).replace('.', ',').toString().replace(/\B(?=(\d{3})+(?!\d))/g, "."))

Vue.use(VueToast, {
  position: 'top-right'
})

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
    validateForm() {
      if (this.cartItems.length == 0) {
        Vue.$toast.error('O carrinho está vazio.')
        return false
      }
      if (this.cartItems.length == 1 & this.cartItems[0].pk === null) {
        Vue.$toast.error('Favor escolher um produto.')
        return false
      }
      if (this.cartItems.length == 1 & this.cartItems[0].quantity == 0) {
        Vue.$toast.error('Quantidade deve ser maior que zero.')
        return false
      }
      if (this.cartItems.length == 1 & this.cartItems[0].price == 0) {
        Vue.$toast.error('Preço deve ser maior que zero.')
        return false
      }
      if (!this.form.customer) {
        Vue.$toast.error('Favor digitar o nome do cliente.')
        return false
      }
      return true
    },
    onProductChange(cart, e) {
      if (cart) {
        const pk = e.target.value;
        const price = this.products.find(p => p.value == pk).price;
        cart.price = price;
        return; 
      }
      const price = this.products.find(p => p.value == this.currentProduct.pk).price;
      this.currentProduct.price = price;
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
    submitForm() {
      if (!this.validateForm()) return

      let bodyFormData = new FormData();

      bodyFormData.append('products', JSON.stringify(this.cartItems));
      bodyFormData.append('customer', JSON.stringify(this.form.customer));

      axios.post('/api/shopping-items/add/', bodyFormData)
        .then((res) => {
          location.href = endpoint + 'shopping/cart-items/' + res.data.data
        })
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