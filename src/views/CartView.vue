<template>

    <section id="cart">
        <div class="container">

            <div class="cart-heading">
                <h2 class="heading2">Shopping cart</h2>
            </div>

            <div class="cart-progressBar">
                <div class="q-pa-md q1">
                    <q-stepper class="stepper"
                      v-model="step"
                      ref="stepper"
                      color="primary"
                      animated
                    >
                      <q-step
                        :name="1"
                        title=""
                        icon="1"
                        :done="step > 1"
                      >
                      </q-step>

                      <q-step
                        :name="2"
                        title=""
                        icon="2"
                        :done="step > 2"
                      >
                      </q-step>
                    </q-stepper>
                </div>
            </div>

            <div class="cart-table" v-if="step <= 1">
                <CartSummary
                  v-for="product in StoreCart"
                  :id="product.id"
                  :key="product.id"
                  :title="product.title"
                  :imageUrl="product.imageUrl"
                  :price="product.price"
                  :description="product.description"
                  :product="product"
                />
            </div>

            <div class="cart-form" v-if="step > 1">
                <div class="q-pa-md q2">

                <q-form
                ref="myForm"
                class="q-gutter-md"
                autocorrect="off"
                autocapitalize="off"
                autocomplete="off"
                spellcheck="false"
                >
                <label class="label">First name</label>
                <q-input 
                    class="cart-input"
                    outlined
                    v-model="firstName"
                    placeholder="Enter you first name"
                    :rules="[ val => val && val.length > 0 || 'Please enter your first name']"
                    lazy-rules
                    />

                <label class="label">Last name</label>
                <q-input
                    class="cart-input"
                    outlined
                    v-model="lastName"
                    placeholder="Enter you last name"
                    :rules="[ val => val && val.length > 0 || 'Please enter your last name']"
                    lazy-rules
                    />

                <label class="label">Email</label>
                <q-input 
                    class="cart-input"
                    outlined
                    v-model="email"
                    type="email"
                    placeholder="Enter you email"
                    :rules="[
                    val => val && val.length > 6 || 'Please a valid email',
                    ]"
                    lazy-rules
                    />

                    <label class="label">Date</label>
                    <q-input 
                    class="cart-input"
                    outlined
                    v-model="date"
                    type="date"
                    :rules="[ val => val && val.length > 0 || 'Please enter the date']"
                    lazy-rules
                    />

                </q-form>

                </div>
            </div>

            <div class="cart-navigation">
                <button class="btn btn-goBack" v-if="step <= 1" @click="$router.push('/')">
                    <svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.7071 8.70711C23.0976 8.31658 23.0976 7.68342 22.7071 7.29289L16.3431 0.928932C15.9526 0.538408 15.3195 0.538408 14.9289 0.928932C14.5384 1.31946 14.5384 1.95262 14.9289 2.34315L20.5858 8L14.9289 13.6569C14.5384 14.0474 14.5384 14.6805 14.9289 15.0711C15.3195 15.4616 15.9526 15.4616 16.3431 15.0711L22.7071 8.70711ZM2 9H22V7H2V9Z" fill="black"/>
                    </svg>GO BACK
                </button>

                <button class="btn btn-goBack" v-if="step > 1" @click="$refs.stepper.previous()">
                    <svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.7071 8.70711C23.0976 8.31658 23.0976 7.68342 22.7071 7.29289L16.3431 0.928932C15.9526 0.538408 15.3195 0.538408 14.9289 0.928932C14.5384 1.31946 14.5384 1.95262 14.9289 2.34315L20.5858 8L14.9289 13.6569C14.5384 14.0474 14.5384 14.6805 14.9289 15.0711C15.3195 15.4616 15.9526 15.4616 16.3431 15.0711L22.7071 8.70711ZM2 9H22V7H2V9Z" fill="black"/>
                    </svg>GO BACK
                </button>

                <button class="btn btn-checkout" v-if="step <= 1" @click="$refs.stepper.next()">
                    <svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.7071 8.70711C23.0976 8.31658 23.0976 7.68342 22.7071 7.29289L16.3431 0.928932C15.9526 0.538408 15.3195 0.538408 14.9289 0.928932C14.5384 1.31946 14.5384 1.95262 14.9289 2.34315L20.5858 8L14.9289 13.6569C14.5384 14.0474 14.5384 14.6805 14.9289 15.0711C15.3195 15.4616 15.9526 15.4616 16.3431 15.0711L22.7071 8.70711ZM2 9H22V7H2V9Z" fill="black"/>
                    </svg>CHECKOUT
                </button>

                <q-btn class="btn btn-checkout q-btn" v-if="step > 1" @click="onSubmit">
                    <svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.7071 8.70711C23.0976 8.31658 23.0976 7.68342 22.7071 7.29289L16.3431 0.928932C15.9526 0.538408 15.3195 0.538408 14.9289 0.928932C14.5384 1.31946 14.5384 1.95262 14.9289 2.34315L20.5858 8L14.9289 13.6569C14.5384 14.0474 14.5384 14.6805 14.9289 15.0711C15.3195 15.4616 15.9526 15.4616 16.3431 15.0711L22.7071 8.70711ZM2 9H22V7H2V9Z" fill="black"/>
                    </svg>CONFIRM
                </q-btn>

                
            </div>

        </div>
    </section>

    <div class="q-pa-md q-gutter-sm">

    <q-dialog v-model="icon" @hide="finish">
      <q-card class="dialog">
        <div class="dialog-bar">
          <q-btn class="btn-close" flat round dense v-close-popup>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <rect width="15" height="15" fill="url(#pattern0)"/>
                <defs>
                <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlink:href="#image0_208_8" transform="scale(0.0104167)"/>
                </pattern>
                <image id="image0_208_8" width="96" height="96" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAABmJLR0QA/wD/AP+gvaeTAAACFklEQVR4nO3dS07DQBBF0YIlwSDsjMxgyGZB7AAGyUORiZP+2d1VfY/kGUjOu4kCdgRmAAAAAAAAANw5mtmh90ns4GCnxzqUdzP7MbNvM3vpfC5bejazLzs91o/O5/JH4+uIGuFyfB3dIyzHjxrh2vjdI6yNHy3CrfG7RTjeOaHLCJ7fmA92egwpj3XXN+YnM/tMPDGvr4SUZ37XJ1rkCMOPLxEjuBlfIkVwN75EiOB2fPEcwf344jFCmPHFU4Rw44uHCGHHl5EjhB9fRowwzfgyUoTpxpcRIkw7vvSMMP340iMC4y/sGYHxV+wRgfHv2DIC4yfaIgLjZ2oZgfELtYjA+JVqIjB+IyURGL+xnM/ifGd+LeMnynklMP5GWkVg/Aq1ERi/gdIIjN9QbgQ34z/2PoFED+cj93vQQM7P+bd+WUOB0vGJ0EDt+ESo0Gp8IhTgUkRHJRfWRvjISwg1VzWJUKnFJWUiFGp5PZ8Imba4mUKERFveySLCHXvcRiTCij3v4RJhoccNdCKc9fz0wvQRRvjoyLQRRhhfposw0vgyTYQRx5fwEUYeX8JG8DC+hIvgaXwJE8Hj+OI+gufxxW2ECOOLuwiRxhc3ESKOL8NHiDy+DB2BP138/9j9fwq83jkh7+NLyivhrdfJrUWIMr7citBtfFlGiDa+XIvQfXxRhKjjy2WEYcYX/okPAAAAAAAAgHH9AuBaVAf5suGMAAAAAElFTkSuQmCC"/>
                </defs>
            </svg>
          </q-btn>
        </div>

        <div class="dialog-content">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="20" fill="#A7F3D0"/>
                <path d="M15.3371 25.7793L9.11782 19.56L7 21.6629L15.3371 30L33.2342 12.1029L31.1312 10L15.3371 25.7793Z" fill="#059669"/>
            </svg>
            <h4 class="heading4">Jou voe gut</h4>
            <p class="p">Please check your email for details</p>
        </div>
      </q-card>
    </q-dialog>
    
  </div>

