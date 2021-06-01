const root = window.player;
const audio = root.audioManager;
const control = root.listControl;
let index = 0; 
let datalist = [];
let len = 0;
let newdeg = 0;
let deviceheight = window.innerHeight;
let likelist = [];

    function getData(url){
        $.ajax({
            method:"GET",
            url:url,
            dataType:"json",
            success:function(data){
                datalist = data;
                len = data.length;
                musicPlayer.loadMusic(data,index);
                control.createList(data);
            },
            error:function(){
                console.log('error');
            }
        })
    }

    function bindEvent(){
        $('.start').on('touchstart',()=>{
            if(audio.status == 'pause'){
                audio.play();
            }else{
                audio.pause();
            }
        })
        $('.nextsong').on('touchstart',()=>musicPlayer.changeSong('next')); 
        $('.lastsong').on('touchstart',()=>musicPlayer.changeSong('last'));
        $('.like').on('touchstart',()=>musicPlayer.likeKey(likelist,index,datalist[index].isLike));          
        $('.list').on('touchstart',()=>musicPlayer.listControl());
        $('.progressbar').on('click',e=>root.pro.skipTo(e));
}

   
    class MusicPlayer{
        //加载音乐
        loadMusic(data,i=0){
            root.render(data[i]);
            audio.getAudio(data[i].audio);
            root.pro.renderTotalTime(data[i].duration);    
            newdeg = 0;       
        }
        //切歌
        changeSong(type){
            if(type == 'next'){
                index = index < len-1 ? index + 1 : 0;
            }else{
                index = index <= 0 ? len-1 : index - 1;
            }
            this.loadMusic(datalist,index);
            audio.play();
        }
        //切换喜欢状态
         likeKey(list,i){
             if(list[i] == true){
                 list[i] = false;
             }else{
                 list[i] = true;
             }
             root.renderlike(datalist);
         }
        //旋转唱片
        imgRotate(deg=0){
            var This = this;
            clearInterval(This.rotateTimer);
            if(audio.status == 'play'){
                This.rotateTimer = setInterval(function(){
                $('.wrapper img').css('transform',`rotate(${++deg}deg)`);               
                newdeg = deg;
            },2000 / 60);
            }
        }
        //控制列表
        listControl(){
                control.posRecentSong(index);
                control.slideUp();
        }

    }

    bindEvent();
    const musicPlayer = new MusicPlayer();
    getData('./mock/data.json');
