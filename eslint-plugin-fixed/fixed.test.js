const { RuleTester } = require('eslint')

const rule = require('./fixed')

const ruleTester = new RuleTester({
    parserOptions: {
      ecmaVersion: 2015,
      sourceType: 'module'
    }
  })

  ruleTester.run('fixed', rule, {
    valid: [   {
      code: 
        "import fs from 'fs' \n" +
        "import path from 'path' \n" + 

        "import _ from 'lodash' \n" 
    },
    {
      code: 
        "import fs from 'fs' \n"+
        "import _ from 'lodash' \n"+
        "import path from 'path' \n"
      
    }
   ], 
    invalid: []
  })