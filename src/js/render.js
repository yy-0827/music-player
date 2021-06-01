//渲染功能
(function($,root){

    //渲染图片
    function renderImg(src){
        const img = new Image();
        img.src = src;
        img.onload = (()=>{
            $('.wrapper .album-picture img').attr('src',src);
            root.blurImg(img,$('.wrapper'));
        })
    }
    //渲染信息
    function renderInfo(info){
        const information = `<div class="song-title">${info.song}</div>
        <div class="singer">${info.singer}</div>
        <div class="album">${info.album}</div>`
        $('.song-info').html(information);
    }

    //渲染喜欢
    function renderIslike(info,key,i){
        if(key[i] == undefined){
            key[i] = info;
        }
        (key[i] && ($('.menu .like').addClass('liking')));
        (key[i] || ($('.menu .like').removeClass('liking')));
    }


    

    //渲染方法
    root.render = function(data){
        renderImg(data.image);
        renderInfo(data);
        renderIslike(data.isLike,likelist,index);
    }

    root.renderlike = function(data){
        renderIslike(data.isLike,likelist,index);
    }

})(window.jQuery , window.player || (window.player = {}));