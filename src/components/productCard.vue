<template>
    <div class="item">
        <p class="item_name">{{ item.name }}</p>
            <img class="item_img" :src="item.img" alt="">
        <p class="desc">{{ item.desc }}</p>
        <div class="item_info">
            <div class="item_info1">
                <p class="item_info_price">${{ item.price }}</p>
                <div class="item_info_VAT">
                    <p class="VAT_text">Without VAT</p>
                    <p class="VAT_price">${{ item.vat }}</p>
                </div>
            </div>
            <div class="item_info2">
                <button class="btn_buy">Buy it now</button>   
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['item'],
    }
</script>

<style lang="scss">
@import '../scss/_mixins.scss';

.item {
                width: 360px;
                height: auto;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                margin: 1rem 0.5rem;
                border: none;
                border-radius: 7px;
                background-color: #fff;
                box-shadow: 0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04);

                .item_name {
                    padding: 1rem;
                    font-size: 1.3rem;
                    font-weight: 500;
                    margin: 0 auto;
                }

                .item_img {
                    width: 100%;
                    height: 320px;
                    object-fit: cover;
                }

                .desc {
                    font-size: 0.8rem;
                    padding: 1rem;

                    @include mobile {
                        padding: 1.5rem;
                    }
                }

                .item_info {
                    width: 100%;
                    height: 30%;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 1rem;

                    @include mobile {
                        flex-direction: column;
                        align-items: flex-start;
                    }

                    .item_info1 {
                        display: flex;
                        flex-direction: column;
                        align-items: flex-start;
                        justify-content: space-between;

                        @include mobile {
                           padding-left: 0.5rem;
                            margin-bottom: 2rem;
                        }

                        .item_info_price {
                            font-size: 1.5rem;
                            color: #EF4444;
                            font-weight: 500;
                        }
                        .item_info_VAT {
                            display: flex;
                            justify-content: flex-start;
                            align-items: center;
                            white-space: nowrap;
                            font-size: 0.8rem;

                            .VAT_text {
                                color: #828282;
                                margin-right: 0.5rem;
                            }

                            .VAT_price {
                                font-weight: 500;
                            }
                        }
                    }

                    .item_info2 {
                        display: flex;
                        align-items: flex-end;
                        justify-content: flex-end;

                        @include mobile {
                            align-self: center;
                        }

                        .btn_buy {
                            padding: 0.7rem 1.5rem;
                            border: none;
                            border-radius: 7px;
                            background-color: #333;
                            font-family: 'Poppins';
                            font-size: 1rem;
                            color: #fff;
                            white-space: nowrap;
                            transition: 0.2s ease;
                            cursor: pointer;
                            margin-left: 0.5rem;

                            @include mobile {
                                width: 100%;
                                margin-left: 0;
                                padding: 0.7rem 7.5rem;
                            }

                            &:hover {
                                background-color: #000;
                            }
                        }
                    }
                }
            }
</style>
