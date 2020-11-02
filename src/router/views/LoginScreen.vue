<template>
  <base-line class="background">
    <div class="container">
      <img src="/assets/login.jpg" class="loginImg" />
      <div class="formContainer">
        <h1 class="titleSignin">Sign In</h1>
        <v-form @submit="login()">
          <v-text-field
            v-model="user.email"
            label="Email address or phone number"
            placeholder="user@remind-clone.com"
            outlined
            required
          >
          </v-text-field>
          <v-text-field
            v-model="user.password"
            label="Password"
            outlined
            required
            placeholder="password"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            :type="showPassword ? 'text' : 'password'"
            @click:append="showPassword = !showPassword"
          >
          </v-text-field>
          <v-checkbox v-model="keepsignin" :label="`Stay logged in`"> </v-checkbox>
          <v-btn block elevation="4" color="primary" @click="login()">
            Log in
          </v-btn>
          <p class="orDivider"> OR </p>
          <v-btn block elevation="4">
            Sign in with google
          </v-btn>
          <p class="orDivider">
            Don't have an account?
            <a ref=""> Sign up!</a>
          </p>
        </v-form>
      </div>
    </div>
  </base-line>
</template>

<script>
import BaseLine from "../layouts/Baseline.vue";
import { AUTH_LOGIN } from "../../store/actions/auth";

export default {
  name: "LogIn",
  components: {
    BaseLine,
  },
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
      keepsignin: false,
      showPassword: false,
    };
  },
  methods: {
    login() {
      this.$store.dispatch(AUTH_LOGIN, this.user).then(() => {
        if (this.$route.query.redirect) {
          this.$router.push(this.$route.query.redirect);
        }
        this.$router.push({ path: "/classes" });
      });
    },
  },
};
</script>

<style scoped>
.background {
  background-color: gainsboro;
  height: 100%;
}
.container {
  width: 800px;
  height: 550px;
  background-color: white;
  border-radius: 20px;
  padding: 30px;
  padding-top: 10px;
  margin-top: 50px;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
}
.formContainer {
  width: 50%;
  float: right;
}
.orDivider {
  margin: 20px;
  text-align: center;
  font-size: 13px;
}
.titleSignin {
  text-align: center;
  margin: 20px;
  color: dodgerblue;
}
.loginImg {
  width: 45%;
  height: 100%;
}
</style>
