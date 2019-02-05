const store = {drivers: [], passengers: [], trips: []}

let driverId = 0

class Driver {
  constructor(name) {
  this.name = name;
  this.id = ++driverId;

    store.drivers.push(this);
  };

  trips() {
    return store.trips.filter(
      function(trip) {
        return trip.driverId === this.id
      }.bind(this)
    );
  }
  // ***SOLUTION-BRANCH***
  // trips() {
  // return store.trips.filter(trip => {
  //   return trip.driverId == this.id;
  //   });
  // }
  passengers() {
    return this.trips().map(trip => {
      return trip.passenger()
    })
  }

}

let passengerId = 0
class Passenger {
  constructor(name) {
  this.name = name;
  this.id = ++passengerId;

    store.passengers.push(this);
  };

  trips() {
    return store.trips.filter(
      function(trip) {
        return trip.passengerId === this.id
      }.bind(this)
    );
  }
  drivers() {
    return this.trips().map(trip => {
      return trip.driver()
    })
  }
}

let tripId = 0
class Trip {
  constructor(driver, passenger) {
    this.setDriver(driver);
    this.setpPassenger(passenger);

    this.id = ++tripId;

    store.trips.push(this);
  };

  setDriver(driver) {
    this.driverId = driver.id
  }
  setpPassenger(passenger) {
    this.passengerId = passenger.id
  }

  passenger(){
    return store.passengers.find(
      function(passenger) {
        return passenger.id === this.passengerId
      }.bind(this)
    );
  }

  driver() {
    return store.drivers.find(
      function(driver) {
        return driver.id === this.driverId
      }.bind(this)
    );
  }

}
