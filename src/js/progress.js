(function($,root){
    //时间换算
    function timetrans(time){
        let m = Math.floor(time /  60);
        let s = Math.floor(time % 60);
        if(m < 10){
            m = "0" + m;}
        if(s < 10){
            s = "0" + s;}
        let str = m + ":" + s;
        return str;
    }
    //渲染总时间
    function renderTotalTime(time){
        let timestr = timetrans(time);
        $('.total-time').text(timestr);
    }
    //渲染当前时间
    function renderRecentTime(time){
        let timestr = timetrans(time);
        $('.recent-time').text(timestr);
    }
    //渲染进度条
    function renderProgress(recenttime){
        let totaltime = datalist[index].duration;
        let totalwidth = $('.progressbar')[0].offsetWidth;
        let recentwidth = recenttime * totalwidth / totaltime;
        $('.last').css({"width":recentwidth+"px"});
        $('.circle').css({"left":recentwidth+"px"});
    }
    //进度条跳转
    function skipTo(e){
        let totaltime = datalist[index].duration;
        let totalwidth = $('.progressbar')[0].offsetWidth;
        let recenttime = e.offsetX * totaltime / totalwidth;
        $('.last').css({"width":e.offsetX+"px"});
        $('.circle').css({"left":e.offsetX+"px"});
        root.audioManager.audio.currentTime = recenttime;
    }

    root.pro = {
        renderRecentTime:renderRecentTime,
        renderTotalTime:renderTotalTime,
        renderProgress:renderProgress,
        skipTo:skipTo
    }

})(window.jQuery , window.player || (window.player = {}))