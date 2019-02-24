<template>
    <div>
        {{ currentTime }}
    </div>
</template>

<script>

    export default {
        props:['status'],
        data(){
            return {
                duration: 100,
                currentTime: 0
            }
        },
        mutations:{
            
        },
        computed:{
            
        },
        mounted(){
            
            var loop = setInterval(()=>{
                if(this.currentTime == this.duration){
                    console.log('ended loop');
                    clearInterval(loop);
                } else {
                    
                    switch(this.status){
                        
                        case 'PLAYING':
                            this.currentTime = this.currentTime+1;
                            break;
                        case 'PAUSED':
                            clearInterval(loop);
                            break;
                        case 'STOP':
                            this.currentTime = 0;
                            this.duration = 0;
                            clearInterval(loop);
                            break;
                        default:
                            clearInterval(loop);
                            break;
                    }                    
                    
                }
                
            },1000);
            
        }
        
    }

</script>

<style></style>
