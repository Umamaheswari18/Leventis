<?php
include("includes/db.php");
if($_SERVER["REQUEST_METHOD"] == "POST"){

    $sitename="Leventis Hotel";
	$name=$_POST['name'];
	$email=$_POST['email'];
	$phone=$_POST['phone'];
	$feedback=$_POST['feedback'];
	$regex = '/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/';
	if(!empty($_POST['name'])&&!empty($_POST['phone'])&&!empty($_POST['feedback']))
	{
if (preg_match($regex, $email)) {
   echo "<script> alert('Thankyou for contacting us');</script>";

	}
	else
	{
	 echo mysqli_error();
	}

$to = "london@levintishotels.co.uk";
$subject = "LEVENTIS HOTEL CONTACT DETAILS";
$messages = "Name: $name <br/>";
$messages .= "email address : $email <br/>";
$messages .="phone: $phone <br/>";
$messages .="Message: $feedback <br/>";
$from = "london@levintishotels.co.uk";
$headers = "From:" . $from;
mail($to,$subject,$messages,$headers);
echo "Mail Sent.";

    $to="london@levintishotels.co.uk";
//$to="manivannan@kavinssoft.com";
    $subject="LEVENTIS HOTEL CONTACT DETAILS";
    $headers = "MIME-Version: 1.0 \r\n";
    $headers .="Content-type: text/html; charset=iso-8859-1\r\n";
    $headers .="Content-Transfer-Encoding: 7bit\r\n";
//$headers .="$name";
    $headers .= "From:" .$email. "\r\n";
    $messages .="Name:"."$name"."<br/>";
    $messages .="email address :"."$email"."<br/>";
    $messages .="phone:"."$phone"."<br/>";
    $messages .="Message:"."$feedback"."<br/>";
    $mail_sent =mail($to,$subject,$messages,$headers);



}
else {
  	echo "<script> alert('Enter Valid Email Address');</script>";
}

}
else
{
echo "<script> alert('Please Fill All the Fields');</script>";

}

}
?>
<form method="post" name="contact" class="C_main"  onsubmit="return check()">
              	<div class="C_inner_L">
              	<label class="c_label">Name: </label><input type="text" name="name" id="name" class="c_textbox" />


                <label class="c_label">Email:</label><input type="text" name="email" id="email" class="c_textbox" />


                <label class="c_label">Cell:</label><input type="text" name="phone" id="phone" class="c_textbox"  />

                </div>

                <label class="c_label C_inner_R">Message</label>
                <textarea name="feedback" class="c_text_area" id="feedback"></textarea>

                <div style="float:right; margin:15px 18px 0 0;">
                <input type="submit" name="submit" value="SEND"  class="c_submit"/>
                </div>
              </form>
