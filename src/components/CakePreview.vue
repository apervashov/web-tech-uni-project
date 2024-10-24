<template>
  <div class="cake">
    <div class="plate"></div>
    <div
      class="layer layer-bottom"
      :style="{ backgroundColor: creamColor, boxShadow: boxShadowStyle }"
    ></div>
    <div
      class="layer layer-middle"
      :style="{ backgroundColor: creamColor, boxShadow: boxShadowStyle }"
    ></div>
    <div
      class="layer layer-top"
      :style="{ backgroundColor: creamColor, boxShadow: boxShadowStyle }"
    ></div>
    <div class="icing" :style="{ backgroundColor: creamColor }"></div>
    <div class="drip drip1"></div>
    <div class="drip drip2"></div>
    <div class="drip drip3"></div>
  </div>
</template>

<script>
export default {
  props: {
    creamColor: {
      type: String,
      required: true,
    },
    boxShadowStyle: {
      type: String,
      required: true,
    },
  },
};
</script>
<style src="../../public/assets/style.css"></style>
