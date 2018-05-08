const userModel = require('../models/users')

//////////////////////////////////////////////////////////////////////////////
// Basic CRUD Methods
//////////////////////////////////////////////////////////////////////////////

function create(req, res, next){
  if(!req.body.email){
    return next({ status: 400, message: 'Bad email'})
  }

  if(!req.body.password){
    return next({ status: 400, message: 'Bad password'})
  }

  userModel.create(req.body.email, req.body.password)
  .then(function(data){
    return res.status(201).send({ data })
  })
  .catch(next)
}

//////////////////////////////////////////////////////////////////////////////
// Quality of Life functions
//////////////////////////////////////////////////////////////////////////////

module.exports = {
  create
}
