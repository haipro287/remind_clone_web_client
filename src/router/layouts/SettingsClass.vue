<template>
  <v-container class=" mx-0 ml-5">
    <v-card class="pa-4" elevation="1">
      <v-card-title> Class infomation </v-card-title>
      <v-card-text>
        <v-avatar size="69">
          <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
        </v-avatar>
        <v-btn @click="changeAvatar"> Change avatar </v-btn>
        <v-row>
          <v-col sm="6">
            <h5>Class name</h5>
            <v-text-field v-model="classname" outlined> </v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col sm="6">
            <h5> Class code </h5>
            <v-text-field v-model="classcode" outlined> </v-text-field>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions>
        <v-btn type="submit" color="primary" @click.prevent="changeClassInfo">
          Save
        </v-btn>
      </v-card-actions>
    </v-card>
    <v-card class="mt-3" elevation="1">
      <v-card-title>Class settings</v-card-title>
      <v-card-text>
        <v-checkbox
          v-model="requiredToJoin"
          :label="`Require approval to join`"
        ></v-checkbox>
        <h5>Participant messaging</h5>
        <v-radio-group v-model="participantMess">
          <v-radio label="On" value="On"> </v-radio>
          <v-radio label="Role-based" value="Rolebased"> </v-radio>
          <v-radio label="Off" value="Off"> </v-radio>
        </v-radio-group>
      </v-card-text>
    </v-card>
    <v-card class="mt-3" elevation="1">
      <v-card-title>Class owners</v-card-title>
    </v-card>
    <v-card class="mt-3" elevation="1">
      <v-card-title>Archiving</v-card-title>
      <v-card-text>
        <v-row>
          <v-col sm="3" cols="12">
            <h5>Reuse class code</h5>
            <v-btn color="error" @click="reuseClassCode"
              >Reuse class code</v-btn
            >
          </v-col>
          <v-col sm="3" cols="12">
            <h5>Remove class</h5>
            <v-btn color="error" @click="removeClass">Remove class</v-btn>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-container>
</template>
<script>
export default {
  name: "SettingsClass",
  data() {
    return {
      classname: "Math",
      classcode: "@@@@",
      requiredToJoin: false,
      participantMess: "On",
    };
  },
  methods: {
    changeClassInfo() {
      console.log(1);
    },
    changeAvatar() {
      console.log("change avatar");
    },
    reuseClassCode() {
      console.log("reuse class code");
    },
    removeClass() {
      console.log("remove class");
    },
  },
};
</script>
<style scoped>
.divider {
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>
