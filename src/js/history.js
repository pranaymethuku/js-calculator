/**
Created by Michael Lynch 07/04
Edited by Pranay Methuku 07/04 - Added history constructor

Functions:
  History: constructor for history object
  storePreviousValue: stores previous state data
  updateHistory: Retrieves data from state and updates history
  printHistory: prints last operation to history
  clearHistory: completely clears history
*/

/**
 * Created by: Pranay Methuku 07/04
 * 
 * Constructor to store history of state
 * 
 * Args:
 *  state (State object): object to store history from
 */
var History = function (state) {
  this.previousValue = null;
  this.incomingValue = state.incomingValue;
  this.operation = state.operation;
  this.currentValue = state.currentValue;
}

/**
 * Created by: Pranay Methuku 07/04
 * 
 * Helper method to store previous value in state
 * 
 * Args:
 *  state (State object): object to store history from
 */
function storePreviousValue(state) {
  history.previousValue = state.currentValue;
}

/**
 * Created by: Pranay Methuku 07/04
 * 
 * Helper method to update state
 * 
 * Args:
 *  state (State object): object to store history from
 */
function updateHistory(state) {
  history.currentValue = state.currentValue;
  history.operation = state.operation;
  history.incomingValue = state.incomingValue;
}

/**
 * Created by: Michael Lynch 7/4
 * Edited by: Pranay Methuku - cleaned up PrintHistory to be one interface for all operations
 *
 * function for printing expressions
 * 
 * Args:
 *  type (String) : "arithmetic/trig/poly" expression type to be printed
 */
function printHistory(type) {
  var li = document.createElement("li");
  var displayFormat = {
    "arithmetic": history.previousValue + " " +
      history.operation + " " + history.incomingValue + " = " + history.currentValue,
    "trig": history.operation + "(" +
      history.previousValue + ") = " + history.currentValue,
    "unary": history.operation + "(" + history.previousValue + ") = " +
      history.currentValue,
  }
  if (type in displayFormat) {
    li.appendChild(document.createTextNode(displayFormat[type]));
  }
  document.getElementById('list').prepend(li);
}

/**
 * Created by: Michael Lynch 7/4
 *
 * function for clearing history
 */
function clearHistory() {
  document.getElementById("list").innerHTML = "";
}

document.getElementById('clearHistory').addEventListener("click", clearHistory);

var history = new History(state);