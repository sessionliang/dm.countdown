(function(window,$){
	if(!$)
		console.error("请添加jquery");

	var countdown = {};

	countdown.options={
		ltFormat : "{d}天{h}小时{m}分{s}秒",
		deathTime : new Date(new Date().valueOf() + 1*24*60*60*1000),
		lastTime : null,
		lastTimeContainer : null
	};

	/**
	* 初始化
	**/
	countdown.init = function(options){
        //获取用户输入参数
        countdown.options = $.extend(countdown.options,options);
        
		if(!countdown.options.lastTimeContainer){
			console.error("没有展示时间的标签元素");
			return;
		}
        
        var interval = setInterval(function() {
            $(countdown.options.lastTimeContainer).html(countdown.getLastTime());
        },950);
	};
    
    /**
	* 获取剩余时间
	**/
    countdown.getLastTime = function(){
        if(typeof(countdown.options.deathTime) == "string"){
            countdown.options.deathTime = new Date(countdown.options.deathTime);
        }
        
        if(typeof(countdown.options.deathTime) == "object"){
            countdown.options.lastTime = countdown.options.deathTime - new Date();//毫秒

            var day = Math.floor(countdown.options.lastTime/(24*3600*1000));
            var hour = Math.floor((countdown.options.lastTime%(24*3600*1000))/(3600*1000));
            var minute = Math.floor(((countdown.options.lastTime%(24*3600*1000))%(3600*1000))/(60*1000));
            var secend = Math.floor((((countdown.options.lastTime%(24*3600*1000))%(3600*1000))%(60*1000))/(1000));
            return countdown.options.ltFormat.replace("{d}",day)
                            .replace("{h}",hour)
                            .replace("{m}",minute)
                            .replace("{s}",secend);
        }
    };

    window.countdown = countdown;
})(window,jQuery);