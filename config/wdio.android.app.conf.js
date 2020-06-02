const { join } = require('path');
const { config } = require('./wdio.shared.conf');

// ============
// Specs
// ============
config.specs = [
    './tests/specs/*.js',
];

config.capabilities = [
    {
        // The defaults you need to have in your config
        platformName: 'Android',
        maxInstances: 1,
        'appium:deviceName': 'PixelMe',
        'appium:orientation': 'PORTRAIT',
        'appium:automationName': 'UiAutomator2',
        // The path to the app
        'appium:app': join(process.cwd(), './apps/Android-NativeDemoApp-0.2.1.apk'),
        'appium:noReset': true,
        'appium:newCommandTimeout': 240,
    },
];

exports.config = config;
