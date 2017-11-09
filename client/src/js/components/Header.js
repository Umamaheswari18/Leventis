var React = require('react');
var Link = require('react-router').Link;

var Header=React.createClass({

    render:function()
    {
      return(

          <div>
          <div className="row" id="firstrow">
          </div>

          <div className="responsive" id="logo">
          </div>
          <div className="row">
          <div className="navbar">
          <button className="navbar-toggle" data-target=".navbar-responsive-collapse" data-toggle="collapse" type="button">
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>


        </button>
             <div className="nav-collapse collapse navbar-responsive-collapse">
                 <ul className="nav navbar-nav" id="NavigationBar">
                     <li><Link to="/home">HOME</Link></li>
                     <li><Link to="/about">ABOUT GROUP</Link></li>
                     <li><Link to="/ourHotels">OUR HOTELS</Link></li>
                      <li><Link to="/londonAttractions">LONDON ATTRACTIONS</Link></li>
                      <li><Link to="/events">EVENTS</Link></li>
                      <li><Link to="/home">BOOK NOW</Link></li>
                      <li><Link to="/contactus">CONTACT US</Link></li>
                    </ul>

            </div>
          </div>
        </div>
      </div>

      );
    }

});

module.exports=Header;
