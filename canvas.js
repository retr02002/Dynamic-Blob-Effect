var canvas = document.getElementById("can");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext("2d");

// c.fillStyle = "blue";
// c.fillRect(100, 100, 100, 100);
// c.fillRect(400, 100, 100, 100);
// c.fillRect(300, 300, 100, 100);
// c.fillRect(500, 100, 100, 100);


console.log(canvas);

// Line //

// c.beginPath();
// c.moveTo(50, 300);
// c.lineTo(300, 100);
// c.strokeStyle = "red";
// c.stroke();

// Circle //

// c.beginPath();
// c.arc(100, 75, 50, 0, 2 * Math.PI);
// c.fillStyle = "red";
// c.fill();

// Adding Circle Using For Loop Through Canvas //

// for (var i = 0; i <= 3; i++) {
//     var x = Math.random() * window.innerWidth;
//     var y = Math.random() * window.innerHeight;
//     c.beginPath();
//     c.arc(x, y, 50, 0, 2 * Math.PI);
//     c.fillStyle = "red";
//     c.fill();
// }

// Interacting With The Object In Canvas OR Animating The Objects ///

// var x = Math.random() * window.innerWidth;
// var y = Math.random() * window.innerHeight;
// var radius = 50;
// var dx = (Math.random() - 0.5) * 8;
// var dy = (Math.random() - 0.5) * 8;

// function animate() {
//     requestAnimationFrame(animate);
//     c.clearRect(0, 0, innerWidth, innerHeight)
//     c.beginPath();
//     c.arc(x, y, radius, 0, 2 * Math.PI, false);
//     c.fillStyle = "red";
//     c.fill();
//     if (x + radius >= innerWidth || x - radius < 0) {
//         dx = -dx;
//     } else if (y + radius >= innerHeight || y - radius < 0) {
//         dy = -dy;
//     }
//     x += dx;
//     y += dy
// }

// animate();


//// Generating multiple circle throughout the canvas ////

// function Circle(x, y, dx, dy, radius) {
//     this.x = x;
//     this.y = y;
//     this.dx = dx;
//     this.dy = dy;
//     this.radius = radius;

//     this.draw = function() {
//         c.beginPath();
//         c.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
//         c.fillStyle = "red";
//         c.fill();
//     }

//     this.update = function() {
//         if (this.x + this.radius >= innerWidth || this.x - this.radius < 0) {
//             this.dx = -this.dx;
//         } else if (this.y + this.radius >= innerHeight || this.y - this.radius < 0) {
//             this.dy = -this.dy;
//         }
//         this.x += this.dx;
//         this.y += this.dy

//         this.draw();
//     }
// }

// var circleArray = [];

// for (var i = 0; i <= 100; i++) {
//     var radius = 50;
//     var x = Math.random() * (innerWidth - radius * 2) + radius;
//     var y = Math.random() * (innerHeight - radius * 2) + radius;
//     var dx = (Math.random() - 0.5);
//     var dy = (Math.random() - 0.5);
//     circleArray.push(new Circle(x, y, dx, dy, radius))
// }


// function animate() {
//     requestAnimationFrame(animate);
//     c.clearRect(0, 0, innerWidth, innerHeight)
//     for (var i = 0; i <= circleArray.length; i++) {
//         circleArray[i].update();
//     }
// }

// animate();


/// Interactive Canvas ///
var mouse = {
    x: undefined,
    y: undefined
}

window.addEventListener('mousemove', function(event) {
    mouse.x = event.x;
    mouse.y = event.y;
    console.log(mouse)
})

window.addEventListener('resize', function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // To Generate Circles Dynamically //
    // init();
})

function Circle(x, y, dx, dy, radius, maxRadius, color, minRadius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.maxRadius = maxRadius;
    this.minRadius = minRadius;
    this.color = color;

    this.draw = function() {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
        c.fillStyle = color;
        c.fill();
    }

    this.update = function() {
        if (this.x + this.radius >= innerWidth || this.x - this.radius < 0) {
            this.dx = -this.dx;
        } else if (this.y + this.radius >= innerHeight || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;

        // Interactivity //
        if (mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y - this.y > -50) {
            if (this.radius < maxRadius) {
                this.radius += 1;
            }
        } else if (this.radius > this.minRadius) {
            this.radius -= 1;
        }

        this.draw();
    }
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

var circleArray = [];

for (var i = 0; i <= 1000; i++) {
    var radius = Math.random() * 3 + 1;
    var maxRadius = 40;
    var minRadius = 2;
    var color = getRandomColor()
    var x = Math.random() * (innerWidth - radius * 2) + radius;
    var y = Math.random() * (innerHeight - radius * 2) + radius;
    var dx = (Math.random() - 0.5);
    var dy = (Math.random() - 0.5);
    circleArray.push(new Circle(x, y, dx, dy, radius, maxRadius, color, minRadius))
}


/// Generate Circles Dynamically ///
// function init() {

//     circleArray = [];

//     for (var i = 0; i <= 800; i++) {
//         var radius = Math.random() * 3 + 1;
//         var maxRadius = 40;
//         var minRadius = 2;
//         var color = getRandomColor()
//         var x = Math.random() * (innerWidth - radius * 2) + radius;
//         var y = Math.random() * (innerHeight - radius * 2) + radius;
//         var dx = (Math.random() - 0.5);
//         var dy = (Math.random() - 0.5);
//         circleArray.push(new Circle(x, y, dx, dy, radius, maxRadius, color, minRadius))
//     }
// }


function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight)
    for (var i = 0; i < circleArray.length; i++) {
        circleArray[i].update();
    }
}

animate();