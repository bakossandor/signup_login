# signup_login
A simple signup / login interface - full stack

to run this - you should need to install mongodb locally - the express server connect ot a local database

2018MAY12
- CLIENT
    - making minor changes
    - the app is 90 % oparateble

2018MAY11
- CLIENT
    - route guards
    - nav items (need to debugg some)
    - localstorage

2018MAY10
- CLIENT
    - vuex

2018MAY09
- CLIENT
    - users table get request with axios (need to implement the token usage to this site)
    
2018MAY08
- SERVER
    - bcrypt compare passwords
    - jsonwebtoken - sending the token to the user
    - receving the token and decoding

2018MAY07
- SERVER
    - bcrypt
    - mongodb client (mongodb runs at localhost)
    - storing the signup datas + hashing the password
    - users request gives back the _id, email and username and not the pw

2018MAY06
- CLIENT
    - vue-cli webpack-simple
    - vue-router
        - all the routes we need
        - history mode
    - vuetify
        - basic UI with the routes
    - axios
        - post requests
- SERVER
    - express
    - cors
    - morgan
    - body-parser
