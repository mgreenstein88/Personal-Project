require('dotenv').config()
const express = require('express')
const session = require('express-session')
const massive = require('massive')

const authCtrl = require('./Controllers/authContoller')
const athleteCtrl = require('./Controllers/athleteContoller')
const sportsCtrl = require('./Controllers/sportsController')
const degreeCtrl = require('./Controllers/degreesController')

const app = express()
const SERVER = 3234
const {CONNECTION_STRING, SECRET_SESSION} = process.env

app.use(express.static(`${__dirname}/../build`))
app.use(express.json())
app.use(
    session({
        resave: false,
        saveUninitialized: true,
        cookie: { maxAge: 1000 * 60 * 60 * 24 },
        secret: SECRET_SESSION
    })
)

app.post('/auth/login', authCtrl.login)
app.post('/auth/register', authCtrl.register)
app.delete('/auth/logout', authCtrl.logout)
app.get('/auth/admin', authCtrl.getUser)

app.get('/api/athletes', athleteCtrl.getAthletes)
app.get('/api/chart', athleteCtrl.getChart)
app.post('/api/athlete', athleteCtrl.addAthlete)
app.put('/api/athlete/:player_id', athleteCtrl.editAthlete)
app.delete('/api/athlete/:player_id', athleteCtrl.deleteAthlete)

app.get('/api/degree', degreeCtrl.getDegree)
app.get('/api/degrees', degreeCtrl.getDegrees)

app.get('/api/sports', sportsCtrl.getSports)

massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
}).then(db => {
    app.set('db', db);
    console.log('db connected')
    app.listen(SERVER, () => console.log(`Server is running on port ${SERVER}`))
}).catch( err => console.log(err))