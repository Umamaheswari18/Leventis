var React=require('react');
var Link=require('react-router').Link;
var Header=require('./Header');
var Footer=require('./Footer');

var Events = React.createClass({


  render:function()
  {
    $(document).ready(function() {
   $('#myCarousel').carousel({
     interval: 2000
   })

 });

    return(
      <div>
        <Header />
        <div className="carousel slide" id="myCarousel">

					<ol className="carousel-indicators">
							<li className="active" data-slide-to="0" data-target="#myCarousel"></li>
							<li  data-slide-to="1" data-target="#myCarousel"></li>
							<li  data-slide-to="2" data-target="#myCarousel"></li>
              <li  data-slide-to="3" data-target="#myCarousel"></li>
              <li  data-slide-to="4" data-target="#myCarousel"></li>
					</ol>

					<div className="carousel-inner">
							<div className="item active" id="slide1">
							<center><img src="../../images/C1.jpg" id="slide" /></center>
							</div>

							<div className="item" id="slide2">
								<center>	<img src="../../images/C2.jpg" id="slide" /></center>
							</div>

							<div className="item" id="slide3">
									 <center><img src="../../images/C3.jpg" id="slide" /></center>
							</div>

              <div className="item" id="slide4">
									 <center><img src="../../images/C4.jpg" id="slide" /></center>
							</div>

              <div className="item" id="slide5">
									 <center><img src="../../images/C5.jpg" id="slide" /></center>
							</div>


					</div>


					<a className="left carousel-control" data-slide="prev" href="#myCarousel"><span className="icon-prev"></span></a>
					<a className="right carousel-control" data-slide="next" href="#myCarousel"><span className="icon-next"></span></a>

			</div>
      <br />

      <div className="site_banner banner8">
          <div className="Sub_heading">
              <div className="sub_lt">
                <h4>Events</h4>
              </div>
              <div className="sub_rt"></div>
          </div>
      </div>

      <br />

      <div className ="row" id="attraction">

        <div className = "col-sm-3">

          <a title="Tour of Britain 2013"><Link to="/events/tourofBritain" id="attractLink"><center>Tour of Britain 2013</center>
          <img src="../images/tourofbritain.jpg" width="256px" height="193px" id="attractions" />
      </Link>
      </a>

        </div>

        <div className = "col-sm-3">

          <a title="57th BFI London Film Festival"><Link to="/events/londonfilmfestival" id="attractLink"><center>57th BFI London Fi..</center>
          <img src="../images/Londonfilmfestival.jpg" width="256px" height="193px" id="attractions" />
      </Link>
      </a>

        </div>

        <div className = "col-sm-3">

          <a title="Virgin Money London Marathon 2014"><Link to="/events/virginlondonmarathon" id="attractLink"><center>London Marathon.. </center>
          <img src="../images/london Marathon.jpg" width="256px" height="193px" id="attractions" />
      </Link>
      </a>

        </div>
    </div>
    <br />


    <div className ="row" id="attraction">

      <div className = "col-sm-3">

        <a title="Rowing: The BNY Mellon Boat Race"><Link to="/events/bnymellon" id="attractLink"><center>Rowing: The BNY Mellon Boat Race</center>
        <img src="../images/boatrace.jpg" width="256px" height="193px" id="attractions" />
    </Link>
    </a>

      </div>

      <div className = "col-sm-3">

        <a title="PruHealth World Triathlon Grand Final London"><Link to="/events/triathlon" id="attractLink"><center>PruHealth World Triathlon Grand Fin...</center>
        <img src="../images/triathlon.jpg" width="256px" height="193px" id="attractions" />
    </Link>
    </a>

      </div>

      <div className = "col-sm-3">

        <a title="London Design Festival 2013"><Link to="/events/londondesign" id="attractLink"><center>London Design Festival 2013</center>
        <img src="../images/londondesign.jpg" width="256px" height="193px" id="attractions" />
    </Link>
    </a>

      </div>
  </div>

  <br />

  <div className ="row" id="attraction">

    <div className = "col-sm-3">

      <a title="ATP World Tour Finals"><Link to="/events/ATPworldtour" id="attractLink"><center>ATP World Tour Finals</center>
      <img src="../images/ATPworldtour.jpg" width="256px" height="193px" id="attractions" />
      </Link>
      </a>

    </div>

    <div className = "col-sm-3">

      <a title="Rugby League World Cup 2013 at Wembley Stadium"><Link to="/events/rugbyworldcup" id="attractLink"><center>Rugby League World..</center>
      <img src="../images/Rugbyworldcup.jpg" width="256px" height="193px" id="attractions" />
      </Link>
      </a>

    </div>

    <div className = "col-sm-3">

      <a title="American football: NFL International Series 2013 at Wembley Stadium: Minnesota Vikings Vs Pittsburg Steelers">
      <Link to="/events/americanfootball" id="attractLink"><center>American football:NFL..</center>
      <img src="../images/americanfootball_NFL international.jpg" width="256px" height="193px" id="attractions" />
      </Link>
      </a>

    </div>

</div>

<br />

       <div className="boreder_T">

       </div>


      <Footer />
    </div>
  );
  }
});

module.exports=Events;
