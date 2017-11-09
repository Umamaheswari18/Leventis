var React=require('react');
var Link=require('react-router').Link;
var Header=require('./Header');
var Footer=require('./Footer');

var Tatemodern = React.createClass({


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
              <center><img src="../images/Tate_modern.jpg" className="img-responsive" id="attractionImage" /></center>
          </div>

    <div id="paraBlock">


    <b id="blockSeg">Title    	:</b>Tate Modern<br />

      <b id="blockSeg">Description	:</b><p>&nbsp;</p>
      <p>Sitting grandly on the banks of the Thames is Tate Modern, Britain's national museum of modern and contemporary art. Its unique shape is due to it previously being a power station. Inside you'll find temporary exhibitions by top artists from Damien Hirst to Gauguin. The gallery's restaurants offer fabulous views across the city. Entry is free.<br />
A visit to London isn't complete without a trip to Tate Modern.<br />
Britains national museum of modern and contemporary art from around the world is housed in the former Bankside Power Station on the banks of the Thames. The awe-inspiring Turbine Hall runs the length of the entire building and you can see amazing work for free by artists such as C&eacute;zanne, Bonnard, Matisse, Picasso, Rothko, Dal&iacute;, Pollock, Warhol and Bourgeois.<br />
This content has been supplied by Tate Modern<br />
<b id="blockSeg"> Practical Information<br /></b>
FREE<br />
Sunday &ndash; Thursday, 10.00&ndash;18.00<br />
Friday and Saturday, 10.00&ndash;22.00<br />
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

module.exports= Tatemodern;
