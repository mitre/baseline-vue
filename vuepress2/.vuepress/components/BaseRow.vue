<template>
  <div>
    <h3>{{section}}</h3>
    <div class="box">
      <BaseButton
        v-for="baseline in baselines"
        v-if="isInSection(baseline)"
        :name="baseline.name"
        :route="baseline.route"
      >{{baseline.name}}</BaseButton>
    </div>
  </div>
</template>

<script>
import BaseButton from "./BaseButton.vue";

export default {
  components: {
    BaseButton
  },
  props: {
    section: {
      type: String,
      required: true
    },
    baselines: {
      type: Array,
      required: true
    }
  },
  methods: {
    isInSection(baseline) {
      return baseline.sections.includes(this.section);
    }
  }
};
</script>

<style scoped>
th,
td {
  text-align: center;
  vertical-align: middle;
  border: none;
}
.box {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>