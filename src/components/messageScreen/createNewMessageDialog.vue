<template>
  <v-dialog v-model="dialog" width="500">
    <template v-slot:activator="{ on, attrs }">
      <v-btn v-bind="attrs" v-on="on" depressed color="blue" dark>
        <v-icon left>mdi-pencil</v-icon>
        New Message
      </v-btn>
    </template>
    <v-card>
      <v-textarea
        v-model="newMessage"
        solo
        flat
        name="message-text-box"
        placeholder="Send a message..."
        id="message-text-box-input"
        rows="2"
        no-resize
        :background-color="isDark ? undefined : '#f5f5f5'"
      ></v-textarea>

      <v-card-actions>
        <v-btn text @click="onCancel">
          Cancel
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn color="primary" text @click="onAccept">
          OK
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      newMessage: "",
    };
  },
  methods: {
    onAccept() {
      // submit message
    },
    onCancel() {
      this.dialog = false;
    },
  },
  computed: {
    isDark() {
      return this.$vuetify.theme.dark;
    },
  },
};
</script>
