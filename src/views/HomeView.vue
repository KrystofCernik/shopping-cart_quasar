<template>

  <section id="hero">
        <div class="container">

            <div class="hero-img">
                <h1 class="heading1">TinToy Shop</h1>
            </div>

            <div class="hero-content">
                <h2 class="heading2">Welcome to TinToy Shop!</h2>
                <div class="content-p-holder">

                    <div class="content-column-left">
                        <p class="p p1">We are a tiny store with nice toys the small and big ones can enjoy whithout thinking they are not suited to do so. Based in Prague we offer a variety of products which range from absolutely adorable toys to things which just make you go WHOA!</p>
                            <p class="p p2">Anyway - we are glad you came to our website and feel free to check our product catalogue below.</p>
                    </div>

                    <div class="content-column-right">
                            <p class="p p3">Once you have decided which of the products you like the most, place it into the shopping cart by clicking the "Buy" button. After that there are several options you might want to explore:</p>
                        <ul>
                            <li>Adding another product into the cart (even multiple ones)</li>
                            <li>Search through the product names or descriptions using the search field</li>
                            <li>Checking the cart by clicking the cart icon, going back or completing your order</li>
                        </ul>
                    </div>

                </div>
            </div>

        </div>
    </section>

    <section id="section1">
        <div class="container">
            <div class="section1-content">
                <h3 class="heading3">Let's play all day</h3>
                <p class="p p4">This is basically our motto and we tend to live by that. <span>If anyone tells us differently, we will probably just ignore that and move on.</span> Ooooor... we might show them one of our fine products so he/she might get also fascinated by our toys. Check our featured collection!</p>
            </div>
        </div>
    </section>

    <section id="collection">
        <div class="container">

            <div class="collection-heading">
                <h4 class="heading4">FEATURED COLLECTION</h4>
            </div>

            <div class="collection-search">
                <input type="text" placeholder="Search" v-model="search">
            </div>

            <div class="collection-items">
              <ProductCard
                v-for="product in filterProducts" 
                :key="product.id"
                :id="product.id"
                :title="product.title"
                :imageUrl="product.imageUrl"
                :price="product.price"
                :description="product.description"
                :product="product"
              />
            </div>
        </div>
    </section>
    
</template>

<script>
// @ is an alias to /src
// import items from '../data/items.js'
import ProductCard from '../components/ProductCard.vue'
import axios from 'axios'

export default {
  name: 'HomeView',
  components: {
    ProductCard
  },
  data () {
    return {
      search: '',
      products: []
    }
  },
  mounted() {
    axios
    .get("http://localhost:3250/api/products", {
        headers: {
            "x-api-key": "u71ry907",
            'Access-Control-Allow-Origin': '*',
        }
    })
    .then(response => {this.products = response.data})
    .catch(err => console.log(err.message))
  },
  computed: {
    filterProducts() {
      return this.products.filter(product => 
        product.title.toLowerCase().includes(this.search.toLowerCase())
      );
    },
  }
}
</script>

<style lang="scss" scoped>

@import '../scss/_mixins.scss';

#hero {
    width: 100%;
    height: 100vh;

    @include mobile {
        height: 120vh;
    }

    .container {
        padding: 0;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;

        .hero-img {
            height: 50%;
            width: 100%;
            display: flex;
            align-items: flex-end;
            justify-content: center;
            background-image: url(../assets/legofig.jpg);
            background-repeat: no-repeat;
            background-position: bottom;
            background-size: cover;

            @include mobile {
                height: 35%;
            }

            &::before {
                content: '';
                position: absolute;
                width: 100%;
                height: 80%;
                background: linear-gradient(178.45deg, rgba(51, 51, 51, 0) 53.43%, #0080C3 99.41%);

                @include mobile {
                    height: 40%;
                }
            }
        }

        .hero-content {
            padding: 0 6%;
            width: 100%;
            height: 50%;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: space-evenly;

            @include mobile {
                height: 65%;
                justify-content: space-between;
            }

            .heading2 {
                padding: 1rem 0;
            }

            .content-p-holder {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                grid-gap: 100px;

                @include mobile {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    grid-gap: 0;
                }

                .content-column-left {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    
                    .p2 {
                        padding-top: 2rem;

                        @include mobile {
                            padding: 1rem 0;
                        }
                    }
                }

                .content-column-right {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    justify-content: space-between;

                    ul {
                        padding-top: 2rem;
                        margin-left: 3rem;

                        @include mobile {
                            padding-top: 1rem;
                            margin-left: 1rem;
                        }

                        li {
                            margin-bottom: 0.5rem;
                        }
                    }
                }
            }
        }
    }
}

#section1 {
    width: 100%;
    height: 20vh;

    @include mobile {
        height: 50vh;
    }

    .container {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: flex-start;

        @include mobile {
            align-items: center;
        }

        .p4 {
            margin-top: 1rem;
        }
    }
}

#collection {
    width: 100%;
    height: 94vh;

    @include tablet {
        height: auto;
    }

    .container {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;

        .collection-heading {
            width: 60%;
            border-bottom: 1px solid #333;
            text-align: center;
        }

        .collection-search {
            width: 50%;
            text-align: center;
            margin: 2rem 0;

            @include mobile {
                width: 100%;
            }

            input {
                background-color: #fff;
                border: 1.5px solid #9CA3AF;
                border-radius: 5px;
                padding: 0.5rem;
                width: 50%;
                font-family: 'Poppins', FontAwesome;
                transition: 0.2s;

                @include mobile {
                    width: 80%;
                }

                &:focus {
                    outline: none;
                    border-color:#333;
                }
            }
        }

        .collection-items {
            width: 100%;
            max-width: 1550px;
            display: flex;
            align-items: center;
            justify-content: space-evenly;

            @include tablet {
                flex-direction: column;
            }
        }
    }
}
</style>
