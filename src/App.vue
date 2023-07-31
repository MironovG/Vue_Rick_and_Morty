<template>
  <div class="app">
    <h1 class="top">Список персонажей</h1>
    <input v-model="searchName" class="search__input" type="text" placeholder="Search by name">
    <div class="characters">
      <div
        v-for="character in filteredCharacters"
        :key="character.id"
        class="container"
      >
        <div class="character__image">
          <img :src="character.image" alt="photo">
        </div>
        <div><h2>Имя: {{ character.name }}</h2></div>
        <div><h3>Разновидность: {{ character.species }}</h3></div>
        <div>
          <p>Эпизоды:<br/>
            <a class="episodes"
            v-for="episodeUrl in character.episode.slice(0, 5)"
            :key="episodeUrl"
            :href="episodeUrl">
              {{ getEpisodeNumber(episodeUrl) }}<br/>
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      characters: [],
      searchName: ''
    }
  },
  methods: {
    async getInfoAboutCharacter() {
      try {
        const response = await axios.get('https://rickandmortyapi.com/api/character');
        this.characters = response.data.results;
        console.log(response.data.results);
      } catch (error) {
        alert('Server problem')
      }
    },
    getEpisodeNumber(episodeUrl) {
      const parts = episodeUrl.split('/');
      return `Эпизод ${parts[parts.length - 1]}`;
    }
  },
  computed: {
    filteredCharacters() {
      return this.characters.filter(character => {
        return character.name.toLowerCase().includes(this.searchName.toLowerCase());
      });
    }
  },
  mounted() {
    this.getInfoAboutCharacter()
  }
}
</script>
<style>
body{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: #1f1f47;
}
.app{
  text-align: center;
}
.top{
  color: white;
  text-align: center;
}
.characters{
  display: flex;
  width: 1400px;
  margin: 0 auto;
  padding: 20px;
  flex-wrap: wrap;
 justify-content: center;
}
.container{
    background-color: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.18);
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    margin-right: 20px;
    margin-bottom: 20px;
    padding: 20px;
    text-align: center;
    width: 215px;
    height: 400px;
}
.container h2, h3, p{
  color: white;
}
.character__image img{
  max-width: 100px;
  max-height: 100px;
  border-radius: 50%;
}
.episodes{
  text-decoration: none;
  color: bisque;
}
.search__input {
  padding: 15px;
  text-align: center;
  border-radius: 20px;
  border: 3px solid rgba(255, 255, 255, 0.18);
}
</style>
