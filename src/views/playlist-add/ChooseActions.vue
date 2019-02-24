<template>
	<div class="chooseActions">
		<h2>Add an Action</h2>
		<div>
			<br>
			<br>
			<div style="position: relative">
				<input type="text" v-model="actionTitle" placeholder="Name of action" required>
			</div>
			<br>
			<div style="display: flex; justify-content: space-between">
				<input
					style="width: 48%"
					type="number"
					v-model.number="actionDurationMinutes"
					placeholder="# of minutes"
					required
				>
				<input
					style="width: 48%"
					type="number"
					v-model.number="actionDurationSeconds"
					placeholder="# of seconds"
          max=59
					required
				>
			</div>
			<br>
			<br>
			<button @click="addAction()">
				<fa icon="plus"></fa>&nbsp;
				<span>Add</span>
			</button>
			<br>
			<br>
			<br>
			<br>

			<button @click="proceed()">
				<fa icon="check"></fa>&nbsp;
				<span>Done</span>
			</button>
		  </div>
      <div style="flex-grow: 1;">
        
        <div class="action" v-for="action in actions">
          <h3>{{action.title}}</h3>
          <h4>{{convertToMinutes(action.duration)}}</h4>
        </div>

      </div>
	</div>
</template>

<script>
export default {
	mounted: function() {
		this.actionsList = this.$store.state.actions;
	},

	data: function() {
		return {
			actionsList: [],
			actions: [],
			actionTitle: "",
      actionDurationMinutes: "",
      actionDurationSeconds: ""
		};
	},
	methods: {
		addAction() {
			if(isNaN(this.actionDurationSeconds) || this.actionDurationSeconds == "")
					this.actionDurationSeconds = 0;
			if(isNaN(this.actionDurationMinutes)  || this.actionDurationMinutes == "")
					this.actionDurationMinutes = 0;
					
			this.actions.push({
				title: this.actionTitle,

				
				duration: parseInt(this.actionDurationMinutes * 60) + parseInt(this.actionDurationSeconds)
			});
    },
    convertToMinutes(seconds){
      var min = parseInt(seconds / 60) > 0 ? (parseInt(seconds / 60) + "min ") : ""; 
			return min + parseInt(seconds % 60) + "sec"
	
    },

		proceed() {
			this.$store.commit('createPlaylistWithActions',{title: this.$store.state._tempPlaylistAdd.title, actions: this.actions })
			this.$router.push('/library')
		}
	}
};
</script>

<style lang="sass" scoped>
.chooseActions
  padding: 2rem
  height: 100vh
  box-sizing: border-box
  display: flex
  flex-direction: column

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

button
  padding: 1rem 2rem
  background-color: white
  border-radius: 3rem
  border: 0
  font-size: 1rem
  font-weight: bold
  float: right
  width: 100%

ul
  background-color: white
  color: black
  width: 100%
  list-style-type: none
  position: absolute
  li
    padding: 1rem
    // display: inline-block

.action
  padding: 1rem 0rem
  border-bottom: 1px solid rgba(white, 0.2)

</style>