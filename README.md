# Selenium script for WSL

This is a simple node/selenium script that can be run from a WSL terminal on Windows to launch a UI test on the Chrome browser. The path to chromedriver is set in process.env (within index.js), so it's unecessary here to explicily add chromedriver to your path (either bash or Windows). Within the chromedriverBin directory is the win32 chromedriver executable, as well as a shell script that launches chromedriver.exe with any provided arguments. Selenium running on Linux will not (as far as I'm aware), recognize 'chromedriver.exe' as a chromedriver executable, which is part of the necessity for the shell script. This works due to the fact that the Fall Creators Update (1809) has made interop possible from a WSL terminal ([more here](https://docs.microsoft.com/en-us/windows/wsl/interop)).

Note that Chrome and chromedriver do run as Windows programs, but there is no dependency here on the Windows versions of Node or NPM. To run:

```
npm install
node index.js
```