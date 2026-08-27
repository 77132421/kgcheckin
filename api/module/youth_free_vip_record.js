// 查询「免费包」VIP 领取记录（抓包接口 /youth/v1/free_package/get_vip_record_list） 需要登录
module.exports = (params, useAxios) => {
  const token = params?.cookie?.token || ''

  return useAxios({
    url: '/youth/v1/free_package/get_vip_record_list',
    encryptType: 'web',
    method: 'get',
    params: {
      clienttoken: token,
      srcappid: 2919,
      latest_limit: 100,
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
    },
  });
};