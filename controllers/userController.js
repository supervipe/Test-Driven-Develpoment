var Users = require('../models/user')

module.exports = {
    getAll: async (req, res) => {

        const docs = await Users.find({}).lean().exec();
        console.log(docs);
        res.send(docs);
    }
}
