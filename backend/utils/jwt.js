const jwt = require("jsonwebtoken")

exports.createjwt =(email,userid,duration)=>{

    const payload={
        email,
        userid,
        duration

    }

    return jwt.sign(payload, process.env.TOKEN_SECRET, {
        expiresIn: duration,
      });
}