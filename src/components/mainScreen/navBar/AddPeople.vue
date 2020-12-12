<template>
  <v-dialog v-model="dialog" fullscreen>
    <template v-slot:activator="{ on, attrs }">
      <v-btn v-bind="attrs" v-on="on" style="margin-right: 10px" right color="info"> Add people</v-btn>
    </template>
    <v-card>
      <v-toolbar>
        <v-icon style="color: green; margin-right: 10px">mdi-account-multiple-plus</v-icon>
        <v-toolbar-title> Add People</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn @click="dialog = false"> Close </v-btn>
      </v-toolbar>
      <v-divider></v-divider>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12" lg="2">
              <v-list-item two-line style="margin-left: -15px">
                <v-list-item-avatar>
                  <v-img src="/assets/class_avatar/apple.svg"> </v-img>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title class="className">Class 1</v-list-item-title>
                  <v-list-item-subtitle>@{{ $route.params.code }}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-col>
            <v-col cols="12" lg="12">
              <template>
                <v-tabs v-model="tab">
                  <v-tab v-for="item in items" :key="item.tab">
                    {{ item.tab }}
                  </v-tab>
                </v-tabs>

                <br />
                <v-form @submit="xxx()">
                  <v-tabs-items v-model="tab">
                    <v-tab-item v-for="item in items" :key="item.tab">
                      <v-card flat>
                        <v-app-bar dense flat elevate-on-scroll style="font-weight: bold; margn-bottom: 10px">
                          <v-row>
                            <v-col class="sttHeader" cols="1" lg="1"> STT </v-col>
                            <v-col cols="5" lg="5"> Name </v-col>
                            <v-col cols="5" lg="5"> Email </v-col>
                            <v-col cols="1" lg="1"> Action </v-col>
                          </v-row>
                        </v-app-bar>
                        <v-sheet class="overflow-y-auto" max-height="400">
                          <v-container style="height: 500px">
                            <!-- Thay students = {{ item.value }} ???-->
                            <div v-for="(person, i) in students" :key="i">
                              <v-row style="">
                                <v-col class="stt" cols="1" lg="1">
                                  {{ person.stt }}
                                </v-col>
                                <v-col cols="5" lg="5">
                                  <v-text-field dense :label="person.name" v-model="person.nameValue"> </v-text-field>
                                </v-col>

                                <v-col cols="5" lg="5">
                                  <v-text-field dense :label="person.email" v-model="person.emailValue"> </v-text-field>
                                </v-col>
                                <v-col style="margin-left: 5px" cols="1" lg="1">
                                  <v-row>
                                    <v-icon large @click="add" color="primary">mdi-plus-circle</v-icon>
                                    <v-icon large @click="remove()" color="red">mdi-minus-circle</v-icon>
                                  </v-row>
                                </v-col>
                              </v-row>
                            </div>
                          </v-container>
                        </v-sheet>
                      </v-card>
                    </v-tab-item>
                  </v-tabs-items>
                  <br /><br />
                  <v-btn color="primary" @click="xxx()"> Add People </v-btn>
                </v-form>
              </template>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  data() {
    return {
      dialog: false,
      tab: null,
      items: [
        { tab: "Students", value: "students" },
        { tab: "Parents", value: "parents" },
        { tab: "Teachers", value: "teachers" },
      ],
      students: [{ stt: 1, name: "Name", nameValue: "", email: "Email", emailValue: "" }],
      parents: [{ stt: 1, name: "Name", nameValue: "", email: "Email", emailValue: "" }],
      teachers: [{ stt: 1, name: "Name", nameValue: "", email: "Email", emailValue: "" }],
    };
  },
  methods: {
    add() {
      this.students.push({
        stt: this.students.length + 1,
        name: "Name",
        nameValue: "",
        email: "Email",
        emailValue: "",
      });
    },
    remove() {
      if (this.students.length > 1) {
        let last = this.students.length - 1;
        this.students.splice(last, 1);
      }
    },
  },
};
</script>
<style scoped>
.joinClass {
  color: #2196f3;
  width: 200px;
  padding-left: 18px;
  margin-left: 12px;
}

.iconAdd {
  color: #2196f3;
  margin-right: 7px;
  margin-bottom: 2px;
}

.sttHeader {
  margin-right: -35px;
}

.stt {
  font-size: 20px;
  margin-top: 10px;
  margin-right: -30px;
  padding-left: 25px;
}
</style>
