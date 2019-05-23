import {
    BasicModel
} from '../../models/basic'
import {
    GuestModel
} from '../../models/guest'
import {
    LocationModel
} from '../../models/location'
import {
    CommentModel
} from '../../models/comment'


const basicModel = new BasicModel()
const guestModel = new GuestModel()
const locationModel = new LocationModel()
const commentModel = new CommentModel()

Page({
    data: {
        like: 999,
        like_status: 0,
        basic: null,
        location: null,
        authorized: false,
        userInfo: null,
        comments: []
    },

    onLoad: function() {
        this.userAuthorized()
        basicModel.getBasic()
            .then(res => {
                this.setData({
                    basic: res
                })
            })
        locationModel.getLocation()
            .then(res => {
                this.setData({
                    location: res
                })
            })
        commentModel.getComments()
            .then(res => {
                this.setData({
                    comments: res
                })
            })
    },

    onShareAppMessage: function() {
        return {
            title: '转发名片',
            path: '/pages/index/index',
            success: function(res) {}
        }
    },

    userAuthorized() {
        wx.getSetting({
            success: data => {
                if (data.authSetting['scope.userInfo']) {
                    wx.getUserInfo({
                        success: data => {
                            this.setData({
                                authorized: true,
                                userInfo: data.userInfo
                            })
                        }
                    })
                }
            }
        })
    }
})