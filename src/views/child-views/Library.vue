<template>

<div class="list">
  <h3 style="padding: 2rem; text-align: center">Playlists</h3>
  <span class="addButton" @click="$router.push('/playlist/add')" style="position: absolute; top: 2rem; right: 1rem; padding: 1rem; transform: scale(1.25)">
    <fa icon="plus"></fa>
  </span>
  <div class="noPlaylist" v-if="$store.getters.myPlaylists.length == 0">
    <h2>No playlists here.</h2>
    <button @click="$router.push('/playlist/add')">Add your first playlist</button>
  </div>
  <div class="playlists" v-else>
    <div class="playlist" v-for="playlist,index in $store.getters.myPlaylists" @click="$store.commit('setCurrentPlaylistId',index); $router.push('/play')">
      <div class="title">
        <fa icon="list"></fa>&nbsp;&nbsp;&nbsp;
        <span>{{ playlist.title }}</span>
      </div>
      <div class="subtitle">{{ playlist.actions.length }} Action{{ playlist.actions.length > 1 ? 's' : '' }}</div>
      <hr>
    </div>

  </div>
</div>


</template>


<style lang="sass" scoped>

.list
  padding: 1rem 0rem
  flex-grow: 1
  display: flex
  flex-direction: column
  
.playlists
  width: 100%

.playlist:active
  background-color: rgba(white, 0.5)

.noPlaylist
  flex-grow: 1
  display: flex
  align-items: center
  justify-content: center
  flex-direction: column

.title
  padding-top: 1rem
  padding-left: 1rem
  width: 100%
  font-weight: bold

.subtitle
  padding-left: 1rem
  padding-bottom: 1rem
  font-size: 0.85rem
  margin-left: 2rem

button
  padding: 1rem 2rem
  border-radius: 2rem
  border: 0
  background-color: white
  font-weight: bolder
  margin-top: 1rem

hr
  height: 1px
  border: 0
  background-color: rgba(white, 0.3)





</style>

