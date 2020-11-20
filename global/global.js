/*

==================================
 CONFIG VARS WITH HEROKU
==================================

*/

process.env.NODE_ENV = process.env.NODE_ENV || "dev";

let urlDB;
if(process.env.NODE_ENV === "dev"){
    urlDB = "mongodb://localhost:27017/todo";
}else{
    urlDB = process.env.MONGO;
}
process.env.URLDB = urlDB;