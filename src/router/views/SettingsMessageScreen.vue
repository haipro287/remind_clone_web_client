<template>
  <setting-user-layout>
    <v-container>
      <h2>Announcements</h2>
      <p
        >Export a PDF of all the announcements you’ve sent to participants in a
        class.</p
      >
      <v-form>
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
          <v-col sm="3">
            <h3>Range date</h3>
            <v-dialog
              ref="dialog"
              v-model="datePicker"
              :return-value.sync="dates"
              persistent
              width="290px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="dateRange"
                  append-icon="mdi-calendar"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                  outlined
                ></v-text-field>
              </template>
              <v-date-picker v-model="dates" range>
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="datePicker = false">
                  Cancel
                </v-btn>
                <v-btn text color="primary" @click="$refs.dialog.save(dates)">
                  OK
                </v-btn>
              </v-date-picker>
            </v-dialog>
          </v-col>
        </v-row>
        <v-btn @click="exportPDFAnnouncement" color="primary">Export</v-btn>
      </v-form>
      <v-divider class="dividerCSS"></v-divider>
      <h2>Participants</h2>
      <p>Export PDFs of all the participants in your classes.</p>
      <v-form>
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
            <v-btn @click="exportPDFParticipant" color="primary">
              Export
            </v-btn>
          </v-col>
        </v-row>
      </v-form>
      <v-divider class="dividerCSS"></v-divider>
      <h2>Exporting user data</h2>
      <p
        >Request an email link to all of your data on Remind. The email might
        take a few minutes to arrive.</p
      >
      <v-btn @click="exportUserData" outlined color="primary">
        Export Data</v-btn
      >
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
      dates: ["2020-01-01", "2020-01-01"],
      datePicker: false,
    };
  },
  methods: {
    exportPDFAnnouncement() {
      console.log("export PDF Announcement");
    },
    exportPDFParticipant() {
      console.log("export PDF Participant");
    },
    exportUserData() {
      console.log("export user data");
    },
  },
  computed: {
    dateRange() {
      return this.dates.join(" ~~ ");
    },
  },
};
</script>
<style scoped>
.dividerCSS {
  margin-top: 40px;
  margin-bottom: 40px;
}
</style>
