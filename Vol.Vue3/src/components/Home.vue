

<template>
  <div id="home">


  </div>
</template>

<script>
import store from "../store";
import {getCurrentInstance, reactive} from "vue";
import http from "@/../src/api/http.js";
import {useRouter} from "vue-router";

export default {
  name: 'home',
  data: function () {
    return {
      claims: '',
    }
  },
  mounted () { this.setup() },
  methods: {
    async setup () {

      const userInfo = reactive({
        userName: "",
        password: "",
        verificationCode: "",
        UUID: undefined,
      });
      let appContext = getCurrentInstance().appContext;
      let $message = appContext.config.globalProperties.$message;
      let router = useRouter();
    //  alert(store.getters.isLoading());
      let loginOut = this.$route.query.loginOut;
      if(loginOut){
        this.logout();
      }
      else if(this.authState?.isAuthenticated ) {
        this.claims = await this.$auth.getUser()
         userInfo.userName=this.claims.email
       // userInfo.userName = 'admin'
        userInfo.password="9999999  "
        userInfo.verificationCode="0000"
        userInfo.UUID="9999";
        http.post("/api/user/login?bverificationCode=false", userInfo, "Logging In....").then((result) => {
          if (!result.status) {
            //loading.value = false;
            return $message.error(result.message);
          }
          $message.success("Login Success!");
          store.commit("setUserInfo", result.data);
          router.push({ path: "/home" });
        });
      }else{
        this.login();
      }


    },
    async login () {
      this.$auth.signInWithRedirect({ originalUri: '/' })

    },
    async logout() {
      await this.$auth.signOut()

    }
  }
}
</script>
