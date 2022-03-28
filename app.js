const express = require ("express");
const bodyParser = require("body-parser");
const app = express();

var items = ["get up","eat breakfast"];
//using ejs template
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}));
//apply css file
app.use(express.static("public"));

app.get("/", function(req, res){
  var today = new Date();
// display current day format
  var options ={
    weekday: "short",
    day:"numeric",
    month:"short"
  };
  var day = today.toLocaleDateString("en-US",options);

  res.render("list",{
    kindOfDay: day,
    newListItems: items
  });

  });
app.post("/",function(req,res){
 var item = req.body.newItem;
 items.push(item);
 res.redirect("/");
});

  app.listen(3000, function(){
    console.log("server started on port 3000...");
  });



//****************** display week name**************//
  // var currentDay = today.getDay();
  // var Day = "";
// switch (currentDay) {
//   case 0:
//     Day="Sunday";
//     break;
//     case 1:
//       Day="Monday";
//       break;
//       case 2:
//         Day="Tuesday";
//         break;
//         case 3 :
//           Day="Wednesday";
//           break;
//           case 4:
//             Day="Thurday";
//             break;
//             case 5:
//               Day="Friday";
//               break;
//               case 6:
//                 Day="Saturday";
//                 break;
//   default:
//    console.log("Error:curret day is equal to: "+currentDay);
//
// };
