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
      dfid: '3eTowB28PSWI2b8fks2cOYvf',
      mid: '231152861797089679301576757132005836696',
      uuid: '-',
      clientver: 11000,
    },
    cookie: { ...params?.cookie, dfid: '3eTowB28PSWI2b8fks2cOYvf', mid: '231152861797089679301576757132005836696', uuid: '-' },
    headers: {
      'User-Agent': 'Android16-1070-11000-201-0-mobileCallProtocol-wifi',
      'KG-THash': '45bec72',
      'KG-RC': '1',
      'KG-Rec': '1',
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });
};