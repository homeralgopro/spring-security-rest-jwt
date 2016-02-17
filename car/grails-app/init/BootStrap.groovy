import ssr.Car
import ssr.Role
import ssr.User
import ssr.UserRole

class BootStrap {

    def init = { servletContext ->
        def car1 = new Car(name: "718", brand: "Porsche")
        car1.save(flush: true)
        def car2 = new Car(name: "Corsa", brand: "Opel")
        car2.save(flush: true)

        def user = new User(username: 'algopro', password: 'algopro', accountExpired: false, accountLocked: false, passwordExpired: false)
        user.save(flush: true)

        def role = new Role(authority: "ROLE_USER")
        role.save(flush: true)

        def userRole = new UserRole(user: user, role: role)
        userRole.save(flush: true)


    }
    def destroy = {
    }
}
