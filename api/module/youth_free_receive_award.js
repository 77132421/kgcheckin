// 「一键激活使用」领取当天VIP（抓包接口 /youth/v1/free_package/receive_vip_award，receive_day=当天日期，source_id=90137）需要登录
// 严格对齐抓包：真实设备 dfid/mid/uuid + mobileCallProtocol UA + KG 头（该接口校验客户端特征，缺失会返回 20028）
module.exports = (params, useAxios) => {
  return useAxios({
    url: '/youth/v1/free_package/receive_vip_award',
    encryptType: 'web',
    method: 'post',
    params: {
      receive_day: params?.receive_day || '',
      source_id: '90137',
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