"use strict"
/**
 Created by: Xinyu Meng 07/01
 Edited by: Pranay Methuku 07/04 - Documentation and cleaning up

 Memory operation tracking
 
 Functions:
  memoryRead: Event handler for memory read button
  memorySet: Event handler for memory set button
  memoryPlus: Event handler for memory plus button
  memoryClear: Event handler for memory clear button
*/

var memory = {
  set: false,
  currentValue: 0
}

/**
 * Created by: Xinyu Meng 07/01
 * Edited by: Pranay Methuku 07/04 - Documentation
 *
 * Memory read operation event handler
 */
function memoryRead(event) {
  if (memory.set) {
    state.incomingValue = memory.currentValue;
    state.expression = memory.currentValue.toString();
    state.updateDisplay();
  }
}

/**
 * Created by: Xinyu Meng 07/01
 * Edited by: Pranay Methuku 07/04 - Documentation
 *
 * Memory set operation event handler
 */
function memorySet(event) {
  if (state.expression == "") {
    return;
  }
  memory.set = true;
  memory.currentValue = Number(state.expression);
  document.getElementById("MR").classList.remove("disable");
  document.getElementById("MC").classList.remove("disable");
}

/**
 * Created by: Xinyu Meng 07/01
 * Edited by: Pranay Methuku 07/04 - Documentation
 *
 * Memory clear operation event handler
 */
function memoryClear(event) {
  memory.set = false;
  memory.currentValue = 0;
  document.getElementById("MR").classList.add("disable");
  document.getElementById("MC").classList.add("disable");
}

/**
 * Created by: Xinyu Meng 07/01
 * Edited by: Pranay Methuku 07/04 - Documentation
 *
 * Memory plus operation event handler
 */
function memoryPlus(event) {
  memory.currentValue += state.currentValue;
  memory.set = true;
}

var memoryOps = {
  "MR": memoryRead,
  "MS": memorySet,
  "MC": memoryClear,
  "M+": memoryPlus
}

for (var memoryOp in memoryOps) {
  document.getElementById(memoryOp).addEventListener("click", memoryOps[memoryOp]);
}

//disable button when memory is not set
document.getElementById("MR").classList.add("disable");
document.getElementById("MC").classList.add("disable");