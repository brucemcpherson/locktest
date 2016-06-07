function locktest() {
  // run this multiple simultaneously
  var MAX = 10;
  for (var i = 0 ; i < MAX ;i++) {
    locktestlib.executeSomethingPassLock(function() {
      var now = new Date().getTime();
      // if the library lock is in action then this might not happen immediately
      var lock = LockService.getScriptLock();
      lock.waitLock(20000);
      Logger.log('waited ' + (new Date().getTime() - now) +'ms for lock when lock was in main');
      // hold the lock for a bit
      Utilities.sleep(2000);
      lock.releaseLock();
    });
  }
}
