
const user = require('../schema/users')
const bcrypt = require('bcrypt')
const saltRounds = 10

const signUp = async(req,res) => {
    const newUser = new user({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
    });

    await user.findOne({ username: newUser.username, email: newUser.email})
        .then(async profile =>{
            if (!profile){
                bcrypt.hash(newUser.password, saltRounds, async (err, hash) => {
                    if (err) {
                      console.log("Error is", err.message);
                    } else {
                        newUser.password = hash;
                        await newUser.save()
                            .then(() => {
                                res.status(200).send(newUser);
                            }).catch((err)=>{
                                res.send(err)
                            })
                    }
                });
            }
            else{
                res.send("User already exists!!")
            }
        }).catch((err)=>{
            res.send(err)
        })
};

module.export = {signUp}