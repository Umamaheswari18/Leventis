var React=require('react');
var Link=require('react-router').Link;
var Header=require('./Header');
var Footer=require('./Footer');

var LondonAttractions = React.createClass({


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
                <h4>London Attractions</h4>
              </div>
              <div className="sub_rt"></div>
          </div>
      </div>

      <br />

      <div className ="row" id="attraction">

        <div className = "col-sm-3">

          <a title="London Eye"><Link to="/londonAttractions/le" id="attractLink"><center>London Eye</center>
          <img src="../images/londoneye.jpg" width="280px" height="193px" id="attractions" />
      </Link>
      </a>

        </div>

        <div className = "col-sm-3">

          <a title="National Gallery"><Link to="/londonAttractions/ng" id="attractLink"><center>National Gallery</center>
          <img src="../images/National_Gallery.jpg" width="280px" height="193px" id="attractions" />
      </Link>
      </a>

        </div>

        <div className = "col-sm-3">

          <a title="Tate Modern"><Link to="/londonAttractions/tm" id="attractLink"><center>Tate Modern</center>
          <img src="../images/Tate_modern.jpg" width="280px" height="193px" id="attractions" />
      </Link>
      </a>

        </div>
    </div>
    <br />


    <div className ="row" id="attraction">

      <div className = "col-sm-3">

        <a title="British Museum"><Link to="/londonAttractions/bm" id="attractLink"><center>British Museum</center>
        <img src="../images/British_Museum.jpg" width="280px" height="193px" id="attractions" />
    </Link>
    </a>

      </div>

      <div className = "col-sm-3">

        <a title="Natural History Museum"><Link to="/londonAttractions/nhm" id="attractLink"><center>Natural History Museum</center>
        <img src="../images/Natural_History_Museum_London.jpg" width="280px" height="193px" id="attractions" />
    </Link>
    </a>

      </div>

      <div className = "col-sm-3">

        <a title="Tower of London"><Link to="/londonAttractions/tl" id="attractLink"><center>Tower of London</center>
        <img src="../images/toweroflondon.jpg" width="280px" height="193px" id="attractions" />
    </Link>
    </a>

      </div>
  </div>

  <br />

  <div className ="row" id="attraction">

    <div className = "col-sm-3">

      <a title="Madame Tussauds"><Link to="/londonAttractions/mt" id="attractLink"><center>Madame Tussauds</center>
      <img src="../images/Madame_Tussauds.jpg" width="280px" height="193px" id="attractions" />
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

module.exports=LondonAttractions;
