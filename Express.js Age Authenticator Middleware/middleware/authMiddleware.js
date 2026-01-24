function sessionMiddleware(req,res,next){
    if(req.session && req.session.Verified){
        return next();
    }
    return res.redirect('/');
}
function ageAuthenticator(req,res,next){
    if(req.body.age<18){
        return res.redirect('/blocked');
    }
    next();
}

module.exports={ageAuthenticator,sessionMiddleware};


