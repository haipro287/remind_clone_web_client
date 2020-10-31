<template>
  <v-row>
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <a v-bind="attrs" v-on="on" class="joinClass">
          <v-icon class="iconAdd">
            mdi-plus-circle-outline
          </v-icon>
          Join a class
        </a>
      </template>
      <v-card>
        <v-toolbar dark color="primary" style="height: 80px;">
          <v-toolbar-title
            style="margin-left: 200px; margin-top: 20px; font-size: 25px"
            >Join a class</v-toolbar-title
          >
          <v-spacer></v-spacer>
        </v-toolbar>
        <v-divider></v-divider>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col>
                <v-text-field prefix="@" label="Class code"></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">
            Close
          </v-btn>
          <v-btn color="blue darken-1" text @click="dialog = false">
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
export default {
  data() {
    return {
      dialog: false,
    };
  },
  methods: {},
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
