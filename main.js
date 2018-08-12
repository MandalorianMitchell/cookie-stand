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
      var cookie = Math.floor(this.averageSales * this.customersHour(this.minCustomers, this.maxCustomers));
      return cookie;
    },

  toHTML: function () {
      var totalCookies = 0;
      var HTML = '<table><tr><th colspan="2">' + this.name + '</th></tr><tr><th>Hour</th><th>Cookies Sold</th></tr>';
      for (var hourly = 0; hourly < hours.length; hourly++) {
        var randomCookiesHour = this.cookiesHour();
        console.log(randomCookiesHour);
        HTML += '<tr><td>' + hours[hourly] + '</td><td>' + randomCookiesHour + ' Cookies' + '</td></tr>';
        totalCookies += randomCookiesHour;
      }

      HTML += '<tr><td colspan="2">' + 'Total: ' + totalCookies + '</td></tr>' + '</table>';
      console.log('Total: ' + totalCookies);
      return HTML;

    },
};
var firstCookies = document.getElementById('pioneer-cookies');
firstCookies.innerHTML = firstStand.toHTML();

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
      var cookie = Math.floor(this.averageSales * this.customersHour(this.minCustomers, this.maxCustomers));
      return cookie;
    },

  toHTML: function () {
      var totalCookies = 0;
      var HTML = '<table><tr><th colspan="2">' + this.name + '</th></tr><tr><th>Hour</th><th>Cookies Sold</th></tr>';
      for (var hourly = 0; hourly < hours.length; hourly++) {
        var randomCookiesHour = this.cookiesHour();
        console.log(randomCookiesHour);
        HTML += '<tr><td>' + hours[hourly] + '</td><td>' + randomCookiesHour + ' Cookies' + '</td></tr>';
        totalCookies += randomCookiesHour;
      }

      HTML += '<tr><td colspan="2">' + 'Total: ' + totalCookies + '</td></tr>' + '</table>';
      console.log('Total: ' + totalCookies);
      return HTML;

    },
};
var secondCookies = document.getElementById('airport-cookies');
secondCookies.innerHTML = secondStand.toHTML();

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
      var cookie = Math.floor(this.averageSales * this.customersHour(this.minCustomers, this.maxCustomers));
      return cookie;
    },

  toHTML: function () {
      var totalCookies = 0;
      var HTML = '<table><tr><th colspan="2">' + this.name + '</th></tr><tr><th>Hour</th><th>Cookies Sold</th></tr>';
      for (var hourly = 0; hourly < hours.length; hourly++) {
        var randomCookiesHour = this.cookiesHour();
        console.log(randomCookiesHour);
        HTML += '<tr><td>' + hours[hourly] + '</td><td>' + randomCookiesHour + ' Cookies' + '</td></tr>';
        totalCookies += randomCookiesHour;
      }

      HTML += '<tr><td colspan="2">' + 'Total: ' + totalCookies + '</td></tr>' + '</table>';
      console.log('Total: ' + totalCookies);
      return HTML;

    },
};
var thirdCookies = document.getElementById('washington-cookies');
thirdCookies.innerHTML = thirdStand.toHTML();

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
      var cookie = Math.floor(this.averageSales * this.customersHour(this.minCustomers, this.maxCustomers));
      return cookie;
    },

  toHTML: function () {
      var totalCookies = 0;
      var HTML = '<table><tr><th colspan="2">' + this.name + '</th></tr><tr><th>Hour</th><th>Cookies Sold</th></tr>';
      for (var hourly = 0; hourly < hours.length; hourly++) {
        var randomCookiesHour = this.cookiesHour();
        console.log(randomCookiesHour);
        HTML += '<tr><td>' + hours[hourly] + '</td><td>' + randomCookiesHour + ' Cookies' + '</td></tr>';
        totalCookies += randomCookiesHour;
      }

      HTML += '<tr><td colspan="2">' + 'Total: ' + totalCookies + '</td></tr>' + '</table>';
      console.log('Total: ' + totalCookies);
      return HTML;

    },
};
var fourthCookies = document.getElementById('sellwood-cookies');
fourthCookies.innerHTML = fourthStand.toHTML();

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
      var cookie = Math.floor(this.averageSales * this.customersHour(this.minCustomers, this.maxCustomers));
      return cookie;
    },

  toHTML: function () {
      var totalCookies = 0;
      var HTML = '<table><tr><th colspan="2">' + this.name + '</th></tr><tr><th>Hour</th><th>Cookies Sold</th></tr>';
      for (var hourly = 0; hourly < hours.length; hourly++) {
        var randomCookiesHour = this.cookiesHour();
        console.log(randomCookiesHour);
        HTML += '<tr><td>' + hours[hourly] + '</td><td>' + randomCookiesHour + ' Cookies' + '</td></tr>';
        totalCookies += randomCookiesHour;
      }

      HTML += '<tr><td colspan="2">' + 'Total: ' + totalCookies + '</td></tr>' + '</table>';
      console.log('Total: ' + totalCookies);
      return HTML;

    },
};
var fifthCookies = document.getElementById('pearl-cookies');
fifthCookies.innerHTML = fifthStand.toHTML();
