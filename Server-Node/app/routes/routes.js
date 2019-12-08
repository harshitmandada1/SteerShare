'use strict';

module.exports = function(app){
    const userController = require('../controllers/userController');
    const postController = require('../controllers/postController');

    app.route('/user/:id')
        .get(userController.get) //Fetch one user
        .put(userController.put) //Update one user
        .delete(userController.delete); //Delete one user

    app.route('/posts/:id')
        .get(postController.get);

    app.route('/posts')
        .get(postController.search) //Fetch one post
        .post(postController.post);

    app.route('/users/authenticate')
        .post(userController.authenticate);
    
    app.route('/users/register')
        .post(userController.register);
    
    app.route('/users/uploadProfileImage')
        .post(userController.upload, userController.uploadRes);
    
    app.route('/users/profileImg/:filename')
        .get(userController.image);

};