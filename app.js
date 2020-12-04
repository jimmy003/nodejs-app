const express = require('express');
const bodyParser = require('body-parser');

const app = express();
// const dateTime = require('node-datetime');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/api/v2/heartbeat', (req, res) => {
  console.log(`api_key = ${req.headers.api_key}`);
  console.log(`signature = ${req.headers.signature}`);
  console.log(`content-type = ${req.headers['content-type']}`);

  console.log(req.body);
  //   var dt = dateTime.create();
  //   var formatted = dt.format('Y-m-d H:M:S');
  //   console.log(formatted);

  var ed = new Date();
  var sd = new Date();
  sd.setDate(sd.getDate() - 1);

  var start_time = Math.floor(sd.getTime() / 1000.0);
  var end_time = Math.floor(ed.getTime() / 1000.0);

  res.status(200).json({
    heartbeat: {
      system_date: Math.floor(new Date().getTime() / 1000.0),
      cycle: {
        date: ed.getFullYear() + '-' + ed.getMonth() + '-' + ed.getDate(),
        sequence: 1,
        start_time: start_time,
        end_time: end_time,
      },
    },
  });
});

const port = 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
