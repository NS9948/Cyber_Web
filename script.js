var tl = gsap.timeline();
function animationPg1(){
    gsap.from(".cover",{
        delay: 0.1,
        opacity: 0,
        duration: 1,
        ease: "power1.in",
    })
    
    
    gsap.from("li",{
        y:  10,
        duration: 0.91,
        opacity: 0,
        stagger: 0.1,
        delay: 0.5,
    })
    gsap.from(".text1",{
        x: 10,
        duration: 1,
        opacity: 0,
        ease: "slow(0.7,0.7,false)",
        delay: 0.5,
    })
    gsap.from(".text2",{
        x: 10,
        duration: 1,
        opacity: 0,
        ease: "slow(0.7,0.7,false)",
        delay: 0.5,
    })
    gsap.from(".text4",{
        y: 10,
        duration: 1,
        opacity: 0,
        ease: "slow(0.7,0.7,false)",
        delay: 0.5,
    })
    gsap.from(".bg1",{
        x: 10,
        duration: 1,
        opacity: 0,
        ease: "slow(0.7,0.7,false)",
        delay: 0.5,
    })
    gsap.from(".text3",{
        x:  10,
        duration: 1,
        opacity: 0,
        ease: "slow(0.7,0.7,false)",
        delay: 0.5,
    })
    gsap.from(".img1",{
        rotate:  10,
        x: -60,
        duration: 3,
        opacity: 0,
        ease: "expo.out",
        scale: 0,
        delay: 0.5,
    })
}

animationPg1();


function animationPg2(){
    gsap.from(".txt h1", {
        scrollTrigger: {
            trigger: ".txt h1",
            start: "top 80%",
            end: "top 10%",
            scrub: 0.1,
        },
        y: -190,
        duration: 1,
        ease: "bounce.out",
        opacity: 0,
        delay: 10,
    });
    gsap.from(".tri", {
        scrollTrigger: {
            trigger: ".tri",
            start: "top 80%",
            end: "top 10%",
            scrub: 0.1
        },
        x: 190,
        duration: 1,
        ease: "bounce.out",
        opacity: 0,
        delay: 10,
    });
    gsap.from(".txt-btm", {
        scrollTrigger: {
            trigger: ".txt-btm",
            start: "top 80%",
            end: "top 10%",
            scrub: 0.1
        },
        y: 190,
        duration: 1,
        ease: "bounce.out",
        opacity: 0,
        delay: 10,
    });
    gsap.from(".c11", {
        scrollTrigger: {
            trigger: ".c11",
            start: "top 80%",
            end: "top 10%",
            scrub: 0.1
        },
        x: 240,
        duration: 10,
        opacity: 0,
        ease: "slow(0.7,0.7,false)",
        scale: 0,
    });
    gsap.from(".c22", {
        scrollTrigger: {
            trigger: ".c22",
            start: "top 80%",
            end: "top 10%",
            scrub: 0.1
        },
        x: -240,
        duration: 10,
        opacity: 0,
        ease: "slow(0.7,0.7,false)",
        scale: 0,
    });
    gsap.from(".cc1", {
        scrollTrigger: {
            trigger: ".cc1",
            start: "top 80%",
            end: "top 10%",
            scrub: 0.1
        },
        y: -140,
        duration: 1,
        opacity: 0,
        ease: "slow(0.7,0.7,false)",
        scale: 0,
        delay: 1,
    });
    gsap.from(".cc2", {
        scrollTrigger: {
            trigger: ".cc2",
            start: "top 80%",
            end: "top 10%",
            scrub: 0.1
        },
        y: 140,
        duration: 1,
        opacity: 0,
        ease: "slow(0.7,0.7,false)",
        scale: 0,
        delay: 1,
    });
    gsap.from(".tri-line1", {
        scrollTrigger: {
            trigger: ".tri-line1",
            start: "top 80%",
            end: "top 10%",
            scrub: 0.1
        },
        duration: 1,
        opacity: 0,
        ease: "slow(0.7,0.7,false)",
        delay: 10,
    });
    gsap.from(".tri-line2", {
        scrollTrigger: {
            trigger: ".tri-line2",
            start: "top 80%",
            end: "top 10%",
            scrub: 0.1
        },
        duration: 1,
        opacity: 0,
        ease: "slow(0.7,0.7,false)",
        delay: 10,
    });
    gsap.from(".line1", {
        scrollTrigger: {
            trigger: ".line1",
            start: "top 80%",
            end: "top 10%",
            scrub: 0.1
        },
        width: "0%",
        duration: 10,
        ease: "slow(0.7,0.7,false)",
    });
    gsap.from(".line2", {
        scrollTrigger: {
            trigger: ".line2",
            start: "top 80%",
            end: "top 10%",
            scrub: 0.1
        },
        scaleX: 0,
        duration: 10,
        ease: "slow(0.7,0.7,false)",
    });
}

