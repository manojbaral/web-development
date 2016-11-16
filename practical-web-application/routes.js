/**
 * Created by mbara3 on 9/30/16.
 */

//Implemting the Express server routes to handle web requests

var crypto=require('crypto');
var express=require('express');

module.exports=function (app) {
    var users=require('./controllers/users_controller');
    app.use('./static',express.static('./static')).use('/lib',express.static('../lib')

    )};

    app.get('/',function (req,res) {
        if(req.session.user) {
            res.render('index',
                {
                    username: req.session.username,
                    msg: req.session.msg
                });

        } else {
            req.session.msg='Access denied';
            res.redirect('/login');
        }

    });

app.get('/user',function (req,res) {
    if (req.session.user) {
        res.render('user', {msg: req.session.msg});

    } else {
        req.session.msg='Access denied!';
        res.redirect('/login');
    }

});

app.get('/signup',function (req,res) {
    if (req.session.user) {
        res.redirect('/');
    }
        res.render('signup', {msg:req.session.msg})

});

app.get('/login',function (req,res) {
    if (req.session.user) {
        res.redirect('/');
    }
    res.render('login', {msg:req.session.msg})

});

app.get('/signup',function (req,res) {
    req.session.destroy(function () {
        res.redirect('/login');
    });
});

app.post('/signup',user.signup);
app.post('/user/update',users.updateUser);
app.post('//user/delete',users.deleteUser);
app.post('/login',user.login);
app.get('/user/profile',users.getUserprofile);


