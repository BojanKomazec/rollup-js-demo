// application entry point
import foo from "./modules/foo.js";

const log = document.getElementById('log');
log.innerText = 'foo value (loaded from a module) is: \n';
log.innerText += foo;