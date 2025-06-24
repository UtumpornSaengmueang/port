<template>
  <header>
    <!-- <img alt="Vue logo" class="logo" src="./assets/Profile.jpg" width="150" height="200" /> -->
  </header>

  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      I am a recent graduate from Mae Fah Luang University with a degree in Software Engineering.
      <!-- <a href="https://vite.dev/" target="_blank" rel="noopener">Utumporn</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>. -->
    </h3>
  </div>
</template>

<script setup>
defineProps({
  msg: {
    type: String,
    required: true,
  },
})
</script>

<style scoped>
h1 {
  font-weight: normal;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.5rem;
  font-weight: lighter;
  color: white;
  white-space: wrap; /* ไม่ให้ขึ้นบรรทัดใหม่ */
  /* overflow-x: auto;  */
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: center;
  }
}
/* /// */
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0rem 0rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 10);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}

</style>
