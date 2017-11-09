var React=require('react');
var Link=require('react-router').Link;
var Header=require('./Header');
var Footer=require('./Footer');

var About = React.createClass({


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
                <h4>About Leventis</h4>
              </div>
              <div className="sub_rt"></div>
          </div>
      </div>

      <div className="site_content boreder_T">
        <div className="row">
        <div className="col-sm-6">
        <div className="content_left">
              <div className="connect_top"></div>
              <div className="connect_bottom"></div>
                  <div className="small_nav boreder_B"><span>You are here:</span>
                      <a><Link to="/home">Home</Link></a> <span>&raquo;</span> About group</div>
                      <h4> 	 <b>Leventis Group of Hotels</b>
                      </h4>
            <p>
              <div id="uma"><span id="uma1">The  Leventis family have been in the hotel industry for over 25
               years and  have a total of 4 hotels situated in different parts of London.</span></div>
              <div id="uma"><span id="uma1"> &nbsp;</span></div>
     <div id="uma"><span id="uma1">The family-run Leventis Group of Hotels comprises of Alexandra Hotel, Viking Hotel, Leigham Court Hotel and Seymour Annex Hotel.</span></div>
     <div id="uma">&nbsp;</div>
     <div id="uma">&nbsp;</div>

     <div id="uma"><strong><span><span id="hotelName" >&nbsp;</span></span>Alexandra Hotel (Paddington) 3*</strong></div>
     <div id="uma"><strong>159-161 Sussex Gardens, London W2 2 RY</strong></div>
     <div id="uma">&nbsp;</div>
     <div id="uma">&nbsp;</div>
     <div id="uma"><strong>Seymour Annex Hotel&nbsp; (Paddington) 2*</strong></div>
     <div id="uma"><strong>94 Sussex Gardens, London W2 1 UH</strong></div>
     <div id="uma">&nbsp;</div>
     <div id="uma"><strong>&nbsp;</strong></div>
     <div id="uma"><strong>Leigham Court Hotel (Streatham) 2*</strong></div>
     <div id="uma"><strong>18 Leigham Court road, London SW16 2 PJ</strong></div>
     <div id="uma"><strong> &nbsp;</strong></div>
     <div id="uma"><strong> &nbsp;</strong></div>
     <div id="uma"><strong>Viking Hotel (Startford) 2*</strong></div>
     <div id="uma"><strong>162 Romford road, Stratford London E15 4 LD</strong></div>
     <p>&nbsp;</p>


     	  </p>

       </div>
       </div>
       <div className="col-sm-6" id="secondCol">
       <div className="content_right">
            <h5>Our Hotels</h5><br />
            <ul className="side_link">
               <li><a href="alexandrahotel/index.php" target="_blank">Alexandra hotel</a></li><br />
               <li><a href="seymour/index.php" target="_blank">Seymour hotel </a></li><br />
               <li><a href="leigham/index.php" target="_blank">Leigham court hotel </a></li><br />
         	     <li><a href="viking/index.php" target="_blank">Viking hotel </a></li><br /><br />
            </ul>
       </div>

       </div>
       </div>
       </div>
       <div className="boreder_T">


       </div>


      <Footer />
    </div>
  );
  }
});

module.exports=About;
