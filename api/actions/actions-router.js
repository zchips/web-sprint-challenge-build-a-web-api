// Write your "actions" router here!
const express = require('express');
const Action = require('../actions/actions-model')
const {validateId, validatePost, validateAction} = require('../actions/actions-middlware');


const router = express.Router();

router.get("/", (req, res, next) => {
    Action.get()
    .then(actions => {
        res.status(200).json(actions)
    }) .catch(next)});

router.get("/:id", validateId, (req, res, next)=> {
    res.json(req.action)});

router.post("/", validatePost, (req, res, next) => {
    Action.insert(req.body)
    .then(action=> {
        res.status(201).json(action)
    }) .catch(next)});

router.put("/:id", validateAction, validateId, (res, req, next) => {
    Action.update(req.params.id, req.body)
    .then(action => {
        res.status(200).json(action)
    }).catch(next);})

router.delete("/:id", validateId, (req, res, next) => {
    Action.remove(req.params.id)
    .then(action => {
        res.json(action)
    })
})

module.exports = router;