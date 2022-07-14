const users = []
const bcryptjs = require('bcryptjs')

module.exports = {
    login: (req, res) => {
      console.log('Logging In User')
      console.log(req.body)
      const { username, password } = req.body
      for (let i = 0; i < users.length; i++) {
        if (users[i].username === username){
          const authenticated = bcryptjs.compareSync(password, users[i].password)

          if(authenticated){
            let returened = {...users[i]}
            delete returened.password

            res.status(200).send(returened)
          }
        } else {
          res.status(400).send("User not found.")
        }
      }
    },
    register: (req, res) => {
      const {username, email, firstName, lastName, password} = req.body

            const salt = bcryptjs.genSaltSync(5);
            const hashed = bcryptjs.hashSync(password, salt);
            console.log(hashed)

            let user = {
                username,
                email,
                firstName,
                lastName,
                password: hashed,
            }
            users.push(user);
             let userReturn = {...user}
             delete userReturn.hashed
            res.status(200).send(userReturn)
    }
  }