import axios from "axios";
//NOTE:::: index.js split it into modules
//state.js
//mutation.js
//eg. action.js

/*export const state = () => ({
  counter: 0
});

export const mutations = {
  increment(state) {
    state.counter++;
  }
};
*/

export const actions = {
  async GET_STARS({ commit }) {
    let data = await axios
      .get("https://www.mocky.io/v2/5185415ba171ea3a00704eed", {
        headers: {
          "content-type": "application/json",
          "Access-Control-Allow-Origin": "*"
        }
      })
      .then(function(response) {
        commit("SET_STARS", response);
      })
      .catch(function(error) {
        commit("SET_STARS", error);
      });
  }
};
