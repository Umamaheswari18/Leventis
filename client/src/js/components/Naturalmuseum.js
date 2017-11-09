var React=require('react');
var Link=require('react-router').Link;
var Header=require('./Header');
var Footer=require('./Footer');

var Naturalmuseum = React.createClass({


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
              <center><img src="../images/Natural_History_Museum_London.jpg" className="img-responsive" id="attractionImage" /></center>
          </div>

    <div id="paraBlock">


    <b id="blockSeg">Title    	:</b>Natural History Museum<br />

      <b id="blockSeg">Description	:</b><p>&nbsp;</p>
      <p>
As well as the permanent (and permanently fascinating!) dinosaur exhibition, the Natural History Museum boasts a collection of the biggest, tallest and rarest animals in the world. See a life-sized Blue Whale, a 40-million-year-old spider, and the beautiful Central Hall. Entry is free but special exhibitions require tickets.<br />
Hundreds of exciting, interactive exhibits in one of London&rsquo;s most beautiful landmark buildings. Highlights include the popular Dinosaurs gallery, Mammals with its unforgettable model blue whale and the spectacular Central Hall, home to the Museum&rsquo;s iconic Diplodocus skeleton. Don&rsquo;t miss the state-of-the-art Cocoon where, on a self-guided tour, you can see hundreds of fascinating specimens and look into laboratories where you can see scientists at work.<br />
The Museum offers a wide-ranging programme of temporary exhibitions and events including chances to join experts, in the Darwin Centre&rsquo;s high-tech Attenborough Studio, in topical discussions about science and nature.<br />
This content has been supplied by Natural History Museum<br />
<b id="blockSeg">Practical Information<br /></b>
FREE<br />
Open daily 10.00 - 17.50. Last admission 17.30. Open late on the last Friday of each month. Closed 24 - 26 December.</p><br />



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

module.exports= Naturalmuseum;
