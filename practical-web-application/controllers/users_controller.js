/**
 * Created by mbara3 on 9/29/16.
 */

//Implementing the route for user signup for the Express server

express.signup=function (req,res) {

    var user=new User({username:req.body.username});
    user.set('hashed_password',hashPW(req.body.password));
    user.set('email',req.body.email);
    user.save(function (err) {

        if(err){
            res.session.error=err;
            res.redirect('/signup');

        } else {
            req.session.user=user.id;
            req.session.username=user.username;
            req.session.msg='Authenticated as ' + user.username;
            res.redirect('/');
        }

    });

};

//Implementing the route for user login for the Express server

exports.login=function(req,res){

    User.findOne({username:req.body.username})
        .exec(function (err,user) {

            if(!user) {
                err = 'User Not Found.';

            } else if (user.hashed_password ===

            hasPW(req.body.pass.toString())) {
                req.session.regenerate(function () {

                    req.session.user = user.id;
                    req.session.username = user.username;
                    req.session.msg = 'Authenticated as ' + user.username;
                    res.redirect('/');


                });

            } else {
                err='Authenticated failed';
            }

            if (err){
                req.session.regenerate(function () {
                    req.session.msg=err;
                    res.redirect('/login')

                });
            }

            //implementing the route to get user profiles for the Express server

            exports.getUserprofile=function (req,res) {

                User.findOne({_id:req.session.user })
                    .exec(function (err,user) {

                        if (!user) {
                            res.JSON(404, {err: 'User Not Found.'});
                        } else {
                            res.json(user)
                        }

                    });

            };

            //Imlementing the route to update users for the express server

            exports.updateUser=function (req,res) {
                User.findOne({_id:req.session.user})
                    .exec(function (err,user) {
                        user.set('email',req.body.email);
                        user.set('color',req.body.color);
                        user.save(function (err) {

                            if (err) {
                                res.sessor.error = err;

                            } else {
                                req.session.msg='user Updated.';
                            }

                            res.redirect('/user')

                        });

                    });

            }


































































        });

};

