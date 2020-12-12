<template>
  <v-row>
    <v-dialog v-model="dialog" persistent max-width="1000px">
      <template v-slot:activator="{ on, attrs }">
        <v-hover v-slot="{ hover }">
          <div v-bind="attrs" v-on="on">
            <v-btn v-if="hover" class="info">
              Add
              <v-icon right dark> mdi-file-plus-outline </v-icon>
            </v-btn>
            <v-btn v-if="!hover">
              Add
              <v-icon right dark> mdi-file-plus-outline </v-icon>
            </v-btn>
          </div>
        </v-hover>
      </template>
      <v-card>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">
            Close
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-actions>
        <v-card-text>
          <!-- Add message -->
          <v-text-field outlined label="Message" v-model="message"></v-text-field>
          <div v-if="!file">
            <div
              :class="['dropZone', dragging ? 'dropZone-over' : '']"
              @dragenter="dragging = true"
              @dragleave="dragging = false"
            >
              <div class="dropZone-info" @drag="onChange">
                <v-icon left class="dropZone-title"> mdi-cloud-upload </v-icon>
                <span class="dropZone-title">Drop file or click to upload</span>
              </div>
              <input type="file" ref="input1" @change="onChange" />
            </div>
          </div>
          <div v-else class="dropZone-uploaded">
            <div class="dropZone-uploaded-info">
              <div class="dropZone-upload-limit-info">
                <div>File Name: {{ file.name }}</div>
                <div>File Size: {{ file.size }} bytes</div>
              </div>
              <v-row class="mt-2">
                <v-btn class="warning mr-2" @click="removeFile">
                  Remove
                  <v-icon right dark>mdi-file-remove</v-icon>
                </v-btn>
                <v-btn class="info" @click="onUpload">
                  Upload
                  <v-icon right dark> mdi-cloud-upload </v-icon>
                </v-btn>
              </v-row>
              <div v-if="uploadValue != 0">
                <v-row>
                  <p class="mt-5">
                    Progress: {{ uploadValue.toFixed() + "%" }}
                    <progress id="progress" :value="uploadValue" max="100"></progress>
                  </p>
                  <v-icon v-if="uploadValue == 100" color="success" right>mdi-check-circle</v-icon>
                </v-row>
              </div>
            </div>
          </div>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
import { firestore, addFile } from "../../services/file.service.js";
import { mapState } from "vuex";
export default {
  data() {
    return {
      dialog: false,
      message: "",
      file: null,
      fileURL: null,
      dragging: false,
      uploadValue: 0,
    };
  },
  methods: {
    onChange(e) {
      var files = e.target.files || e.dataTransfer.files;

      if (!files.length) {
        this.dragging = false;
        return;
      }

      this.createFile(files[0]);
    },
    createFile(file) {
      this.file = file;
      this.dragging = false;
    },
    removeFile() {
      this.file = null;
      this.uploadValue = 0;
    },
    onUpload() {
      var storageRef = firestore.ref();
      var uploadTask = storageRef.child(`${this.file.name}`).put(this.file);
      uploadTask.on(
        `state_changed`,
        snapshot => {
          this.uploadValue = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        },
        error => {
          console.log(error.message);
        },
        () => {
          this.uploadValue = 100;
          uploadTask.snapshot.ref.getDownloadURL().then(url => {
            this.fileURL = url; // URL of file nekk
            addFile(
              { name: this.file.name, size: this.file.size, url: this.fileURL, type: this.file.type },
              this.currentClassroom.id,
              this.message
            )
              .then(res => res.data)
              .then(data => {
                let newFile = data.data;
                this.$emit("uploaded", newFile);
              });
          });
        }
      );
    },
  },
  computed: {
    ...mapState({
      currentClassroom: state => state.Classroom.currentClassroom,
    }),
  },
};
</script>
<style scoped>
.dropZone {
  width: 100%;
  height: 200px;
  position: relative;
  border: 2px dashed gray;
}

.dropZone:hover {
  border: 2px solid #3f51b5;
}

.dropZone:hover .dropZone-title {
  color: #3f51b5;
}

.dropZone-info {
  color: gray;
  position: absolute;
  top: 50%;
  width: 100%;
  transform: translate(0, -50%);
  text-align: center;
}

.dropZone-title {
  color: gray;
}

.dropZone input {
  position: absolute;
  cursor: pointer;
  top: 0px;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
}

.dropZone-upload-limit-info {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
}

.dropZone-over {
  background: #5c5c5c;
  opacity: 0.8;
}

.dropZone-uploaded {
  width: 100%;
  height: 200px;
  position: relative;
  border: 2px dashed gray;
}

.dropZone-uploaded-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: gray;
  position: absolute;
  top: 50%;
  width: 100%;
  transform: translate(0, -50%);
  text-align: center;
}
</style>