animationPg2();

function animationPg3(){
    gsap.from(".l1", {
        width: "0%",
        duration: 1,
        ease: "slow(0.7,0.7,false)",
        scrollTrigger: {
            trigger: ".page3",
            start: "top 10%",
        }
    });
    gsap.from(".l2", {
        width: "0%",
        duration: 1,
        ease: "slow(0.7,0.7,false)",
        scrollTrigger: {
            trigger: ".page3",
            start: "top 10%",
        }
    });
    gsap.from(".l3", {
        width: "0%",
        duration: 1,
        ease: "slow(0.7,0.7,false)",
        scrollTrigger: {
            trigger: ".page3",
            start: "top 10%",
        }
    });
    gsap.from(".l4", {
        height: "0%",
        duration: 1,
        ease: "slow(0.7,0.7,false)",
        scrollTrigger: {
            trigger: ".page3",
            start: "top 10%",
        }
    });
    gsap.from(".l5", {
        height: "0%",
        duration: 1,
        ease: "slow(0.7,0.7,false)",
        scrollTrigger: {
            trigger: ".page3",
            start: "top 10%",
        }
    });
    gsap.from(".l6", {
        height: "0%",
        duration: 1,
        ease: "slow(0.7,0.7,false)",
        scrollTrigger: {
            trigger: ".page3",
            start: "top 10%",
        }
    });
    gsap.from(".circle", {
        scale: 0,
        opacity: 0,
        duration: 1,
        ease: "slow(0.7,0.7,false)",
        scrollTrigger: {
            trigger: ".page3",
            start: "top 10%",
        }
    });
    gsap.from(".content", {
        ease: "slow(0.7,0.7,false)",
        scrollTrigger: {
            trigger: ".page3",
            start: "top 10%",
        }
    });
    gsap.from(".pg3-txt", {
        y: -190,
        duration: 1,
        opacity: 0,
        ease: "slow(0.7,0.7,false)",
        scrollTrigger: {
            trigger: ".page3",
            start: "top 10%",
        }
    });
    gsap.from(".pg3-txt2", {
        x: -590,
        duration: 1,
        opacity: 0,
        ease: "slow(0.7,0.7,false)",
        scrollTrigger: {
            trigger: ".page3",
            start: "top 10%",
        }
    })
    gsap.from(".team", {
        x: -590,
        duration: 1,
        opacity: 0,
        ease: "slow(0.7,0.7,false)",
        scrollTrigger: {
            trigger: ".page3",
            start: "top 10%",
        }
    })
    gsap.from(".h31, .h41", {
        y: 100,
        duration: 0.5,
        opacity: 0,
        ease: "slow(0.7,0.7,false)",
        stagger: 0.1,
        scrollTrigger: {
            trigger: ".page3",
            start: "top 10%",
        }
    });
    gsap.from(".image", {
        rotate: -120,
        duration: 1.5,
        opacity: 0,
        ease: "slow(0.7,0.7,false)",
        scrollTrigger: {
            trigger: ".page3",
            start: "top 10%",
        }
    })
    gsap.from(".read", {
        y: 10,
        duration: 0.5,
        opacity: 0,
        ease: "slow(0.7,0.7,false)",
        scrollTrigger: {
            trigger: ".page3",
            start: "top 10%",
        }
    })
    gsap.from(".para", {
        y: 100,
        duration: 0.5,
        opacity: 0,
        ease: "slow(0.7,0.7,false)",
        scrollTrigger: {
            trigger: ".page3",
            start: "top 10%",
        }
    })
    gsap.from(".end", {
        x: 100,
        duration: 1,
        opacity: 0,
        ease: "slow(0.7,0.7,false)",
        scrollTrigger: {
            trigger: ".page3",
            start: "top 10%",
        }
    });
    gsap.from(".last", {
        duration: 1,
        opacity: 0,
        ease: "slow(0.7,0.7,false)",
        scrollTrigger: {
            trigger: ".page3",
            start: "top 10%",
        }
    });
    gsap.from(".circlee", {
        duration: 1.5,
        rotate: 240,
        ease: "slow(0.7,0.7,false)",
        scrollTrigger: {
            trigger: ".page3",
            start: "top 10%",
        }
    });
}

animationPg3();
