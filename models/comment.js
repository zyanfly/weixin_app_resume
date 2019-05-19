import {
    HTTP
}
from '../utils/http.js'

class CommentModel extends HTTP {
    data = null
    createComment(content) {
        return this.request({
            method: 'POST',
            url: 'comment',
            data: {
                token: wx.getStorageSync('token'),
                content: content
            }
        })
    }

    getComments() {
        return this.request({
            url: 'comments'
        })
    }
}

export {
    CommentModel
}