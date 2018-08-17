"use strict";

/**
Created by: Steve Kwon 07/04

Unary operation functionality

Functions:
  unaryOpSquare: Sets current value to its square value
  unaryOpSquareRoot: Sets current value to its square root value
  unaryOpExp: Sets current value x to value of e^x
  unaryOpLn: Sets current value x to value of ln(x)
  unaryOpNegate: Sets current value to its negation value
  registerUnaryOp: Event listener for unary buttons

*/


/**
*  Created by: Steve Kwon 07/04
*
*  Square function
*/
var unaryOpSquare = function(){
      if(state.currentValue != null) {
          state.currentValue = Math.pow(Number(state.currentValue), 2);
      }
}

/**
*  Created by: Steve Kwon 07/04
*
*  Square root function
*/
var unaryOpSquareRoot = function(){
    if(state.currentValue != null){
        state.currentValue = Math.sqrt(Number(state.currentValue));
    }
}

/**
*  Created by: Steve Kwon 07/04
*
*  Logarithm function
*  This works as ln(x) mathmatically
*/
var unaryOpLn = function(){
    if(state.currentValue != null){
        state.currentValue = Math.log(Number(state.currentValue));
    }
}

/**
*  Created by: Steve Kwon 07/04
*
*  Exponential function
*  This works as e^x mathmatically
*/
var unaryOpExp = function(){
    if(state.currentValue != null){
        state.currentValue = Math.exp(Number(state.currentValue));
    }
}

/**
 * Created by: Pranay Methuku 07/04
 *
 * Unary negate button operation
 */
var unaryOpNegate = function() {
    state.currentValue *= -1;
}

//object for all trig operations with their event handlers
var unaryOps = {
  "square": unaryOpSquare,
  "sqrt": unaryOpSquareRoot,
  "ln": unaryOpLn,
  "e^x": unaryOpExp,
  "negate": unaryOpNegate
}

var registerUnaryOp = function (event) {
  state.operation = event.target.id;
  storePreviousValue(state);
  unaryOps[state.operation]();
  updateHistory(state);
  printHistory("unary");
  state.unaryOperationCleanup();
}

// attaches event listeners to all trigonometric arithmetic operators
for (var unaryOp in unaryOps) {
  document.getElementById(unaryOp).addEventListener("click", registerUnaryOp);
}
