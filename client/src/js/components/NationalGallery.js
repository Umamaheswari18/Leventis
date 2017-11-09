var React=require('react');
var Link=require('react-router').Link;
var Header=require('./Header');
var Footer=require('./Footer');

var NationalGallery = React.createClass({


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
              <center><img src="../images/National_Gallery.jpg" className="img-responsive" id="attractionImage" /></center>
          </div>

    <div id="paraBlock">


    <b id="blockSeg">Title    	:</b>National Gallery<br />

      <b id="blockSeg">Description	:</b><p>&nbsp;</p>
      <p>The crowning glory of Trafalgar Square, Londons National Gallery is a vast space, filled with Western European paintings from the 13th to the 19th centuries. In this iconic art gallery you can find works by masters such as Van Gogh, da Vinci, Botticelli, Constable, Renoir, Titian and Stubbs.Entry is free.<br />
<br />
The National Gallery displays over 2000 Western European paintings from the middle ages to the 20th century. Discover inspiring art by Botticelli, Leonardo da Vinci, Rembrandt, Gainsborough, Turner, Renoir and Van Gogh. The pictures in the collection belong to the public and admission to see them is free. There are special exhibitions, lectures, video and audio-visual programmes, guided tours and holiday events for children and adults.<br />
Current exhibition:<br />
Barocci: Brilliance and Grace<br />
27 February &ndash; 19 May 2013<br />
Through American Eyes: Frederic Church and the Landscape Oil Sketch<br />
6 February &ndash; 28 April 2013<br />
http://www.nationalgallery.org.uk/whats-on/exhibitions/<br />
This content has been supplied by National Gallery<br />
<b id="blockSeg">Practical Information<br /></b>
FREE<br />
Daily 10:00 - 18:00. Friday 10:00 - 21:00<br />
Closing commences 5 minutes before time stated. Free admission to the collection and some special exhibitions. Charge for major loan exhibitions.</p><br />


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

module.exports= NationalGallery;
