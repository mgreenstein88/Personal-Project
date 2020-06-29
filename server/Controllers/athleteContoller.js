module.exports = {
    getAthletes: (req, res) => {
        const db = req.app.get('db')
        let {roster} = req.query.roster
        
        if(roster === 'W Lacrosse'){
            res.status(200).send(athletes)
        } else if (roster === 'M Hockey'){
            res.status(200).send(athletes)
        }

        db.get_athletes()
        .then(athletes => res.status(200).send(athletes))
        .catch(err => console.log(err))
    },
    addAthlete: async (req, res) => {
        const {name, sport_id, isWomens} = req.body
        const db = req.app.get('db')
        console.log(req.body)
        let athlete = await db.insert_into_athletes(name, sport_id, isWomens)
        .catch(err => console.log(err))
        
        res.status(200).send(athlete)
    },
    editAthlete: async (req, res) => {
        const {player_id} = req.params
        const {apple} = req.body
        const db = req.app.get('db')

        let changes = await db.edit_athlete(apple, player_id)
        res.status(200).send(changes)
    },
    deleteAthlete: (req, res) => {
        const {player_id} = req.params
        const db = req.app.get('db')
        
        db.delete_athlete(player_id)
        .then(() => res.status(200))
        .catch(err => console.log(err))
    }
}