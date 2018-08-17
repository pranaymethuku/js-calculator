"use strict";
/**
Created by: Pranay Methuku 07/01
Edited by: Sayeef Moyen 07/03 - Integrate with State

Numeral registration with calculator

Functions:
  appendDigit: Appends digit to state's expression, depending on
    whether the digit is before or after the decimal.
  appendDecimal: Appends digit to state's expression, only
    if valid, else does nothing
*/


/**
 * Created by: Pranay Methuku 07/01
 * Edited by: Sayeef Moyen 07/03 - Integrated with State constructor
 * 
 * Appends digit to state's expression, depending on
 *  whether the digit is before or after the decimal.
 */
var appendDigit = function (event) {
  var digit = Number(event.target.id);
  if (state.expression != "" || digit != 0) {
    state.expression += digit;
  } else {
    state.expression = "0";
  }
  state.updateDisplay();
}

/**
 * Created by: Pranay Methuku 07/01
 * Edited by: Sayeef Moyen 07/03 - Integrated with State constructor
 * 
 * Appends digit to state's expression, only
 *  if valid, else does nothing
 */
var appendDecimal = function (event) {
  state.expression += ".";
  if (state.expression.match(/\.\d*\./g) != null) {
    state.expression = state.expression.slice(0, -1);
  }
  state.updateDisplay();
}

// attach digit buttons to event listeners
var digits = document.getElementsByClassName("digit");
for (var i = 0; i < digits.length; i++) {
  digits[i].addEventListener("click", appendDigit);
}

document.getElementById('.').addEventListener("click", appendDecimal);