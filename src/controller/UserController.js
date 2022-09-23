const User = require('../model/User');

module.exports = {
    async createUser(req, res) {
        console.log('teste')
        const { name, email } = req.body;
        try {
            const user = await User.create({ name, email });
            return res.json({ user });
        } catch (error) {
            console.error(JSON.stringify(error, null, 2))
            return res.status(400).json({status: 400, error });
        }
    }
}