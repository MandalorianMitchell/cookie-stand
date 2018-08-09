var hours = ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'];

var firstStand = {
  name: 'Pioneer Place',
  minCustomers: 17,
  maxCustomers: 88,
  averageSales: 5.2,
  customersHour: function () {
    var min = Math.ceil(firstStand.minCustomers);
    var max = Math.floor(firstStand.maxCustomers);
    var randomCustomer = Math.floor(Math.random() * (max - min)) + min;
    return parseInt(randomCustomer);
  },

  cookiesHour: function () {
    var pioneerList = document.getElementById('pioneers-cookies-list');
    for (var index = 0; index < hours.length; index++) {
      var cookie = Math.floor(this.averageSales * this.customersHour(this.minCustomers, this.maxCustomers));
      pioneerList.innerHTML += '<li>' + cookie + '</li>';
      console.log(cookie);
    }
  },
};
firstStand.cookiesHour();

var secondStand = {
  name: 'Portland Airport',
  minCustomers: 6,
  maxCustomers: 24,
  averageSales: 1.2,
  customersHour: function () {
    var min = Math.ceil(secondStand.minCustomers);
    var max = Math.floor(secondStand.maxCustomers);
    var randomCustomer = Math.floor(Math.random() * (max - min)) + min;
    return parseInt(randomCustomer);
  },

  cookiesHour: function () {
    var airportList = document.getElementById('airport-cookies-list');
    for (var index = 0; index < hours.length; index++) {
      var cookie = Math.floor(this.averageSales * this.customersHour(this.minCustomers, this.maxCustomers));
      airportList.innerHTML += '<li>' + cookie + '</li>';
      console.log(cookie);
    }
  },
};
secondStand.cookiesHour();

var thirdStand = {
  name: 'Washington Square',
  minCustomers: 11,
  maxCustomers: 38,
  averageSales: 1.9,
  customersHour: function () {
    var min = Math.ceil(thirdStand.minCustomers);
    var max = Math.floor(thirdStand.maxCustomers);
    var randomCustomer = Math.floor(Math.random() * (max - min)) + min;
    return parseInt(randomCustomer);
  },

  cookiesHour: function () {
    var washingtonList = document.getElementById('washington-cookies-list');
    for (var index = 0; index < hours.length; index++) {
      var cookie = Math.floor(this.averageSales * this.customersHour(this.minCustomers, this.maxCustomers));
      washingtonList.innerHTML += '<li>' + cookie + '</li>';
      console.log(cookie);
    }
  },
};
thirdStand.cookiesHour();

var fourthStand = {
  name: 'Sellwood',
  minCustomers: 20,
  maxCustomers: 48,
  averageSales: 3.3,
  customersHour: function () {
    var min = Math.ceil(fourthStand.minCustomers);
    var max = Math.floor(fourthStand.maxCustomers);
    var randomCustomer = Math.floor(Math.random() * (max - min)) + min;
    return parseInt(randomCustomer);
  },

  cookiesHour: function () {
    var sellwoodList = document.getElementById('sellwood-cookies-list');
    for (var index = 0; index < hours.length; index++) {
      var cookie = Math.floor(this.averageSales * this.customersHour(this.minCustomers, this.maxCustomers));
      sellwoodList.innerHTML += '<li>' + cookie + '</li>';
      console.log(cookie);
    }
  },
};
fourthStand.cookiesHour();

var fifthStand = {
  name: 'Pearl District',
  minCustomers: 3,
  maxCustomers: 24,
  averageSales: 2.6,
  customersHour: function () {
    var min = Math.ceil(fifthStand.minCustomers);
    var max = Math.floor(fifthStand.maxCustomers);
    var randomCustomer = Math.floor(Math.random() * (max - min)) + min;
    return parseInt(randomCustomer);
  },

  cookiesHour: function () {
    var pearlList = document.getElementById('pearl-cookies-list');
    for (var index = 0; index < hours.length; index++) {
      var cookie = Math.floor(this.averageSales * this.customersHour(this.minCustomers, this.maxCustomers));
      pearlList.innerHTML += '<li>' + cookie + '</li>';
      console.log(cookie);
    }
  },
};
fifthStand.cookiesHour();
