import joi from 'joi'

export default joi.object().keys({
  email: joi.string().email().required(),
  username: joi.string().alphanum().min(3).max(30).required(),
  password: joi.string().regex(/[a-zA-z0-9]{3,30}/),
  access_token: [joi.string(), joi.number()],
  birthyear: joi.number().integer().min(1900).max((new Date()).getFullYear())
})