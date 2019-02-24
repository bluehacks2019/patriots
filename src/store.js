import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {

        current_user: {
            user_id: "0",
            name: "",
            email: "",
            profPic: ""
        },

        action_player: {

            playing_status: 'PAUSED',
            current_playlist_index: "0",
            current_playing_action_index: "0"

        },

        _tempPlaylistAdd: {
            title: "",
            actions: []
        },

        people: [
            {
                name: "Refresh to be Afresh",
                photo_url: "/img/assets/refresh.png",
                id: 1,
                playlist: {
                    photo_url: "/img/assets/refresh.png",
                    title: "Refresh to be Afresh",
                    actions: [
                        {
                            title: "Have some quiet time and reflect",
                            duration: "900"
                        },
                        {
                            title: "Sing your heart to Him",
                            duration: "1800"
                        },
                        {
                            title: "Read the Bible",
                            duration: "1800"
                        },
                        {
                            title: "Pray to God",
                            duration: "300"
                        },
                    ]
                }
            },
            {
                name: "Disconnect to Connect",
                photo_url: "/img/assets/discover.png",
                id: 2,
                playlist: {
                    photo_url: "/img/assets/discover.png",
                    title: "Disconnect to Connect",
                    actions: [
                        {
                            title: "Mute all social media apps",
                            duration: "300"
                        },
                        {
                            title: "Catch up with a friend",
                            duration: "5400"
                        },
                        {
                            title: "Encourage someone who you think has gone through bad time",
                            duration: "900"
                        },
                    ]
                }
            },
            {
                name: "#TogaGoals",
                photo_url: "/img/assets/toga.png",
                id: 3,
                playlist: {
                    photo_url: "/img/assets/toga.png",
                    title: "#TogaGoals",
                    actions: [
                        {
                            title: "Mute all social media apps",
                            duration: "300"
                        },
                        {
                            title: "Organize study outline",
                            duration: "1800"
                        },
                        {
                            title: "Study!",
                            duration: "750"
                        },
                        {
                            title: "Short break",
                            duration: "300"
                        },
                        {
                            title: "Study!",
                            duration: "750"
                        },
                    ]
                }
            },
            {
                name: "BAE-UTY REST",
                photo_url: "/img/assets/sleeping.png",
                id: 4,
                playlist: {
                    photo_url: "/img/assets/sleeping.png",
                    title: "BAE-UTY REST",
                    actions: [
                        {
                            title: "Skin care routine",
                            duration: "1800"
                        },
                        {
                            title: "Listen to nature sounds",
                            duration: "6000"
                        },
                        {
                            title: "Sleep",
                            duration: "25200"
                        },
                    ]
                }
            },
            {
                name: "Pump it Up",
                photo_url: "/img/assets/pumpitup.png",
                id: 5,
                playlist: {
                    photo_url: "/img/assets/pumpitup.png",
                    title: "Pump it Up",
                    actions: [
                        {
                            title: "Warm up",
                            duration: "900"
                        },
                        {
                            title: "Rest",
                            duration: "180"
                        },
                        {
                            title: "Aerobics Exercise",
                            duration: "1800"
                        },
                        {
                            title: "Rest",
                            duration: "180"
                        },
                        {
                            title: "Jog outside or in place",
                            duration: "1800"
                        },
                        {
                            title: "Cool down",
                            duration: "600"
                        },
                    ]
                }
            },
            {
                name: "Tick Tock Goes The Clock",
                photo_url: "/img/assets/ticktock.png",
                id: 6,
                playlist: {
                    photo_url: "/img/assets/ticktock.png",
                    title: "Tick Tock Goes The Clock",
                    actions: [
                        {
                            title: "Encourage positive outlook by reading a book",
                            duration: "600"
                        },
                        {
                            title: "Do whatever you want",
                            duration: "300"
                        },
                        {
                            title: "Do something you've been procastinating to do",
                            duration: "1800"
                        },

                        {
                            title: "Do whatever you want",
                            duration: "180"
                        },
                        {
                            title: "Do a household chore",
                            duration: "1800"
                        },
                        {
                            title: "Rest",
                            duration: "1800"
                        },
                    ]
                }
            },
            {
                name: "#MakulayAngBuhay",
                photo_url: "/img/assets/makulay.png",
                id: 7,
                playlist: {
                    photo_url: "/img/assets/makulay.png",
                    title: "#MakulayAngBuhay",
                    actions: [
                        {
                            title: "Eat some fruits",
                            duration: "900"
                        },
                        {
                            title: "Consume some edible agricultural products",
                            duration: "900"
                        },
                    ]
                }
            }
        ],

        users: [
            {
                user_id: "1",
                photo_url: "1",
                playlists: [
                    {
                        title: "Maundy Thursday",
                        actions: [{
                            title: "watch drama",
                            duration: 25
                        },
                        {
                            title: "watch showtime",
                            duration: 30
                        }]
                    },
                    {
                        title: "Black Friday",
                        actions: [{
                            title: "watch showtime",
                            duration: 25
                        },
                        {
                            title: "watch showtime",
                            duration: 25
                        }]
                    },
                    {
                        title: "Fitness",
                        actions: [{
                            title: "watch O-Shopping",
                            duration: 25
                        }]
                    },
                ]

            }
        ],

        playlists: [
            {
                id: 1,
                title: "Walwal night",
                user_id: "",
                activities: [
                    {
                        id: 1,
                        duration: 60,

                    }
                ]
            }
        ],

        actions: [
            {
                id: 1,
                name: "Eat at Jollibee",
                user_id: "",
                image_url: ""
            }
        ]

    },
    getters: {
        myPlaylists(state) {
            try {
                return state.users.find(user => user.user_id == state.current_user.user_id).playlists
            }
            catch{
                return []
            }
        },

    },
    mutations: {
        login_account(state, obj) {
            var id = obj.userId
            if (state.users.filter(user => user.user_id == id).length == 0) {
                state.users.push({
                    user_id: obj.userId,
                    photo_url: obj.profPic,
                    name: obj.name,
                    email: obj.email,
                    playlists: []
                })
            }
            state.current_user.user_id = obj.userId,
                state.current_user.name = obj.name,
                state.current_user.email = obj.email,
                state.current_user.profPic = obj.profPic
        },
        savePlaylist(state, playlist) {
            state.users.find(user => user.user_id == state.current_user.user_id).playlists.push(playlist)
        },
        createPlaylistWithActions(state, obj) {
            state.users.find(user => user.user_id == state.current_user.user_id).playlists.push({
                title: obj.title,
                actions: obj.actions
            })
        },
        addPlaylistAddTitle(state, title) {
            state._tempPlaylistAdd.title = title;
        },

        setCurrentPlayingAction(state, index) {
            state.action_player.current_playing_action_index = index
            state.action_player.playing_status = "STOPPED"
        },
        setCurrentPlaylistId(state, index) {
            state.action_player.current_playlist_index = index
            state.action_player.current_playing_action_index = 0
        },
        togglePlayingStatus(state) {
            if (state.action_player.playing_status == 'PLAYING') {
                state.action_player.playing_status = 'PAUSED'
            }
            else
                state.action_player.playing_status = 'PLAYING'
        },
        setPlayingStatusPlaying(state) {
            state.action_player.playing_status = 'PLAYING'
        },
        setPlayingStatusPaused(state) {
            state.action_player.playing_status = 'PAUSED'
        },
        setPlayingStatusStopped(state) {
            state.action_player.playing_status = 'STOPPED'
        },
        clearUser(state) {
            state.current_user.user_id = ""
        }

    },



    actions: {
        addActivity(context, title) {
            //var id = Math.round(Math.random() * 1000000);
            // add activity
            context.state.actions.push({
                title: title,
                user_id: context.state.current_user.id,
            })
        },

        addPlaylist(context, title) {
            //var id = Math.round(Math.random() * 1000000);
            // add playlist
        }
    },

})
