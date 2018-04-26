<template>
    <div id="header">
        <div class="container">
            <div class="row no-gutter">
                <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                    <h1 id="header-logo">
                        <a id="header-logo-img"
                           href="index.html">
                            <img src="@/assets/img/base64-image-logo-3eb23a9eef.png"
                                 alt="Base64 Image Encoder"
                                 width="126"
                                 height="44">
                        </a>
                    </h1>
                </div>
                <!-- /col -->
                <div class="col-lg-9 col-md-9 col-sm-9 col-xs-9">
                    <!-- navigation: mobile -->
                    <a id="menu-button-mobile"
                       class="fa fa-bars pull-right"
                       href="javascript:base64Global.prototype.toggleMobileMenu();"></a>

                    <!-- navigation: desktop + tablet -->
                    <ul id="menu" class="pull-right">
                            <router-link :to="navigation.path"
                                         v-for="navigation in navigations"
                                         :key="navigation.path"
                                         tag="li"
                                         class="menu-item"
                                         active-class="menu-item-current">
                                <a>{{navigation.name}}</a>
                            </router-link>
                        </ul>

                </div><!-- /col -->
            </div><!-- /row -->
        </div><!-- /container -->
    </div><!-- /header -->
</template>

<script>
  export default {
    name: 'Home',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    computed: {
      navigations () {
        return [
          { path: '/', name: 'Home' },
          { path: '/tutorial', name: 'Tutorial' },
          { path: '/faq', name: 'FAQ' },
          { path: '/contact-us', name: 'Contact Us' },
          { path: '/donate', name: 'Donate' }
        ];
      }
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
