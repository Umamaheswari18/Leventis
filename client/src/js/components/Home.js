var React=require('react');
var Link=require('react-router').Link;
var Header=require('./Header');
var Footer=require('./Footer');

var Home=React.createClass({

  componentDidMount:function()
  {
      $("#bookNowbutton").on('click',function()
      {
          var Hotelname= $("#selectBox option:selected").val();
          if(Hotelname == "Alexandra")
          {
              window.open('https://www.thebookingbutton.co.uk/properties/alexandrahoteldirect','_blank');
          }
          if(Hotelname == "Seymour")
          {
              window.open('https://www.thebookingbutton.co.uk/properties/seymourhoteldirect','_blank');
          }
          if(Hotelname == "Leigham")
          {
              window.open('https://www.thebookingbutton.co.uk/properties/leighamcourthoteldirect','_blank');
          }
          if(Hotelname == "Viking")
          {
              window.open('https://www.thebookingbutton.co.uk/properties/vikinghoteldirect','_blank');
          }
          if(Hotelname == "Hotel")
          {
              alert("Please select the Hotel to book");
          }

      })
  },

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

      <div className="main_block">

        <div className="col-sm-3 block_delmon">
        <a href="http://www.leventishotels.co.uk/alexandrahotel/index.php" target="_blank" className="block-link"></a>
        	<div className="trans_bg">
        	  <h5><b>Alexandra Hotel</b>
            </h5>
       	  </div>
        </div>

        <div className="col-sm-3 block_aradous">
        <a className="block-link" href="http://www.leventishotels.co.uk/seymour/index.php" target="_blank"></a>
          <div className="trans_bg">
            <h5><b>Seymour Hotel</b>
            </h5>
          </div>
        </div>

      <div className="col-sm-3 block_adhari">
        <a className="block-link" href="http://www.leventishotels.co.uk/leigham/index.php" target="_blank"></a>
          <div className="trans_bg">
          <h5><b>Leigham Court Hotel</b>
          </h5>
          </div>
      </div>

      <div className="col-sm-3 block_adhari1">
      <a className="block-link" href="http://www.leventishotels.co.uk/viking/index.php" target="_blank"></a>
        <div className="trans_bg">
          <h5><b>Viking Hotel</b>
          </h5>
      </div>
      </div>
    </div>

    <ul className="hotel_details">
    <li className="delmon">
        <p>                <p>The Alexandra Hotel is located within walking distance between Paddington tube station and Lancaster Gate tube station.</p>

              </p>
        <a href="http://www.leventishotels.co.uk/alexandrahotel/index.php" title="" target="_blank">VISIT</a>
    </li>
    <li className="aradous">
        <p>                <p>Set in an elegant Victorian town house, Seymour Hotel is ideally situated in the heart of central London.</p>

          <br />
          </p>
        <a href="http://www.leventishotels.co.uk/seymour/index.php" title="" target="_blank">VISIT</a>
    </li>
    <li className="adhari">
        <p>                <p>Leigham Court Hotel is located in south London, the hotel is situated just 300 meters from Streatham Hill Railway Station</p>

        <br />   </p>
        <a href="http://www.leventishotels.co.uk/leigham/index.php" title="" target="_blank">VISIT</a>
    </li>


      <li className="adhari">
          <p>                <p>Welcome to Viking Hotel, The Leventis Group extension in the East end, was recently renovated and is conveniently</p>

          <br />  </p>
          <a  href="http://www.leventishotels.co.uk/viking/index.php" title="" target="_blank">VISIT</a>
      </li>
    </ul>
    <br />


    <div className ="row offers_block">

        <div className="col-sm-4">

            <h6>London Attractions</h6>

            <div className="small_column clearfix">
              <img src="../../images/London attractions.jpg" alt="Special Offer" border="0"  />
              <p>At Madame Tussauds, you will come with some of the most famous faces. From Shakespeare to Lady Gaga you
              will meet influential figures from showbiz, sport, politics and even Royalty.
              </p>
              <p></p>
            </div>

            <div className="small_btn">
              <div className="btn_lt"><a><Link to="/londonAttractions">view more</Link></a>
              </div>
              <div className="btn_rt"></div>
            </div>
        </div>

      <div className="col-sm-4">
          <h6>Events</h6>
          <div className="small_column clearfix">
              <img src="../../images/events.jpg" alt="Special Offer" border="0"  />

              <p>American football: NFL International Series 2013 at<br/> Wembley Stadium: Minnesota Vikings Vs Pittsburg Steelers</p>
              <p></p>
          </div>
          <div className="small_btn">
              <div className="btn_lt"><a><Link to="/events">all events</Link></a>
              </div>
              <div className="btn_rt"></div>
          </div>
        </div>

        <div className="col-sm-4 book_now">
            <h6>Book Now</h6>
            <p>Please select the hotel you want to reserve from the below list. the click reserve button.</p>
            <form name="Reservation" className="reserve_home">
              <span className="drop">
                <select name="menu" className="listdrop" id="selectBox">
                  <option selected="" value="Hotel">Select the Hotel </option>
                  <option value="Alexandra">Alexandra Hotel</option>
                  <option value="Seymour">Seymour Hotel</option>
                  <option value="Leigham">Leigham court Hotel</option>
                  <option value="Viking">Viking Hotel</option>
                </select>
            </span>
            <div className="small_btn">
              <div className="btn_lt"><a id="bookNowbutton"> reserve room  now</a></div>
              <div className="btn_rt"></div>
            </div>
          </form>
        </div>

      </div>

      <br />

      <Footer />
    </div>
  );
  }
});

module.exports=Home;
