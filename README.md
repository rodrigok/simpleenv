simpleenv
=========

Load environment from file

[![NPM](https://nodei.co/npm/simpleenv.png?downloads=true&stars=true)](https://nodei.co/npm/simpleenv/)
[![NPM](https://nodei.co/npm-dl/simpleenv.png)](https://nodei.co/npm/simpleenv/)


By default simpleev tries to load .env file


#Usage
Import the simpleenv at the top of your code to ensure that your configurations will be loaded before anything else

```javascript
require('simpleenv')();
```

optionally, you can specify the file name

```javascript
require('simpleenv')('myEnvFile.js');
```