var React=require('react');
var Link=require('react-router').Link;
var Header=require('./Header');
var Footer=require('./Footer');

var contactus = React.createClass({

  componentDidMount:function()
  {
    $('#sendButton').on('click',function(){

      var strBody= "Name:" + $('#name').value + "Email:" + $('#email').value +
                  "Phone:" + $('#phone').value + "Feedback:" + $('#feedback').value ;

      var link = "mailto:london@leventis.co.uk"

         + "&subject=" + escape("Leventis Hotel contact details")
         + "&body=" + strBody;

            window.location.href = link;
            window.location.href="http://www.leventishotels.co.uk/";
            alert("Thanks for contacting us");
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

      <div className="site_banner banner7">
          <div className="Sub_heading">
              <div className="sub_lt">
                <h4>Contact Leventis </h4>
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
                      <a><Link to="/home">Home</Link></a> <span>&raquo;</span> Contact Us</div>
                      <h4> 	 <b>Contact Leventis Group</b>
                      </h4>
                      <div className="wrapperBox" id="contact_form">
                      <div name="contact" className="C_main">
              <div className="C_inner_L">
              <label className="c_label">Name: </label><input type="text" name="name" id="name" className="c_textbox" required />
              <label className="c_label">Email:</label><input type="text" name="email" id="email" className="c_textbox" required />
              <label className="c_label">Cell:</label><input type="text" name="phone" id="phone" className="c_textbox"  required />


              <label className="c_label">Message</label>
              <textarea name="feedback" className="c_text_area" id="feedback" required></textarea>
                </div>
              <p>&nbsp;</p>
              <div  id="submitDiv">
              <input type="submit" name="submit" value="SEND"  className="c_submit" id="sendButton"/>
              </div>
            </div>
              </div>
       </div>
       </div>
       <div className="col-sm-6" id="secondCol">
       <div className="content_right">
       <div className="block_2">

           <h5> <b>Leventis Group of Hotels</b>


</h5>

            <h6 id="contactH6">

    <b><p><span  id="contactName">The Alexandra Hotel<br />
    Hyde Park London<br />
    159/161 Sussex Gardens Hyde Park</span></p>
    <p><span id="contactName">London W2 2RY<br />
    Tel : 020 7402 6471 <br />
    Fax : 020 7724 1049</span></p>
    <div >&nbsp;</div>
    <p>&nbsp;</p></b>



      </h6>

         </div>
       </div>

       </div>
       </div>
       </div>

      <br />

      <div  id="mapDiv">


      <iframe  frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="mapFrame"
      src="https://maps.google.co.in/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=The+Alexandra+Hotel+159%2F161+Sussex+Gardens+Hyde+Park+London+W2+2RY&amp;aq=&amp;sll=10.782836,78.288503&amp;sspn=7.323148,16.75415&amp;ie=UTF8&amp;hq=The+Alexandra+Hotel+159%2F161+Sussex+Gardens+Hyde+Park&amp;hnear=London+W2+2RY,+United+Kingdom&amp;ll=51.515106,-0.172211&amp;spn=0.006295,0.006295&amp;t=m&amp;output=embed"></iframe>



              </div>
              <br />


       <div className="boreder_T">

       </div>


      <Footer />
    </div>
  );
  }
});

module.exports=contactus;
