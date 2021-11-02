// add middlewares here related to projects
const Project = require('../projects/projects-model');



const Post = (req, res, next) => {
    if (!req.body.name || !req.body.description){
        res.status(400).json({message: "missing required field"})
    }else {
        next();}};

const activeProj = async (req, res, next) => {
    if(!req.body.name || !req.body.description || req.body.completed){
        res.status(400).json({message: 'this request is not available or completed'})
    }else{next();}}

const Id = async (req, res, next) => {
    try{
        const {id} = req.params;
        const project = await Project.get(id);
        console.log(project);

        if(project){
            req.project = project;
            next();}
        else{res.status(404).json({message: 'not findign this project check back later or try again'})}}
    catch(error){
        next(error)}};


module.exports = { Post, activeProj, Id }