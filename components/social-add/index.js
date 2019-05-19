Component({
    properties: {
    },

    data: {

    },

    methods: {
        addWechat: function () {
            var myEventDetail = {}
            var myEventOption = {}
            this.triggerEvent('wechat', myEventDetail, myEventOption)
        },

        addPhone: function () {
            var myEventDetail = {}
            var myEventOption = {}
            this.triggerEvent('phone', myEventDetail, myEventOption)
        }
    }
})
