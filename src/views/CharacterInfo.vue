<template>
    <div class="characters">
      <div class="container">
        <div class="character__image">
          <img src=" " alt="photo">
        </div>
        <div><h2>Имя: {{ }}</h2></div>
        <div><h3>Разновидность: {{ }}</h3></div>
        <div><p>Пол: {{ }}</p></div>
        <div><p>Статус: {{ }}</p></div>
      </div>
    </div>
  </template>
  
  <script>
  
  export default {
  name:'CharacterInfo',
  props:{
    character: {
      type: Object,
      required: true
    },
  },
  computed: {
      characterId() {
        console.log(this.$route.params.id);
        return this.$route.params.id;
      }
    }
  };
  </script>
  
  <style>
  
  </style>