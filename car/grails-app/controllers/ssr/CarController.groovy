package ssr

import grails.plugin.springsecurity.annotation.Secured

class CarController {

    @Secured(['ROLE_USER'])
    def list() {
        log.info " list " + params
        def carInstanceList = [cars: Car.list()]
        respond carInstanceList
    }

    @Secured(['ROLE_USER'])
    def save() {
        log.info " save " + params
        def name = params.name
        def brand = params.brand
        def car = new Car(name: name, brand: brand)
        car.save(flush: true)
        respond car
    }

}
