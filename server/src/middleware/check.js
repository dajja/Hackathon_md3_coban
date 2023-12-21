const checkName = (req, res, next) => {
    const { name } = req.body;
    if (!name) {
        return res.status(400).json({
            message: 'khong duoc de trong'
        })
    }
    next();
}

module.exports = { checkName }