const bcrypt = require('bcrypt')

module.exports = {
    login: async (req, res) => {

        const db = req.app.get('db')
        const { email, password } = req.body

        const admin = await db.check_admin(email)

        if(!admin[0]){
            return res.status(404).send('Admin does not exist')
        } else {
            const authenticated = bcrypt.compareSync(password, admin[0].password)
            if(authenticated){
                req.session.admin = {
                    adminId: admin[0].admin_id,
                    email: admin[0].email
                }
                res.status(200).send(req.session.admin)
            } else {
                res.status(403).send('Email or Password Incorrect')
            }
        }
    },

    register: async (req, res) => {

        const db = req.app.get('db')
        const {email, password} = req.body

        
        const existingAdmin = await db.check_admin(email)

        if (existingAdmin[0]) {
            return res.status(400).send('Email in use')
        }

        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)

        const newAdmin = await db.insert_into_admins([email, hash])

        req.session.admin = {
            adminId: newAdmin[0].admin_id,
            email: newAdmin[0].email
        }

        res.status(200).send(req.session.admin)
    },
    
    logout: (req, res) => {
        req.session.destroy()
        res.sendStatus(200)
    },

    getUser: (req, res) => {
        if (req.session.admin){
            res.status(200).send(req.session.admin)
        } else {
            res.sendStatus(404)
        }
    }
}