package car

class UrlMappings {

    static mappings = {
        "/$controller/$action?/$id?(.$format)?"{
            constraints {
                // apply constraints here
            }
        }

        "/"(view:"/index")
        "500"(view:'/error')
        "404"(view:'/notFound')

//        "/car/list"(controller:'car',action:'list', method: 'OPTIONS') // explicitly map OPTIONS method to "book" REST controller
        "/api/login"(controller:'login', method: 'OPTIONS') // explicitly map OPTIONS method to "book" REST controller
//        "/api/login"(contoller:'')
    }
}
