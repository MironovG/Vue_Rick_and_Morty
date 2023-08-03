<template>
    <div class="characters">
      <div v-for="episode in episodes" :key="episode.id" class="container__episode">
        <div class="episodes__container">
          <router-link v-for="characterUrl in episode.characters" :key="characterUrl" :to="getCharacterPath(characterUrl)">
            <img :src="getCharacterImage(characterUrl)" :alt="getCharacterName(characterUrl)" class="episode__image">
          </router-link>
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
    name: 'Episodes',
    computed: {
      episodes() {
        return Store().episodes;
      },
    },
    methods: {
      getCharacterPath(characterUrl) {
        const characterId = characterUrl.split('/').pop();
        return { name: 'CharacterInfo', params: { id: characterId } };
      },
      getCharacterImage(characterUrl) {
        const characterId = characterUrl.split('/').pop();
        const character = Store().characters.find(char => char.id == characterId);
        return character ? character.image : '';
      },
      getCharacterName(characterUrl) {
        const characterId = characterUrl.split('/').pop();
        const character = Store().characters.find(char => char.id == characterId);
        return character ? character.name : '';
      },
    },
    created() {
      Store().getInfoAboutEpisodes();
    },
  };
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
    width: 400px;
    height: 300px;
  }
  .episode__image {
    max-width: 50px;
    max-height: 50px;
    border-radius: 50%;
    margin-left: 10px;
    cursor: pointer;
  }
  .episode__image:hover{
    max-width: 80px;
    max-height: 80px;
    transition: 0.5s;
  }
  .episodes__container {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 20px;
  }
  .episode__date {
    color: white;
    font-size: 20px;
  }
  </style>
  
