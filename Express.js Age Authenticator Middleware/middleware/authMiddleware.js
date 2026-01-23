function sessionAuthenticator(req,res,next){
    if(req.session && req.session.user){
        next();
    }
    return res.redirect('/');
}
function ageAuthenticator(req,res,next){
    if(req.body.age<18){
        return res.redirect('/blocked');
    }
    next();
}
module.exports={sessionAuthenticator,ageAuthenticator};


