Component({
    properties: {
        basic: {
            type: Object
        },
        location: {
            type: Object
        }
    },

    data: {},

    methods: {
        makePhone: function(event) {
            wx.makePhoneCall({
                phoneNumber: this.data.basic.phone
            })
        },

        redirectAddress: function(event) {
            wx.openLocation({
                latitude: parseFloat(this.data.location.latitude),
                longitude: parseFloat(this.data.location.longitude),
                name: this.data.location.name,
                address: this.data.location.address
            })
        }

    }
})