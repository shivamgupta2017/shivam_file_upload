var dns = require('dns');
var w3 = dns.lookup('www.awsmdev.com', function (err, addresses, family) {
  console.log(addresses);
});

