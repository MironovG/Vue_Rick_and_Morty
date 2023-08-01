<template>
  <div class="characters">
      <div
        v-for="character in filteredCharacters"
        :key="character.id"
        class="container"
      >
        <div class="character__image">
          <img :src="character.image" alt=" photo">
        </div>
        <div>
            <router-link
            class="link-info"
          :to="{ name: 'CharacterInfo', params: { id: character.id} }">
          {{ character.name }}
        </router-link>
    </div>
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
</template>

<script>
export default {
    name:'Card',
props:{
    characters:{
        type: Array,
        required: true
    },
    searchName:{
        type: String,
        required: true
    },
    selectedStatus:{
        type: String,
        required: true
    },
    getEpisodeNumber: {
      type: Function,
      required: true
    }
},
computed: {
  filteredCharacters() {
    return this.characters.filter(character => {
      const nameSelected = character.name.toLowerCase().includes(this.searchName.toLowerCase());
      const statusCharacter = this.selectedStatus ? character.status === this.selectedStatus : true;
      return nameSelected && statusCharacter;
    });
  }
},
}
</script>

<style>
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
.link-info{
    color: white;
    text-decoration: none;
    font-size: 23px;
}
</style>