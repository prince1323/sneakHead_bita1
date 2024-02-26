
//for welcome section animation of text and image

function welcomeAnimation() {
    let t = gsap.timeline();

    t.from("#wel-img", {
        y: 300,
        opacity: 0,
        duration: 1,
        delay: 0.2
    })

    t.to("#wel-img", {
        rotateY: -180,
        duration: 2,
    }, "header-ani")

    t.from(".wel-disc", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 1
    }, "header-ani")

    t.from(".ham", {
        rotate: 360,
        opacity: 0,
        duration: 1,
        stagger: 1
    }, "header-ani")

    t.from(".entry-btn", {
        y: 200,
        display: "none",
        opacity: 1,
        duration: 2,
        repeat: -1,
        yoyo: true,
    })

    gsap.to(".wel-strip", {
        opacity:1,
        duration:2
    })

    gsap.to(".wel-strip>span", {
        x: 700,
        // opacity:0,
        duration: 15,
        repeat: -1,
        yoyo: true,
    })

}
welcomeAnimation();

//on clicking the start btn

function expand() {
    let t1 = gsap.timeline();
    setTimeout(function abc() {
        t1.to(".entry-btn", {
            scale: 20,
            duration: 1,
            delay: 0.2,
            backgroundColor: "black",
        }, "enter-btn")

        t1.to(".entry-btn h3", {
            duration: 1,
            opacity: 0
        }, "enter-btn")

        t1.to(".entry-btn", {
            opacity: 0,
            display: "none",
            duration: 1,
        }, "wel-disappear")

        t1.to("header", {
            opacity: 0,
            display: "none",
        }, "wel-disappear")

        t1.to(".hoverer",{
            y:-200,
            repeat:-1,
            opacity:1,
            duration:2,
            yoyo:true
        },"together")

        t1.from(".sec1-text>h1>span",{
            y:-200,
            opacity:0,
            stagger:0.5
        },"together")  

    }, 100)
}

// font hamburger menu

let flag = true;

function hamMenu() {

    let hamList = document.querySelector(".list");

    let t2 = gsap.timeline();

    if (flag) {
        t2.to(".ham1", {
            rotate: 45,
        }, "simul")

        t2.to(".ham2", {
            rotate: -45,
        }, "simul")

        t2.to(".list-item",{
            x:30,
            opacity:1,
            stagger:0.2
        },"simul")
        flag = false;
    }
    else {
        t2.to(".ham1", {
            rotate: 0,
        }, "simul")

        t2.to(".ham2", {
            rotate: 0,
        }, "simul")

        t2.to(".list-item",{
            x:-20,
            opacity:0,
            stagger:0.2
        }, "simul")
        flag = true;
    }
}

//page2 collabe btn animation

function expand2() {
    let t1 = gsap.timeline();
    setTimeout(function abc() {
        t1.to(".hoverer", {
            scale: 50,
            duration: 1,
            delay: 0.2,
            backgroundColor: "black",
        }, "enter-btn")

        t1.to(".hoverer h1", {
            duration: 1,
            opacity: 0
        }, "enter-btn")

        t1.to(".hoverer", {
            opacity: 0,
            display: "none",
            duration: 1,
        }, "wel-disappear")

        t1.to(".section1", {
            opacity:0,
            display: "none",
        }, "wel-disappear")
    }, 100)



    //section3

    let t4 = gsap.timeline();

    t4.from(".guide",{
        y:50,
        delay:2,
        opacity:0,
        duration:1.5
    })

    t4.to(".guide",{
        y:-50,
        opacity:0,
        delay:2,
        display:"none",
        duration:1.5
    })

    t4.from(".director",{
        y:100,
        repeat:-1,
        yoyo:true,
        duration:1
    })

    t4.from(".director>h2",{
        y:13,
        repeat:-1,
        yoyo:true,
        duration:1
    },"simul")

    t4.from(".down-arrow",{
        y:-13,
        repeat:-1,
        yoyo:true,
        duration:1
    },"simul")

}



//section3

// function section3(){
   

// }

// section3();





