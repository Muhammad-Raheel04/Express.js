function sessionChecker(req,res,next){
    if(req.session.formSubmitted){
        next();
    }
    else{
        res.redirect('/');
    }
}