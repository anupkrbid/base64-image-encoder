<template>
    <div>
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
                            <router-link :to="navigation.url"
                                         v-for="navigation in navigations"
                                         :key="navigation.url"
                                         tag="li"
                                         class="menu-item"
                                         active-class="menu-item-current"
                                         exact >
                                <a>
                                    <span v-if="navigation.icon" v-html="navigation.icon"></span>
                                    {{navigation.name}}
                                </a>
                            </router-link>
                        </ul>
                    </div><!-- /col -->
                </div><!-- /row -->
            </div><!-- /container -->
        </div><!-- /header -->

        <!--<div id="menu-container-mobile">-->
            <!--<div class="container">-->
                <!--<ul id="menu-mobile">-->
                    <!--<router-link :to="navigation.path"-->
                                 <!--v-for="navigation in navigations"-->
                                 <!--:key="navigation.path"-->
                                 <!--tag="li"-->
                                 <!--class="menu-item"-->
                                 <!--active-class="menu-item-current">-->
                        <!--<a>{{navigation.name}}</a>-->
                    <!--</router-link>-->
                    <!--<router-link to="/donate"-->
                                 <!--tag="li"-->
                                 <!--class="menu-item"-->
                                 <!--active-class="menu-item-current">-->
                        <!--<a> <i class="fa fa-heart" aria-hidden="true"></i> Donate</a>-->
                    <!--</router-link>-->
                <!--</ul>-->
            <!--</div>-->
        <!--</div>-->
    </div>
</template>

<script>
  export default {
    name: 'Home',
    data () {
      return {
        msg: '<i class="fa fa-heart" aria-hidden="true">'
      }
    },
    computed: {
      navigations () {
        return [
          { url: '/', name: 'Home' },
          { url: '/tutorial', name: 'Tutorial' },
          { url: '/faq', name: 'FAQ' },
          { url: '/contact-us', name: 'Contact Us' },
          { url: '/donate', name: 'Donate', icon: '<i class="fa fa-heart" aria-hidden="true">' }
        ];
      }
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
