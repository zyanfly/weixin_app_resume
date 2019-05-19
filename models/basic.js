import {
    HTTP
}
    from '../utils/http.js'

class BasicModel extends HTTP {
    data = null
    getBasic() {
        return this.request({
            url: '/basic'
        })
    }
}

export {
    BasicModel
}