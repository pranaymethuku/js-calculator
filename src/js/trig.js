"use strict";

/**
Created by: Steve Kwon 07/03
Edited by: Pranay Methuku 07/04 - Handling corner cases and documentation

Trigonometric operation functionality (ALL in Radians)

Functions:
  trigOpSin: Sets current value to its sine value
  trigOpCos: Sets current value to its cosine value
  trigOpTan: Sets current value to its tangent value
  trigOpCsc: Sets current value to its cosecant value
  trigOpSec: Sets current value to its secant value
  trigOpCot: Sets current value to its contangent value
  registerTrigOp: Event listener for trigonometric buttons
  setPi: Event listener for PI button

*/

/**
 * Created by: Steve Kwon 07/04
 * Edited by: Pranay Methuku 07/04 - Handled corner cases to display precise output
 *
 * Sets current value to its sine value
 */
var trigOpSin = function () {
  if (state.currentValue % Math.PI == 0) {
    state.currentValue = 0;
  } else {
    state.currentValue = Math.sin(Number(state.currentValue));
  }
}

/**
 * Created by: Steve Kwon 07/04
 * Edited by: Pranay Methuku 07/04 - Handled corner cases to display precise output
 *
 * Sets current value to its cosine value
 */
var trigOpCos = function () {
  if (state.currentValue % Math.PI / 2 == 0 && state.currentValue % Math.PI != 0) {
    state.currentValue = 0;
  } else {
    state.currentValue = Math.cos(Number(state.currentValue));
  }
}

/**
 * Created by: Steve Kwon 07/04
 * Edited by: Pranay Methuku 07/04 - Handled corner cases to display precise output
 *
 * Sets current value to its tangent value
 */
var trigOpTan = function () {
  if (state.currentValue % Math.PI == 0) {
    state.currentValue = 0;
  } else {
    state.currentValue = Math.tan(Number(state.currentValue));
  }
}

/**
 * Created by: Steve Kwon 07/04
 * Edited by: Pranay Methuku 07/04 - Handled corner cases to display precise output
 *
 * Sets current value to its secant value
 */
var trigOpSec = function () {
  if (state.currentValue % Math.PI / 2 == 0 && state.currentValue % Math.PI != 0) {
    state.currentValue = Infinity;
  } else {
    state.currentValue = 1 / Math.cos(Number(state.currentValue));
  }
}

/**
 * Created by: Steve Kwon 07/04
 * Edited by: Pranay Methuku 07/04 - Handled corner cases to display precise output
 *
 * Sets current value to its cosecant value
 */
var trigOpCsc = function () {
  if (state.currentValue % Math.PI == 0) {
    state.currentValue = Infinity;
  } else {
    state.currentValue = 1 / Math.sin(Number(state.currentValue));
  }
}

/**
 * Created by: Steve Kwon 07/04
 * Edited by: Pranay Methuku 07/04 - Handled corner cases to display precise output
 *
 * Sets current value to its cotangent value
 */
var trigOpCot = function () {
  if (state.currentValue % Math.PI == 0) {
    state.currentValue = Infinity;
  } else {
    state.currentValue = 1 / Math.tan(Number(state.currentValue));
  }
}

//object for all trig operations with their event handlers
var trigOps = {
  "sin": trigOpSin,
  "cos": trigOpCos,
  "tan": trigOpTan,
  "cot": trigOpCot,
  "sec": trigOpSec,
  "csc": trigOpCsc
}

/**
 * Created by: Pranay Methuku 07/04
 *
 * Event listener for trigonometric operator buttons
 */
var registerTrigOp = function (event) {
  state.operation = event.target.id;
  storePreviousValue(state);
  trigOps[state.operation]();
  updateHistory(state);
  printHistory("trig");
  state.unaryOperationCleanup();
}

// attaches event listeners to all trigonometric arithmetic operators
for (var trigOp in trigOps) {
  document.getElementById(trigOp).addEventListener("click", registerTrigOp);
}

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