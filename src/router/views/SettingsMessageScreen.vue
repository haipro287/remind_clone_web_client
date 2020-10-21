<template>
  <setting-user-layout>
    <v-container>
      <h2>Announcements</h2>
      <p
        >Export a PDF of all the announcements you’ve sent to participants in a
        class.</p
      >
      <v-row>
        <v-col sm="3">
          <h3>Class</h3>
          <v-select
            v-model="choosenClass"
            :items="allClasses"
            menu-props="auto"
            outlined
          >
          </v-select>
        </v-col>
        <v-col>
          <h3>Start date</h3>
          <v-dialog
            ref="dialog"
            v-model="start2Picker"
            :return-value.sync="start2Date"
            persistent
            width="290px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="start2Date"
                prepend-icon="mdi-calendar"
                readonly
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker v-model="start2Date" scrollable>
              <v-spacer></v-spacer>
              <v-btn text color="primary" @click="start2Picker = false">
                Cancel
              </v-btn>
              <v-btn
                text
                color="primary"
                @click="$refs.dialog.save(start2Date)"
              >
                OK
              </v-btn>
            </v-date-picker>
          </v-dialog>
        </v-col>
        <v-col>
          <h3>End date</h3>
          <v-dialog
            ref="dialog"
            v-model="endPicker"
            :return-value.sync="endDate"
            persistent
            width="290px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="endDate"
                prepend-icon="mdi-calendar"
                readonly
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker v-model="endDate" scrollable>
              <v-spacer></v-spacer>
              <v-btn text color="primary" @click="endPicker = false">
                Cancel
              </v-btn>
              <v-btn text color="primary" @click="$refs.dialog.save(endDate)">
                OK
              </v-btn>
            </v-date-picker>
          </v-dialog>
        </v-col>
      </v-row>
    </v-container>
  </setting-user-layout>
</template>
<script>
import SettingUserLayout from "../layouts/SettingsUserLayout.vue";
export default {
  name: "SettingsMessage",
  components: {
    SettingUserLayout,
  },
  data() {
    return {
      choosenClass: "All classes",
      allClasses: ["All classes", "Math", "Tech", "English"],
      start2Date: new Date().toISOString().substring(0, 10),
      start2Picker: false,
      endDate: new Date().toISOString().substring(0, 10),
      endPicker: false,
    };
  },
};
</script>
<style scoped></style>
