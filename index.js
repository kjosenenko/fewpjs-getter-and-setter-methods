const pi = Math.PI

class Circle {
    constructor(radius) {
        this.radius = radius
    }

    get diameter() {
        return this.radius * 2
    }

    get circumference() {
        return 2 * pi * this.radius
   }

   get area() {
        return pi * (this.radius * this.radius)
   }

   set diameter(d) {
        this.radius = d / 2
   }

   set circumference(c) {
        this.radius = (c / pi) / 2
   }

}