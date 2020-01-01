<template>
  <div class="home">asdasdads
    <app-askform></app-askform>
    <app-brief></app-brief>
  </div>
</template>

<script>
import askform from '@/components/shared/static/askform.vue';
import brief from '@/components/shared/static/brief.vue';

export default {
    components: {
        'app-askform': askform,
        'app-brief': brief
    }
};
</script>
