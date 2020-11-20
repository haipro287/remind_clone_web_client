<template>
  <v-autocomplete
    v-model="selected"
    :items="options"
    solo
    chips
    label="Select"
    :item-text="itemText"
    :item-value="itemValue"
    multiple
    deletable-chips
  >
  </v-autocomplete>
</template>

<script>
export default {
  name: "UserSearchBox",
  props: {
    options: {
      type: Array,
      required: true,
    },
    itemText: {
      type: String,
    },
    itemValue: {
      type: String,
    },
  },
  data() {
    return { selected: [] };
  },
};
</script>
