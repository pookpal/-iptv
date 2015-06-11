/**
 * Created by lijie on 15/6/10.
 * 待解决问题
 * 1、昵称和聊天信息框获取焦点时自动清空
 */


$(function () {

    var channleItemWidth = $('ul.channleItem').width();
    //频道导航切换效果
    $('ul.tabChannle li').click(function () {
        var chatBoxDisplay = getStyle('display',$('.chatBox .chatContent')[0]);
        var index = $('ul.tabChannle li').index(this);
        if(chatBoxDisplay =="block"){
            $('.chatBox .chatContent').slideToggle('slow');
        }
        $(this).addClass('current');
        $(this).siblings('li').removeClass('current');

        slide(index, channleItemWidth);

    });
    //滑动函数
    function slide(index, channleItemWidth){
        console.log(channleItemWidth);
        $('div.channleMenu').animate(
            {marginLeft:- index * channleItemWidth+"px"},300
        );
    }

    //频道菜单点击切换效果
    $('ul.channleItem li a').click(function () {
        $(this).parents('div.channleMenu').find('ul li a').removeClass('current');
        $(this).addClass('current');
    });

    //点击meta打开聊天框
    $('.chatBox .meta').not('.lamp').click(function(){
        //聊天窗口
        $('.chatBox .chatContent').slideToggle('slow');

        //chatBox 滚动条
        var chatBoxScroll = function(){
            var ulHeight = $('.chatLists ul').offset().top;
            $('.chatLists').scrollTop(ulHeight);
        }();
        chatBoxScroll=null;
    });

    //点击lamp切换背景灯
    $('.lamp').click(function(){
        var wrapDisplay = getStyle('display',$('.wrap')[0]);

        if(wrapDisplay == "none"){
            $('.wrap').css({"display":"block"});
            $('.leftSide').css({"zIndex":"4"});
            $('.chatBox .lamp').css({"zIndex":"4"});

        }else{
            $('.wrap').css({"display":"none"});
            $('.leftSide').css({"zIndex":"0"});
            $('.chatBox .lamp').css({"zIndex":"0"});
        }

    });

    //自定义函数获取对象的样式
    function getStyle(attr,obj){
        return obj.currentStyle? obj.currentStyle[attr]:getComputedStyle(obj,null)[attr];
    }
});