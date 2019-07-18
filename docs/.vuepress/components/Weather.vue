<template lang="html">
  <div>
    <h3 v-show="showModal">{{selectedHistoryRow}}</h3>
   <vs-table
     max-items="10"
     pagination
     search 
     :data="controls">
    <template slot="header">
  <h3>{{profile.name}}</h3>
</template>
      <template slot="thead">
  <vs-th id="a">Title</vs-th>
  <vs-th id="b" sort-key="impact">Impact</vs-th>
</template>

      <template slot-scope="{data}">
  <vs-tr :key="indextr" v-for="(tr, indextr) in data">
    <vs-td id="b" :data="data[indextr].title">{{data[indextr].title}}</vs-td>

    <vs-td id="a" :data="data[indextr].impact">{{data[indextr].impact}}</vs-td>
    <template class="expand-user" slot="expand">
      <vs-list>
        <vs-tr id="a">{{data[indextr].desc}}</vs-tr>

        <vs-tr id="d" v-if="data[indextr].tags.nist !==undefined">{{data[indextr].tags.nist}}</vs-tr>
        <vs-tr id="d" v-if="data[indextr].tags.cci !==undefined">{{data[indextr].tags.cci}}</vs-tr>

        <vs-tr
          id="d"
          v-if="data[indextr].tags.severity !==undefined"
        >{{data[indextr].tags.severity}}</vs-tr>
        <vs-tr
          id="d"
          v-if="data[indextr].tags.cis_level !==undefined"
        >{{data[indextr].tags.cis_level}}</vs-tr>
        <vs-td>
          <prism language="ruby">{{data[indextr].code}}</prism>
        </vs-td>
      </vs-list>
    </template>
  </vs-tr>
</template>
 </vs-table>
  </div>
</template>

<script>
import "prismjs";
import Prism from "vue-prism-component";
import "prismjs/components/prism-ruby";
import "prismjs/themes/prism.css";
import inspec_profile from "../assets/sample.json";
import sharedData from "../observables/history.js";

export default {
  components: {
    Prism
  },
  computed: {
    controls() {
      return inspec_profile.controls;
    },
    profile() {
      return inspec_profile;
    },
    showModal() {
      return sharedData.showModal;
    },
    selectedHistoryRow() {
      return sharedData.selectedHistoryRow;
    }
  }
};
</script>
<style>
th#a {
  background-color: black;
  color: white;
  width: 30446666666888888999999px;
  font-size: 0.8em;
  letter-spacing: 3px;
  font-weight: bold;
}
th#b {
  background-color: black;
  color: white;
  width: 10px;
  font-size: 0.8em;
  letter-spacing: 3px;
  font-weight: bold;
}
tr {
  page-break-inside: avoid;
  font-size: 15px;
  line-height: 1.6;
  max-width: 100%;
  overflow: auto;
  display: block;
  word-wrap: break-word;
  text-align: left;
  scolor: black;
}
tr#a {
  cursor: pointer;
  display: grid;
  grid-template-columns: auto 6em;
  color: black;
}

td#a {
  color: black;
  text-alight: left;
  background: white;
}

td#b {
  color: black;
  width: 200%;
}
td#c {
  background: #444;
  color: white;
  padding: 1em;
  margin: 1em 0 8px 0;
  border: none;
  font-family: monospace;
}
tr#d {
  display: inline-block;
  background: #444;
  color: white;
  font-size: 0.7em;
  padding: 2px 10px 3px 10px;
  border-radius: 1em;
  margin: 1.5em 0;
}
</style>
