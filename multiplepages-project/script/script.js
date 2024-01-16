const tl = gsap.timeline();
tl.from("#header", {
  scale: 1.5,
  duration: 0.5,
  yoyo: true,
})
  .add(() => {
    gsap.from("#center_left_content", {
      x: -700,
      scale:1.5,
      duration: 1,
      yoyo: true,
    });
    gsap.from("#Ride_side_docter_in_center", {
      x: 700,
      duration: 1,
     
    });
  }, "<")
  .from("#mouseImage", {
    y: 20,
    duration: 0.5,
    yoyo:true,
  }).to("#mouseImage", {
    y: 20,
    duration: 0.5,
    animationDirection: 'alternate',
    repeat:-1,
    scale:0.5,
    yoyo:true
  })
  
  
  
