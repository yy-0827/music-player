(function($,root){
    //音频播放暂停等功能
    class AudioManager{
        constructor(){
            this.audio = new Audio();
            this.status = 'pause';
        }
        play(){
            this.audio.play();
            this.status = 'play';
            $('.start').addClass('playing');
            musicPlayer.imgRotate(newdeg);
            setInterval(
                ()=>{
                    root.pro.renderRecentTime(this.audio.currentTime);
                    root.pro.renderProgress(this.audio.currentTime);
                    if(this.audio.currentTime == this.audio.duration){
                        musicPlayer.changeSong('next');
                    }
                }
                ,1000)
        }
        pause(){
            this.audio.pause();
            this.status = 'pause';
            $('.start').removeClass('playing');
            musicPlayer.imgRotate(newdeg);

        }
        getAudio(src){
            this.audio.src = src;
            this.audio.load();
        }


    }

    root.audioManager = new AudioManager();



})(window.jQuery , window.player ||(window.player = {}))