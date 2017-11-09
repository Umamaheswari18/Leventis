var React=require('react');
var Link=require('react-router').Link;
var Header=require('./Header');
var Footer=require('./Footer');

var Britishmuseum = React.createClass({


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
              <center><img src="../images/British_Museum.jpg" className="img-responsive" id="attractionImage" /></center>
          </div>

    <div id="paraBlock">


    <b id="blockSeg">Title    	:</b>British Museum<br />

      <b id="blockSeg">Description	:</b><p>&nbsp;</p>
      <p>The world-famous British Museum exhibits the works of man from prehistoric to modern times from around the world. Highlights include the Rosetta Stone, the Parthenon sculptures, and the mummies in the Ancient Egypt collection. Entry is free but special exhibitions require tickets.<br />
Founded in 1753, the British Museum&rsquo;s remarkable collection spans over two million years of human history. Enjoy a unique comparison of the treasures of world cultures under one roof, centred around the magnificent Great Court.<br />
World-famous objects such as the Rosetta Stone, Parthenon sculptures, and Egyptian mummies are visited by up to 6 million visitors per year. In addition to the vast permanent collection, the museum&rsquo;s special exhibitions, displays and events are all designed to advance understanding of the collection and cultures they represent.<br />
This content has been supplied by British Museum<br />
<b id="blockSeg">Practical Information<br /></b>
FREE<br />
Open daily 10.00-17.30. Open late on Fridays until 20.30.<br />
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

module.exports= Britishmuseum;
