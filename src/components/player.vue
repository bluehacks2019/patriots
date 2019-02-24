<template>
  <div class="player" @click="$route.path!='/play' ? $router.push('/play') : ''">
    <h4 style="padding-top: 0.25rem; transform: translateY(50%); text-align: center">
      {{ $store.getters.myPlaylists[$store.state.action_player.current_playlist_index].actions[$store.state.action_player.current_playing_action_index].title }} </h4>
    <div class="seeker">
    <span class="runningTime">{{progressmin}}</span>
    <span class="track">
      <span class="trackLine">
        <!-- width: '' + (progressmin / $store.getters.myPlaylists[$store.state.action_player.current_playlist_index].actions[$store.state.action_player.current_playing_action_index].duration) + ''  -->
        <span class="trackPoint" :style="{width: progresssec / $store.getters.myPlaylists[$store.state.action_player.current_playlist_index].actions[$store.state.action_player.current_playing_action_index].duration*100 + '%'}"></span>
      </span>
    </span>
    <span class="endTime">{{convertToMinutes($store.getters.myPlaylists[$store.state.action_player.current_playlist_index].actions[$store.state.action_player.current_playing_action_index].duration)}}</span>
    </div>
  </div>
</template>


<script>
export default {
  mounted(){
    setTimeout(() => {
      var s = this.$store
      var thiss = this
      var x = window.setInterval(function(){
        if(s.state.action_player.playing_status == 'STOPPED'){
          thiss.progresssec = 0;

        }
        else if(s.state.action_player.playing_status == 'PLAYING'){
          thiss.progresssec = thiss.progresssec + 1
          if(thiss.progresssec == s.getters.myPlaylists[s.state.action_player.current_playlist_index].actions[s.state.action_player.current_playing_action_index].duration){
            s.commit('setPlayingStatusStopped');
            thiss.progresssec = 0;
            navigator.vibrate([500,250,500,250,500,250])
            
            //get length
            var actions_length = s.getters.myPlaylists[s.state.action_player.current_playlist_index].actions.length
            var current_action_index = s.state.action_player.current_playing_action_index
            if( current_action_index >= actions_length - 1){
              // stop playing or set to 1
              // maybe congratulate the user
              s.commit('setCurrentPlayingAction',0)
            }
            else{
              s.commit('setCurrentPlayingAction',current_action_index + 1)
            }


          }
        }
      }, 1000);

    }, 1000);
  },
  methods:{
      convertToMinutes(seconds){
        var min = parseInt(seconds / 60) + ":"; 
			  return min + parseInt(seconds % 60);
    },
  },
  data(){
    return {
      progresssec: 0
    }
  },
  computed:{
      progressmin(){
        var min = parseInt(this.progresssec / 60) + ":"; 
			  return min + parseInt(this.progresssec % 60);
    },
  }
}
</script>



<style lang="sass" scoped>



.player
  background-color: rgba(#fff,0.1)
  
.seeker
  display: flex
  justify-content: center
  align-items: center
  padding: 1rem

.playButton
  padding: 1rem

.track
  flex-grow: 1
  display: flex
  align-items: center
  padding: 0.75rem
  
.trackLine
  height: 0.25rem
  display: inline-block
  background-color: rgba(white, 0.2)
  border-radius: 0.5rem
  width: 100%
  position: relative
  padding: 0.15rem 0rem

.trackPoint
  display: inline-block
  width: 0%
  transition: width 0.5s
  height: 0.5rem
  background-color: white
  transform: translateY(-50%)
  position: absolute
  top: 50%
  border-radius: 1rem
</style>