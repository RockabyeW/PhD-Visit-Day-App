<template>
    <b-card :title="name" class="event-card">
        <b-list-group flush>
          <b-list-group-item>Time: {{ time }}</b-list-group-item>
          <b-list-group-item>Location: {{ location }}</b-list-group-item>
        </b-list-group>
      </b-card>




</template>

<script setup>
import { routeLocationKey } from 'vue-router';

defineProps({
  location: {
    type: String,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  nav: {
    type: String,
    required: false
  }
});
</script>

<style scoped>


.event-card {
  box-shadow: 0 4px 8px 0 rgba(115, 49, 49, 0.2);
  transition: 0.3s;
  min-width: 200px;
  width: 100%;
  border: 1px brown solid;
  color: brown;
}

.event-card:hover {
  box-shadow: 0 8px 16px 0 rgba(115, 49, 49, 0.2);
}


</style>
