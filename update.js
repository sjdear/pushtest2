
const { execSync } = require('child_process');
// stderr is sent to stderr of parent process
// you can set options.stdio if you want it to go elsewhere
let stdout = execSync('/Users/sydneydeardorff/Desktop/pushtest050421/quickiePush.shls');