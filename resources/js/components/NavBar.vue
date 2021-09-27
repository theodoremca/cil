<template>
  <div class="full-width-header">
    <!-- Toolbar Start -->
    <div class="toolbar-area hidden-md">
      <div class="container">
        <div class="row y-middle">
          <div class="col-md-5">
            <div class="toolbar-contact">
              <ul>
                <li>
                  <i class="flaticon-email"></i
                  ><a href="mailto:cil@gmail.com">cil@gmail.com</a>
                </li>
                <li>
                  <i class="flaticon-call"></i
                  ><a href="tel:+123456789">(+123) 456789</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-md-7">
            <div class="toolbar-sl-share">
              <ul>
                <li>
                  <a href="#"><i class="fa fa-facebook"></i></a>
                </li>
                <li>
                  <a href="#"><i class="fa fa-twitter"></i></a>
                </li>
                <li>
                  <a href="#"><i class="fa fa-pinterest-p"></i></a>
                </li>
                <li>
                  <a href="#"><i class="fa fa-linkedin"></i></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Toolbar End -->

    <!--Header Start-->
    <header id="rs-header" class="rs-header">
      <!-- Menu Start -->
      <div class="menu-area menu-sticky">
        <div class="container">
          <div class="row y-middle">
            <div class="col-lg-2">
              <div class="logo-area">
                <a href="index.html"
                  ><img src="assets/images/logo-red2.png" alt="logo"
                /></a>
              </div>
            </div>
            <div class="col-lg-10 text-right">
              <div class="rs-menu-area">
                <div class="main-menu">
                  <div class="mobile-menu">
                    <a class="rs-menu-toggle">
                      <i class="fa fa-bars"></i>
                    </a>
                  </div>
                  <nav class="rs-menu pl-40 md-pl-0">
                    <ul class="nav-menu">
                      <li class="menu-item-has-children ">
                        <router-link :to="{ name: 'who-we-are' }">
                          Who we are</router-link
                        >
                        <ul class="sub-menu">
                          <li>
                            <router-link :to="{ name: 'who-we-are' }"
                              >Who we are</router-link
                            >
                          </li>
                          <li class="last-item">
                            <router-link :to="{ name: 'team' }"
                              >Our Team</router-link
                            >
                          </li>
                        </ul>
                      </li>
                      <li class="menu-item-has-children">
                        <router-link :to="{ name: 'what-we-do' }">
                          What we do</router-link
                        >
                        <ul class="sub-menu">
                          <li>
                            <router-link :to="{ name: 'what-we-do' }"
                              >Our Products</router-link
                            >
                          </li>
                          <li class="last-item">
                            <router-link :to="{ name: 'processes' }"
                              >Our Processes</router-link
                            >
                          </li>
                        </ul>
                      </li>

                      <li class="menu-item-has-children">
                        <router-link :to="{ name: 'blog' }">
                          Business Insights</router-link
                        >

                        <ul class="sub-menu">
                          <li>
                            <router-link :to="{ name: 'blog' }">
                              Blog</router-link
                            >
                          </li>
                          <li>
                            <router-link :to="{ name: 'article' }">
                              Articles</router-link
                            >
                          </li>
                          <li>
                            <router-link :to="{ name: 'case-study' }">
                              Case Study</router-link
                            >
                          </li>
                        </ul>
                      </li>

                      <li class="menu-item-has-children">
                        <router-link :to="{ name: 'career' }">
                          Careers</router-link
                        >
                        <ul class="sub-menu">
                          <li>
                            <router-link :to="{ name: 'career' }">
                              Careers</router-link
                            >
                          </li>
                          <li class="last-item">
                            <router-link :to="{ name: 'career' }">
                              Careers</router-link
                            >
                          </li>
                        </ul>
                      </li>

                      <li class="menu-item">
                        <router-link :to="{ name: 'contact' }">
                          Contact</router-link
                        >
                      </li>
                    </ul>
                    <!-- //.nav-menu -->
                  </nav>
                </div>
                <!-- //.main-menu -->
                <div class="expand-btn-inner">
                  <ul>
                    <li>
                      <a
                        class="hidden-xs rs-search"
                        data-target=".search-modal"
                        data-toggle="modal"
                        href="#"
                      >
                        <i class="fa fa-search"></i>
                      </a>
                    </li>
                    <li class="icon-bar cart-inner mini-cart-active">
                      <a class="cart-icon"><i class="flaticon-bag"></i> </a>
                      <div class="woocommerce-mini-cart text-left">
                        <ul class="cart-icon-product-list">
                          <li class="display-flex">
                            <div class="icon-cart">
                              <a href="#"><i class="fa fa-times"></i></a>
                            </div>
                            <div class="product-info">
                              <a href="cart.html">Cordless Drill</a><br />
                              <span class="quantity">1 × $30.00</span>
                            </div>
                            <div class="product-image">
                              <a href="cart.html"
                                ><img
                                  src="assets/images/shop/1.jpg"
                                  alt="Product Image"
                              /></a>
                            </div>
                          </li>
                          <li class="display-flex">
                            <div class="icon-cart">
                              <a href="#"><i class="fa fa-times"></i></a>
                            </div>
                            <div class="product-info">
                              <a href="cart.html">Spirit Level</a><br />
                              <span class="quantity">1 × $30.00</span>
                            </div>
                            <div class="product-image">
                              <a href="cart.html"
                                ><img
                                  src="assets/images/shop/2.jpg"
                                  alt="Product Image"
                              /></a>
                            </div>
                          </li>
                        </ul>

                        <div class="total-price text-center">
                          <span class="subtotal">Subtotal:</span>
                          <span class="current-price">$85.00</span>
                        </div>

                        <div class="cart-btn text-center">
                          <a class="crt-btn btn1" href="cart.html">View Cart</a>
                          <a class="crt-btn btn2" href="checkout.html"
                            >Check Out</a
                          >
                        </div>
                      </div>
                    </li>
                  </ul>
                  <div class="head-btn pl-30">
                    <a href="#">Get Started</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Menu End -->
    </header>
    <!--Header End-->
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped>
    .full-width-header .rs-header .menu-area .main-menu .rs-menu ul.nav-menu li a {
        font-size: 14px !important;
    }


</style>
