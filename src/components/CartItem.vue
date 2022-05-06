<template>
  <tr class="row1 row-item q-tr--no-hover">
        <td class="text-left">
            <div class="item-details">
              <div class="item-details-img">
                <img :src="imageUrl" alt="">
              </div>
              <div class="item-details-content">
                <div>
                  <p class="item-title">{{ title }}</p>
                  <p class="item-type">LEGO</p>
                </div>
                <button class="btn btn-remove" @click="removeAllFromCart(index)">Remove</button>
              </div>
            </div>
        </td>
        <td class="text-center quantity">
            <div class="item-quantity">
              <button @click="removeFromCart(product)">-</button>
              <div class="count">{{ itemQuantity }}</div>
              <button @click="addToCart(product)">+</button>
            </div>
        </td>
        <td class="text-right price-wo">{{ "$" + (price - price * 0.21).toFixed(2) }}</td>
        <td class="text-right price">{{ "$" + price.toFixed(2) }}</td>
  </tr>
</template>

<script>
export default {
  props: ['product', 'id', 'title', 'imageUrl', 'price'],
  computed: {
      StoreCart() {
          return this.$store.getters.cart;
      },
      itemQuantity() {
      return this.$store.getters.itemQuantity(this.product);
      },
  },
  methods: {
    addToCart(product) {
      this.$store.dispatch("addToCart", product);
      console.log(this.itemQuantity, product)
    },
    removeFromCart(product) {
      this.$store.dispatch("removeFromCart", product);
      console.log(this.itemQuantity, product)
    },
    removeAllFromCart(index) {
      this.$store.dispatch("removeAllFromCart", index);
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../scss/_mixins.scss';

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
        margin: 0 auto;
        width: 100px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        button {
          border: none;
          background-color: transparent;
          font-size: 1.5rem;
        }

        .count {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 25px;
          width: 25px;
          border: 1px solid #9CA3AF;
          border-radius: 3px;
          margin: 0 0.5rem;
        }
      }
    }
</style>
