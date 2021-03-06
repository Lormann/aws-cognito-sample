# aws-cognito-sample

This is a sample application of Cognito made with reference to AWS document.

can do the following.

* signup
* login
* logout
* get aws credentials
* Openid Connect (oidc) login. (this sample uses 'Line Login')

## Install

### Setting env.js

create `src/env.js` file. and write as follows. 

```js
export var AWS_REGION = '';
export var AWS_COGNITO_USER_POOL_ID = ''; // Your user pool id here
export var AWS_COGNITO_CLIENT_ID = '';  // Your client id here
export var AWS_ID_POOL_ID = '';
export var AWS_COGNITO_APP_WEB_DOMAIN = 'xxxxx.auth.<region>.amazoncognito.com';
```

### Install and Build

```sh
$ yarn
$ yarn run build
```

### LiveReload
```sh
$ npm install -g livereload
$ livereload . -w 1000 -d
```
- Install chrome extension [LiveReload](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei?utm_source=chrome-ntp-icon)

### Server
```sh
$ npm install -g superstatic
$ cd public
$ superstatic -p 9001
Superstatic started.
Visit http://localhost:9001 to view your app.
```

## Memo

### AWS Cognito Document
- [tutorial: Javascript](https://docs.aws.amazon.com/ja_jp/cognito/latest/developerguide/tutorial-integrating-user-pools-javascript.html)
- [ID Pool](https://docs.aws.amazon.com/ja_jp/cognito/latest/developerguide/identity-pools.html)
- [github: amazon-cognito-identity-js](https://github.com/aws-amplify/amplify-js/tree/master/packages/amazon-cognito-identity-js#usage)
- [github: amazon-cognito-auth-js](https://github.com/aws/amazon-cognito-auth-js#usage)

### Line Document
- [Line Login(web)](https://developers.line.biz/ja/docs/line-login/web/integrate-line-login/)
- [Social API v2.1](https://developers.line.biz/ja/reference/social-api/)

### Commit Message

| emoji    | description     |
| :------------- | :------------- |
| :tada:  | Initial commit. |
| :art:  | Improving structure / format of the code. |
| :bug: | Fixing a bug. |
| :fire: | Removing code or files. |
| :sparkles: | Introducing new features. |
| :memo: | Writing docs. |
| :construction: | Work in progress. |
| :wrench: | Changing configuration files. |
| :pencil2: | Fixing typos. |
| :zap: | Improving performance. |


reference:
[gitmoji | An emoji guide for your commit messages](https://gitmoji.carloscuesta.me/)