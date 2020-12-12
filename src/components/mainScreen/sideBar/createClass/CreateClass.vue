<template>
  <v-row>
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-hover v-slot="{ hover }">
          <a v-bind="attrs" v-on="on" class="createClass">
            <v-icon v-if="!hover" class="iconAdd"> mdi-plus-circle-outline </v-icon>
            <v-icon v-if="hover" class="iconAdd"> mdi-plus-circle </v-icon>
            Create a class
          </a>
        </v-hover>
      </template>
      <v-card>
        <v-toolbar dark color="primary" style="height: 80px">
          <v-toolbar-title style="margin-left: 200px; margin-top: 20px; font-size: 25px"
            >Create a class</v-toolbar-title
          >
          <v-spacer></v-spacer>
        </v-toolbar>
        <v-divider></v-divider>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col>
                <v-container style="margin-top: 40px">
                  <v-avatar size="96" class="mr-4">
                    <img :src="'/assets/class_avatar/' + avatar.toLowerCase() + '.svg'" alt="Avatar" />
                  </v-avatar>
                  <a style="color: #2196f3; font-size: 16px" @click="openAvatarPicker">Change icon</a>
                </v-container>
              </v-col>
              <v-col>
                <v-col cols="12" md="12">
                  <v-text-field v-model="classroom.name" label="Class name" required></v-text-field>
                </v-col>
                <v-col cols="12" md="12">
                  <v-text-field v-model="classroom.school" label="School name" required></v-text-field>
                </v-col>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false"> Close </v-btn>
          <v-btn color="blue darken-1" text @click="createClassroom"> Save </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <icon-picker v-model="showAvatarPicker" :current-avatar="avatar" @selected="selectAvatar"></icon-picker>
  </v-row>
</template>
<script>
import IconPicker from "@/components/mainScreen/sideBar/createClass/IconPicker";
import axios from "../../../../services/axios";

export default {
  components: { IconPicker },
  data() {
    return {
      dialog: false,
      avatar: "apple",
      showAvatarPicker: false,
      classroom: {
        name: "",
        school: "",
      },
    };
  },
  methods: {
    openAvatarPicker() {
      this.showAvatarPicker = true;
    },
    selectAvatar(avatar) {
      this.avatar = avatar;
    },
    createClassroom() {
      axios.post("/api/classroom/", this.classroom).then(res => {
        if (res.status === 201 && res.data.data.code != null) {
          console.log(res.data.data);
          this.dialog = false;
          this.$store.dispatch("RESET_CLASSROOM");
          this.$store.dispatch("FETCH_CLASSES");
        }
      });
    },
  },
};
</script>
<style scoped>
.createClass {
  color: #2196f3;
  width: 200px;
  padding-left: 18px;
  margin-left: 12px;
}

.iconAdd {
  color: #2196f3;
  margin-right: 7px;
  margin-bottom: 2px;
}
</style>
