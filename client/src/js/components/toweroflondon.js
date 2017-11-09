var React=require('react');
var Link=require('react-router').Link;
var Header=require('./Header');
var Footer=require('./Footer');

var TowerofLondon = React.createClass({


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
              <center><img src="../images/toweroflondon.jpg" className="img-responsive" id="attractionImage" /></center>
          </div>

    <div id="paraBlock">


    <b id="blockSeg">Title    	:</b>Tower of London<br />

      <b id="blockSeg">Description	:</b><p>&nbsp;</p>

      <p>Take a tour with one of the Yeoman Warders around the Tower of London, one of the world's most famous buildings. Discover its 900-year history as a royal palace, prison and place of execution, arsenal, jewel house and zoo! Gaze up at the White Tower, tiptoe through a medieval king's bedchamber and marvel at the Crown Jewels.<br />
<br />
Overview<br />
Despite the Tower of London grim reputation as a place of torture and death, within these walls you will also discover the history of a royal palace, an armoury and a powerful fortress. Don&rsquo;t miss Royal Beasts and learn about the wild and wonderous animals that have inhabited the Tower, making it the first London Zoo.<br />
Discover the priceless Crown Jewels newly displayed in 2012, join an iconic Beefeater on a tour and hear their bloody tales, stand where famous heads have rolled, learn the legend of the Tower ravens, storm the battlements and get to grips with swords and armour and much more!<br />
This content has been supplied by HM Tower of London<br />
<b id="blockSeg">Practical Information<br /></b>
Adult Ticket from &pound;19.50<br />
Open all year. Summer: 1 March - 31 October: Tuesday - Saturday 09:00-18:00 / Sunday - Monday 10:00-18:00. Last admission 17:00. Winter: 1 November - 28 February: Tuesday - Saturday 09:00-17:00 / Sunday - Monday 10:00-17:00. Last admission 16:00.<br />
The Tower is closed 24-26 December (inclusive) and 1 January<br />
<br />
&nbsp;</p><br />


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

module.exports= TowerofLondon;
