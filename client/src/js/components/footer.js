var React = require('react');
var Link = require('react-router').Link;

var Footer=React.createClass({


      componentDidMount:function()
      {
        $("#GO").on('click',function()
        {
            var emailID=$("#email").val();
            if(emailID == "")
            {
              alert("Please enter your email address to receive offers");
              $("#email").focus();
            }
            else {
              var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
              if(emailPattern.test(emailID))
              {

                alert("Thanks for Subscribing to us");

                $.ajax({
                      type:'POST',
                      url:'/api/addEmail',
                      data:jQuery.param({email:$("#email").val()}),
                      dataType: 'json',
                      success:function(result)
                      {
                          window.location.href="http://www.leventishotels.co.uk/";
                          $("#email").val(" ");
                      }
                })
              }
              else
                alert("Please enter a valid email address");

            }

        })
      },
    render:function()
    {

      return(

          <div className="row footer">
          <div className="col-sm-6 foot1">
              <p>Copyright &copy; 2017. Leventis Group of Hotels.
              <br />All rights reserved.</p>
              <p className="C_cards">We accept </p>

          </div>
          <div className="col-sm-6 foot2">
            <h6>Sign Up for Newsletter.</h6>
            <p>Stay up to date with Offers &amp; Promotions</p>
            <form id="form1" name="form1" method="post">
                <input name="email" type="text" id="email" className="e-news" placeholder="Enter your email address" />
                <input type="submit" name="GO" id="GO" value="GO"  className="go-e-news"  />
            </form>
            <ul className="social_footer">
              <li id="gplus"><a href="https://www.gmail.com" target="_blank">&nbsp;</a></li>
              <li id="twitter"><a href="https://twitter.com/login" target="_blank">&nbsp;</a></li>
              <li id="facebook"><a href="https://www.facebook.com" target="_blank">&nbsp;</a></li>

          </ul>
          </div>
        </div>


      );
    }

});

module.exports=Footer;
