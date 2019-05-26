Component({
    options: {
        multipleSlots: true
    },

    properties: {
        openType: {
            type: String
        }
    },

    data: {

    },

    methods: {
        onGetUserInfo(event) {
            this.triggerEvent('getuserinfo', event.detail, {})
        },

        makePhone: function () {
            var myEventDetail = {}
            var myEventOption = {}
            this.triggerEvent('ring', myEventDetail, myEventOption)
        }
    }
})
