/**
 * Created by davedavehong on 2015/9/3.
 */

$(function () {
    var i = 1;
    var example1 = new Vue({
        el: '#example1',
        data: {
            items: [
                {mes: 'Foo'},
                {mes: 'Bar'}
            ]
        }
    });

    var alertDate = new Vue({
        el: '#alertDate',
        data: {
            items: testDATA[0]
        }
    });
    var switchDATA = new Vue({
        el: "#switch",
        // data: {
        //     name: 'Vue.js'
        // },
        methods: {
            switchDATA: function (e) {
                if (i < 2) {
                    i++;
                } else {
                    i = 0;
                }
                alertDate.items = testDATA[i];
                console.log(i);
            }
        }
    })
});
var testDATA = [
    [
        {startTime: '08:55', endTime: '08:55', reason: "一段非常长非常长非常长非常长非常长非常长非常"},
        {startTime: '08:55', endTime: '08:55', reason: "一段非常长非常长非常长非常"}
    ],
    [
        {startTime: '3333', endTime: 'hot', reason: 1},
        {startTime: '4444', endTime: 'hot', reason: 1},
        {startTime: '4444', endTime: 'hot', reason: 1},
        {startTime: '4444', endTime: 'hot', reason: 1},
        {startTime: '5555', endTime: 'hot', reason: 1}
    ],
    [
        {startTime: '7777', endTime: 'lost', reason: 2},
        {startTime: '8888', endTime: 'lost', reason: 2},
        {startTime: '9999', endTime: 'lost', reason: 2},
        {startTime: '9999', endTime: 'lost', reason: 2},
        {startTime: '9999', endTime: 'lost', reason: 2},
        {startTime: '9999', endTime: 'lost', reason: 2},
        {startTime: '9999', endTime: 'lost', reason: 2},
        {startTime: '9999', endTime: 'lost', reason: 2}
    ]
];