<template>
  <div id="app">
    <nav class="navigation">
      <ul>
        <li><button @click="currentComponent = 'CakeSection'">Main</button></li>
        <li><button @click="currentComponent = 'SekciaZmena'">Zmeny</button></li>
      </ul>
    </nav>
    <component :is="currentComponent" />
  </div>
</template>

<script>
import CakeSection from './CakeSection.vue';
import SekciaZmena from './components/SekciaZmena.vue';

export default {
  data() {
    return {
      currentComponent: 'CakeSection',
    };
  },
  components: {
    CakeSection,
    SekciaZmena,
  },
};
</script>

<style>
.navigation {
  background-color: #f4ebdc;
  padding: 10px;
  border-bottom: 2px solid #ffc2d1;
  margin-bottom: 20px;
}

.navigation ul {
  list-style: none;
  display: flex;
  gap: 20px;
  padding: 0;
  margin: 0;
}

.navigation button {
  background: none;
  border: none;
  color: #7b020b;
  font-weight: bold;
  cursor: pointer;
  padding: 0;
}

.navigation button:hover {
  color: #c63658;
}
</style>
