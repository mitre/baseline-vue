<template>
  <div>
    <button
      @click="reroute; sharedData.selectedHistoryRow = this.route; sharedData.showModal = true;"
      class="button"
    >
      <slot></slot>
    </button>
  </div>
</template>

<script>
import sharedData from "../observables/history.js";

export default {
  data: () => ({ sharedData }),
  props: {
    name: {
      type: String,
      required: true
    },
    route: String
  },
  methods: {
    reroute(event) {
      if (this.route == null) {
        this.$router.push("/applications/");
        alert(
          "The specific route hasn't been found. You will be redirected to a list of the baselines."
        );
      } else {
        this.$router.push("/applications/" + this.route);
      }
    }
  }
};
</script>

<style scoped>
.button {
  background-color: #3377ff; /* Blue background */
  border: 1px solid blue; /* Blue border */
  color: white; /* White text */
  padding: 20px 20px; /* Some padding */
  cursor: pointer; /* Pointer/hand icon */
  font-size: 16px;
  display: inline-block;
  height: 75px;
}
.button:not(:last-child) {
  border-right: none; /* Prevent double borders */
}
/* Add a background color on hover */
.button:hover {
  background-color: #0044cc;
}
</style>