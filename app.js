const express = require ("express");
const bodyParser = require("body-parser");
const date = require(__dirname+ "/date.js");

const app = express();

let items = ["get up","eat breakfast"];
let workItems =[];

//using ejs template
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}));
//apply css file
app.use(express.static("public"));

app.get("/", function(req, res){

let day = date;

  res.render("list",{
    // if only want weekday name, change .getDate to .getDay
    ListTitle: day.getDate(),
    newListItems: items
  });

  });

app.post("/",function(req,res){
   let item = req.body.newItem;

   if(req.body.list==="Work"){
     workItems.push(item);
     res.redirect("/work");
   }else{
     items.push(item);
     res.redirect("/");
   }

});

app.get("/work",function(req,res){
  res.render("list",{ListTitle:"Work List",newListItems:workItems});
});
app.get("/about",function(req,res){
  res.render("about")
});

app.listen(3000, function(){
    console.log("server started on port 3000...");
  });



//****************** display week name**************//
  // let currentDay = today.getDay();
  // let Day = "";
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
