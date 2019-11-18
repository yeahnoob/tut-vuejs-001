<template>
  <v-container fluid>
    <v-row
      align="start"
      justify="center"
      class="primary"
      style="height: 720px;"
    >
      <v-col>
        <v-container>
          <v-jsoneditor
            v-model="pageFilterA"
            :options="options"
            :plus="false"
            height="650px"
            @error="onError"
          />
          <v-pagination
            v-model="pageA"
            :length="15"
            :total-visible="7"
            color="#0091ea"
          />
        </v-container>
      </v-col>
      <v-col>
        <v-container>
          <v-jsoneditor
            v-model="jsonB"
            :options="options"
            :plus="false"
            height="650px"
            @error="onError"
          />
          <v-pagination
            v-model="pageB"
            :length="15"
            :total-visible="7"
            color="#0091ea"
          />
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import VJsoneditor from "v-jsoneditor";

export default {
  name: "fixer",
  components: {
    VJsoneditor
  },
  data: () => ({
    options: { modes: ["tree", "code"] },
    pageA: 1,
    pageB: 1,
    jsonA: [
      {
        id: "001",
        info: "hello vue from 001",
        page: "1"
      },
      {
        id: "002",
        info: "hello vue from 002",
        page: "1"
      },
      {
        id: "003",
        info: "hello vue from 003",
        page: "2"
      },
      {
        id: "004",
        info: "hello vue from 004",
        page: "2"
      }
    ],
    jsonB: [
      {
        id: "001",
        info: "hello vue from json B",
        page: "1"
      }
    ]
  }),
  computed: {
    pageFilterA: function() {
      return this.jsonA.filter(
        x => x.hasOwnProperty("page") && Number(x.page) === this.pageA
      );
    },
    pageFilterB: function() {
      return this.jsonB.filter(
        x => x.hasOwnProperty("page") && Number(x.page) === 1
      );
    }
  },
  methods: {
    onError() {
      alert("error"); // Error message box popout
    }
  }
};
</script>

<style scoped></style>
