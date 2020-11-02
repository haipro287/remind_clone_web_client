<template>
  <v-container class="mx-0 ml-5">
    <v-card class="pa-4" elevation="1">
      <v-card-title style="margin-bottom: -20px">Information </v-card-title>
      <v-list two-line>
        <v-list-item v-for="item in items" :key="item.title">
          <v-row>
            <v-list-item two-line>
              <v-list-item-content>
                <v-list-item-title v-text="item.title"></v-list-item-title>
                <v-list-item-subtitle
                  v-text="item.value"
                ></v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-row>
        </v-list-item>
      </v-list>
      <v-card-actions></v-card-actions>
    </v-card>
    <v-card class="mt-3 pa-4" elevation="1">
      <v-card-title></v-card-title>
      <v-btn style="margin-left: 15px" outlined color="error">
        Leave class
      </v-btn>
      <v-subheader
        >You will no longer receive announcements from Web
        Development.</v-subheader
      >
      <v-card-actions></v-card-actions>
    </v-card>
    <v-card class="mt-3 pa-4" elevation="1">
      <v-list max-width="500px">
        <v-card-title>Class owners</v-card-title>
        <v-card-subtitle
          >Class owners can send announcements and individual messages to
          participants.</v-card-subtitle
        >
        <v-list-item
          v-for="owner in owners"
          :key="owner.name"
          @click.stop="abc"
        >
          <v-list-item-avatar>
            <v-img
              src="https://randomuser.me/api/portraits/women/81.jpg"
              alt="avatar"
            ></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title v-text="owner.name"></v-list-item-title>
          </v-list-item-content>

          <v-list-item-action>
            <v-btn icon>
              <v-icon color="blue lighten-1">mdi-send</v-icon>
            </v-btn>
          </v-list-item-action>
        </v-list-item>
      </v-list>
      <v-card-actions></v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          title: "Class Name",
          value: "Class 1",
        },
        {
          title: "Class Code",
          value: "@454kgf4",
        },
        {
          title: "School",
          value: "Not affiliated with a school",
        },
      ],
      owners: [
        {
          name: "Lai Tuan Anh",
          avatar: "",
        },
      ],
    };
  },
  methods: {},
};
</script>

<style scoped></style>
