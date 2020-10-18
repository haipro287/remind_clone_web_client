<template>
  <base-line class="background">
    <div class="container">
      <img src="/assets/login.jpg" class="loginImg" />
      <div class="formContainer">
        <h1 class="titleSignin">Sign In</h1>
        <v-form @submit="stop">
          <v-text-field
            v-model="username"
            label="Email address or phone number"
            placeholder="Required"
            outlined
            required
          >
          </v-text-field>
          <v-text-field
            v-model="password"
            label="Password"
            placeholder="Required"
            outlined
            required
          >
          </v-text-field>
          <v-checkbox v-model="keepsignin" :label="`Stay logged in`">
          </v-checkbox>
          <v-btn block elevation="4" color="primary">
            Log in
          </v-btn>
          <p class="orDivider"> OR </p>
          <v-btn block elevation="4">
            Sign in with google
          </v-btn>
          <p class="orDivider"
            >Don't have an account? <a ref=""> Sign up!</a></p
          >
        </v-form>
      </div>
    </div>
  </base-line>
</template>

<script>
import BaseLine from "../layouts/Baseline.vue";

export default {
  name: "LogIn",
  components: {
    BaseLine,
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
