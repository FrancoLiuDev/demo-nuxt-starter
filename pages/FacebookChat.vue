<template>
  <section class="container">
    <div v-show="page_id">
      <div id="fb-root"></div>
      <div   class="fb-customerchat" attribution="setup_tool" :page_id="page_id"></div>
    
    </div>
      <button class="bt-small" v-on:click="page_id = '652002691936819'">6520</button>
      <button class="bt-small" v-on:click="page_id = '146864302897352'">1468</button>
  </section>
</template>

<script>
export default {
  data() {
    return {
      page_id: null
    };
  },
  watch: {
    page_id: function type(page_id) {
      console.log("page_id", page_id);
    }
  },
  components: {},
  mounted() {
    window.fbAsyncInit = function() {
      FB.init({
        xfbml: true,
        version: "v3.2"
      });
    };
    (function(d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
  }
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
