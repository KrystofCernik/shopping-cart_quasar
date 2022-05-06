<template>
  <div class="q-pa-md q3">
    <q-markup-table class="cart-table">
      <thead>
        <tr>
          <th class="label text-left">PRODUCT DETAILS</th>
          <th class="label text-center">QUANTITY</th>
          <th class="label text-right">PRICE WITHOUT VAT</th>
          <th class="label text-right">PRICE</th>
        </tr>
      </thead>
      <tbody>

          <CartItem
            v-for="product in StoreCart"
            :id="product.id"
            :key="product.id"
            :title="product.title"
            :imageUrl="product.imageUrl"
            :price="product.price"
            :product="product"
          />

        <tr class="row-summary q-tr--no-hover">
          <td class="text-left"></td>
          <td class="text-center">QUANTITY:<br>{{ cartQuantity }}</td>
          <td class="text-right" style="color: #9CA3AF;">PRICE W/O VAT:<br>{{ '$' + CartVAT.toFixed(2) }}</td>
          <td class="text-right">TOTAL PRICE:<br>{{ '$' + CartTotal.toFixed(2) }}</td>
        </tr>

      </tbody>
    </q-markup-table>
  </div>
</template>

<script>
import CartItem from './CartItem.vue'

export default {
  props: ['product', 'id', 'title', 'imageUrl', 'price'],
  components: {
    CartItem
  },
  computed: {
      StoreCart() {
          return this.$store.getters.cart;
      },
      itemQuantity() {
          return this.$store.getters.itemQuantity(this.product);
      },
      cartQuantity() {
        return this.$store.getters.cartQuantity;
      },
      CartVAT() {
        return this.StoreCart.map(item => ((item.price)*0.79)*item.quantity).reduce((sum, price) => sum + price);
      },
      CartTotal() {
        return this.StoreCart.map(item => (item.price)*item.quantity).reduce((sum, price) => sum + price);
      }
  },
  methods: {
    removeFromCart(index) {
      this.$store.dispatch("removeFromCart", index);
    },
    addToCart(product) {
      this.$store.dispatch("addToCart", product);
    },
  }
}
</script>

<style lang="scss" scoped>

@import '../scss/_mixins.scss';

.q3 {
  width: 100%;
  height: 100%;

  .cart-table {
    width: 100%;
    height: 100%;
    box-shadow: none;

    .label {
      font-size: 1.1rem;
      color: #9CA3AF;
    }

    .row-item {
      height: 15vh;

      .item-details {
        display: flex;

        .item-details-img {
          width: 8vw;
          height: 13vh;
          margin-right: 1.5rem;

          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }

        .item-details-content {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: flex-start;

          .item-title {
            font-weight: 500;
            margin-bottom: 0;
          }

          .item-type {
            margin-top: 0.5rem;
            color: #EF4444;
            font-weight: 500;
          }

          .btn-remove {
            padding: 0;
            border: none;
            background-color: transparent;
            text-decoration: underline;
            color: #9CA3AF;
            font-size: 0.9rem;
            cursor: pointer;
          }
        }
      }

      .price-wo {
        color: #9CA3AF;
        font-size: 1.4rem;
      }

      .price {
        font-size: 1.4rem;
      }

      .item-quantity {
        display: flex;
        justify-content: center;
        align-items: center;

        button {
          border: none;
          background-color: transparent;
          font-size: 1.5rem;
        }
      }
    }

    .row-summary {
      height: 15vh;
      
      td {
        font-size: 1.4rem;
      }
    }
  }
}

</style>
