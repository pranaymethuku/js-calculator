"use strict"

/**
Created by: Sayeef Moyen 07/03
Edited by: Pranay Methuku 07/04 - Changed constructor name from Accumulator to State and Update docs

Shared constructor for calculator's state information

Functions:
  updateDisplay: Updates this.display to match the current value of this.state

Properties:
  currentValue (Number): current value stored in the calculator, result of all previous expressions
  incomingValue (Number): incoming value entered by the user
  expression (String): mathematical string expression for numbers
  operation (String): current operation being executed
  targetIsAcc (Boolean): whether displayed output is same as expression string
  display (DOM String): DOM object linked to the primary display of the calculator
  state.binaryOperationCleanup: Shared proper updating of the state and display after any binary operation
  state.unaryOperationCleanup: Shared proper updating of the state and display after any unary operation

*/


/**
 * Created by: Sayeef Moyen 07/03
 * Edited by: Pranay Methuku 07/04 - Change constructor from Accumulator to State
 *
 * Constructor for the State of the calculator
 */
function State(main_display) {
  this.DEFAULT_DISPLAY = 0;
  this.currentValue = 0;
  this.incomingValue = null;
  this.expression = "";
  this.operation = null;
  this.targetIsAcc = true;

  this.display = main_display;
  this.display.innerHTML = this.DEFAULT_DISPLAY;

  /**
   * Created by: Sayeef Moyen 07/03
   *
   * Shared updating display
   */
  this.updateDisplay = function () {
    if (this.targetIsAcc) {
      this.currentValue = Number(this.expression);
    } else {
      this.incomingValue = Number(this.expression);
    }
    this.display.innerHTML = this.expression;
  }

  /**
   * Created by: Sayeef Moyen 07/03
   *
   * Shared proper updating of the state and display after any binary operation
   */
  this.binaryOperationCleanup = function () {
    this.expression = String(this.currentValue);
    this.targetIsAcc = true; // display the state value
    this.updateDisplay();
    this.targetIsAcc = false; // get the incoming value
    this.expression = "";
    this.incomingValue = null;
  }

  /**
   * Created by: Pranay Methuku 07/04
   *
   * Shared proper updating of the state and display after any binary operation
   */
  this.unaryOperationCleanup = function () {
    this.expression = String(this.currentValue);
    this.targetIsAcc = true; // display the state value
    this.updateDisplay();
    this.expression = "";
    this.incomingValue = null;
  }
}

// create initial state
var state = new State(document.getElementById("display"));