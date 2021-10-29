// add middlewares here related to actions  
// Build a validation system that checks client's request - actions-middleware

const Action = require('../actions/actions-model');






const validatePost = (req, res, next) => {
    if (!req.body.notes || !req.body.description || req.body.project_id) {
        res.status(400).json({message: 'This post is missing either notes, a description or an id.'})
    } else{next();}
};

const validateId = async (req, res, next) => {
    try{
        const { id } = req.params;
        const action  = await Action.get(id);
                    console.log(action);
                    if(action){
                        action = req.action;
                        next();
                    }else{
                        res.status(404).json({message: 'That action is NOT active, completed, or removed. Please try again.'})
                    }
    } catch(error){
        next(error)
    }
};

const validateAction = async (req, res, next) => {
    if(!req.body.notes || !res.body.description || !req.body.project_id){
        res.status(400).json({message: 'This post is missing required information.'})
    } else{
        next();
    }
}



module.exports = { validatePost, validateId, validateAction}