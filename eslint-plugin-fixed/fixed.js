"use strict";

module.exports = {
  rules: {
    checkImports: {
      meta: {
        type: "problem",
        hasSuggestions: true,
        fixable: true,
      },
      create(context) {
        // let sortedNodes = []
        // const sortGroups = [/^@\w/, /^\/w/, /^\.\.\//, /^\./]
        // const sourceCode = context.getSourceCode()
        // console.log(sourceCode.tokensAndComments.lines);
        return {
          ImportDeclaration(node) {
            console.log(node.source.value);
            // node = {CallExpression}
            // let value = node.source.value
            // var callee = node.callee;
            // callee.object.name === 'sounds'
            // callee.property.name === 'get'
          },
        };
      },
    }
  }
};