</template>

<script>
import CartSummary from '../components/CartSummary.vue'
import axios from 'axios'
import { ref } from 'vue'

axios.defaults.headers['x-api-key'] = 'u71ry907';

export default {
  name: 'CartView',
  components: {
      CartSummary
  },
  computed: {
      StoreCart() {
          return this.$store.getters.cart;
      },
      cartQuantity() {
          return this.$store.getters.cartQuantity;
      },
  },
  setup () {
    return {
      step: ref(1),
      icon: ref(false)
    }
  },
  data() {
    return {
            firstName: [],
            lastName: [],
            email: [],
            date: [],
            cart: [],
    }
  },
  methods: {
      onSubmit() {
          this.$refs.myForm.validate().then(success => {
              if(success) {
                  axios.post("http://localhost:3250/api/order", {
                    body:
                    {
                    "products": this.$store.getters.cart,
                    "customerInfo":
                      {
                      "firstName": this.firstName,
                      "lastName": this.lastName,
                      "email": this.email,
                      "date": this.date
                      }

                    }
                  })
                  .then(() => {
                      this.icon = true
                  })
              } else {
                  console.log("error")
              }
          })
      },
      finish(index) {
          this.$router.push('/')
          this.$store.getters.cart.splice(index, 3)
          console.log(this.$store.getters.cart)
      }
  },
}
</script>

