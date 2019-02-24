<template>
  <div class="playlist">
    <center>
      <div class="playlist_image"></div>
      <h3 style="padding: 2rem">{{$store.getters.myPlaylists[$store.state.action_player.current_playlist_index].title}}</h3>
    </center>
    <div class="actions">
      <div class="action" @click="$store.commit('setCurrentPlayingAction',index)" :class="{'active':$store.state.action_player.current_playing_action_index == index}" v-for="action,index in $store.getters.myPlaylists[$store.state.action_player.current_playlist_index].actions">
        <div class="desc">
          <h3>{{action.title}}</h3>
          <h6>{{action.duration}}</h6>
        </div>
        <div class="buttons" v-if="$store.state.action_player.current_playing_action_index == index">
          <span class="playButton">
            <fa icon="play" v-if="$store.state.action_player.playing_status!='PLAYING'" @click="$store.commit('setPlayingStatusPlaying')"></fa>
            <fa icon="stop" v-else @click="$store.commit('setPlayingStatusStopped')"></fa>
          </span>
        </div>
      </div>
    </div>
    
  </div>
</template>

<style lang="sass" scoped>

  .player
    position: absolute
    bottom: 0
    background-color: #111
    width: 100%
    display: flex
    justify-content: center

  .button
    position: relative

  .playButton
    width: 3rem
    height: 3rem
    border-radius: 3rem
    background-color: rgba(white,0.2)
    display: flex
    align-items: center
    justify-content: center
    position: absolute
    right: 1rem
    transform: translateY(-50%)
    
  .playlist_image
    width: 12rem
    height: 10rem
    margin-top: 2rem
    display: inline-block
    background: linear-gradient(to bottom left,#f42e78, #c17afc)
    

  .action
    padding: 1rem
    display: flex
    justify-content: space-between
    align-items: center

    &.active
      background-color: rgba(white, 0.1)
      h3
        color: white

    h3
      padding: 0rem 0rem
      color: rgba(white, 0.7)

    h6
      background-color: rgba(white, 0.5)
      color: black
      display: inline
      padding: 0.25rem 0.5rem
      border-radius: 1rem
      font-weight: light

</style>

<script>
export default {
  mounted(){
 
  },
  data(){
    return {

      playStatus: 'PLAYING'

    }
  }
}
</script>