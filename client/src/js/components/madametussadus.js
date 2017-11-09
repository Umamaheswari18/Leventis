var React=require('react');
var Link=require('react-router').Link;
var Header=require('./Header');
var Footer=require('./Footer');

var MadameTussadus = React.createClass({


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
              <center><img src="../images/Madame_Tussauds.jpg" className="img-responsive" id="attractionImage" /></center>
          </div>

    <div id="paraBlock">


    <b id="blockSeg">Title    	:</b>Madame Tussadus<br />

      <b id="blockSeg">Description	:</b><p>&nbsp;</p>
      <p>At Madame Tussauds, you'll come face-to-face with some of the world's most famous faces. From Shakespeare to Lady Gaga you will meet influential figures from showbiz, sport, politics and even Royalty. Strike a pose with Usain Bolt, kiss Brad Pitt or receive a once-in-a-lifetime audience with Her Majesty the Queen.<br />
<br />
Filled with 14 exciting, interactive zones and the amazing Marvel Super Heroes 4D movie experience, Madame Tussauds London combines glitz and glamour with incredible history.<br />
Walk down the red carpet and strike a pose with Kate Winslet, before challenging your favourite sportstars like David Beckham or Lewis Hamilton. Start your royal experience with an audience with the Queen, before planting a kiss on Prince William&rsquo;s cheek.<br />
For the brave, get face-to-face with scary serial killers in our live fear experience SCREAM. After a sneaky behind-the-scenes look at how our World-renowned sculptors create the figures, relax in our taxis and relive the rich history of London.<br />
Then step up to your favourite Marvel Super Heroes before getting ready to experience the spectacular and exclusive Marvel Super Heroes 4D movie, where our Marvel Super Heroes battle it out to save London from impending doom.<br />
So, who do you want to meet?<br />
Prices<br />
Adult Ticket:&nbsp;&nbsp; &nbsp;From &pound;28.00&nbsp; per ticket<br />
Child Ticket:&nbsp;&nbsp; &nbsp;From &pound;22.50&nbsp; per ticket<br />
-- <br />
Low price only available when booking online in advance. Prices subject to change.<br />
Visis www.madametussauds.com/London to book your tickets online and save up to 50%!<br />
This content has been supplied by Madame Tussauds Londonkavithakabilan</p><br />



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

module.exports= MadameTussadus;