<style lang="scss" scoped>

@import '../scss/_mixins.scss';

    #cart {
        height: 94vh;
        width: 100%;

        .container {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;

            .cart-heading {
                width: 100%;
                height: 15vh;
                display: flex;
                align-items: center;
                justify-content: center;
                color: #333;
                border-bottom: 2px solid #333;
            }

            .cart-progressBar {
                width: 100%;
                height: 10vh;
                display: flex;
                align-items: center;
                justify-content: center;

                .q1 {
                    height: 8vh;
                    width: 250px;

                    @include mobile {
                        width: 180px;
                    }

                    .stepper {
                        width: 250px;
                        height: 100%;
                        box-shadow: none;
                        border: none;

                        @include mobile {
                            width: 180px
                        }
                    }
                }
            }

            .cart-table {
                width: 80%;
                height: 55vh;
                background-color: #fff;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;

                @include tablet {
                    width: 100%;
                }
            }

            .cart-form {
                height: 55vh;
                width: 80%;
                background-color: #fff;
                display: flex;
                align-items: center;
                justify-content: flex-start;

                @include tablet {
                    width: 100%;
                }

                .q2 {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: flex-start;

                    @include tablet {
                        padding: 0;
                    }

                    .q-gutter-md {
                        width: 60%;

                        @include tablet {
                            width: 100%;
                            margin: 0;
                        }

                        .label {
                            font-size: 1.3rem;
                            margin-left: 0;
                        }

                        .cart-input {
                            margin-left: 0;
                            color: #333;
                        }
                    }
                }
            }

            .cart-navigation {
                width: 100%;
                height: 14vh;
                display: flex;
                align-items: center;
                justify-content: space-between;

                .btn {
                    padding: 0.7rem 1.5rem;
                    border-radius: 7px;
                    font-family: 'Poppins';
                    font-size: 1rem;
                    font-weight: 600;
                    white-space: nowrap;
                    transition: 0.2s ease;
                    cursor: pointer;
                    position: relative;
                }

                .btn-goBack {
                    padding-left: 4rem;
                    border: 1px solid #333;
                    background-color: transparent;
                    color: #333;

                    svg {
                        margin-right: 1rem;
                        transform: translateY(3px) translateX(-35px) rotate(180deg) scale(0.9);
                        position: absolute;
                        transition: 0.2s ease;
                        
                        path {
                            transition: 0.2s ease;
                        }
                    }

                    &:hover {

                        svg {
                            transform: translateY(3px) translateX(-45px) rotate(180deg) scale(0.9);
                        }
                    }
                }

                .btn-checkout {
                    padding-right: 4rem;
                    background-color: #333;
                    color: #fff;
                    border: 1px solid transparent;
                    width: 170px;

                    svg {
                        margin-left: 1rem;
                        transform: translateY(3px) translateX(80px) scale(0.9);
                        position: absolute;
                        transition: 0.2s ease;

                        path {
                            fill: #fff;
                        }
                    }

                    &:hover {
                        background-color: #000;
                        border: 1px solid transparent;

                        svg {
                            transform: translateY(3px) translateX(90px) scale(0.9);

                            path {
                                fill: #fff;
                            }
                        }
                    }
                }

                .q-btn {
                    padding: 0.6rem 1.5rem;
                    padding-right: 4rem;

                    svg {
                        margin-left: 0;
                        transform: translateY(-1px) translateX(60px) scale(0.9);
                    }

                    &:hover {
                        background-color: #000;
                        border: 1px solid transparent;

                        svg {
                            transform: translateY(-1px) translateX(70px) scale(0.9);

                            path {
                                fill: #fff;
                            }
                        }
                    }
                }
            }
        }
    }

    .dialog {
    font-family: 'Poppins';
    height: 180px;
    width: 400px;
    padding: 1rem;

    .dialog-bar {
        display: flex;
        align-items: flex-end;
        justify-content: flex-end;
    }

    .dialog-content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .heading4 {
        font-family: 'Poppins';
        font-size: 1.3rem;
        font-weight: 500;
        padding: 0.2rem;
        }

        .p {
        color: #828282;
        padding: 0;
        }
    }
}
</style>
