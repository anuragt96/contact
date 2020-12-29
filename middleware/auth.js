const jwt = require('jsonwebtoken');
const config = require('config');

//this module will get token and divide it into header and payload

module.exports = function(req, res, next) {
    
    // Get token from header
    const token = req.header('x-auth-token');

    //Check if not token 
    if(!token) 
    {    
        return res.status(401).json({ msg: 'No token, authorization denied' });
    }
    try 
    {
        //it will put out the payload from token 
        const decoded = jwt.verify(token, config.get('jwtSecret'));
        
        req.user = decoded.user;
        next();

    } catch (err) 
    {
        res.status(401).json({ msg: 'Token is not valid' });   
    }
} 