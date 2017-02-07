import joi from 'joi'
import boom from 'boom'
import user from './user'

const schemas = {user}

const validate = (doc, schema) =>  new Promise((res, rej) => {

    joi.validate(doc, schema, (err, data) => {
      if(err) {
        boom.wrap(err, 400)
        rej(err)
      }
      else {
        res(doc)
      }
    })
  })

const validating = (schemaName, fn) => {
  let schema

  if(typeof schemaName == 'string') {
    schema = schemas[schemaName]
  }

  if (! schema) {
    throw new Error('Unknown schema')
  }
  return (doc) => validate(doc, schema).then(data => {
    return fn(data)
  })
}

export default {
  validating,
  validate
}