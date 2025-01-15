// Wheel class that defines the properties of a wheel
class Wheel {
  // Declare properties of the Wheel class using private access modifier
  private diameter: number;
  private tireBrand: string;

  // Constructor for the Wheel class
  constructor(diameter: number = 18, tireBrand: string = 'GoodYear') {
    this.diameter = diameter;
    this.tireBrand = tireBrand;
  }

  // Getter method for the diameter property
  get diameterValue(): number {
    return this.diameter;
  }

  // Getter method for the tireBrand property
  get tireBrandValue(): string {
    return this.tireBrand;
  }

  // Setter method for the diameter property
  set diameterValue(newDiameter: number) {
    if (newDiameter > 0) {
      this.diameter = newDiameter;
    } else {
      console.log('Diameter must be a positive number.');
    }
  }

  // Setter method for the tireBrand property
  set tireBrandValue(newTireBrand: string) {
    if (newTireBrand.trim().length > 0) {
      this.tireBrand = newTireBrand;
    } else {
      console.log('Tire brand cannot be empty.');
    }
  }
}

// Export the Wheel class
export default Wheel;

