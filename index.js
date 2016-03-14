"use strict";

var arrayMethodPattern = /^(?:push|pop|shift|unshift|fill|reverse|splice)$/;

module.exports = {
    rules: {
        "no-let": function(context) {
		    return {
		        "VariableDeclaration": function(node) {
		            if (node.kind === "let") {
		                context.report(node, "Unexpected let, use const.");
		            }
		        }
		    };
		},
		"no-this": function(context) {
			return {
				"ThisExpression": function(node) {
					context.report(node, "Unexpected this, use functions not classes.");
				}
			}
		},
		"no-mutation": function(context) {
			return {
				"AssignmentExpression": function(node) {
					if (node.left.type === "MemberExpression") {
						context.report(node, "No object mutation allowed.");
					}
				}
			}
    },
    "no-array-mutation": function(context) {
			return {
				"Identifier": function(node) {
          if (node.parent.type === "MemberExpression"
            && node.parent.parent.callee === node.parent
            && arrayMethodPattern.test(node.name)) {
						context.report(node, "No array mutation allowed.");
					}
				}
			}
		}
  },
	configs: {
		recommended: {
	    	rules: {
	        	'redux/no-let': 2,
	        	'redux/no-this': 2,
	        	'redux/no-mutation': 2,
	        	'redux/no-array-mutation': 2
	      	}
	    }
	}
};


//no-undef
