module.exports = {
    getSports: (req, res) => {
        const db = req.app.get('db')

        db.get_sports()
        .then(sports => res.status(200).send(sports))
        .catch(err => res.status(500).send(err))
    }
}