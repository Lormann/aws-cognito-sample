var signup = require('./signup');

switch( window.location.pathname ) {
    case '/signup.html':
        signup.initSignUp();
        break;
}

