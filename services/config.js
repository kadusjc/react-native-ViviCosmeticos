const endpoint = {
    'development': 'http://localhost:3000/vivi-cosmeticos',
    'production': 'https://vivi-cosmeticos.herokuapp.com'
}

const Config = {    
    getEndpoint(env) {
       return endpoint[env] 
    }    
}