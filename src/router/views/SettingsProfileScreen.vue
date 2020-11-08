<template>
  <v-container>
    <link href="https://fonts.googleapis.com/css2?family=Lobster&display=swap" rel="stylesheet" />
    <v-row>
      <v-avatar size="150" class="avatar">
        <img src="/assets/useravatar.jpg" />
      </v-avatar>
    </v-row>
    <v-row>
      <v-col class="usernameCSS">
        <h1>{{ firstname }} {{ lastname }}</h1>
      </v-col>
    </v-row>
    <v-form>
      <h3>Personal infomation</h3>
      <v-row>
        <v-col>
          <h5>First name</h5>
          <v-text-field dense v-model="firstname" outlined></v-text-field>
        </v-col>
        <v-col>
          <h5>Last name</h5>
          <v-text-field dense v-model="lastname" outlined></v-text-field>
        </v-col>
      </v-row>
      <v-row style="margin-top: -3%">
        <v-col cols="6">
          <h5>Country</h5>
          <v-select dense v-model="userCountry" :items="countries" menu-props="auto" outlined> </v-select>
        </v-col>
      </v-row>
      <v-btn style="margin-top: -1%" @click="savePersonInfo" color="primary">Save</v-btn>
    </v-form>
    <v-divider class="dividerCSS"></v-divider>
    <v-form>
      <h3>Password</h3>
      <v-row>
        <v-col>
          <h5>New password</h5>
          <v-text-field dense type="password" v-model="newpassword" outlined></v-text-field>
        </v-col>
        <v-col>
          <h5>Retype password</h5>
          <v-text-field dense type="password" v-model="rePassword" outlined></v-text-field>
        </v-col>
      </v-row>
      <v-btn style="margin-top: -1%" @click="savePassword" color="primary">Save</v-btn>
    </v-form>
    <v-divider class="dividerCSS"></v-divider>
    <v-row>
      <v-col>
        <h3>Parents</h3>
        <v-list>
          <v-list-item v-for="(parent, i) in parents" :key="i">
            <a> {{ parent }} </a>
          </v-list-item>
        </v-list>
        <br />
        <v-btn @click="addParent" tile color="primary">
          <v-icon left> mdi-plus </v-icon>
          Add parent
        </v-btn>
      </v-col>
    </v-row>
    <v-divider class="dividerCSS"></v-divider>
    <v-btn @click="deleteAccount" outlined color="error">Delete Account</v-btn>
    <br /><br />
  </v-container>
</template>
<script>
export default {
  name: "SettingsProfileScreen",
  data() {
    return {
      username: "Dinh Viet Anh",
      firstname: "Viet Anh",
      lastname: "Dinh",
      userCountry: "Viet Nam",
      countries: ["Viet Nam", "China", "Japan", "Russia", "Poland", "England", "Holand"],
      newpassword: "",
      rePassword: "",
      parents: ["Daddy", "Mommy", "Buddy", "ChoDy"],
    };
  },
  methods: {
    savePersonInfo() {
      console.log("Save personal info");
    },
    savePassword() {
      console.log("Save password");
    },
    addParent() {
      console.log("add parent");
    },
    deleteAccount() {
      console.log("delete account");
    },
  },
};
</script>
<style scoped>
.avatar {
  margin: auto;
}
.usernameCSS >>> h1 {
  text-align: center;
}
.dividerCSS {
  margin-top: 40px;
  margin-bottom: 40px;
}
.addParentCSS {
  border-radius: 50%;
}
.containerCSS {
  background-color: #e8e2d1;
}
</style>
