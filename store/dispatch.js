export default {
  async fetch({ store, params }) {
    await store.dispatch("GET_STARS");
  }
};
