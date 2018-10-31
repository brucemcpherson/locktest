// this is to find out if library function gets locked if the func passed to it uses the lockservice
function executeSomethingPassLock(func) {
  // execute it
  func();
}
