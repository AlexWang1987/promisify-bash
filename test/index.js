var bash = require('../index.js');

bash('npm config list')
  .then(function(d) {
    console.log(d);
  })
  .catch(function(e) {
    console.log(e);
  })
