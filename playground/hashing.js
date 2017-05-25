const { SHA256 } = require('crypto-js');
const jwt = require('jsonwebtoken');

const bcrypt = require('bcryptjs');

const password = '123abc!';

bcrypt.genSalt(10, (err, salt) => {
  bcrypt.hash(password, salt, (err, hash) => {
    console.log(hash);
  });
});

const hashedPassword = '$2a$10$0Lgd4NwJbi3yS0KZrFho1OAZIeVjd7VRsu4qgpbNkg9kpsyR1KyIa';

bcrypt.compare(password, hashedPassword, (err, res) => {
  console.log(res);
});


// const data = {
//   id: 5
// };
//
// const token = jwt.sign(data, '123abc');
// console.log(token);
//
// const decodedToken = jwt.verify(token, '123abc');
//
// console.log('decodedToken ',decodedToken);

// const message = 'I am number five';
//
// const hash = SHA256(message).toString();
//
// console.log(`Mesage: ${message}`);
// console.log(`Hash: ${hash}`);
//
// const data = {
//   id: 4
// };
//
// const token = {
//   data,
//   hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// };
//
// // man in the middle
// token.data.id = 5;
// token.hash = SHA256(JSON.stringify(token.data)).toString();
//
// const resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();
//
// if (resultHash === token.hash) {
//   console.log('Data is unchanged');
// } else {
//   console.log('WARNING!:Data has been changed');
// }
