<template>
  <nav id="nav">
    <router-link :class="{active: $route.name === 'cart'}" to="/cart">
      <div class="cart_holder">
            <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 16.5C14 17.329 14.672 18 15.5 18C16.328 18 17 17.329 17 16.5C17 15.672 16.328 15 15.5 15C14.672 15 14 15.672 14 16.5ZM10.5 15C11.328 15 12 15.671 12 16.5C12 17.329 11.328 18 10.5 18C9.672 18 9 17.329 9 16.5C9 15.672 9.672 15 10.5 15ZM9.164 10L7.187 3H24L21.062 10H9.164ZM4.195 0L7.627 12H20.224L19.385 14H6.146L2.672 2H0.743L0 0H4.195Z" fill="white"/>
            </svg>
            <div class="quantity">
                <p>0</p>
            </div>
        </div>
    </router-link>
    </nav>
  <router-view/>

  <footer id="footer">
        <p>copyright &copy; 2022 - tintoy shop - All rights reserved</p>
    </footer>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

@import 'scss/_mixins.scss';

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html, body {
    scroll-behavior: smooth;
    overflow-x: hidden;
}

#app {
  font-family: 'Poppins';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000;
}

.container {
    padding: 0 6%;
}

.spacer {
    height: 10vh;
}

h1 {
    font-size: 7rem;
    font-weight: 600;

    @include mobile {
        font-size: 3rem
    }
}

h2 {
    font-size: 3.5rem;
    font-weight: 500;

    @include mobile {
        font-size: 1.5rem;
    }
}

h3 {
    font-size: 2rem;
    font-weight: 500;

    @include mobile {
        font-size: 1.2rem;
    }
}

h4 {
    font-size: 2rem;
    font-weight: 400;
    padding-bottom: 1.5rem;
}

#nav {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 8vh;
    padding: 0 6%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    z-index: 2;

    .cart_holder {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: 0.2s;

        &:hover {
            transform: scale(1.05);
        }

        svg {
            transform: scale(1.5);
        }
        
        .quantity {
            position: absolute;
            right: -40%;
            top: -40%;
            width: 16px;
            height: 16px;
            border-radius: 50%;
            background-color: #FFDE00;
            display: flex;
            align-items: center;
            justify-content: center;

            p {
                font-size: 0.7rem;
            }
        }
    }
}

#footer {
    width: 100%;
    height: 6vh;
    display: flex;
    align-items: center;
    justify-content: center;
    
    @include mobile {
        font-size: 0.8rem;
    }
}
</style>
