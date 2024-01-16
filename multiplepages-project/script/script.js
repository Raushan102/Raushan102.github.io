const tl = gsap.timeline();
tl.from("#header", {
  scale: 1.5,
  duration: 0.5,
  yoyo:true,
}).add(() => {
  gsap.from("#center_left_content", {
    x: -700,
    duration: 1,
    yoyo:true,
  });
  gsap.from("#Ride_side_docter_in_center", {
    x: 700,
    duration: 1,
    yoyo:"true",
  });
}, "<");
