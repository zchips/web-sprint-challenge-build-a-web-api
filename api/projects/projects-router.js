// Write your "projects" router here!
const express = require('express');
const Project = require('../projects/projects-model');
const { Post, activeProj, Id} = require('../projects/projects-middleware');

const router = express.Router();



router.get("/", (req, res, next)=>{
    Project.get()
    .then(projects => {
        res.status(200).json(project)})
    .catch(next)
});


router.get("/:id", Id, (req, res, next)=>{
    const id = req.params.id;
    Project.get(id).then((projects)=>{
        res.json(projects)
    })
    .catch(next);
});

router.post("/", Post, (req, res, next)=>{
    Project.insert(req.body).then(projects =>{
    res.status(201).json(projects);
})
    .catch(next)
});


router.put("/:id", Id, activeProj, (req, res, next)=>{

    Project.update(req.params.id, req.body).then((projects)=> {
        res.json(projects)
    }).catch(next)
});


router.get("/:id/actions", Id, (req, res, next)=>{
    Project.getProjectActions(req.params.id).then(actions =>{
        res.status(200).json(actions)
    })

    .catch(next)
});


router.delete("/:id", Id, (req, res, next) =>{
Project.remove(req.params.id).then(projects => {
    res.json(projects);
})
 .catch(next)
});

module.exports = router;