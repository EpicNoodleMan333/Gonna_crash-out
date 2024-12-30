const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");




const colors = [
    "#08e8f4",
    "#00f0e2",
    "#00f7c9",
    "#3bfbaa",
    "#71fe87",
    "#a0fe61",
    "#cffa39",
    "#fff300"
];


circles.forEach(function (circle, index) {
    circle.x = 0;
    circle.y = 0;
    circle.style.backgroundColor = colors[index % colors.length];
});


window.addEventListener("mousemove", function(e){


    console.log("mousemove");
   


    coords.y = e.clientY;
    coords.x = e.clientX;


});


function animateCircles() {


    let x = coords.x;
    let y = coords.y;


    circles.forEach(function (circle, index) {
        circle.style.left = y - 12 + "px";
        circle.style.top = x - 12 + "px";


        circle.style.scale = (circles.length - index) / circles.length;


        circle.x = x;
        circle.y = y;


        const nextCircle = circles[index + 1] || circles[0];
        x += (nextCircle.x - x) * 0.3;
        y += (nextCircle.y - y) * 0.3;
    });


    requestAnimationFrame(animateCircles);
}


animateCircles();
