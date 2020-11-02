<template>
  <v-row>
    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-card>
        <v-toolbar dark color="primary" style="height: 80px">
          <v-toolbar-title style="margin-left: 230px; margin-top: 18px; font-size: 25px">File details</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon @click="dialog = false" style="margin-top: 18px">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar>
        <v-divider></v-divider>
        <v-card-text>
          <v-row>
            <v-col lg="10">
              <v-list-item two-line>
                <v-list-item-content>
                  <v-list-item-title>Lesson1.txt</v-list-item-title>
                  <v-list-item-subtitle>xx/xx/xxxx</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-col>
            <v-col lg="2">
              <v-btn color="blue lighten-1" style="color: white; margin-top: 12px"> View </v-btn>
            </v-col>
          </v-row>
          <v-divider></v-divider>
          <v-list two-line style="font-size: larger">
            <v-list-item v-for="item in items" :key="item.title">
              <v-row>
                <v-list-item two-line>
                  <v-list-item-content>
                    <v-list-item-subtitle v-text="item.title"></v-list-item-subtitle>
                    <span v-text="item.value"></span>
                  </v-list-item-content>
                </v-list-item>
              </v-row>
            </v-list-item>
          </v-list>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
export default {
  props: {
    value: Boolean,
  },
  data() {
    return {
      items: [
        {
          title: "MEESAGE",
          value: "Ahihi",
        },
        {
          title: "SHARED ON",
          value: "xx/xx/xxxx",
        },
        {
          title: "SHARED BY",
          value: "Pham Thi Dan",
        },
      ],
    };
  },
  computed: {
    dialog: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      },
    },
  },
};
</script>
<style scoped></style>
