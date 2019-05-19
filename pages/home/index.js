import {
    BasicModel
} from '../../models/basic'
import {
    GuestModel
} from '../../models/guest'
import {
    CommentModel
} from '../../models/comment'
import {
    LocationModel
} from '../../models/location'

const basicModel = new BasicModel()
const guestModel = new GuestModel()
const commentModel = new CommentModel()
const locationModel = new LocationModel()

Page({
    data: {
        like: 999,
        like_status: 0,
        basic: null,
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
        commentModel.getComments()
            .then(res => {
                this.setData({
                    comments: res
                })
            })
        locationModel.getLocation()
            .then(res => {
                this.setData({
                    location: res
                })
            })
    },

    makePhone: function(event) {
        console.log(this.data.basic.phone)
        wx.makePhoneCall({
            phoneNumber: this.data.basic.phone
        })
    },

    redirectAddress: function(event) {
        console.log(this.data.location)
        wx.openLocation({
            latitude: parseFloat(this.data.location.latitude),
            longitude: parseFloat(this.data.location.longitude),
            name: this.data.location.name,
            address: this.data.location.address
        })
    },

    addWechat: function(event) {
        console.log("add wechat")
    },

    addPhone: function(event) {
        wx.addPhoneContact({
            firstName: this.data.basic.name,
            mobilePhoneNumber: this.data.basic.phone,
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
    },

    onGetUserInfo(event) {
        const userInfo = event.detail.userInfo;
        if (userInfo) {
            this.setData({
                authorized: true,
                userInfo
            })
        }
        console.log(userInfo);
        guestModel.updateGuest(userInfo.nickName, userInfo.avatarUrl);
    },

    formSubmit: function(e) {
        commentModel.createComment(e.detail.value.content)
            .then(res => {
                wx.showToast({
                    title: '评论成功',
                    icon: "none"
                })
            })
        this.setData({
            comments: this.data.comments,
        })
    },

    getSupport: function(e) {
        wx.navigateTo({
            url: '/pages/support/index'
        })
    }
})