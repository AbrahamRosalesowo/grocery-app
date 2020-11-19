/*

==================================
 VARIABLES DE ENTORNO PARA HEROKU
==================================

*/

//process.env.NODE_ENV = process.env.NODE_ENV || "dev";

let urlDB = "mongodb+srv://strider:paj7hZK1ZP5dFFLK@cluster0.4n4xs.mongodb.net/ts_crud?retryWrites=true&w=majority";
if(process.env.NODE_ENV === "dev"){
    urlDB = "mongodb://localhost:27017/todo"
}else{
    urlDB = "mongodb+srv://strider:paj7hZK1ZP5dFFLK@cluster0.4n4xs.mongodb.net/ts_crud?retryWrites=true&w=majority"
}
process.env.URLDB = urlDB;