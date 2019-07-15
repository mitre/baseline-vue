<template>
  <div>
    <BaseRow v-for="section in sections" :section="section" :baselines="baselines"></BaseRow>
  </div>
</template>

<script>
import BaseRow from '../.vuepress/components/BaseRow.vue';
import EventService from '../services/EventService.js';

export default {
  components: {
    BaseRow
  },
  data() {
    return {
      sections: [],
      baselines: []
    }
  },
  created() {
    EventService.getSections()
      .then(response => {
        this.sections = response.data
      })
      .catch(error => {
        console.log('There was an error:', error.response)
      })
    EventService.getBaselines()
      .then(response => {
        this.baselines = response.data
      })
      .catch(error => {
        console.log('There was an error:', error.response)
      })
  },
};
</script>

<style scoped>
table {
  border: 1px solid #CCC;
  border-collapse: collapse;
}
</style>
