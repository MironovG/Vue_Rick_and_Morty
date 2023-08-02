import { defineStore } from 'pinia';
import axios from 'axios';

export const Store = defineStore('characters', {
  state: () => ({
    characters: []
  }),
  actions: {
    async getInfoAboutCharacters() {
      try {
        const response = await axios.get('https://rickandmortyapi.com/api/character');
        this.characters = response.data.results;
        console.log(this.characters);
      } catch (error) {
        console.error('Упс! Ошибка с сервером:', error);
      }
    },
     
  }
  
});