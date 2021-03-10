'use strict'

class LoginController {
    async create ({ request, auth }){
        const {email, password} = request.all()

        return await auth.attempt(email, password)
    }
}

module.exports = LoginController
