var React=require('react');
var Link=require('react-router').Link;
var Header=require('./Header');
var Footer=require('./Footer');

var LondonEye = React.createClass({


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


      <div className="row" id="attraction_LE">
      <div className="col-sm-12" id="attraction">
      <div  id ="attractionBlock">
          <div>
              <center><img src="../images/londoneye.jpg" className="img-responsive" id="attractionImage" /></center>
          </div>

    <div id="paraBlock">


    <b id="blockSeg">Title    	:</b>London Eye<br />

      <b id="blockSeg">Description	:</b><p>&nbsp;</p>
      <p>The EDF Energy London Eye is a major feature of London's skyline. It is the worlds highest observation wheel, with 32 capsules, each weighing 10 tonnes, and holding up to 25 people. Climb aboard for a breathtaking experience, with unforgettable views of more than 55 of London's most famous landmarks &ndash; all in just 30 minutes!<br />
        Already offering unrivalled views of London, the bespoke cinematic addition to the EDF Energy London Eye provides another magical and entertaining way to experience our capital city, further enhancing the value and the experience of a trip to the UK&rsquo;s top paid for visitor attraction.<br />
        All included in the ticket price, you will see the first ever 3D aerial footage of London as well as witness the world famous London New Year&rsquo;s Eve fireworks in a breathtaking journey across the city. Boasting more 4D sensory effects than any other attraction in the UK, you will feel like you are really there; with wind in your hair, snow falling at your feet, the floor shaking and even a sense of smell, your new perspective on London will be truly memorable.<br />
        Plus new for 2012, the London Eye&rsquo;s capsules are now complete with state of the art Samsung Galaxy Tab 10.1 devices as interactive touch screen guides designed to enhance the guest experience as they take in the views. Features include key information on landmarks that can be seen from the London Eye as well as a 3D view of each sight, further bringing it to life before the visitors&rsquo; eyes. Innovative, 360 degree non-stop-24-hour filming has granted EDF Energy London Eye guests the first ever multi-dimensional views of the spectacular sights.<br />
        This content has been supplied by EDF Energy London Eye<br />
        <b id="blockSeg">Practical Information</b><br />
        Adult Ticket &pound;18.50<br />
        1 October-31 March: 10:00 - 20:30 daily.<br />
        1 April-30 June: 10:00 - 21:00 daily.<br />
        1 July-30 September: 10:00 - 21:30 daily.</p><br />

        <div className="small_btn">
          <div className="btn_lt"><a><Link to="/londonAttractions">BACK</Link></a>
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

module.exports=LondonEye;
