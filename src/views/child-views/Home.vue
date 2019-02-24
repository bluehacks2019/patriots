<template>
<div class="home">
  <h3 style="padding: 2rem; text-align: center">Discover</h3>
  <div class="people">
    <div class="person" @click="$router.push('/people/' + person.id )" v-for="person in $store.state.people">
      <div class="photo" :style="{backgroundImage: 'url(' + person.playlist.photo_url +')'}">
      </div>
      <div class="name">{{person.name}}</div>
      <button class="followButton">Follow</button>
    </div>
  </div>
</div>
</template>

<style lang="sass" scoped>
.home
  padding: 1rem
  padding-bottom: 5rem
  overflow-y: auto

.people
  display: grid
  grid-template-columns: repeat( auto-fit, calc(100% / 2))
  grid-gap: 2rem 0rem
  margin-top: 
  

.person
  display: flex
  flex-direction: column
  align-items: center
.photo
  width: 7rem
  height: 7rem
  display: inline-block
  background-color: rgba(white, 0.5)
  border-radius: 50%
  background-size: cover
.name
  margin: 0.25rem

.followButton
  padding: 0.25rem 1rem
  border-radius: 1rem
  border: 1px solid white
  background-color: transparent
  color: white
</style>