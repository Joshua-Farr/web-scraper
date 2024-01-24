import axios from "axios";

function makeApiCall() {
  const options = {
    url: `https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${process.env.NYT_API_KEY}`,
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  };
  axios(options, function (err, res, body) {
    if (err) {
      console.error(err);
    } else {
      console.log(body);
    }
  });
}

makeApiCall();
