class UberPricing {
    constructor(baseFare, costPerKm, costPerMinute) {
      this.baseFare = baseFare;
      this.costPerKm = costPerKm;
      this.costPerMinute = costPerMinute;
    }
 
    calculatePrice(distanceKm, timeMinutes) {
      const fare = this.baseFare + (distanceKm * this.costPerKm) + (timeMinutes * this.costPerMinute);
      return fare;
    }
  }
 
  const baseFare=3;
  const constperKM=10;
  const costPerMinute=1.5;


  const uberX = new UberPricing(baseFare,constperKM,costPerMinute);


  const distance = 10;
  const time = 20;
 
  const price = uberX.calculatePrice(distance, time);
  console.log("Estimated UberX Price:", price);


  //Output:
  //   Estimated UberX Price: 133