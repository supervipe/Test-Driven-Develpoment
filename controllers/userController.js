var db = require('../../DB.js')

exports.login = function(req, res) {

    const login = req.body

    console.log(login.email)
    let sql = `SELECT * FROM usuario WHERE usuario.email = "${login.email}" AND usuario.senha = "${login.senha}"`;
    let query = db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send(result);
    });
}