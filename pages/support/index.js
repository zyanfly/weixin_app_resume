import {
    ClientModel
} from '../../models/client'

const clientModel = new ClientModel()


Page({
    data: {

    },

    formSubmit: function (e) {
        clientModel.createClient(e.detail.value.name, e.detail.value.contact)
            .then(res => {
                wx.showToast({
                    title: '提交成功',
                    icon: "none"
                })
            })
    },

    onShareAppMessage: function () {

    }
})