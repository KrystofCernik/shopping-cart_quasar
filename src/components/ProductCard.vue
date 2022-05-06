<template>
    <div class="item">
        <div class="item-title">
            <p class="p">{{ title }}</p>
        </div>
        <img class="item-img" :src="imageUrl" alt="">
        <div class="item-desc">
            <p class="p">{{ description }}</p>
        </div>
        <div class="item-info">
            <div class="item-price">
                <p class="p item-price-final">{{ "$" + price }}</p>
                <div class="item-price-VAT">
                    <p class="p VAT-text">Without VAT</p>
                    <p class="p VAT-price">{{ "$" + (price - price * 0.21).toFixed(2) }}</p>
                </div>
            </div>
            <div class="item-btn">
                <button class="btn btn-buy" :class="{red: this.id === 2}" @click='addToCart(product)'>Buy it now</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['product','id', 'title', 'imageUrl', 'price', 'description'],
        methods: {
            addToCart(product) {
                this.$store.dispatch('addToCart', product)
                console.log(this.$store.getters.itemQuantity(this.product), product)
                console.log(this.$store.getters.cart)
            }
        }
    }
</script>

<style lang="scss" scoped>
@import '../scss/_mixins.scss';

.item {
    width: 360px;
    height: 650px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 1rem;
    background-color: #fff;
    box-shadow: 0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04);
    border: none;
    border-radius: 7px;
    transition: 0.3s ease;

    &:hover {
        box-shadow: 0px 20px 25px -5px rgba(0, 0, 0, 0.2), 0px 10px 10px -5px rgba(0, 0, 0, 0.1);
    }

    .item-title {
        width: 100%;
        height: 20%;
        padding: 0 1rem;
        text-align: left;
        display: flex;
        justify-content: center;
        align-items: center;

        p {
            font-size: 1.3rem;
            font-weight: 500;
            margin: 0;
        }
    }

    .item-img {
        width: 100%;
        height: 45%;
        object-fit: cover;
    }

    .item-desc {
        padding: 1rem;
        width: 100%;
        height: 15%;
        text-align: justify;

        p {
            font-size: 0.8rem;
        }
    }

    .item-info {
        width: 100%;
        height: 20%;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        padding: 0 1rem 2rem 1rem;
        align-items: flex-end;

        .item-price {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: space-between;

            .item-price-final {
                font-size: 1.5rem;
                font-weight: 500;
                color: #EF4444;
                margin-bottom: 0.5rem;
            }

            .item-price-VAT {
                display: flex;
                gap: 0.5rem;
                white-space: nowrap;

                .VAT-text {
                    color: #828282;
                    font-size: 0.9rem;
                }

                .VAT-price {
                    font-size: 0.9rem;
                    font-weight: 500;
                }
            }
        }

        .item-btn {

            .btn-buy {
                float: right;
                padding: 0.7rem 1.5rem;
                border: none;
                border-radius: 7px;
                background-color: #333;
                font-family: 'Poppins';
                font-size: 1rem;
                font-weight: 600;
                color: #fff;
                white-space: nowrap;
                cursor: pointer;
                transition: 0.2s ease;

                &:hover {
                    background-color: #000;
                }

                &.red {
                    background-color: #EF4444;
                }

                &:hover.red {
                    background-color: darken($color: #EF4444, $amount: 15);
                }
            }
        }
    }
}

</style>
