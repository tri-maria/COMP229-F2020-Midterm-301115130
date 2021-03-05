let express=require('express');
let router=express.Router();

module.exports.displayHomepage=(req,res,next)=>{
    res.render('index',{title : ' Home'});
}

module.exports.displayAboutpage=(req,res,next)=>{
    res.render('index', { title: 'About' });
}

module.exports.displayProductspage=(req,res,next)=>{
    res.render('index', { title: 'Products' });
}

module.exports.displayServicespage=(req,res,next)=>{
    res.render('index', { title: 'Services' });
}

module.exports.displayContactpage=(req,res,next)=>{
    res.render('index', { title: 'Contact' });
}