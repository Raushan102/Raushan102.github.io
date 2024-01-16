

gsap.from(["#Name","#textarea","#email","#NAME","#EMAIL","#MESSAGE","#submit","#fORM","#MAIN"],{

    transform: 'rotateX(20deg)',
   transform: 'skewX(10deg)',
   scale:1.5
   


})

const t1=gsap.timeline()

t1.from("#submit",{
    y:10
}).to("#submit",{
    y:10,
    repeat:-1,
    yoyo:true

})