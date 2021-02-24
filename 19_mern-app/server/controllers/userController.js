const Users = require('../models/user')

const userController = {
  register: async (req, res) => {
    try {
      console.log(req.body)
      res.json({ msg: "Register" })
    } catch (err) {
      return res.status(500).json({ msg: err.message })
    }
  }
}

module.exports = userController
