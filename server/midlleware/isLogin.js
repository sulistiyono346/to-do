const jwt = require('jsonwebtoken');
require('dotenv').config()
const User = require("../models/users")
module.exports = {
    isLogin: (req, res, next) => {
        jwt.verify(req.headers.token, process.env.jwtTokens, function (err, decoded) {
            if (err) {
                res.status(404).json({
                    msg: "forbiden access"
                })
            }
            else {
                User.findOne({ email: decoded.data.email })
                    .then((user) => {
                        console.log(user);
                        req.decoded = user
                        next()

                    }).catch((err) => {
                        req.status(400).json({
                            msg: "user not found"
                        })
                    });
            }
        });
    },
    isSelf: (req, res, next) => {
        console.log(req.decoded);
        jwt.verify(req.headers.token, process.env.jwtTokens, function (err, decoded) {
            if (err) {
                res.status(404).json({
                    msg: "forbiden access"
                })
            }
            else {
                if (decoded.data.email === req.decoded.email) {
                    req.decoded = req.decoded
                    next()
                }
                else {
                    res.status(400).json({
                        msg: "for biden acces"
                    })
                }
            }
        });
    }
}