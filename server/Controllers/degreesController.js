module.exports = {
    getDegree: async (req, res) => {
        const db = req.app.get('db')
        const {type} = req.query


        const degrees = await db.get_degree(type)

        res.status(200).send(degrees)
    },
    getDegrees: async (req, res) => {
        const db = req.app.get('db')

        const chart = await db.get_degreetwo()

        res.status(200).send(chart)
    }
}