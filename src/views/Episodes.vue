<template>
  <div class="characters">
      <div
        v-for="episode in episodes"
        :key="episode.id"
        class="container__episode"
      >
      <div class="episodes__container">
        <div v-for="image in episode.characterImage" :key="image">
        <img :src="image" alt="photo" class="episode__image">
      </div>
      </div>
        <div class="episode__date">{{ episode.air_date }}</div>
        <div><h3>Эпизод: {{ episode.episode }}</h3></div>
        <div>
          <p>Дата создания: {{ episode.created }} </p>
        </div>
      </div>
    </div>
</template>

<script>
import { Store } from '@/store/characterStore.js';
export default {
    name:'Episodes',
computed:{
    episodes(){
        return Store().episodes;
    }
},
created(){
    Store().getInfoAboutEpisodes();
}
}
</script>

<style>
.container__episode{
    background-color: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.18);
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    margin-right: 20px;
    margin-bottom: 20px;
    padding: 10px;
    text-align: center;
    width: 420px;
    height: 700px;
}
.episode__image{
max-width: 50px;
  max-height: 50px;
  border-radius: 50%;
  margin-left: 10px;
}
.episodes__container{
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 20px;
    
}
.episode__date{
    color: white;
    font-size: 20px;
}
</style>