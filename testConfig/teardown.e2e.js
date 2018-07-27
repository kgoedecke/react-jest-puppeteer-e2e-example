const rimraf = require('rimraf')
const path = require('path')
const os = require('os')
const DIR = path.join(os.tmpdir(), 'jest_puppeteer_global_setup')

module.exports = async function() {
  // stop app
  require('child_process').exec('npm eject');

  // close the browser instance
  await global.__BROWSER_GLOBAL__.close();

  // clean-up the wsEndpoint file
  rimraf.sync(DIR);
};
