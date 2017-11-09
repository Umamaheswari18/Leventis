var React=require('react');
var Link=require('react-router').Link;
var Header=require('./Header');
var Footer=require('./Footer');

var tourofBritain = React.createClass({


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


      <div className="row" id="attraction_LE">
      <div className="col-sm-12" id="attraction">
      <div  id ="attractionBlock">
          <div>
              <center><img src="../images/tourofbritain.jpg" className="img-responsive" id="attractionImage" /></center>
          </div>

    <div id="paraBlock">


    <b id="blockSeg">Title    	:</b>Tour of Britain 2013<br />
    <b id="blockSeg">Date:</b>6 April 2014<br />
      <b id="blockSeg">Description	:</b><p>&nbsp;</p>
      The 2013 Tour of Britain was the tenth running of the current Tour of Britain and the 74th British tour in total. The race consisted of eight stages, starting on 15 September in Peebles, and finishing on 22 September in London.
      <br />

        <div className="small_btn">
          <div className="btn_lt"><a><Link to="/events">BACK</Link></a>
          </div>
          <div className="btn_rt"></div>
        </div>
        <br />
        </div>
        </div>
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

module.exports= tourofBritain;
