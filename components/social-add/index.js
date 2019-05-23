Component({
    properties: {
        basic: {
            type: Object
        }
    },

    data: {

    },

    methods: {
        addWechat: function (event) {
            console.log("add wechat")
        },

        addPhone: function (event) {
            wx.addPhoneContact({
                firstName: this.data.basic.name,
                mobilePhoneNumber: this.data.basic.phone,
            })
        },
    }
})
