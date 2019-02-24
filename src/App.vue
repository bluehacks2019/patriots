<template>
  <div id="app">
    <transition name="fade" appear mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<style lang="sass">
@import url('https://fonts.googleapis.com/css?family=Montserrat')
    
*, *:after, *:before
    font-family: 'Montserrat', sans-serif

body
  background-color: #555
  margin: 0
  padding: 0
  font-family: sans-serif
  color: white

*
  margin: 0
  padding: 0
  -webkit-tap-highlight-color: transparent
  -webkit-touch-callout: none
  -webkit-user-select: none
  -khtml-user-select: none
  -moz-user-select: none
  -ms-user-select: none
  user-select: none
  outline: none

.fade-enter-active, .fade-leave-active
  transition: opacity .3s

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ 
  opacity: 0

.slidev-enter-active, .slidev-leave-active
  transition: transform 0.3s, opacity 0.3s

.slidev-enter
  transform: translateY(50%) scaleY(0)
  opacity: 0

.slidev-leave-to /* .fade-leave-active below version 2.1.8 */ 
  transform: translateY(50%) scaleY(0)
  opacity: 0

.zoom-enter-active, .zoom-leave-active
  transition: transform 0.3s, opacity 0.3s

.zoom-enter
  transform: scale(0.8)
  opacity: 0

.zoom-leave-to
  transform: scale(1.2)
  opacity: 0

</style>
