//json数据文件
var id_user_data = [
    //Infobip
    {
        supplier: 'Infobip',
        operator: 'Talin',
        mobile: '6281310054528',
        chan: '-902',
        english: false
    },
    {
        supplier: 'Infobip',
        operator: 'Indosat',
        mobile: '6285772830498',
        chan: '-902',
        english: false
    },
    {
        supplier: 'Infobip',
        operator: 'Three',
        mobile: '628995569988',
        chan: '-902',
        english: false
    },
    //IMS
    {
        supplier: 'IMS',
        operator: 'Talin',
        mobile: '6281310054528',
        chan: '-933',
        english: true
    },
    {
        supplier: 'IMS',
        operator: 'Indosat',
        mobile: '6285772830498',
        chan: '-902',
        english: true
    },
    {
        supplier: 'IMS',
        operator: 'Three',
        mobile: '628995569988',
        chan: '-924',
        english: true
    },
    //Monty
    {
        supplier: 'Monty',
        operator: 'Talin',
        mobile: '6281310054528',
        chan: '-924',
        english: false
    },
    {
        supplier: 'Monty',
        operator: 'Indosat',
        mobile: '6285772830498',
        chan: '-924',
        english: false
    },
    {
        supplier: 'Monty',
        operator: 'Three',
        mobile: '628995569988',
        chan: '-902',
        english: false
    }
]

//test
// id_user_data = [
//     {
//         supplier: 'Monty',
//         operator: 'Three',
//         mobile: '628995569988',
//         chan: '-902',
//         english: false
//     },
    // {
    //     supplier: 'Monty',
    //     operator: 'Three',
    //     mobile: '15840685236',
    //     chan: '-902',
    //     english: false
    // },
// ]

//所有发送信息
var all_send_data = [
    "【云片网】您的验证码是123",
    "【云片网】您的订单号是 123456789011121314151617181920212223242526272829303132333435[yunpian] your verfication code is 1234",
    "[yunpinan] your order no is 1234567890111213141516171819202122232425262728293031323334353637383940414243444546474849505152535455565758596061626364656667686970",
    "【萬維幣】 您的验证码是 5208[]{}\|^~",
    "【yunpinan】your order no is 1234567890111213141516171819202122232425262728293031323334353637383940414243444546474849505152535455565758596061626364656667686970asd<萬維幣]>您的验证码是 5208。［end]",
    "【yunpian】Your verification code is ab12376s."
]

//英文发送信息
var en_send_data = [
    "[yunpinan] your order no is 1234567890111213141516171819202122232425262728293031323334353637383940414243444546474849505152535455565758596061626364656667686970",
    "【yunpian】Your verification code is ab12376s."
]

exports.id_user_data = id_user_data;
exports.all_send_data = all_send_data;
exports.en_send_data = en_send_data;
