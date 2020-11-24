<template>
  <base-line class="background login-bg">
    <v-card class="container">
      <img src="/assets/login.png" class="loginImg" />
      <div class="formContainer">
        <h1 class="titleSignin">Sign In</h1>
        <v-form @submit="login()">
          <v-text-field
            v-model="user.email"
            label="Email address or phone number"
            placeholder="user@remind-clone.com"
            outlined
            required
            @keyup.enter.exact="login"
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
            @keyup.enter.exact="login"
          >
          </v-text-field>
          <v-checkbox v-model="keepSignedIn" :label="`Stay logged in`"> </v-checkbox>
          <v-btn block elevation="4" color="primary" @click="login"> Log in </v-btn>
          <p class="orDivider"> OR </p>
          <v-btn block elevation="4" max-width="370px">
            <v-avatar size="3%" class="mr-3">
              <v-img src="/assets/logoGG.png"> </v-img>
            </v-avatar>
            Sign in with google
          </v-btn>
          <p class="orDivider">
            Don't have an account?
            <router-link to="/register"> Sign up! </router-link>
          </p>
        </v-form>
      </div>
    </v-card>
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
      keepSignedIn: false,
      showPassword: false,
    };
  },
  methods: {
    login() {
      const user = this.user;
      const keepSignedIn = this.keepSignedIn;
      this.$store.dispatch(AUTH_LOGIN, { user, keepSignedIn }).then(() => {
        this.setSocketToken(this.$store.state.Auth.token);
        this.$socket.open();
        if (this.$route.query.redirect) {
          return this.$router.push(this.$route.query.redirect);
        }
        this.$router.push({ name: "ClassStart" });
      });
    },
    setSocketToken(token) {
      this.$socket.io.opts.query.token = token;
    },
  },
};
</script>

<style scoped>
.background {
  height: 100%;
}
.container {
  width: 800px;
  height: 550px;
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
