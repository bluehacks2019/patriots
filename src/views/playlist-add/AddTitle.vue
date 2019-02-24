<template>

    <div class="addTitle">
        <h2>
            Name your Playlist
        </h2>
        <br>
        <br>
        <br>
        <input v-model="title" placeholder="My Typical Night">
        <br><br>
        <span class="example">e.g. Night Fitness Plan, Night Prayer</span>
        <br><br>
        <br><br>
        <button @click="addTitle()" required>Next</button>
    </div>

</template>

<script>
    export default {
        data: function() {
            return {
                title: ""
            }
        },
        
        methods: {
            addTitle(){
                if(this.title){
                    this.$store.commit('addPlaylistAddTitle',this.title);
                    this.$router.push('/playlist/add/choose-actions');
                }            
            }
        }
        
        
    }
</script>

<style lang="sass" scoped>

.addTitle
  padding: 2rem
h1
  font-size: 3rem

input
  padding: 1rem
  background-color: rgba(white, 0.1)
  color: white
  font-weight: bolder
  border: 0
  border-bottom: 2px solid white
  border-radius: 0.25rem
  width: 100%
  box-sizing: border-box

input::placeholder
  color: rgba(white, 0.5)

.example
  padding: 1rem 0rem

button
  padding: 1rem 2rem
  background-color: white
  border-radius: 3rem
  border: 0
  font-size: 1rem
  font-weight: bold
  float: right
  width: 100%

</style>