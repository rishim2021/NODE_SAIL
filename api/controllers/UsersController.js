/**
 * UsersController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const Users = require("../models/Users");

module.exports = {
    list:function(req, res){
        Users.find({}).exec(function(err,users){
            if(err){
                return res.serverError(err);
            }else{
                return res.view('displayAll',{users:users})
            }
        });
    }

};

