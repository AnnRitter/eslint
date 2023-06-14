const { RuleTester } = require('eslint')

const rule = require('./fixed')

const ruleTester = new RuleTester({
    parserOptions: {
      ecmaVersion: 2015,
      sourceType: 'module'
    }
  })

  ruleTester.run('fixed', rule, {
    valid: [  {
      code: ''
    }
   ], 
    invalid: []
  })