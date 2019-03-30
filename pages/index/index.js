
Page({
  data: {
    user:{
      like:999,
      like_status:0,
      look_history:78,
      name:'谢炎芩',
      mtto:'一切法律的总目标应当是增加社会幸福',
      introduce:'英国华威大学法学院毕业，执业律师，注册税务师，华税学员合伙人讲师，拥有证券、基金从业资格证，专注于税务规划及家庭财富传承。',
      phone:'18602420226',
      email:'yancen.xie@dentons.cn',
      company:'北京大成（沈阳）律师事务所',
      job:'税务规划、涉税争议解决、财富传承',
      position:'辽宁省沈阳市沈河区青年大街1号Forcm66市府恒隆广场42层',
    }
  },
  onLoad: function () {
    // 请求用户数据
    wx.request({})
  },
  onLike: function(event){
    // 用户点击赞事件
    console.log('like event')
  },
  makePhone: function(event){
    console.log(this)
    console.log(this.data.phone)
    wx.makePhoneCall({
      phoneNumber: '18602420226',
    })
  }
})
