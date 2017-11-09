var React=require('react');
var Link=require('react-router').Link;
var Header=require('./Header');
var Footer=require('./Footer');

var londonDesign = React.createClass({


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
              <center><img src="../images/londondesign.jpg" className="img-responsive" id="attractionImage" /></center>
          </div>

    <div id="paraBlock">


    <b id="blockSeg">Title    	:</b>London Design Festival 2013<br />
    <b id="blockSeg">Date:</b>From 14 September 2013 to 22 September 2013<br />
      <b id="blockSeg">Description	:</b><p>&nbsp;</p>
      The eleventh London Design Festival boasted a programme of over 250 partners and 300 projects.
      The Festival continued its collaboration with the world’s leading museum of art and design, the Victoria and Albert Museum. As the central Hub location for the Festival for the fifth year, the V&A housed a broad range of commissioned activity spread throughout the Museum and included 84 installations, events, talks and workshops. The programme attracted an audience of almost 100,000 people.
      Visitors were invited to view a spectacular 8-storey lighting installation, ‘28.280’ by Omer Arbel for Bocci, which was installed in the Grand Entrance of the Museum. ‘God is in the Details’ saw visitors following a trail of Swarovski lenses focused on the design details of objects across the Museum’s extensive collections. FAT Architecture and Amorim collaborated on a natural cork floor that covered the existing bridge over the V&A’s Medieval and Renaissance Galleries. 
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

module.exports= londonDesign;
