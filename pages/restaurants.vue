<template>
  <main class="container restaurant">
    <div class="restaurantheading">
      <h1>Restaurants</h1>
      <AppSelect @change="selectedRestaurant = $event" />
    </div>
    <AppRestaurantInfo :datasource="filterRestaurants" />
  </main>
</template>

<script>
import { mapState } from "vuex";
import AppSelect from "../components/AppSelect.vue";
import AppRestaurantInfo from "../components/AppRestaurantInfo.vue";
export default {
  components: { AppRestaurantInfo, AppSelect },
  data() {
    return {
      selectedRestaurant: "",
    };
  },
  computed: {
    ...mapState(["fooddata"]),
    filterRestaurants() {
      if (this.selectedRestaurant) {
        return this.fooddata.filter((el) => {
          let name = el.name.toLowerCase();
          return name.includes(this.selectedRestaurant);
        });
      }
      return this.fooddata;
    },
  },
};
</script>

<style lang="scss" scoped></style>
