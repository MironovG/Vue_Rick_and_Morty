<template>
  <h1 class="top">Список персонажей</h1>
   <input v-model="searchName" class="search__input" type="text" placeholder="Search by name">
   <select v-model="selectedStatus" class="filter__status">
 <option value="">All</option>
 <option value="Alive">Alive</option>
 <option value="Dead">Dead</option>
 <option value="unknown">Unknown</option>
</select>
   <character-card 
   v-bind:characters="characters" 
   v-bind:searchName="searchName" 
   v-bind:selectedStatus="selectedStatus"
   v-bind:getEpisodeNumber="getEpisodeNumber"/>
  
</template>

<script>
import CharacterCard from '@/components/CharacterCard.vue';
import { Store } from '@/store/characterStore.js';

export default {
 components: { CharacterCard, },
 name:'Main',
 data() {
   return {
     searchName: '',
     selectedStatus: ''
   }
 },
 computed: {
   characters() {
     return Store().characters;
   },
 },
 created() {
   Store().getInfoAboutCharacters();
 },
 methods: {
   getEpisodeNumber(episodeUrl) {
     const parts = episodeUrl.split('/');
     return `Эпизод ${parts[parts.length - 1]}`;
   }
 },
 
}
</script>
<style>


.top{
 color: white;
 text-align: center;
}

.search__input {
 padding: 10px;
 text-align: center;
 border-radius: 20px;
 border: 3px solid rgba(255, 255, 255, 0.18);
}
.search__input:focus {
 outline: none;
}
.filter__status{
 margin-left: 20px;
 padding: 10px;
 border-radius: 20px;
 border: 3px solid rgba(255, 255, 255, 0.18);
}
.filter__status:focus{
 outline: none;
}

</style>