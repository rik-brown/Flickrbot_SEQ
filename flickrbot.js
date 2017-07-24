//2016-11-08 Updated to run sequentially rather than in random order.

console.log('Flickrbot starting up!');

var Flickr = require("flickrapi")
var flickrOptions = require('./flickrConfig');
var timer = require('./timer');
var exec = require('child_process').exec;

var iteration = 1;
var firstSketch = 1; // Start with this sketch
var numSketches = 13; // The number of different Processing sketches to choose between
var selecter = firstSketch; // Always start at the beginning

postFlickr();
setInterval(postFlickr, timer.milliseconds*timer.seconds*timer.minutes*timer.hours);

function postFlickr() {

  console.log("Iteration:" + iteration + "  Selecter picks sketch nr. " + selecter);
  iteration ++;

  if      (selecter == 1)  {var cmd = '../p4096/p001/p001';}
  else if (selecter == 2)  {var cmd = '../p4096/p004/p004';}
  else if (selecter == 3)  {var cmd = '../p4096/p005/p005';}
  else if (selecter == 4)  {var cmd = '../p4096/p003/p003';}
  else if (selecter == 5)  {var cmd = '../p4096/p010/p010';}
  else if (selecter == 6)  {var cmd = '../p4096/p008/p008';}
  else if (selecter == 7)  {var cmd = '../p4096/p002/p002';}
  else if (selecter == 8)  {var cmd = '../p4096/p011/p011';}
  else if (selecter == 9)  {var cmd = '../p4096/p009/p009';}
  else if (selecter == 10) {var cmd = '../p4096/p006/p006';}
  else if (selecter == 11) {var cmd = '../p4096/p007/p007';}
  else if (selecter == 12) {var cmd = '../p4096/p012/p012';}
  else                     {var cmd = '../p4096/p016/p016';}

  exec (cmd, processing);
  //exec (cmd); // for testing, just runs processing sketch

  function processing() {
      Flickr.authenticate(flickrOptions, function(error, flickr) {
      var uploadOptions = {
        photos: [{
          title: "Cellendipity",
          tags: [
            "generative",
            "art",
            "processing",
            "abstract"
            ],
          is_public: 0,
          content_type: 2,
          description: "Twitter: @cellendipity",
          photo: "../p4096/output.png"
        }]
      };
      Flickr.upload(uploadOptions, flickrOptions, function(err, result) {
        if(err) {
          return console.error(error);
        }
        console.log("Image successfully uploaded!", result);
      });
    });
	}
	selecter ++;
	if (selecter > numSketches) {
    selecter = firstSketch;
  }
}
