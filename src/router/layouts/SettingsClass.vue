<template>
  <v-container style="margin-left: 260px; margin-top: 100px;">
    <v-card style="padding: 15px;">
      <v-form @submit.prevent="changeClassInfo">
        <h2> Class infomation </h2>
        <v-avatar size="69">
          <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
        </v-avatar>
        <v-btn @click="changeAvatar"> Change avatar </v-btn>
        <v-row>
          <v-col cols="1" sm="6">
            <h5>Class name</h5>
            <v-text-field v-model="classname" outlined> </v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="1" sm="6">
            <h5> Class code </h5>
            <v-text-field v-model="classcode" outlined> </v-text-field>
          </v-col>
        </v-row>
        <v-btn type="submit" color="primary"> Save </v-btn>
      </v-form>
      <v-divider class="divider"></v-divider>
      <v-form>
        <h2>Class settings</h2>
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
      </v-form>
      <v-divider class="divider"></v-divider>
      <v-form>
        <h2>Class owners</h2>
      </v-form>
      <v-divider class="divider"></v-divider>
      <div>
        <h3>Archiving</h3>
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
      </div>
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
