var tour = {
    name: 'I DISAGREE',
    venues: 20,
    fullyBooked: 16,
    meetAndGreet: true,
    venueTypes: ['standard', 'VIP'],
    checkAvailablity: function() {
        return this.venues - this.fullyBooked;
    }
};

var elTour = document.getElementById('tourName');
elTour.textContent = tour.name;

var elVenue = document.getElementById('venues');
elVenue.textContent = tour.checkAvailablity();

//-----------------

function Venue(city, capacity, booked, vip) {
    this.city = city;
    this.capacity = capacity;
    this.booked = booked;
    this.vip = vip;
    this.checkAvailablity = function() {
        return this.capacity - this.booked;
    };
}

var chicagoVenue = new Venue('Chicago/USA', 30, 13, false);
var dublinVenue = new Venue('Dublin/IE', 40, 24, true);
var losAngelesVenue = new Venue('LA/USA', 45, 40, true);
var parisVenue = new Venue('Paris/FR', 25, 5, false);

var details1 = chicagoVenue.city + ' Tickets: ';
    details1 += chicagoVenue.checkAvailablity();
    details1 += ' VIP: ' + chicagoVenue.vip;
var elVenue1 = document.getElementById('venue1');
elVenue1.textContent = details1;

var details2= dublinVenue.city + ' Tickets: ';
    details2 += dublinVenue.checkAvailablity();
    details2 += ' VIP: ' + dublinVenue.vip;
var elVenue2 = document.getElementById('venue2');
elVenue2.textContent = details2;

var details3 = losAngelesVenue.city + ' Tickets: ';
    details3 += losAngelesVenue.checkAvailablity();
    details3 += ' VIP: ' + losAngelesVenue.vip;
var elVenue3 = document.getElementById('venue3');
elVenue3.textContent = details3;

var details4 = parisVenue.city + ' Tickets: ';
    details4 += parisVenue.checkAvailablity();
    details4 += ' VIP: ' + parisVenue.vip;
var elVenue4 = document.getElementById('venue4');
elVenue4.textContent = details4;

//-----------------

var site = 'POPXMI'.fontcolor('white');
var result = site.link('https://popxmi.com/');
var today = new Date();
var year = today.getFullYear();

var msg2 = '<p><b>Artist: </b>' + document.title + '<br />';
msg2 += '<b>Merch: </b>' + result + '<br />';
msg2 += '<b>SUMERIAN RECORDS &copy;</b>' + year + '</p>';

var el1 = document.getElementById('footer');
el1.innerHTML = msg2;

var releaseDate = new Date('Mar 21, 2021 00:00:00');
var difference = releaseDate.getTime() - today.getTime();
difference = (difference / (1000*60*60*24));

var msg3 = '<p><b>DAYS UNTIL ALBUM: </b>' + Math.floor(difference);
var el2 = document.getElementById('footer');
el2.innerHTML += msg3;

alert('BLOODMONEY OUT NOW');
open('https://www.youtube.com/watch?v=fJlDyRbUtxI');

