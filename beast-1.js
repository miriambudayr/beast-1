function runWithDebugger (callback, args) {
  debugger;
  callback.apply(null, args);
}
