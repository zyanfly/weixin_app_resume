import {
    CommentModel
} from '../../models/comment'
import {
    GuestModel
} from '../../models/guest'

const commentModel = new CommentModel()
const guestModel = new GuestModel()

Component({
    properties: {
        authorized: {
            type: Boolean
        }
    },

    data: {
    },

    methods: {
        formSubmit: function (e) {
            commentModel.createComment(e.detail.value.content)
                .then(res => {
                    wx.showToast({
                        title: '评论成功',
                        icon: "none"
                    })
                }).
                catch(res => {
                    console.log(res);
                })
        },
        onGetUserInfo(event) {
            const userInfo = event.detail.userInfo;
            if (userInfo) {
                this.setData({
                    authorized: true,
                })
            }
            guestModel.updateGuest(userInfo.nickName, userInfo.avatarUrl);
        },
    }
})
