var index = 1;
function lunbo(){
    index ++ ;

    //轮播图片数量
    if(index > 2){
        index = 1;
    }

    var img = document.getElementById("imgs");
    img.src = "image/image"+index+".png";
}

setInterval(lunbo,2500);