const endpoint = {
    'development': 'http://localhost:3000',
    'production': 'https://vivi-cosmeticos.herokuapp.com'
}

const Config = {    
    getEndpoint(env = 'production') {
       return endpoint[env] 
    }    
}

export default Config