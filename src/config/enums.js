let enums = {
    "ApproveStatus": {
        "0": "未审核",
        "4": "已初审",
        "5": "已复审",
        "6": "已终审",
        "2": "未通过"
    },
    "CheckStatus": {
        "0": "未审核",
        "1": "已审核",
        "2": "未通过"
    },
    "HospitalGrabSource": {
        "0": "代码提交",
        "1": "系统自动抓取",
        "2": "用户自行录入"
    },
    "CodeCheckStatus": {
        "0": "未审核",
        "7": "登记占位",
        "100": "自动化测试通过",
        "2": "自动化测试失败",
        "200": "编译通过",
        "201": "编译未通过",
        "300": "已人工审核",
        "301": "未通过"
    },
    "RoomType": {
        "1": "开放实验室",
        "10": "面向团队的开放实验室",
        "20": "面向个人的实验室"
    },
    "StateType": {
        "0": "可借用",
        "1": "已锁定",
        "2": "已占用"
    }
};
module.exports = enums;
