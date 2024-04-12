var cursor=document.getElementById("cursor");
var cursor_blur=document.getElementById("cursor-blur");
document.addEventListener("mousemove",function(dets){
        cursor.style.left=dets.x-10+"px";
        cursor.style.top=dets.y-10+"px";
        cursor_blur.style.left=dets.x-200+"px";
        cursor_blur.style.top=dets.y-200+"px";

})
var navh4all = document.querySelectorAll("#nav h4");

gsap.to("#nav",{
    backgroundColor: "black",
    height:"110px",
    duration:0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:1
    }
});
gsap.to("#main",{
    backgroundColor:"black",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers:true,
        start:"top -25%",
        end:"top -70%",
        scrub:2
    }
})
gsap.from("#about-us img,#about-us-in",{
    y:50,
    opacity:0,
    duration:1,
    // stagger:0.4,
    scrollTrigger:{
        trigger:"#about-us",
        scroll:"#body",
        // markers:true, 
        start:"top 60%",
        end:"top 75%",
        scrub:1
    }
})
gsap.from(".card",{
    scale:0.8,
    opacity:0,
    duration:1,
    // stagger:0.1,
    scrollTrigger:{
        trigger:".card",
        scroll:"#body",
        // markers:true, 
        start:"top 70%",
        end:"top 65%",
        scrub:1
    }
})
gsap.from("#colon-1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colon-1",
        scroll:"body",
        start:"top 60%",
        end:"top 70%",
        scrub:4
    }
})
gsap.from("#colon-2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#colon-1",
        scroll:"body",
        start:"top 60%",
        end:"top 70%",
        scrub:4
    }
})
gsap.from("#page4 h1",{
    y:50,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroll:"body",
        start:"top 75%",
        end:"top 70%",
        scrub:3
    }
})