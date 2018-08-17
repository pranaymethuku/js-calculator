"use strict"

/**
Created by: Sayeef Moyen 07/03
Edited by: Pranay Methuku 07/04 - Debug basic arithmetic operation event handlers

Arithmetic operation functionality

Functions:
  binaryOpAdd: Adds the current accumulated value with the incoming value
  binaryOpSubtract: Subtracts the incoming value from the current accumulated value
  binaryOpMultiply: Multiplies the current accumulated value with the incoming value
  binaryOpDivide: Divides the current accumulated value by the incoming value
  binaryOpMod: Obtains state.currentValue mod (state.incomingValue)
  binaryOpExp: Finds x^y
  opClear: Resets state properites to default
  opEqual: Performs the correct operation based on previous input
  binaryEval: Evaluates the value of the accumulated expression
  registerBinaryOp: Event listener for arithmetic buttons

*/

/**
 * Created by: Sayeef Moyen 07/03
 * Edited by: Pranay Methuku 07/04 - Remove event handler code from function
 *
 * Adds the current accumulated value with the incoming value
 */
var binaryOpAdd = function () {
  if (state.incomingValue != null) {
    state.currentValue += state.incomingValue;
  }
}

/**
 * Created by: Sayeef Moyen 07/03
 * Edited by: Pranay Methuku 07/04 - Remove event handler code from function
 *
 * Subtracts the incoming value from the current accumulated value
 */
var binaryOpSubtract = function () {
  if (state.incomingValue != null) {
    state.currentValue -= state.incomingValue;
  }
}

/**
 * Created by: Sayeef Moyen 07/03
 * Edited by: Pranay Methuku 07/04 - Remove event handler code from function
 *
 * Multiplies the current accumulated value with the incoming value
 */
var binaryOpMultiply = function () {
  if (state.incomingValue != null) {
    state.currentValue *= state.incomingValue;
  }
}

/**
 * Created by: Sayeef Moyen 07/03
 * Edited by: Pranay Methuku 07/04 - Remove event handler code from function
 *
 * Divides the current accumulated value by the incoming value
 */
var binaryOpDivide = function () {
  if (state.incomingValue != null) {
    state.currentValue /= state.incomingValue;
  }
}

/**
 * Created by: Sayeef Moyen 07/03
 * Edited by: Pranay Methuku 07/04 - Remove event handler code from function
 *
 * Obtains state.currentValue mod (state.incomingValue)
 */
var binaryOpMod = function () {
  if (state.incomingValue != null && state.incomingValue != 0) {
    if (state.currentValue < 0 && state.incomingValue > 0) {
      state.currentValue = (state.currentValue % state.incomingValue) + state.incomingValue;
    } else {
      state.currentValue = state.currentValue % state.incomingValue;
    }
  }
}

/**
 * Created by: Pranay Methuku 07/04
 *
 * Divides the current accumulated value by the incoming value
 */
var binaryOpExp = function () {
  if (state.incomingValue != null) {
    state.currentValue = Math.pow(state.currentValue, state.incomingValue);
  }
}

/**
 * Created by: Xinyu Meng 07/03
 * Edited by: Pranay Methuku 07/04 - Remove event handler code from function
 *
 * Operations to set state when previous operation is equals.
 */
var opEqual = function () {
  if (state.incomingValue != null && state.incomingValue != 0) {
    state.currentValue = state.incomingValue;
  }
}

/**
 * Created by: Sayeef Moyen 07/03
 *
 * Resets state properites to default
 */
var opClear = function () {
  state = new State(document.getElementById("display"))
}

// object holding all binary operations and their respective functions
var binaryOps = {
  "+": binaryOpAdd,
  "-": binaryOpSubtract,
  "*": binaryOpMultiply,
  "/": binaryOpDivide,
  "mod": binaryOpMod,
  "^": binaryOpExp,
  "=": opEqual
}

/**
 * Created by: Pranay Methuku 07/04
 *
 * Evaluates the value of the accumulated expression
 */
var binaryEval = function () {
  if (state.operation in binaryOps) {
    binaryOps[state.operation]();
  }
}

/**
 * Created by: Pranay Methuku 07/04
 *
 * Event listener for binary arithmetic operator buttons
 */
var registerBinaryOp = function (event) {
  storePreviousValue(state);
  binaryEval();
  if (state.incomingValue != null && state.operation != "=") {
    updateHistory(state);
    printHistory("arithmetic");
  }
  state.binaryOperationCleanup();
  state.operation = event.target.id;
}

// attaches event listeners to all binary arithmetic operators
for (var binaryOp in binaryOps) {
  document.getElementById(binaryOp).addEventListener("click", registerBinaryOp);
}

document.getElementById("clear").addEventListener("click", opClear);

/**
 * Created by: Pranay Methuku 07/04
 *
 * Event listener for constant PI
 */
var setPi = function () {
  state.currentValue = Math.PI;
  state.unaryOperationCleanup();
}
// attaches event listeners to pi button
document.getElementById("pi").addEventListener("click", setPi);