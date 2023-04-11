<template>
  <section>
    <h2>Select a Topic</h2>
    <!-- <knowledge-grid :topics="topics" @select-topic="$emit('select-topic', $event)"></knowledge-grid> -->
    <!-- <knowledge-grid @select-topic="$emit('select-topic', $event)"></knowledge-grid> -->
    <knowledge-grid></knowledge-grid>
    <!-- :topics="topics" we feed the topics array from the :topics props from knowledge grid-->
    <!-- this is emit as knowledge-grid select topics -->
  </section>
</template>

<script>
export default {
  // props: ['topics'],
  emits: ['select-topic'],
};
</script>