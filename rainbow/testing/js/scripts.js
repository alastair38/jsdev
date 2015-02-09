var Turtle = function (name) {
    "use strict";
    this.name = name;
    this.sayHi = function () {
        return "Hi dude, my name is " + this.name;
    };
};

var leo = new Turtle("Leonardo");

Turtle.prototype.weapon = "Hands";

Turtle.prototype.attack = function () {
    "use strict";
    return this.name + " hits you with his " + this.weapon;
};

var raph = new Turtle("Raphael");
