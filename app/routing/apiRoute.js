// * A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.

// * A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

var friendsArray = require("../data/friends");


module.exports = function(app) {
  // API GET Requests

  app.get("/api/friends", function(req, res) {
    res.json(friendsArray);
  });

  // API POST Requests

  app.post("/api/friends", function(req, res) {
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
    // req.body is available since we're using the body parsing middleware

    // record the name and the differential score of every friend for comparison when done
    differencesArray = [

    ]

    // for loop so every friend array is searched
    // for loop to compare the 10 scores of each
    // push the name and difference score into the diffArray

    // for(var i=0;i<friendsArray.length;i++){

    //     newFriend = {}
    //     newFriend.push(friendsArray[i].name)

    //     diffScore = 0

    //     for(var t=0;t<10;t++){
    //         diffScore = diffScore + Math.abs(friendsArray[i].score[t] - req.body.score[t]) 
    //     }
    
    //     newFriend.push(diffScore)

    //     differencesArray.push(newFriend)
    // }

    // // find the greatest score and print the name for the survey.html
    // console.log(differencesArray)
    
    friendsArray.push(req.body)
    res.json("your new best friend is "+"placeholder")
  });

  // ---------------------------------------------------------------------------
  // I added this below code so you could clear out the table while working with the functionality.
  // Don"t worry about it!

  app.post("/api/clear", function(req, res) {
    // Empty out the arrays of data
    friendsArray.length = 0;

    res.json({ ok: true });
  });
};
