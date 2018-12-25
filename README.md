## Setting env.js

create `src/env.js` file. and write as follows. 

```js
export var AWS_COGNITO_USER_POOL_ID = ''; // Your user pool id here
export var AWS_COGNITO_CLIENT_ID = '';  // Your client id here
```

## Install and Build

```sh
$ yarn
$ yarn run build
```

## LiveReload
```sh
$ npm install -g livereload
$ livereload . -w 500 -d
```
- Install chrome extension [LiveReload](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei?utm_source=chrome-ntp-icon)

## Server
```sh
$ npm install -g superstatic
$ cd public
$ superstatic -p 9001
Superstatic started.
Visit http://localhost:9001 to view your app.
```

