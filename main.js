
//导入模块
var http = require("http");
var querystring = require('querystring');
var async = require('async');
//导入数据
var info = require('./data');
var id_user_data = info.id_user_data;

var all_send_data = info.all_send_data;
var en_send_data = info.en_send_data;
// console.log('id_user_data',id_user_data);
// console.log('send_data',send_data);

//参数初始化
var post_data = {
    apikey: '',
    mobile: '13758242114',
    text: '【云片test】测试模版测试模版',
    chan:''
};//这是需要提交的数据

var content = querystring.stringify(post_data);

//设置请求接口信息
var options = {
    hostname: 'sms.yunpian.com',
    path: '/v2/sms/single_send.json',
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'Accept': 'application/json;charset=utf-8;'
    }
};


//请求方法，方法对象每次请求重新new，不然短时间内重复调用会报 write after end 错误
function sendpost(cont) {
    var req = http.request(options, function (res) {
        console.log('STATUS: ' + res.statusCode);
        console.log('HEADERS: ' + JSON.stringify(res.headers));
        res.setEncoding('utf8');
        res.on('data', function (chunk) {
            console.log('BODY: ' + chunk);
            //JSON.parse(chunk)
        });
    });
    req.on('error', function (e) {
        console.log('problem with request: ' + e.message);
    });
    req.write(cont);
    req.end();
}

//重新设置通用信息
// post_data['apikey'] = '';

//所有发送队列
var all_send_content = [];

//循环、所有发送内容入队列
id_user_data.forEach(function (info, index0, arr) {
    // console.log(index, info, info['english']);
    if (info['english'] == true) {
        //send 3&6
        en_send_data.forEach(function (text, index) {
            // post_data['mobile'] = info['mobile'];
            post_data['mobile'] = "+" + info['mobile'];
            post_data['text'] = text + '+' + info['supplier'] + '+' + info['operator'] + '+' + info['chan'];
            post_data['chan'] = info['chan'];
            content = querystring.stringify(post_data);
            all_send_content.push(content);

            // console.log(index0,index,post_data)
        })
    } else {
        //send all
        all_send_data.forEach(function (text, index) {
            // post_data['mobile'] = info['mobile'];
            // post_data['mobile'] = encodeURIComponent("+") + info['mobile'];
            post_data['mobile'] = "+" + info['mobile'];
            post_data['text'] = text + '+' + info['supplier'] + '+' + info['operator'] + '+' + info['chan'];
            post_data['chan'] = info['chan'];
            content = querystring.stringify(post_data);
            all_send_content.push(content);
            // console.log(index0,index,post_data)

        })
    }
})

// console.log('RESULT', all_send_content, all_send_content.length)

//设置定时器，延时异步发送短信
var time = 0;
var timer = setInterval(function () {
    if (time < all_send_content.length) {
        sendpost(all_send_content[time])
        console.log('执行', time)
        time++;
    } else {
        console.log('清除定时器')
        clearInterval(timer);
    }
}, 3000);


//备用方法二，异步函数发送短信
// async.series([
//     function (callback) {
//         sendpost(all_send_content[0])
//         callback(null, 'one');
//     },
//     function (callback) {
//         sendpost(all_send_content[1])
//         callback(null, 'two');
//     }
// ])
