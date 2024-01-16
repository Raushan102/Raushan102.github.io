gsap.from("#body", {
  scale: 1.5,
});

let T1 = gsap.timeline();

T1.from("#box1", {
  x: 700,
  opacity: 0,
  scale: 1.5,
})
  .from("#box3", {
    x: 800, // Example parameter for "box2"
    opacity: 0,
    scale: 1.5,
  })
  .from("#box2", {
    y: 300, // Example parameter for "box3"
    opacity: 0,
    scale: 1.5,
  })
  .from(["#main-h2i"], {
    textShadow:
      "0 1px 0 #ccc, 0 2px 0 #c9c9c9, 0 3px 0 #bbb, 0 4px 0 #b9b9b9, 0 5px 0 #aaa, 0 6px 1px rgba(0,0,0,.1), 0 0 5px rgba(0,0,0,.1), 0 1px 3px rgba(0,0,0,.3), 0 3px 5px rgba(0,0,0,.2), 0 5px 10px rgba(0,0,0,.25), 0 10px 10px rgba(0,0,0,.2), 0 20px 20px rgba(0,0,0,.15)",
  });
