(function($,root){
    class LIstControl{
        constructor(){
            this.list = $('.song-list');
            this.closelist = $('.close-list');
        }
        createList(data){
            for(const prop in data){
                this.closelist.before(`<dd>${data[prop].song}</dd>`);
            }      
            this.list.css({"top":`${deviceheight}px`});
            this.list.show();
            this.listheight = this.list[0].offsetHeight; 
            this.listsong = $('dd');
            this.bindListBtn();
        }
        slideUp(){
            this.list.css({"transition":"0.8s","transform":`translateY(-${this.listheight}px)`});
        }
        slideDown(){
            this.list.css({"transition":"0.8s","transform":`translateY(${this.listheight}px)`});
        }
        //定位当前歌曲，改变颜色
        posRecentSong(index){
            for(let i = 0;i < len;i++){
                this.listsong[i].classList.remove("active");
            }
            this.listsong[index].classList.add("active");
        }
        bindListBtn(){
            $('.close-list').on('touchstart',()=>control.slideDown());
            for(let i = 0;i < len;i++){
                this.listsong[i].addEventListener('touchstart',()=>{
                    if(index != i){
                    index = i;
                    musicPlayer.loadMusic(datalist,index);
                    this.posRecentSong(i);
                    audio.play();
                    this.slideDown();
                    }
                });
            }            
        }
    }
    root.listControl = new LIstControl();
})(window.jQuery , window.player || (window.player = {}))