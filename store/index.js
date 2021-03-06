export const state = () => ({
  fooddata: [],
});

// export const getters = {
//   getterValue: state => {
//     return state.value
//   }
// }
//mutations change state syncronously
export const mutations = {
  updateFoodData: (state, data) => {
    state.fooddata = data;
  },
};
//actions are good for asyncronous logic and calling mutations that then update the state
export const actions = {
  async getFoodData({ state, commit }) {
    if (state.fooddata.length) return;
    try {
      await fetch(
        "https://dva9vm8f1h.execute-api.us-east-2.amazonaws.com/production/restaurants",
        {
          headers: {
            "Content-Type": "application/json",
            "x-api-key": process.env.AWS_API_KEY,
          },
        }
        //turn the returned object in json data
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          commit("updateFoodData", data);
        });
    } catch (error) {
      console.log(error);
    }
  },
};
