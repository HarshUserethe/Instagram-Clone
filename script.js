 

var arr=[
    {name:"aleena",     img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" },
    {name:"zoe_malik",  img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80" },
    {name:"aanya_07",    img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"},
    {name:"amelia",     img: "https://images.unsplash.com/photo-1496440737103-cd596325d314?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" },
    {name:"isabella",   img: "https://images.unsplash.com/photo-1527736947477-2790e28f3443?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=462&q=80" },
    {name:"sophia",     img: "https://images.unsplash.com/photo-1469460340997-2f854421e72f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" },
    {name:"aelizabeth", img: "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" },
    {name:"stella",     img: "https://images.unsplash.com/photo-1512084747998-038941f49b84?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=491&q=80" },
    {name:"hannah",     img: "https://images.unsplash.com/photo-1565470921607-2fabedd2dd86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80" },
]

var clutter = "";

arr.forEach(function(elem,index){
    clutter +=`<div class="story">
    <div class="profile-pic">
        <img id="${index}" src="${elem.img}" alt="">
    </div>
    <p id="${index}">${elem.name}</p>
</div>
`
})



 


var grow = 0;

document.querySelector(".card").innerHTML=clutter;



document.querySelector(".card").addEventListener("click",function(elem){
   document.querySelector(".overlay>.show>img").setAttribute("src", arr[elem.target.id].img)
   document.querySelector(".show>.inner-profile>img").setAttribute("src", arr[elem.target.id].img)
   document.querySelector(".show>p").innerHTML = arr[elem.target.id].name;

   document.querySelector(".overlay").style.display="initial";

//set timing from here:-

    setTimeout(function(){
    document.querySelector(".overlay").style.display="none"
   },2000)

   //code for progress bar

   var ghadi = setInterval(function(){
    if(grow < 100){
        document.querySelector("#prgbar").style.width=`${grow++}%`;

    }
    else{
        clearInterval(ghadi);
        grow = 0;
    }
},20)
})

document.querySelector("#cancel").addEventListener("click",function(){
    document.querySelector(".overlay").style.display="none";
    
    
})


// code for instagram posts


var arr2 = [
    {uid:"Kathrine Pirece ", loc:"New York, America", pic:"https://images.unsplash.com/photo-1622616234995-072f0e880b81?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80", cap:" ", likes:"125", img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" ,},
    {uid:"Lexi Rivora", loc:"Calafornia", pic:"https://images.unsplash.com/photo-1622616235693-d9c1de2bf0cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80", cap:" ", likes:"100" ,            img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80" ,},
    {uid:"Jane Willies", loc:"Dubai, UAE", pic:"https://images.unsplash.com/photo-1530541930197-ff16ac917b0e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80", cap:" ", likes:"162",            img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",},
    {uid:"Gerault Rivera", loc:"Austria", pic:"https://images.unsplash.com/photo-1608883823203-0a4dbd29bdaa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80", cap:" ", likes:"201" ,            img: "https://images.unsplash.com/photo-1496440737103-cd596325d314?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" ,},
    {uid:"Adam Queen", loc:"Tokyo,Russia", pic:"https://images.unsplash.com/photo-1581952976147-5a2d15560349?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80", cap:" ", likes:"485",            img: "https://images.unsplash.com/photo-1527736947477-2790e28f3443?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=462&q=80" ,},
    {uid:"Smith wills", loc:"Washington, California", pic:"https://images.unsplash.com/photo-1655930119994-a152be4f1df5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80", cap:" ", likes:"485", img: "https://images.unsplash.com/photo-1469460340997-2f854421e72f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" ,},
    {uid:"Thompson", loc:"Arlington, Texas", pic:"https://images.unsplash.com/photo-1655930064812-43a8c1b292cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80", cap:" ", likes:"485",          img: "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" ,},
    {uid:"Dani Campbel", loc:"Washington, California", pic:"https://images.unsplash.com/photo-1644982647708-0b2cc3d910b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80", cap:" ", likes:"485",img: "https://images.unsplash.com/photo-1512084747998-038941f49b84?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=491&q=80" ,},
    {uid:"Roberts binnie", loc:"Arlington, Texas", pic:"https://images.unsplash.com/photo-1553544260-f87e671974ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=507&q=80", cap:" ", likes:"485",       img: "https://images.unsplash.com/photo-1565470921607-2fabedd2dd86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80" ,},
]

var clutter2 = "";

arr2.forEach(function(elem,idx){
    clutter2 +=` <div class="post-card">
    <div class="header">
        <div class="dp">
        <img src="${elem.img}" alt=""></div>
        <h5 class="nameofuser">${elem.uid}</h5>
        <h5 class="location">${elem.loc}</h5>
        <i class="ri-more-fill" id="more"></i>
    </div>
    <div class="post-content">
    <i class="ri-heart-fill" id="lovereact"></i>
  
        <img id="${idx}" src="${elem.pic}" alt="">
    </div>
    <div class="bottom-content">
        <i class="ri-heart-line" id="heart"></i>
        <i class="ri-heart-fill" id="redheart"></i>
        <i class="ri-chat-3-line"></i>
        <i class="ri-send-plane-line"></i>
        <i class="ri-bookmark-line" id="bookmark"></i>
        <h4>${elem.likes} likes</h4>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus, accusantium!</p>
        <div class="comment">
            <i class="ri-emotion-happy-line"></i>
            <h4>Add a Comment....</h4>
        </div>

    </div>
</div>`
})

// console.log(arr2[dets.target.id].pic)

 
 

document.querySelector(".post").innerHTML=clutter2;




       document.querySelector(".post").addEventListener("dblclick",function(dets, index){
           document.querySelector("#lovereact").style.display="flex";
           setTimeout(function(){    
                       document.querySelector("#lovereact").style.display="none";
                   },800)
          
       })
       
        document.querySelector(".post").addEventListener("dblclick",function(){
        document.querySelector(".bottom-content>h4").innerHTML="126 likes";
        document.querySelector("#redheart").style.display="flex";
        })
       
        document.querySelector("#redheart").addEventListener("click",function(){
           document.querySelector(".bottom-content>h4").innerHTML="125 likes";
           document.querySelector("#redheart").style.display="none";
       
        })


//==========================================================================
//--------------------------------------------------------------------------
var flag = 0;
var btn = document.querySelector("#f1")
  
btn.addEventListener("click",function(){
    if(flag === 0){
        btn.innerHTML = "Following"
        btn.style.color = "#000"
        flag = 1
    }
    else{
        btn.innerHTML = "Follow"
        btn.style = "rgb(56,171,247)"
        flag = 0
    }
})

//==========================================================================
//--------------------------------------------------------------------------
var btn1 = document.querySelector("#f2")
  
btn1.addEventListener("click",function(){
    if(flag === 0){
        btn1.innerHTML = "Following"
        btn1.style.color = "#000"
        flag = 1
    }
    else{
        btn1.innerHTML = "Follow"
        btn1.style = "rgb(56,171,247)"
        flag = 0
    }
})

//==========================================================================
//--------------------------------------------------------------------------
var btn2 = document.querySelector("#f3")
  
btn2.addEventListener("click",function(){
    if(flag === 0){
        btn2.innerHTML = "Following"
        btn2.style.color = "#000"
        flag = 1
    }
    else{
        btn2.innerHTML = "Follow"
        btn2.style = "rgb(56,171,247)"
        flag = 0
    }
})


//==========================================================================
//--------------------------------------------------------------------------
var btn3 = document.querySelector("#f4")
  
btn3.addEventListener("click",function(){
    if(flag === 0){
        btn3.innerHTML = "Following"
        btn3.style.color = "#000"
        flag = 1
    }
    else{
        btn3.innerHTML = "Follow"
        btn3.style = "rgb(56,171,247)"
        flag = 0
    }
})

//==========================================================================
//--------------------------------------------------------------------------
var btn4 = document.querySelector("#f5")
  
btn4.addEventListener("click",function(){
    if(flag === 0){
        btn4.innerHTML = "Following"
        btn4.style.color = "#000"
        flag = 1
    }
    else{
        btn4.innerHTML = "Follow"
        btn4.style = "rgb(56,171,247)"
        flag = 0
    }
})

var nav = document.querySelector(".nav")
var modes = document.querySelector(".modes")
var navicons = document.querySelector(".mainicons>i")
var i1 = document.querySelector("#i1")
var i2 = document.querySelector("#i2")
var i3 = document.querySelector("#i3")
var i4 = document.querySelector("#i4")
var i5 = document.querySelector("#i5")
var i6 = document.querySelector("#author")
var main = document.querySelector(".main")
var sug = document.querySelector(".sug")
var body = document.querySelector("body")
var post = document.querySelector(".post")
 



 

 
document.querySelector("#dark").addEventListener("click",function(dets, list){
 
    document.querySelector("#dark").style.display = "none"
    document.querySelector("#sun").style.display = "initial"
    nav.style.backgroundColor = "#413F42"
    modes.style.backgroundColor = "#fff"
    i1.style.color = "#fff"
    i2.style.color = "#fff"
    i3.style.color = "#fff"
    i4.style.color = "#fff"
    i5.style.color = "#fff"
    i6.style.color = "#fff"
    body.style.backgroundColor = "#413F42" 
    post.style.backgroundColor = "#413F42" 
    document.querySelector("#sun").style.color = "#fff"
    document.querySelector(".story>p").style.color = "#fff"
    
    
    

    
    
     
   
   
  
    

     
      
})
document.querySelector("#sun").addEventListener("click",function(){
 
    document.querySelector("#sun").style.display = "none"
    document.querySelector("#dark").style.display = "initial" 
})




 

 