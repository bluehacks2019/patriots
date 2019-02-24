<template>
  <div class="index" :style="gradient">
    <div class="child-container">
      <transition name="fade" appear mode="out-in">
        <router-view/>
      </transition>
    </div>
    <transition name="slidev">
      <player v-if="$store.state.action_player.playing_status == 'PLAYING' || $route.path == '/play'"></player>
    </transition>
    <nav class="index-nav">
      <router-link to="/" :class="{'active' : $route.path == '/'}">
        <fa icon="home"></fa>
        <span>Home</span>
      </router-link>
      
      <a class="play" @click="$store.getters.myPlaylists.length == 0 ? $router.push('/playlist/add') : $router.push('/play'); $store.getters.myPlaylists.length == 0 ? '' : $store.commit('togglePlayingStatus')">
        <transition name="zoom" mode="out-in">
          <fa key=1 v-if="$store.state.action_player.playing_status=='PLAYING'" icon="pause"></fa>
          <fa key=2 v-else icon="play"></fa>
        </transition>
      </a>
      <router-link to="library" :class="{'active' : $route.path == '/library'}">
        <fa icon="list"></fa>
        <span>Library</span>
      </router-link>
    </nav>
  </div>
</template>

<script>
import Player from '../components/player.vue'
export default {
  components: {
    'player': Player
  },
  computed: {
    gradient(){
      if(this.$route.path=='/'){
        return {
          background: 'linear-gradient(to bottom left,#efbad3, #a254f2)'
        }
      }
      if(this.$route.path=='/library'){
        return {
          background: 'linear-gradient(to bottom left,#6acbe0, #6859ea)'
        }
      }
      if(this.$route.path=='/play'){
        return {
          background: 'linear-gradient(to bottom left,#ea1674,#672c8b)'
        }
      }
    }
  }
}
</script>

<style lang="sass" scoped>

.index
  // background: linear-gradient(to bottom left,#ea1674,#672c8b)
  // background: linear-gradient(to bottom left,#999,#222)
  // background: linear-gradient(to bottom left,#f42e78, #c17afc)
  // background-color: #555
  height: 100vh
  overflow: hidden
  display: flex
  flex-direction: column

.child-container
  flex-grow: 1
  display: flex
  flex-direction: column

.index-nav
  width: 100vw
  display: flex
  justify-content: center

  a
    padding: 1rem
    color: rgba(white, 0.75)
    transition: background-color 0.3s
    flex-grow: 1
    text-align: center
    display: flex
    flex-direction: column
    align-items: center
    text-decoration: none
    justify-content: center
    border-radius: 2rem
    width: 2.25rem
    max-width: 2.25rem
    margin-left: auto
    margin-right: auto


    &:active
      background-color: rgba(white, 0.15)
      color: white

    &.active
      color: white

    span
      font-size: 0.75rem
      margin-top: 0.25rem

  .play
    background-color: white
    color: #444
    width: 2.25rem
    max-width: 2.25rem
    height: 2.25rem
    border-radius: 7rem
    transform: scale(1.25)
    transition: transform 0.2s

  .play:active
    background-color: white
    transform: scale(1)
    


</style>
