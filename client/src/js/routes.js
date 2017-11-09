var React = require('react');
var Router = require('react-router');
var hashHistory = Router.hashHistory;
var Route = Router.Route;
//var DefaultRoute = Router.DefaultRoute;
//var IndexRoute=Router.IndexRoute;

//var MainLayout=require('./components/MainLayout').MainLayout;
var Home=require('./components/Home');
var About=require('./components/aboutGroup');
var OurHotels = require('./components/ourHotels');
var LondonAttractions=require('./components/londonAttractions');
var LondonEye=require('./components/LondonEye');
var NationalGallery=require('./components/NationalGallery');
var Tatemodern= require('./components/Tatemodern');
var Britishmuseum=require('./components/Britishmuseum');
var Naturalmuseum=require('./components/Naturalmuseum');
var TowerofLondon=require('./components/toweroflondon');
var MadameTussadus=require('./components/madametussadus');

var Events=require('./components/events');
var tourofBritain=require('./components/tourofBritain');
var londonfilmfestival=require('./components/londonfilmfestival');
var virginlondonmarathon=require('./components/virginlondonmarathon');
var BNYmellon=require('./components/BNYmellon');
var triathlon=require('./components/triathlon');
var londonDesign=require('./components/londonDesign');
var ATPworldtour=require('./components/ATPworldtour');
var rugbyworldcup=require('./components/rugbyworldcup');
var americanfootball=require('./components/americanfootball');

var contactus=require('./components/contactus');

// var MovieBox=require('./components/MovieBox');
// var AddMovieBox=require('./components/AddMovieBox');
// var UpdateMovieBox=require('./components/UpdateMovieBox');



module.exports = (

  <Route>
      <Route path="/" handler={Home} />
      <Route path="/home" handler={Home} />
      <Route path="/about" handler={About} />
      <Route path="/ourHotels" handler={OurHotels} />
      <Route path="/londonAttractions"  handler={LondonAttractions} />
      <Route path="/londonAttractions/le" handler={LondonEye} />
      <Route path="/londonAttractions/ng" handler={NationalGallery} />
      <Route path="/londonAttractions/tm" handler={Tatemodern} />
      <Route path="/londonAttractions/bm" handler={Britishmuseum} />
      <Route path="/londonAttractions/nhm" handler={Naturalmuseum} />
      <Route path="/londonAttractions/tl" handler={TowerofLondon} />
      <Route path="/londonAttractions/mt" handler={MadameTussadus} />
      <Route path="/events" handler={Events} />
      <Route path="/events/tourofBritain" handler={tourofBritain} />
      <Route path="/events/londonfilmfestival" handler={londonfilmfestival} />
      <Route path="/events/virginlondonmarathon" handler={virginlondonmarathon} />
      <Route path="/events/bnymellon" handler={BNYmellon} />
      <Route path="/events/triathlon" handler={triathlon} />
      <Route path="/events/londondesign" handler={londonDesign} />
      <Route path="/events/ATPworldtour" handler={ATPworldtour} />
      <Route path="/events/rugbyworldcup" handler={rugbyworldcup} />
      <Route path="/events/americanfootball" handler={americanfootball} />
      <Route path="/contactus" handler={contactus} />

  </Route>

);
