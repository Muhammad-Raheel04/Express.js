function ageAuthenticator(req,res,next){
    if(req.body.age<18){
        return res.redirect('/blocked');
    }
    next();
}

module.exports={ageAuthenticator};


