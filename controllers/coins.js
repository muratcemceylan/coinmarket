
exports.getPosts = (req, res, next) => {
    res.status(200).json({
        coins: [{ title:'First Post', content: 'This is the first post!' }]
    });
};