//Square Class
var side;
var square = function (side) {
    this.side = side;
}
square.prototype.sqr = function (side) {
    return (side * side);
}

square.prototype.enLarge = function (ds) {
    this.side += ds;
}
square.prototype.area = function () {
    return (this.side * this.side);
}
square.prototype.perimeter = function () {
    return (4 * this.side);
}
square.prototype.getSide = function () {
    return this.side;
}
square.prototype.setSide = function (side) {
    this.side = side;
}
square.prototype.isLarge = function () {
    if (this.side < 10) {
        return false;
    } else if (this.side > 10) {
        return true;
    }
}





//Circle Class
var radius = 0;
var Circle = function (r) {
    this.radius = r;
}
Circle.prototype.pie = function () {
    return (3.1416);
}

Circle.prototype.enLarge = function (dr) {
    this.radius += dr;
}
Circle.prototype.area = function () {

    return (this.pie() * this.radius * this.radius);
}
Circle.prototype.circumference = function () {
    return (2 * this.pie() * this.radius);
}
Circle.prototype.getRadius = function () {    
    return (this.radius);
}
Circle.prototype.setRadius = function (radius) {
    this.radius = radius;
}
Circle.prototype.isLarge = function () {
    if (this.radius < 10) {
        return false;
    } else if (this.radius >= 10) {
        return true;
    }
}




//Coin Class
var circle;
var sqr;
var Coin = function (circle, sqr) {
    this.circle = circle;
    this.sqr = sqr;
}
Coin.prototype.getCircleArea = function () {
    return circle.area;

}
Coin.prototype.getSquareArea = function () {
    return sqr.area();
}

Coin.prototype.area = function () {
    return (circle.area() - sqr.area());
};

Coin.prototype.getCrcl = function () {
    return this.circle;
};

Coin.prototype.setCrcl = function (c) {
    this.circle = c;
};
Coin.prototype.getsqr = function () {
    return this.sqr;
};

Coin.prototype.setsqr = function (s) {
    this.sqr = s;
}
;
Coin.prototype.isNormal = function () {
    return (this.area() > 0);
};





//AncientCoin Class
var age;

function trace(s) {
    alert(s);
}
var AncientCoin = function (circle, sqre, age1) {
    this.age = age1;
    Coin.call(circle, sqre);
}
AncientCoin.prototype = Object.create(Coin.prototype);
AncientCoin.prototype.constructor = AncientCoin;

AncientCoin.prototype.melt = function () {
    this.age = 0;
}
AncientCoin.prototype.getAge = function () {
    return this.age;
}
AncientCoin.prototype.setAge = function (age) {
    this.age = age;
}
AncientCoin.prototype.isOld = function () {
    if (this.age < 1000) {
        return false;
    } else if (this.age > 1000) {
        return true;
    }
}


circle = new Circle(2);
sqr = new square(2);
console.log(circle.getRadius());
console.log(sqr.getSide());
aCoin = new AncientCoin(circle, sqr, 2000);

document.getElementById("div1").innerHTML = "The area of coin is "
		+ aCoin.area();
if (aCoin.isNormal()) {
    document.getElementById("div2").innerHTML = "Coin is normal coin";
} else {
    document.getElementById("div2").innerHTML = "Coin is not normal coin";
}

if (aCoin.isOld()) {
    document.getElementById("div3").innerHTML = "Coin is old coin";

} else {
    document.getElementById("div3").innerHTML = "Coin is not old coin";
}


