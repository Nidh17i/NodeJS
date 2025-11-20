
export const getRegisterPage=(req,res)=>{
    res.render("../views/auth/register");
}
export const getLoginPage=(req,res)=>{
    res.render("../views/auth/login")
}

export const postLogin=(req,res)=>{
    res.redirect('/');
}