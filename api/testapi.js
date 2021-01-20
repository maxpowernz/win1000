var https = require("https");

const options = {
  hostname: "www.craftedbeauty.co.nz",
  port: 443,
  path: "/api/bookingapi/GetNonWorkingDays",
  method: "GET",
};

const apiRequest = https.request(options, (res) => {
  console.log(`statusCode: ${res.statusCode}`);

  res.on("data", (d) => {
    res.statusCode(200).send(d);
  });
});

apiRequest.on("error", (error) => {
  console.error(error);
});

apiRequest.end();

module.exports = (req, res) => {
  const { name = "World" } = req.query;

  res.status(200).send(`Hello ${name}!`);
};
