<template>
  <div class="playlist">
    <center>
      <div class="playlist_image"></div>
      <h3 style="padding: 2rem"> {{ $store.state.people.find(person => person.id == $route.params.id).name }} </h3>
      <button style="background-color: white; border-radius :3rem; border: 0; padding: 0.75rem 1.75rem; font-weight: bold" @click="$store.commit('savePlaylist',$store.state.people.find(person => person.id == $route.params.id).playlist); $router.push('/library')">Save Playlist</button>

    </center>
    <div class="actions">
      <div class="action" v-for="action,index in $store.state.people.find(person => person.id == $route.params.id).playlist.actions">
        <div class="desc">
          <h3 style="margin-bottom: 0.5rem;">{{action.title}}</h3>
          <h6>{{convertToMinutes(action.duration)}}</h6>
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
  },
  methods:{
      convertToMinutes(seconds){
        var min = parseInt(seconds / 60) + ":"; 
			  return min + parseInt(seconds % 60);
    },
  },


}
</script>
