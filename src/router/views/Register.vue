<template>
  <base-line class="background login-bg">
    <v-card class="container">
      <img src="/assets/login.png" class="loginImg" />
      <div class="formContainer">
        <h1 class="titleSignin">Sign Up</h1>
        <v-form @submit="login()">
          <v-text-field v-model="user.name" label="Full Name" placeholder="Admin Admin" outlined required>
          </v-text-field>
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
          <v-text-field
            v-model="repassword"
            label="Re-enter Password"
            outlined
            required
            placeholder="re-enter password"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            :type="showPassword ? 'text' : 'password'"
            @click:append="showPassword = !showPassword"
          >
          </v-text-field>
          <v-select
            :items="roles"
            item-text="name"
            item-value="id"
            v-model="user.role_id"
            filled
            label="Select Role"
          ></v-select>
          <v-btn block elevation="4" color="primary" @click="register()"> Register </v-btn>
        </v-form>
      </div>
    </v-card>
  </base-line>
</template>

<script>
import BaseLine from "../layouts/Baseline.vue";
import axios from "../../services/axios";

export default {
  name: "Register",
  components: {
    BaseLine,
  },
  mounted() {
    this.getRoles();
  },
  data() {
    return {
      user: {
        name: "",
        email: "",
        password: "",
        role_id: "",
      },
      repassword: "",
      showPassword: false,
      roles: [],
    };
  },
  methods: {
    register() {
      if (this.user.password !== this.repassword) {
        return;
      }
      axios
        .post("/api/user/auth/register", this.user)
        .then(res => {
          if (res.status === 201) {
            this.$router.push({ path: "/login" });
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    getRoles() {
      axios
        .get("/api/role/")
        .then(res => {
          if (res.data.data != null) {
            this.roles = res.data.data;
          }
        })
        .catch(err => {
          console.log(err);
        });
      console.log(this.roles);
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
  height: 600px;
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
