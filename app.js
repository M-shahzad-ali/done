var arr=["black","blue","orange","pink","white"];
var black=["black","black","orange","black","black",]
var blue=["blue","blue","blue","blue","blue",]
var orange=["orange","orange","orange","orange","orange",]
var pink=["pink","pink","pink","orange","pink",]
var white=["white","white","white","white","white",]
var names=["name1","name2","name3","name4","name5",]



   function first(){ 
    var x=0;
    for(var i=0;i<arr.length;i++){ 
    
    var element2=document.createElement("div");
    element2.setAttribute("class","extra")
    element2.innerHTML=names[i];
    // console.log(element2)
   

    var imageElement=document.createElement("img");

    
    imageElement.setAttribute("src",`./images/cycle-${arr[i]}.jpg`);
 
    imageElement.setAttribute("id",x+i)
  
    

  
    // console.log(imageElement)
    imageElement.setAttribute("onclick","fun"+x+i+"()");
    // console.log(Element)
    var Element=document.createElement("div");

    Element.appendChild(imageElement)
    Element.appendChild(element2)
    
    
    
    
    // var outerElemnt=document.getElementById("inner-image2");
    
    var outerElemnt=document.getElementById("inner-image2")
    
    outerElemnt.appendChild(Element)
    console.log(outerElemnt)
    // console.log(outerElemnt)


  

    
    // document.querySelectorAll('.carousel-item').forEach((item)=>{item.style.display='block'})

    }
     
    }

    
    // }}
    function USeAble(){  

        var replaceImg=document.getElementById("first");
        var dataUSe=document.querySelectorAll("#inner-image2 > div >img");
        // console.log(dataUSe)
        dataUSe.forEach(function(i){
     
        i.addEventListener('click',function(){
          
            replaceImg.src=i.src;
        })
    })
}

first();
USeAble();

function back(){
    var dataUSe=document.getElementById("inner-image2").innerHTML="";
    first();
    USeAble();
   

}

function hide(){

   
    setTimeout(fadeIn,200)
    
   

    // var clear=document.getElementById("clean").innerHTML="";
    
    
    // var image=document.getElementById("image").style.height="100vh"

    
}

function fadeIn()
{    

    var img = document.getElementById("clean");
    opacity: 1;
	// animation-name: fadeInOpacity;
	// animation-iteration-count: 1;
	// animation-timing-function: ease-in;
	// animation-duration: 2s;
    img.style.visibility = "hidden" ;
    img.style.opacity = "0" ;
    img.style.transition = "visibility 0.5s  linear 200ms, opacity 300ms" ;

    // setTimeout(img.style.display = 'block',2000);
    // img.style.boxShadow =' 0px 15px 20px rgb(0 0 0 / 40%)';
    // img.style.borderRadius ="10px"
    var over=document.getElementById("main").style.border="none"
  
  
}

function Border(){
    
var replaceImg=document.getElementById("first");
var dataUSe=document.querySelectorAll("#inner-image2 >div");
// console.log(dataUSe)
dataUSe.forEach(function(i){

i.addEventListener('mouseover',function(){
  
   i.style.transition = "all 0.3s ease" ;

   i.style.boxShadow =' 0px 15px 20px rgb(0 0 0 / 40%)';
   i.style.borderRadius ="10px"

//    i.style.border=" 2px solid #ffffff"

  
})

i.addEventListener('mouseout',function(){
    // i.style.transition = "none" ;
    i.style.border = "none";
    i.style.boxShadow = "none"; 
  
 })

})
}

Border();
var replaceImg=document.getElementById("first");
var dataUSe=document.querySelectorAll("#inner-image2 > img");
// console.log(dataUSe)
dataUSe.forEach(function(i){

i.addEventListener('mouseover',function(){
  
   i.style.transition = "all 0.3s ease" ;

   i.style.boxShadow =' 0px 15px 20px rgb(0 0 0 / 40%)';
   i.style.borderRadius ="10px"

//    i.style.border=" 2px solid #ffffff"

  
})

i.addEventListener('mouseout',function(){
    // i.style.transition = "none" ;
    i.style.border = "none";
    i.style.boxShadow = "none"; 
  
 })

})

   


function fun00(){
    


    var dataUSe=document.getElementById("inner-image2").innerHTML=" ";
    
    // var clear=document.getElementById("inner-image2");
    // clear.classList.remove("slick_main");
    // var clear=document.querySelectorAll(".fa-solid ").style.display="none";
    // var clear=document.getElementsByName("span").style.visibility="hidden";

 
    for(var i=0;i<black.length;i++){
     var imageElement=document.createElement("img");
     imageElement.setAttribute("src",`./images/cycle-${black[i]}.jpg`);
     var placement=document.getElementById("inner-image2");
     placement.appendChild(imageElement)
        //  console.log(placement)


    }
    
     

  
    

    Usable2()
    Border();
    

}


function Usable2(){
    var replaceImg=document.getElementById("first");
    var dataUSe=document.querySelectorAll("#inner-image2 > img");
    console.log(dataUSe)
    // console.log(dataUSe)
    dataUSe.forEach(function(i){
 
    i.addEventListener('click',function(){
      
        replaceImg.src=i.src;
    })
})
}
function fun01(){

    


    var dataUSe=document.getElementById("inner-image2").innerHTML="";
 
    for(var i=0;i<blue.length;i++){
     var imageElement=document.createElement("img");
     imageElement.setAttribute("src",`./images/cycle-${blue[i]}.jpg`);
     var placement=document.getElementById("inner-image2");
     placement.appendChild(imageElement)
    
    }
    Usable2()
    Border();
}    
function fun02(){
    


    var dataUSe=document.getElementById("inner-image2").innerHTML="";
 
    for(var i=0;i<orange.length;i++){
     var imageElement=document.createElement("img");
     imageElement.setAttribute("src",`./images/cycle-${orange[i]}.jpg`);
     var placement=document.getElementById("inner-image2");
     placement.appendChild(imageElement)
    
    }
    Usable2()
    Border();
}
function fun03(){
    


    var dataUSe=document.getElementById("inner-image2").innerHTML="";
 
    for(var i=0;i<pink.length;i++){
     var imageElement=document.createElement("img");
     imageElement.setAttribute("src",`./images/cycle-${pink[i]}.jpg`);
     var placement=document.getElementById("inner-image2");
     placement.appendChild(imageElement)
    
    }
    Usable2()
    Border();
}
 
function fun04(){
    


    var dataUSe=document.getElementById("inner-image2").innerHTML="";
 
    for(var i=0;i<white.length;i++){
     var imageElement=document.createElement("img");
     imageElement.setAttribute("src",`./images/cycle-${white[i]}.jpg`);
     var placement=document.getElementById("inner-image2");
     placement.appendChild(imageElement)
    
    }
    Usable2()
    Border();
}
$('.slick_main').slick({
    dots: false,
    infinite: true,
    // arrows:true,
    prevArrow:'.arrow-prev',
    nextArrow:'.arrow-next',
    speed: 300,
    slidesToShow: 1,
    // centerMode: true,
    variableWidth: true
  });
