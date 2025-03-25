class Car {
    constructor(brand, speed) {
        this.brand = brand;
        this.speed = speed;
    }

    // Method to increase speed
    increaseSpeed(amount) {
        this.speed += amount;
        console.log(`The speed of the ${this.brand} is now ${this.speed} km/h.`);
    }
}

// Example usage
const myCar = new Car('BMW', 100);
myCar.increaseSpeed(20);  // The speed of the BMW is now 120 km/h.
