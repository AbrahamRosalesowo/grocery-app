const express = require("express");
const Task = require("../models/tasks");
const app = express();

app.get("/tasks", (req, res) => {
  Task.find({}).exec((err, tasks) => {
    if (err) {
      return res.status(400).json({
        ok: false,
        err,
      });
    }
    Task.countDocuments(({estado: false}),(err, conteo) => {
      res.json({
        ok: true,
        tasks,
        "Número de tareas": conteo,
      });
    });
  });
});

app.post("/tasks", function (req, res) {
  let body = req.body;
  let date = new Date().getTime();
  let task = new Task({
    tarea: body.tarea,
    estado: body.estado,
    fecha: date
  });
  task.save((err, taskDB) => {
    if (err) {
      return res.status(400).json({
        ok: false,
        err,
      });
    }
    res.json({
      ok: true,
      task: taskDB
    });
  });
});

app.put("/tasks/:id", (req, res) => {
  let id = req.params.id;
  let body = req.body;
  Task.findById(id,(err, taskDB) => {
      if (err) {
        return res.json({
          ok: false,
          err,
        });
      }
      if (!taskDB) {
        return res.json({
          ok: false,
          err:{
            message: 'El ID no existe'
          }
        });
      }
      taskDB.estado = body.estado;

      taskDB.save((err, taskSaved) => {
        if(err){
          return res.status(500).json({
            ok: false,
            err,
          });
        }
        res.json({
          ok: true,
          Task: taskSaved
        });
      });

    });
});

app.delete('/tasks/:id', (req, res) => {
  let id = req.params.id;
  let body = req.body;
  Task.findByIdAndRemove(id, (err, taskDB) => {
    if(err){
      return res.json({
        ok: false,
        err
      });
    }
    if (!taskDB) {
      return res.json({
        ok: false,
        err:{
          message: 'Esta tarea no existe'
        }
      });
    }
    res.json({
      ok: true,
      message: 'Tarea borrada'
    });
  });
});

module.exports = app;
