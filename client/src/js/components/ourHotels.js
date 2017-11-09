var React=require('react');
var Link=require('react-router').Link;
var Header=require('./Header');
var Footer=require('./Footer');

var OurHotels = React.createClass({


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
                <h4>Leventis Group</h4>
              </div>
              <div className="sub_rt"></div>
          </div>
      </div>

      <br />

      <div className="main_block">

        <div className="col-sm-3 block_delmon">
        <a href="/alexandrahotel/index.php" target="_blank" className="block-link"></a>
        	<div className="trans_bg">
        	  <h5><b>Alexandra Hotel</b>
            </h5>
       	  </div>
        </div>

        <div className="col-sm-3 block_aradous">
        <a className="block-link" href="/seymour/index.php" target="_blank"></a>
          <div className="trans_bg">
            <h5><b>Seymour Hotel</b>
            </h5>
          </div>
        </div>

      <div className="col-sm-3 block_adhari">
        <a className="block-link" href="/leigham/index.php" target="_blank"></a>
          <div className="trans_bg">
          <h5><b>Leigham Court Hotel</b>
          </h5>
          </div>
      </div>

      <div className="col-sm-3 block_adhari1">
      <a className="block-link" href="/viking/index.php" target="_blank"></a>
        <div className="trans_bg">
          <h5><b>Viking Hotel</b>
          </h5>
      </div>
      </div>
    </div>

    <ul className="hotel_details">
    <li className="delmon">
        <p>                <p>The Alexandra Hotel is located within walking distance between Paddington tube station and Lancaster Gate tube station.</p>

              </p>
        <a href="/alexandrahotel/index.php" title="" target="_blank">VISIT</a>
    </li>
    <li className="aradous">
        <p>                <p>Set in an elegant Victorian town house, Seymour Hotel is ideally situated in the heart of central London.</p>

          <br />
          </p>
        <a href="/seymour/index.php" title="" target="_blank">VISIT</a>
    </li>
    <li className="adhari">
        <p>                <p>Leigham Court Hotel is located in south London, the hotel is situated just 300 meters from Streatham Hill Railway Station</p>

        <br />   </p>
        <a href="/leigham/index.php" title="" target="_blank">VISIT</a>
    </li>


      <li className="adhari">
          <p>                <p>Welcome to Viking Hotel, The Leventis Group extension in the East end, was recently renovated and is conveniently</p>

          <br />  </p>
          <a  href="/viking/index.php" title="" target="_blank">VISIT</a>
      </li>
    </ul>
    <br />

    <div className="boreder_T"> </div>

      <Footer />
    </div>
  );
  }
});

module.exports=OurHotels;
