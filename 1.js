// 轮播图
function tab(selector1,selector2,action,parentSelector,tid) {
        clearInterval(tid);
        var iNow = 0;
        tid = setInterval(next,5000);
        function next() {
            iNow++;
            if (iNow == $(selector2).length) {
                iNow = 0;
            }
            $(selector1).removeClass('active');
            $(selector2).fadeOut();
            $(selector1).eq(iNow).addClass('active');
            $(selector2).eq(iNow).fadeIn();
        }


        $(selector1)[action](function(){
            iNow = $(this).index();

         
            $(selector1).removeClass('active');
            $(selector2).fadeOut();
        
            $(this).addClass('active');
            $(selector2).eq($(this).index()).fadeIn();
        });
    }
// 
function tab1(selector1,selector2,action) {
        $(selector1)[action](function(){
            //移出所有的样式
            $(selector1).removeClass('active');
            $(selector2).removeClass('active');
            //添加显示的样式: active
            $(this).addClass('active');
            $(selector2).eq($(this).index()).addClass('active');
        });
    }

$(function(){
    var tid;
    tab('#ol1 li','#ul1 li','click',tid);
    $('.sideshow').mouseenter(function () {
                clearInterval(tid);
    });

    $(function(){
            tab1('#tabs-ul li','#section1-msg li','click');
        });

    $(function () {

        tab1('#right-ul li','#right-ol li','click');
       
    })
    
});



