//jshint esversion:6
exports.getDate = function(){
  let today = new Date();
  // display current day format
  let options ={
    weekday: "short",
    day:"numeric",
    month:"short"
  };
  return today.toLocaleDateString("en-US",options);

};


// exports different module function

exports.getDay  = function(){
  let today = new Date();
  // display current day format
  let options ={
    weekday: "long"

  };
  return today.toLocaleDateString("en-US",options);

};
