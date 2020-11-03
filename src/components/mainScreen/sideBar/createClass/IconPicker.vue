<template>
  <v-dialog v-model="show" persistent max-width="600px">
    <v-card>
      <v-toolbar dark color="primary" style="height: 80px">
        <v-toolbar-title style="margin-left: 210px; margin-top: 18px; font-size: 25px">Select a icon</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon text @click="show = false" style="margin-top: 18px">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>
      <v-layout style="margin-left: 8px" row wrap v-if="avatars">
        <v-flex v-for="avatar in avatars" :key="avatar.id" xs4 sm3 d-flex>
          <v-card tile flat class="d-flex">
            <v-card-text class="d-flex">
              <v-avatar
                size="100"
                @click="selectAvatar(avatar)"
                class="avatar-picker-avatar"
                :class="{ current: avatar.id === currentAvatar }"
              >
                <v-img :src="'/assets/class_avatar/' + avatar.path"></v-img>
              </v-avatar>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    currentAvatar: {
      type: String,
      required: true,
    },
    value: Boolean,
  },
  async mounted() {
    await this.$store.dispatch("fetchAvatars");
  },
  computed: {
    avatars() {
      let avatars = {};
      let files = require.context("../../../../../public/assets/class_avatar", true, /\.svg$/i);
      files.keys().map(key => {
        let id = key
          .split("/")
          .pop()
          .split(".")[0]
          .toUpperCase();
        console.log(id);
        avatars[id] = {
          path: key.split("/").pop(),
          id: id,
        };
      });
      return avatars;
    },
    show: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      },
    },
  },
  methods: {
    selectAvatar(avatar) {
      this.$emit("selected", avatar.id);
      this.show = false;
    },
  },
};
</script>
<style scoped>
.avatar-picker-avatar {
  transition: all 0.1s ease-in-out;
}
</style>
