<template>
  <v-container class=" mx-0 ml-5">
    <v-card class="pa-4" elevation="1">
      <v-card-title> Class information </v-card-title>
      <v-card-text>
        <v-avatar size="96" class="mr-4">
          <img
            :src="'/assets/class_avatar/' + avatar.toLowerCase() + '.svg'"
            alt="Avatar"
          />
        </v-avatar>
        <a style="color: #2196f3; font-size: 16px" @click="openAvatarPicker"
          >Change icon</a
        >
        <icon-picker
          v-model="showAvatarPicker"
          :current-avatar="avatar"
          @selected="selectAvatar"
        ></icon-picker>
        <br /><br />
        <v-row>
          <v-col sm="6">
            <v-text-field
              dense
              v-model="classname"
              label="Class name"
              outlined
              style="margin-bottom: -20px; margin-top: -5px"
            >
            </v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col sm="6">
            <v-text-field
              dense
              prefix="@"
              v-model="classcode"
              label="Class code"
              outlined
            >
            </v-text-field>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions style="margin-top: -35px" class="ml-2 mb-6">
        <v-btn type="submit" color="primary" @click.prevent="changeClassInfo">
          Save
        </v-btn>
      </v-card-actions>
    </v-card>
    <v-card class="mt-3 pa-4" elevation="1">
      <v-card-title>Class settings</v-card-title>
      <v-card-text style="margin-top: -15px">
        <v-checkbox
          v-model="requiredToJoin"
          :label="`Require approval to join`"
        ></v-checkbox>
        <h5>Participant messaging</h5>
        <v-radio-group v-model="participantMess" class="mt-1">
          <v-radio label="On" value="On"> </v-radio>
          <v-radio label="Role-based" value="Rolebased"> </v-radio>
          <v-radio label="Off" value="Off"> </v-radio>
        </v-radio-group>
      </v-card-text>
    </v-card>
    <v-card class="mt-3 pa-4" elevation="1">
      <v-list max-width="500px">
        <v-card-title>Class owners</v-card-title>
        <v-card-subtitle
          >Class owners can see and send messages to class participants. Once
          somebody becomes a class owner, they cannot be
          removed.</v-card-subtitle
        >
        <v-list-item
          v-for="owner in owners"
          :key="owner.name"
          @click.stop="abc"
        >
          <v-list-item-avatar>
            <v-img
              src="https://randomuser.me/api/portraits/women/81.jpg"
              alt="avatar"
            ></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title v-text="owner.name"></v-list-item-title>
          </v-list-item-content>

          <v-list-item-action>
            <v-btn icon>
              <v-icon color="blue lighten-1">mdi-send</v-icon>
            </v-btn>
          </v-list-item-action>
        </v-list-item>
      </v-list>
      <a class="addOwner">
        <v-icon color="blue lighten-1" style="margin-bottom: 3px;">
          mdi-plus-circle-outline
        </v-icon>
        Add class owner
      </a>
      <br /><br />
    </v-card>
    <v-card class="mt-3 pa-4" elevation="1">
      <v-card-title>Archiving</v-card-title>
      <v-card-text>
        <v-row>
          <v-col lg="3" cols="6">
            <h5>Reuse class code</h5>
            <v-btn outlined color="error" @click="reuseClassCode"
              >Reuse class code</v-btn
            >
          </v-col>
          <v-col lg="3" cols="6">
            <h5>Remove class</h5>
            <v-btn outlined color="error" @click="removeClass"
              >Remove class</v-btn
            >
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-container>
</template>
<script>
import IconPicker from "@/components/IconPicker";
export default {
  components: { IconPicker },
  name: "SettingsClass",
  data() {
    return {
      avatar: "apple",
      showAvatarPicker: false,
      classname: "",
      classcode: "",
      requiredToJoin: false,
      participantMess: "On",
      owners: [
        {
          name: "Lai Tuan Anh",
          avatar: "",
        },
      ],
    };
  },
  methods: {
    changeClassInfo() {
      console.log(1);
    },
    reuseClassCode() {
      console.log("reuse class code");
    },
    removeClass() {
      console.log("remove class");
    },
    openAvatarPicker() {
      this.showAvatarPicker = true;
    },
    selectAvatar(avatar) {
      this.avatar = avatar;
    },
  },
};
</script>
<style scoped>
.addOwner {
  color: #2196f3;
  margin-left: 12px;
}
</style>
