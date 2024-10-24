<!-- src/components/SekciaZmena.vue -->
<template>
  <section id="sekcia_zmena" class="zmena-section">
    <h2>Zmeny a Vylepšenia</h2>
    
    <div class="zmena-category">
      <h3>UI/UX Vylepšenia</h3>
      <ul>
        <li v-for="(item, index) in uiUxChanges" :key="index">
          <span :class="{'completed': item.completed, 'planned': !item.completed}">
            {{ item.description }}
          </span>
        </li>
      </ul>
    </div>
    
    <div class="zmena-category">
      <h3>Prístupnosť (Accessibility)</h3>
      <ul>
        <li v-for="(item, index) in accessibilityChanges" :key="index">
          <span :class="{'completed': item.completed, 'planned': !item.completed}">
            {{ item.description }}
          </span>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: "SekciaZmena",
  data() {
    return {
      uiUxChanges: [
        {
          description: "Implementácia responsívneho dizajnu pomocou mediálnych dopytov (mediázapytov)",
          completed: true,
        },
        {
          description: "Pridanie spätného potvrdenia po odoslaní formulára",
          completed: false, // Naplánované
        },
        {
          description: "Optimalizácia farebnej palety pre lepší kontrast",
          completed: true,
        },
        {
          description: "Vylepšenie navigačného menu pre intuitívnejšie používanie",
          completed: false, // Naplánované
        },
        // Добавьте дополнительные пункты по необходимости
      ],
      accessibilityChanges: [
        {
          description: "Pridanie `aria` atribútov pre zlepšenie kompatibility so screenreadermi",
          completed: true,
        },
        {
          description: "Zabezpečenie podpory klávesnicovej navigácie pre všetky interaktívne prvky",
          completed: true,
        },
        {
          description: "Pridanie alternatívneho textu (`alt` atribútov) pre dekoratívne obrázky",
          completed: false, // Naplánované
        },
        {
          description: "Zvýšenie veľkosti textu a podpora škálovania bez straty kvality dizajnu",
          completed: true,
        },
      ],
    };
  },
};
</script>

<style scoped>
.zmena-section {
  padding: 40px 20px;
  background-color: #f9f9f9;
}

.zmena-section h2 {
  text-align: center;
  margin-bottom: 30px;
  color: #c63658;
}

.zmena-category {
  margin-bottom: 20px;
}

.zmena-category h3 {
  color: #7b020b;
  margin-bottom: 10px;
}

.zmena-category ul {
  list-style-type: disc;
  padding-left: 20px;
}

.zmena-category li {
  margin-bottom: 8px;
}

.completed {
  color: green;
}

.planned {
  color: orange;
  font-style: italic;
}
</style>
