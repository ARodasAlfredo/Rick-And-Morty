const users = require('../utils/users')

const login = (req, res) => {
    const { email, password } = req.query;
    let access = false;
    users.forEach((user) => {
      if (user.email === email && user.password === password) {access = true;
         res.json({ access: true })}
         else{
          res.json({access: false})
         }
    })
  };
  module.exports = login;