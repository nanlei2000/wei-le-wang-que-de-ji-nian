interface Datum {
    name: string;
    date: string;
    university: string;
    education: '硕士研究生' | '博士研究生';
    link: [string, string][];
    major: '材料' | '计算机' | '凝聚态物理' | '医学' | '药理学' | '自动化' | '航天' | '机电';
    gender: '男' | '女';
    /** TODO: */
    tutor?: string;
    tags?: string[];
}
/**
 * 整理自 @see https://www.zhihu.com/question/364795757/answer/963617654?utm_source=wechat_timeline&utm_medium=social&utm_oi=63830256254976&from=timeline
 */
const data: Datum[] = [
    {
        name: '谭大伟',
        date: '2019-12-26',
        university: '南京邮电大学',
        education: "硕士研究生",
        link: [
            ['如何看待南邮材料学院研究生不堪忍受导师压榨疑似于实验室自焚事件?',
                'https://www.zhihu.com/question/364795757/answer/963617654']
        ],
        major: '材料',
        gender: '男'
    },
    {
        name: '陈泽民',
        date: '2019-09-02',
        university: '华中科技大学',
        education: "硕士研究生",
        link: [
            ['华科研究生跳楼身亡，留下7页自述问责导师',
                'https://mp.weixin.qq.com/s/8I5g8yZKI8ymcK80bdg_8w']
        ],
        major: '计算机',
        gender: '男'
    },
    {
        name: '段付谋',
        date: '2019-06-03',
        university: '南京大学',
        education: "博士研究生",
        link: [
            ['南大博士跳江自杀！家属称或与导师指责有关！',
                'http://www.sohu.com/a/323405903_120066380']
        ],
        major: '凝聚态物理',
        gender: '男'
    },
    {
        name: '胡坤',
        date: '2019-01-20',
        university: '华南理工大学',
        education: "博士研究生",
        link: [
            ['如何看待华南理工大学材料系博士生胡坤猝死事件？',
                'https://www.zhihu.com/question/310301027']
        ],
        major: '材料',
        gender: '男'
    },
    {
        name: '陆经纬',
        date: '2018-12-13',
        university: '同济大学',
        education: "硕士研究生",
        link: [
            ['如何看待同济大学医学院研究生陆经纬疑似因与导师陆琰君不合跳楼自尽？',
                'https://www.zhihu.com/question/308045928']
        ],
        major: '医学',
        gender: '男'
    },
    {
        name: '田苗',
        date: '2018-11-13',
        university: '华南理工大学',
        education: "硕士研究生",
        link: [
            ['如何看待华南理工大学田苗坠楼事件？',
                'https://www.zhihu.com/question/299047162']
        ],
        major: '材料',
        gender: "女",
    },
    {
        name: '陶崇园',
        date: '2018-03-26',
        university: '武汉理工大学',
        education: "硕士研究生",
        link: [
            ['陶崇园事件',
                'https://zh.wikipedia.org/wiki/%E9%99%B6%E5%B4%87%E5%9B%AD%E4%BA%8B%E4%BB%B6']
        ],
        major: "自动化",
        gender: "男",
        tutor: '王攀',
        tags: ['被知乎屏蔽']
    },
    {
        name: '杨宝德',
        date: '2017-12-25',
        university: '西安交通大学',
        education: '博士研究生',
        link: [
            ['如何评价西安交大的博导周筠「逼死」博士生杨宝德？',
                'https://www.zhihu.com/question/265236935']
        ],
        major: '药理学',
        gender: '男',
    },
    {
        name: '周旭',
        date: '2017-06-10',
        university: '西北工业大学',
        education: '博士研究生',
        link: [
            ['如何看待西北工业大学6月10日晚一博士生坠楼身亡？',
                'https://www.zhihu.com/question/60977461']
        ],
        major: '航天',
        gender: '男',
    },
    {
        name: '姜东生',
        date: '2015-05-18',
        university: '中南大学',
        education: '硕士研究生',
        link: [
            ['如何评价中南大学研究生答辩未通过跳楼自杀并留下五千字遗书？',
                'https://www.zhihu.com/question/30607078'],
            ['中南大学自杀研究生亲哥挥泪撰文送弟：若有来生不读书，兄弟俩一起种红薯',
                'https://mp.weixin.qq.com/s?__biz=MzA3OTg2Mjc3OA==&mid=206359406&idx=1&sn=ceb2aae2da77b89c7fed51a3fd8f67d0&scene=2&from=timeline&isappinstalled=0#rd'],
        ],
        major: '机电',
        gender: '男',
    },
];
const tempHead = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1.0" />
    <title>为了忘却的纪念</title>
</head>
<link href="https://cdn.bootcss.com/twitter-bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet">
<style>
html, body, table{
    width:100%;
    height:100%;
}
body{
    padding:10px;
}
</style>
<body>
`;
const tempTail = `
</body>
</html>`;

const body = `
<p>在因魔鬼导师而自杀的这 ${data.length} 例事件中,男性占比 ${
    calculateRate(data.filter(v => v.gender === '男').length, data.length)
    },最多的专业是${calculateMost(data, 'major')}。</p>
<table class="table 
table-hover 
table-sm
">
${data.map((datum) => {
        return `<tr>
                <td>${datum.name}</td>
                <td>${datum.date}</td>
                <td>${datum.gender}</td>
                <td>${datum.university}</td>
                <td>${datum.major}</td>
                <td>${datum.education}</td>
                <td>${
            datum.link.map(([title, link]) => {
                return `<p>
                <a href="${link}" target="_blank">${title}</a>
            </p>`;
            }).join('\n')}</td>
            </tr>`;
    }).join('\n')
    }
</table>`;

require('fs').writeFileSync(
    require('path').resolve(__dirname, '../index.html'),
    Buffer.from(tempHead + body + tempTail));

function calculateRate(up: number, down: number): string {
    if (up === 0 || down === 0) {
        return '0';
    }
    return Math.round((up / down) * 100) + '%';
}
function calculateMost(data: Datum[], key: 'major'): string {
    const dic: { [key: string]: number | undefined; } = {};
    for (const datum of data) {
        if (dic[datum[key]] === undefined) {
            dic[datum[key]] = 1;
        } else {
            dic[datum[key]] += 1;
        }
    }
    const keys = Object.keys(dic);
    keys.sort((a, b) => dic[b] - dic[a]);
    return keys[0];
}