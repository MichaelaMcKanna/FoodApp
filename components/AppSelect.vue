<template>
  <div>
    <label :for="selection"
      >What {{ selection }} are you in the mood for?</label
    >
    <select @change="$emit('change', $event.target.value)" name="selection" :id="selection">
      <option value>--Please select a {{ selection }}</option>
      <option v-for="option in selectOptions" :key="option" :value="option">
        {{ option }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  props: {
    selection: {
      type: String,
      default: "cuisine",
    },
    selectOptions: {
      type: Array,
      default: () => ["tacos", "pizza", "dim sum"],
    },
  },
};
</script>

<style lang="scss" scoped></style>
