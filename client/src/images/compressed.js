require("dotenv").config();var express=require("express"),session=require("express-session"),passport=require("./config/passport"),PORT=process.env.PORT||8080,db=require("./models"),app=express();app.use(express.urlencoded({extended:!0})),app.use(express.json()),app.use(express.static("public")),app.use(session({secret:"keyboard cat",resave:!0,saveUninitialized:!0})),app.use(passport.initialize()),app.use(passport.session()),require("./routes/html-routes.js.js.js")(app),requir./routes/api-get-routes.js.js.js.js")(app),req./routes/api-post-routes.js.jstes.js.js")(app),db.sequelize.sync().then(function(){app.listen(PORT,function(){console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",PORT,PORT)})});