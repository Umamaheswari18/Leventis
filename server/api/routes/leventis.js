var express=require('express');
var bodyparser=require('body-parser');
var cookieParser=require('cookie-parser');
var fs=require('fs');
var path=require('path');

var router = express.Router();
var app = express();

app.use(cookieParser());

router.post('/addEmail',function(request,response)
{
  var flag=0;
  console.log("in addM");
  //var reqData="";
  var content=JSON.parse(fs.readFileSync('Config/emailID.json'));

      //console.log(content);
       var obj={};

      // var parseData=querystring.parse(reqData);
      // console.log(parseData);
       obj.emailID=request.body.email;

      for(i=0;i<content.length;i++)
      {
        console.log("Hello");
        if(obj.emailID == content[i].emailID)
          flag=1;
      }

     //Pushing the object to content Array
      if(flag == 0)
        content.push(obj);

       fs.writeFile('Config/emailID.json', JSON.stringify(content), function(err) {
        if(err) {
        console.log(err);
        }
      });
      response.json({success:true});


});




module.exports=router;
