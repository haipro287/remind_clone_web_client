<template>
  <v-card class="overflow-hidden">
    <v-app-bar fixed class="navbar" height="50%">
      <v-avatar size="40px" color="info" class="classAvatar">
        <v-img src="/assets/class_avatar/apple.svg"> </v-img>
      </v-avatar>
      <v-list-item two-line>
        <v-list-item-content>
          <v-list-item-title class="className">Class 1</v-list-item-title>
          <v-list-item-subtitle>{{ $route.params.code }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <template v-slot:extension>
        <v-tabs centered center-active color="#2196f3">
          <v-tab>
            <router-link tag="li" class="router-link" :to="{ name: 'Message' }"
              >Message</router-link
            >
          </v-tab>
          <v-tab>
            <router-link tag="li" class="router-link" :to="{ name: 'Files' }"
              >File</router-link
            >
          </v-tab>
          <v-tab>
            <router-link tag="li" class="router-link" :to="{ name: 'People' }"
              >People</router-link
            >
          </v-tab>
          <v-tab>
            <router-link
              tag="li"
              class="router-link"
              :to="{ name: 'Information' }"
              >Information</router-link
            >
          </v-tab>
          <v-tab>
            <router-link
              tag="li"
              class="router-link"
              :to="{ name: 'Settings Class' }"
              >Setting</router-link
            >
          </v-tab>
        </v-tabs>
      </template>
      <v-btn style="margin-right: 5px; margin-top: 25px" right color="info"
        >Add people</v-btn
      >
    </v-app-bar>
  </v-card>
</template>

<script>
export default {
  name: "Content",
  data() {
    return {};
  },
};
</script>

<style scoped>
.classAvatar {
  margin-top: 25px;
  margin-left: 10px;
  margin-right: -8px;
}

.className {
  font-size: larger;
  font-weight: 500;
  margin-top: 25px;
}

.navbar {
  margin-left: 250px;
  height: 50%;
  background-color: white !important;
}

li {
  list-style-type: none;
}
li.router-link-active {
  color: #2196f3;
  font-weight: bold;
}
.router-link {
  text-decoration: none;
  color: gray;
}
</style>
