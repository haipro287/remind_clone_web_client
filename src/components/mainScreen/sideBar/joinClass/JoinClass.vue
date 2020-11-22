<template>
  <v-row>
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-hover v-slot="{ hover }">
          <a v-bind="attrs" v-on="on" class="joinClass">
            <v-icon v-if="!hover" class="iconAdd"> mdi-plus-circle-outline </v-icon>
            <v-icon v-if="hover" class="iconAdd"> mdi-plus-circle </v-icon>
            Join a class
          </a>
        </v-hover>
      </template>
      <v-card>
        <v-toolbar dark color="primary" style="height: 80px">
          <v-toolbar-title style="margin-left: 200px; margin-top: 20px; font-size: 25px">Join a class</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
        <v-divider></v-divider>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col>
                <v-text-field prefix="@" label="Class code" v-model="classroom.code"></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false"> Close </v-btn>
          <v-btn color="blue darken-1" text @click="joinClassroom"> Save </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
import axios from "../../../../services/axios";

export default {
  data() {
    return {
      dialog: false,
      classroom: {
        code: null,
      },
    };
  },
  methods: {
    joinClassroom() {
      axios
        .post(`/api/classroom/join/${this.classroom.code}`)
        .then(res => {
          if (res.status === 201 && res.data.data.code != null) {
            console.log(res.data.data);
            this.dialog = false;
          }
        })
        .catch(err => {
          console.log(err);
        });
      this.dialog = false;
    },
  },
};
</script>
<style scoped>
.joinClass {
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
