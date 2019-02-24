<template>
	<div class="login">
    <div class="profPic">
      <img v-if="$store.state.current_user.user_id != ''" v-bind:src="profPic">
    </div>
    <br><br>
    <h3>{{name.length == "" ? "Hello, User!" : name}}</h3>
    <br><br>
    <h5>{{email == "" ? "" : email}}</h5>
    <br><br>
		<facebookLogin
			class="button"
			appId="976527022737628"
			@login="getUserData"
			@logout="onLogout"
			@get-initial-status="getUserData"
		></facebookLogin>
    <br><br>
    <button @click="$router.push('/')" v-if="$store.state.current_user.user_id != ''">Continue to App</button>
    
		
		
		
	</div>
</template>

<style lang="sass" scoped>
.login
  padding: 2rem
  display: flex
  justify-content: center
  align-items: center
  flex-direction: column

.profPic
  width: 7rem
  height: 7rem
  display: inline-block
  border-radius: 50%

img
  width: 100%
  height: 100%
  border-radius: 50%

button
  padding: 1rem 1.5rem
  font-weight: bold
  background-color: white
  border: 0
  border-radius: 2rem
</style>

<script>
// import firebase from "firebase";
import facebookLogin from "facebook-login-vuejs";
export default {
	data() {
		return {
			profPic: "",
			name: "",
			email: "",
			userId: ""
		};
	},
	components: {
		facebookLogin
	},

	methods: {
		getUserData(data) {
      console.log(data);
      var s = this.$store

			FB.api(
				"/me",
				{ fields: ["picture", "name", "email", "id"] },
				response => {
					this.profPic = response.picture.data.url;
					this.name = response.name;
					this.email = response.email;
					this.userId = response.id;
					s.commit('login_account',{
                    userId: this.userId,
                    profPic: this.profPic,
                    name: this.name,
                    email: this.email,
          })
				}
			);
		},

		onLogin() {
			this.isConnected = true;
			this.getUserData();
		},

		onLogout() {
			this.$store.commit('clearUser');
			FB.logout()(
				(this.email = ""),
				(this.name = ""),
				(this.profPic = ""),
				(this.userId = "")
			);
		}
	}
};
</script>
