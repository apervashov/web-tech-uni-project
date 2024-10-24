<template>
  <div id="app">
    <h1>Choose your cake</h1>
    <div class="main">
      <form @submit.prevent="submitForm">
        <div class="form-section">
          <label>
            Choose type of event:
            <select v-model="selectedEvent">
              <option value="birthday">Birthday</option>
              <option value="anniversary">Anniversary</option>
            </select>
          </label>
          <label for="age">Age:</label>
          <input
            type="number"
            id="age"
            name="age"
            min="0"
            max="120"
            v-model="age"
            required
          />
        </div>
        <div class="color_select">
          <ColorSelector
            title="Choose cake color"
            :colorList="cakeColors"
            v-model="cakeColorIndex"
          />

          <ColorSelector
            title="Choose cream color"
            :colorList="creamColors"
            v-model="creamColorIndex"
          />
        </div>
        <div class="button_container">
          <button type="submit" class="continue-button">Continue</button>
        </div>
      </form>

      <CakePreview :creamColor="creamColor" :boxShadowStyle="boxShadowStyle" />
    </div>
  </div>
</template>

<script>
import ColorSelector from "./components/ColorSelector.vue";
import CakePreview from "./components/CakePreview.vue";

export default {
  components: {
    ColorSelector,
    CakePreview,
  },
  data() {
    return {
      selectedEvent: "birthday",
      cakeColors: [
        { name: "Pink", color: "#ff8fab", darker: "#ff3399" },
        { name: "Blue", color: "#4d9ae8", darker: "#2923d9" },
        { name: "Yellow", color: "#f0cd5b", darker: "#deab07" },
        { name: "Green", color: "#7be0a4", darker: "#23db6d" },
      ],
      creamColors: [
        { name: "Pink", color: "#ffc2d1" },
        { name: "Beige", color: "#f0e4d0" },
        { name: "Violet", color: "#e9abff" },
      ],
      cakeColorIndex: 0,
      creamColorIndex: 0,
    };
  },
  computed: {
    cakeColor() {
      return this.cakeColors[this.cakeColorIndex].color;
    },
    creamColor() {
      return this.creamColors[this.creamColorIndex].color;
    },
    boxShadowStyle() {
      const { color, darker } = this.cakeColors[this.cakeColorIndex];
      return `0 2px 0px ${darker}, 0 4px 0px ${color}, 0 6px 0px ${color},
              0 8px 0px ${color}, 0 10px 0px ${color}, 0 12px 0px ${color},
              0 14px 0px ${color}, 0 16px 0px ${color}, 0 18px 0px ${color},
              0 20px 0px ${color}, 0 22px 0px ${color}, 0 24px 0px ${color},
              0 26px 0px ${color}, 0 28px 0px ${color}, 0 30px 0px ${color}`;
    },
  },
  methods: {
    submitForm() {
      console.log("Form submitted");
      const url = `/candle-page.html?event=${
        this.selectedEvent
      }&cakeColor=${encodeURIComponent(
        this.cakeColors[this.cakeColorIndex].color
      )}&creamColor=${encodeURIComponent(
        this.creamColor
      )}&darker=${encodeURIComponent(
        this.cakeColors[this.cakeColorIndex].darker
      )}&age=${this.age}`;
      window.open(url, "_self");
    },
  },
};
</script>

<style src="../public/assets/style.css"></style>
