<template>
  <v-container>
    <v-card>
      <v-card-title>
        <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line hide-details></v-text-field>
      </v-card-title>

      <v-data-table
        v-model="selected"
        :headers="headers"
        :items="members"
        :search="search"
        item-key="id"
        show-select
        calculate-widths
        :loading="loading"
        loading-text="Loading..."
        :sort-by="['type']"
        :sort-desc="[true]"
        @click:row="showPersonDetail()"
        class="row-pointer"
      >
      </v-data-table>
    </v-card>
    <person-detail v-model="personDetail"></person-detail>
  </v-container>
</template>

<script>
import PersonDetail from "@/components/peopleScreen/PersonDetail";
import { getClassroomMembers } from "@/services/classroom.service.js";
import { mapState } from "vuex";

export default {
  components: { PersonDetail },
  data() {
    return {
      personDetail: false,
      expand: false,
      search: "",
      selected: [],
      headers: [
        { text: "Name", value: "name" },
        { text: "Email", value: "email" },
        { text: "Date joined", value: "joined_time" },
        { text: "Role", value: "Role" },
        { text: "Type", value: "type" },
      ],
      members: [],
      loading: false,
    };
  },
  methods: {
    showPersonDetail() {
      this.personDetail = true;
    },
    getAllMembers() {
      this.loading = true;
      getClassroomMembers(this.currentClassroom.id).then(res => {
        this.loading = false;
        this.members = res.data.data;
      });
    },
  },
  computed: {
    ...mapState({
      currentClassroom: state => state.Classroom.currentClassroom,
    }),
  },
  mounted() {
    this.getAllMembers();
  },
};
</script>

<style scoped>
.tab-people-everyone {
  margin-left: 1%;
}

.row-pointer:hover {
  cursor: pointer;
}
</style>
