<template>
  <v-container class="mx-0 ml-5">
    <v-card class="pa-4" elevation="1">
      <v-card-title>
        <v-row>
          <v-col class="col-10"> Files </v-col>
          <v-col class="col-2">
            <upload-file></upload-file>
          </v-col>
        </v-row>
      </v-card-title>
      <v-list max-width="500px" subheader two-line>
        <v-list-item v-for="file in files" :key="file.name" @click.stop="showFileDetails = true">
          <v-list-item-avatar>
            <v-icon class="blue lighten-1" dark> mdi-file </v-icon>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title v-text="file.name"></v-list-item-title>

            <v-list-item-subtitle v-text="formatTs(file.created_at)"></v-list-item-subtitle>
          </v-list-item-content>

          <file-details v-model="showFileDetails" :fileObj="file"></file-details>

          <v-list-item-action>
            <v-btn icon>
              <v-icon color="blue lighten-1">mdi-information</v-icon>
            </v-btn>
          </v-list-item-action>
        </v-list-item>
      </v-list>
    </v-card>
  </v-container>
</template>

<script>
import FileDetails from "@/components/fileScreen/FileDetails";
import UploadFile from "@/components/fileScreen/UploadFile";
import { getClassroomFiles } from "@/services/file.service";
import { mapState } from "vuex";
import { formatFileTimestamp } from "@/utils/date.util";

export default {
  components: { FileDetails, UploadFile },
  data() {
    return {
      showFileDetails: false,
      files: [],
    };
  },
  methods: {
    formatTs(date) {
      return formatFileTimestamp(date);
    },
  },
  computed: {
    ...mapState({
      currentClassroom: state => state.Classroom.currentClassroom,
    }),
  },
  mounted() {
    getClassroomFiles(this.currentClassroom.id)
      .then(res => res.data)
      .then(data => {
        this.files = data.data;
      });
  },
};
</script>

<style scoped>
.upload-btn-wrapper {
  position: relative;
  overflow: hidden;
  display: inline-block;
}

.btn {
  border: 2px solid gray;
  color: gray;
  background-color: white;
  padding: 8px 20px;
  border-radius: 8px;
  font-size: 20px;
  font-weight: bold;
}

.upload-btn-wrapper input[type="file"] {
  font-size: 100px;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
}
</style>
