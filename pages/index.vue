<template>
  <main class="container">
    <AppHeader />
    <AppRestaurantInfo :datasource="fooddata" />
  </main>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "IndexPage",
  components: {},
  computed: {
    ...mapState(["fooddata"]),
  },
};
</script>
