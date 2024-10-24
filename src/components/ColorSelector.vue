<template>
  <div class="color-selection">
    <h3>{{ title }}</h3>
    <div class="color-control">
      <span class="arrow" @click="prev">&#9664;</span>
      <span class="color-name">{{ colorList[colorIndex].name }}</span>
      <span class="arrow" @click="next">&#9654;</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    colorList: {
      type: Array,
      required: true,
    },
    modelValue: {
      type: Number,
      required: true,
    },
  },
  computed: {
    colorIndex: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit("update:modelValue", value);
      },
    },
  },
  methods: {
    next() {
      this.colorIndex = (this.colorIndex + 1) % this.colorList.length;
    },
    prev() {
      this.colorIndex =
        (this.colorIndex - 1 + this.colorList.length) % this.colorList.length;
    },
  },
};
</script>

<style src="../../public/assets/style.css"></style>
