module.exports = {
    getAthletes: async (req, res) => {
        const db = req.app.get('db')
        const {sport_name} = req.query
        
        const names = await db.get_athletes(sport_name)
        
        res.status(200).send(names)
    },
    addAthlete: async (req, res) => {
        const {number, name, position, year, town, isWomens, sport_name} = req.body
        const db = req.app.get('db')

        let athlete = await db.insert_into_athletes(number, name, position, year, town, isWomens, sport_name)
        .catch(err => console.log(err))
        
        res.status(200).send(athlete)
    },

    editAthlete: async (req, res) => {
        const {player_id} = req.params
        const {name} = req.body
        const db = req.app.get('db')

        console.log(player_id, name)

        let changes = await db.edit_athlete(name, player_id)
        console.log(changes)
        res.status(200).send(changes)
    },

    deleteAthlete: (req, res) => {
        const {player_id} = req.params
        const {sport_name} = req.query
        const db = req.app.get('db')
        
        db.delete_athlete(player_id)
        .then( async ()  => 
            {const names = await db.get_athletes(sport_name)
            
            res.status(200).send(names)}
        )
        .catch(err => console.log(err))
    },
    getChart: async (req, res) => {
        const db = req.app.get('db')

        const chart = await db.get_chart()

        res.status(200).send(chart)
    }
}