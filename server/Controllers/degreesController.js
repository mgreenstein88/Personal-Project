module.exports = {
    getDegree: (req, res) => {
        const db = req.app.get('db')

        db.get_degree()
        .then(degrees => res.status(200).send(degrees))
        .catch(err => console.log(err))
    }
}