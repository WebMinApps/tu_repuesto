<template>
  <div class="home">
    <app-askform />
    <app-brief />
  </div>
</template>

<script>
import askform from '@/components/static/askform.vue';
import brief from '@/components/static/brief.vue';

export default {
  components: {
    'app-askform': askform,
    'app-brief': brief
  }
};
</script>
