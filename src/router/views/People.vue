<template>
  <classline>
    <v-container style="margin-left: 300px">
      <v-card>
        <v-card-title>
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
          ></v-text-field>
        </v-card-title>

        <v-data-table
          v-model="selected"
          :headers="headers"
          :items="desserts"
          :search="search"
          item-key="name"
          show-select
          calculate-widths
        ></v-data-table>
      </v-card>
    </v-container>
  </classline>
</template>

<script>
import Classline from "../layouts/Classline.vue";

export default {
  components: { Classline },
  data() {
    return {
      expand: false,
      search: "",
      selected: [],
      headers: [
        { text: "Name", value: "name" },
        { text: "Date joined", value: "joined_time" },
        { text: "Role", value: "role" },
        { text: "Family members", value: "family_member_name" },
      ],
      desserts: [
        {
          name: "Pham Thi Dan 1",
          joined_time: "Sep 30, 2020",
          role: "Teacher",
          family_member_name: "",
        },
        {
          name: "Pham Thi Dan 2",
          joined_time: "Sep 29, 2020",
          role: "Student",
          family_member_name: "",
        },
        {
          name: "Pham Thi Dan 3",
          joined_time: "Sep 20, 2020",
          role: "Student",
          family_member_name: "",
        },
        {
          name: "Pham Thi Dan 4",
          joined_time: "Sep 28, 2020",
          role: "Student",
          family_member_name: "",
        },
        {
          name: "Pham Thi Dan 5",
          joined_time: "Sep 27, 2020",
          role: "Student",
          family_member_name: "",
        },
        {
          name: "Pham Thi Dan 6",
          joined_time: "Sep 26, 2020",
          role: "Student",
          family_member_name: "",
        },
        {
          name: "Pham Thi Dan 7",
          joined_time: "Sep 25, 2020",
          role: "Student",
          family_member_name: "",
        },
        {
          name: "Pham Thi Dan 8",
          joined_time: "Sep 22, 2020",
          role: "Student",
          family_member_name: "",
        },
      ],
    };
  },
};
</script>

<style scoped>
.tab-people-everyone {
  margin-left: 1%;
}
</style>
