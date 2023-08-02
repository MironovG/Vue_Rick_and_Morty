<template>
  <div class="characters">
    <div 
    v-for="item in select"
    :key="item.id"
    class="container">
       <div class="character__image">
        <img :src="item.image" alt="photo">
      </div>
      <div><h2>Имя: {{ item.name }}</h2></div>
      <div><h3>Разновидность: {{ item.species }}</h3></div>
      <div><p>Пол: {{ item.gender }}</p></div>
      <div><p>Статус: {{ item.status }}</p></div>
      <div><p>Локация: {{ item.location.name }}</p></div>
    </div>
  </div>
</template>

<script>
import { Store } from '@/store/characterStore.js';
export default {
  name: 'CharacterInfo',
  
  computed: {
    characters() {
      return Store().characters;
    },
    select(){
   return Store().characters.filter(char => char.id == this.$route.params.id);
    }
  },

  created() {
   Store().getInfoAboutCharacters();
  },
  
};
</script>
<style>

</style>