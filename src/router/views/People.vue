<template>
  <classline>
    <v-container style="margin-left: 300px">
      <v-row>
        <v-btn @click="expand = !expand">
          <v-icon left>
            mdi-account-search-outline
          </v-icon>
          Search
        </v-btn>
        <v-expand-transition>
          <v-card
            v-show="expand"
            height="100"
            width="100"
            class="mx-auto secondary"
          ></v-card>
        </v-expand-transition>

        <div class="mx-4 hidden-sm-and-down"></div>

        <v-btn class="tab-people-everyone">
          <v-icon left>
            mdi-account-group-outline
          </v-icon>
          Everyone(8)
          <v-icon right>
            mdi-filter-variant
          </v-icon>
        </v-btn>
      </v-row>

      <br />
      <v-layout column>
        <v-data-table
          v-model="selected"
          :headers="headers"
          :items="desserts"
          item-key="name"
          show-select
          calculate-widths
        >
          <template v-slot:top> </template>
        </v-data-table>
      </v-layout>
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
