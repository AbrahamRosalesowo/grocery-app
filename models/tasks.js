const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let taskSchema = new Schema({
    fecha: {type: Date, required: false},
    tarea: {type: String, required:[true, 'Hace falta la tarea'] },
    estado: {type: Boolean, required:[true, '¿Está acabada o no?']}
});

module.exports = mongoose.model('Task', taskSchema);