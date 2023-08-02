import { defineStore } from 'pinia';
import axios from 'axios';

export const Store = defineStore('characters', {
  state: () => ({
    characters: [],
    episodes:[]
  }),
  actions: {
    async getInfoAboutCharacters() {
      try {
        const response = await axios.get('https://rickandmortyapi.com/api/character');
        this.characters = response.data.results;
      } catch (error) {
        console.error('Упс! Ошибка с сервером:', error);
      }
    },
    async getInfoAboutEpisodes(){
      try {
        const responseEpisode = await axios.get('https://rickandmortyapi.com/api/episode');
        this.episodes = responseEpisode.data.results;
        for (const episode of this.episodes) {
          await this.getCharactersForEpisode(episode);
        }
        console.log(this.episodes);
      } catch (error) {
        alert('Упс! Что-то пошло не так с эпизодами')
      }
    },
    async getCharactersForEpisode(episode) {
      try {
        const charactersData = await Promise.all(episode.characters.map((charUrl) => axios.get(charUrl)));
        episode.characterImage = charactersData.map((char) => char.data.image);
      } catch (error) {
        console.error('Ошибка при получении данных о персонажах:', error);
      }
    },
     
  }
  
});