window.onload=function(){
var olli=document.getElementsByClassName("lst")
console.log(olli)
for(let i=0;i<olli.length;i++){
    olli[i].onclick=function(){
       
        for(let i=0;i<olli.length;i++){
            olli[i].style.backgroundColor="gray"
        }

        olli[i].style.backgroundColor="red"
        index=i;
        goindex()
        
    }
}







timer=setInterval(function(){
    gonext()
    changeLiColor()
    
}, 2000);


var obtn=document.getElementById("btn");
obtn.onclick=function(){
    alert("功能尚未完善，敬请期待！")
}
var oqiandao=document.getElementById("qiandao");
    oqiandao.onclick=function(){
        oqiandao.innerHTML="已签到";
        oqiandao.style.backgroundColor="gray"

    }

var oright=document.getElementsByClassName("right");

oright[0].onclick=function(){
   
    gonext()
    console.log(index)
    changeLiColor()
}

var oleft=document.getElementsByClassName("left");

oleft[0].onclick=function(){
   
    gopre();
    console.log(index)
    changeLiColor()
}


}

var items=document.getElementsByClassName("image");
var index=0
function goindex(){
    for(var i=0;i<items.length;i++){
        items[i].classList.remove("active")
    }
    items[index].classList.add("active")
}
function gonext(){
    goindex()
    index==9?index=0:index++
    
}
function gopre(){
    goindex()
    index==0?index=9:index--
    
}

function changeLiColor(){
    var oli=document.getElementsByClassName("lst")
   for(var i=0;i<oli.length;i++){
       oli[i].style.backgroundColor="gray"
   }
    
    oli[index].style.backgroundColor="red"

}
