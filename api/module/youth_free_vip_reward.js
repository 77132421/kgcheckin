// 领取「免费包」广告升级 VIP 奖励（抓包接口 /youth/v1/free_package/upgrade_vip_reward，每次 24 小时） 需要登录
module.exports = (params, useAxios) => {
  const token = params?.cookie?.token || ''
  const userid = params?.cookie?.userid || params?.userid || 0

  return useAxios({
    url: '/youth/v1/free_package/upgrade_vip_reward',
    encryptType: 'web',
    method: 'post',
    params: {
      kugouid: Number(userid),
      clienttoken: token,
      ad_type: '1',
      srcappid: 2919,
      clienttime: Date.now(),
    },
    cookie: params?.cookie,
  });
};