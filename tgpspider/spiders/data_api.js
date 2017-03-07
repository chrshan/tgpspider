var keycode_map ={
    9: 'Tab',
    16: 'Shift',
    17: 'Ctrl',
    18: 'Alt',
    19: 'Pausebreak',
    20: 'Capslock',
    32: 'Space',
    33: 'Pageup',
    34: 'Pagedown',
    35: 'End',
    36: 'Home',
    37: 'Left',
    38: 'Up',
    39: 'Right',
    40: 'Down',
    43: '+',
    44: 'Printscreen',
    45: 'Insert',
    46: 'Delete',
    48: '0',
    49: '1',
    50: '2',
    51: '3',
    52: '4',
    53: '5',
    54: '6',
    55: '7',
    56: '8',
    57: '9',
    65: 'A',
    66: 'B',
    67: 'C',
    68: 'D',
    69: 'E',
    70: 'F',
    71: 'G',
    72: 'H',
    73: 'I',
    74: 'J',
    75: 'K',
    76: 'L',
    77: 'M',
    78: 'N',
    79: 'O',
    80: 'P',
    81: 'Q',
    82: 'R',
    83: 'S',
    84: 'T',
    85: 'U',
    86: 'V',
    87: 'W',
    88: 'X',
    89: 'Y',
    90: 'Z',
    96: 'Num0',
    97: 'Num1',
    98: 'Num2',
    99: 'Num3',
    100: 'Num4',
    101: 'Num5',
    102: 'Num6',
    103: 'Num7',
    104: 'Num8',
    105: 'Num9',
    106: '*',
    107: '+',
    109: '-',
    110: '.',
    111: '/',
    112: 'F1',
    113: 'F2',
    114: 'F3',
    115: 'F4',
    116: 'F5',
    117: 'F6',
    118: 'F7',
    119: 'F8',
    120: 'F9',
    121: 'F10',
    122: 'F11',
    123: 'F12',
    144: 'Numlock',
    145: 'Scrolllock',
    186: ';',
    187: '=',
    188: ',',
    189: '-',
    190: '.',
    191: '/',
    192: '`',
    219: '[',
        220: '\\',
        221: '
    ]',
    222: "'"
}
var attri_spl ={Strength: [
        293,
        883,
        1198,
        1521,
        1299
    ],Intelligence: [
        294,
        886,
        1261,
        1480,
        1403
    ],Vitality: [
        260,
        741,
        1048.5,
        1334,
        1196
    ],Spirit: [
        251,
        769,
        1113,
        1308,
        1218
    ],PhyAttack: [
        644,
        3351,
        7215,
        12782,
        8416
    ],PhyAttackAdder: [
        1,
        1,
        1,
        1277,
        1
    ],MagAttack: [
        623,
        3162,
        7186,
        11077,
        8653
    ],MagAttackAdder: [
        1,
        1,
        1,
        1218,
        1
    ],IndependValue: [
        375,
        847,
        1363,
        1503,
        1534
    ],PhyResist: [
        3549,
        8963,
        12658,
        21953,
        13837
    ],MagicResist: [
        5721,
        14410,
        20483,
        22491,
        21708
    ],PhyCriticalHitRate: [
        8,
        11,
        18,
        29,
        18
    ],MagicCriticalHitRate: [
        7.1,
        12.1,
        22.6,
        24.8,
        19.2
    ],AttackSpeedRate: [.95,
        18.65,
        18.95,
        10,
        20.35
    ],CastSpeed: [
        29.6,
        52.45,
        56.1,
        53.5,
        53.05
    ],MoveSpeed: [
        9.5,
        20,
        20.4,
        20,
        22.75
    ],HitRate: [
        7,
        15.45,
        26.45,
        22.1,
        23.8
    ],MissRate: [
        4.6,
        14.4,
        21.9,
        13.5,
        20.15
    ],HitRecover: [
        679,
        743,
        789,
        776,
        806
    ],FireEnhancement: [
        18,
        18,
        25,
        31,
        30
    ],IceEnhancement: [
        18,
        18,
        25,
        31,
        30
    ],LightEnhancement: [
        18,
        18,
        25,
        31,
        30
    ],DarkEnhancement: [
        18,
        18,
        25,
        31,
        30
    ]
}
var attribute_en ={Strength: '力量',Intelligence: '智力',Vitality: '体力',Spirit: '精神',PhyAttack: '物理攻击',PhyAttackAdder: '物理无视防御攻击力',MagAttack: '魔法攻击',MagAttackAdder: '魔法无视防御攻击力',IndependValue: '独立攻击力',PhyResist: '物理防御',MagicResist: '魔法防御',PhyCriticalHitRate: '物理暴击',MagicCriticalHitRate: '魔法暴击',AttackSpeedRate: '攻击速度',CastSpeed: '施放速度',MoveSpeed: '移动速度',HitRate: '命中率',MissRate: '回避率',HitRecover: '硬直',FireEnhancement: '火属性强化',IceEnhancement: '冰属性强化',LightEnhancement: '光属性强化',DarkEnhancement: '暗属性强化',Stiffen: '僵直',MainProperty: '角色主属性',RoleCareerProperty: '职业特性属性',RolePropertyStrengthen: '属性强化',RolePropertyEx: '属性加成',AntiMagic: '抗魔',Mg_MainProperty: '角色主属性',Mg_RoleCareerProperty: '职业特性属性',Mg_RolePropertyStrengthen: '属性强化',Mg_RolePropertyEx: '属性加成',fightingCapacity: '战斗力'
}
var attribute_corres ={
    1: 'PhyAttack',
    2: 'MagAttack',
    3: 'PhyAttackAdder',
    4: 'MagAttackAdder',
    5: 'IndependValue',
    6: 'PhyCriticalHitRate',
    7: 'MagicCriticalHitRate',
    8: 'Strength',
    9: 'Intelligence',
    10: 'Vitality',
    11: 'Spirit',
    12: 'AntiMagic',
    13: 'PhyResist',
    14: 'MagicResist',
    15: 'AttackSpeedRate',
    16: 'CastSpeed',
    17: 'MoveSpeed',
    18: 'HitRate',
    19: 'MissRate',
    20: 'HitRecover',
    21: 'FireEnhancement',
    22: 'IceEnhancement',
    23: 'LightEnhancement',
    24: 'DarkEnhancement',
    25: 'Stiffen',
    26: 'fightingCapacity',
    27: 'RoleCareerProperty',
    28: 'RolePropertyStrengthen',
    29: 'RolePropertyEx',
    4326: 'Mg_MainProperty',
    4327: 'Mg_RoleCareerProperty',
    4328: 'Mg_RolePropertyStrengthen',
    4329: 'Mg_RolePropertyEx'
}
var attribute_icon ={Strength: 'http: //cdn.tgp.qq.com/DNF_picture/attributes_icon/Power.jpg',Intelligence: 'http://cdn.tgp.qq.com/DNF_picture/attributes_icon/Intelligence.jpg',Vitality: 'http://cdn.tgp.qq.com/DNF_picture/attributes_icon/Physical.jpg',Spirit: 'http://cdn.tgp.qq.com/DNF_picture/attributes_icon/Mental.jpg',PhyAttack: 'http://cdn.tgp.qq.com/DNF_picture/attributes_icon/PhysicalAttack.jpg',PhyAttackAdder: 'http://cdn.tgp.qq.com/DNF_picture/attributes_icon/PhyNoDefAttack.jpg',MagAttack: 'http://cdn.tgp.qq.com/DNF_picture/attributes_icon/MagicAttack.jpg',MagAttackAdder: 'http://cdn.tgp.qq.com/DNF_picture/attributes_icon/MagNoDefAttack.jpg',IndependValue: 'http://cdn.tgp.qq.com/DNF_picture/attributes_icon/IndependentAttack.jpg',PhyResist: 'http://cdn.tgp.qq.com/DNF_picture/attributes_icon/PhysicalDefense.jpg',MagicResist: 'http://cdn.tgp.qq.com/DNF_picture/attributes_icon/MagicDefense.jpg',PhyCriticalHitRate: 'http://cdn.tgp.qq.com/DNF_picture/attributes_icon/PhysicalCrit.jpg',MagicCriticalHitRate: 'http://cdn.tgp.qq.com/DNF_picture/attributes_icon/MagicCrit.jpg',AttackSpeedRate: 'http://cdn.tgp.qq.com/DNF_picture/attributes_icon/AttackSpeed.jpg',CastSpeed: 'http://cdn.tgp.qq.com/DNF_picture/attributes_icon/ReleaseSpeed.jpg',MoveSpeed: 'http://cdn.tgp.qq.com/DNF_picture/attributes_icon/RemoveSpeed.jpg',HitRate: 'http://cdn.tgp.qq.com/DNF_picture/attributes_icon/HitRate.jpg',MissRate: 'http://cdn.tgp.qq.com/DNF_picture/attributes_icon/AvoidanceRate.jpg',HitRecover: 'http://cdn.tgp.qq.com/DNF_picture/attributes_icon/HardStraight.jpg',FireEnhancement: 'http://cdn.tgp.qq.com/DNF_picture/attributes_icon/FireStrengthen.jpg',IceEnhancement: 'http://cdn.tgp.qq.com/DNF_picture/attributes_icon/IceStrengthen.jpg',LightEnhancement: 'http://cdn.tgp.qq.com/DNF_picture/attributes_icon/LightStrengthen.jpg',DarkEnhancement: 'http://cdn.tgp.qq.com/DNF_picture/attributes_icon/DarkStrengthen.jpg',MainProperty: 'http://cdn.tgp.qq.com/DNF_picture/attributes_icon/MainProperty.png',RoleCareerProperty: 'http://cdn.tgp.qq.com/DNF_picture/attributes_icon/RoleCareerProperty.png',RolePropertyStrengthen: 'http://cdn.tgp.qq.com/DNF_picture/attributes_icon/RolePropertyStrengthen.png',RolePropertyEx: 'http://cdn.tgp.qq.com/DNF_picture/attributes_icon/RolePropertyEx.png',AntiMagic: 'http://cdn.tgp.qq.com/DNF_picture/attributes_icon/AntiMagic.png',Mg_MainProperty: 'http://cdn.tgp.qq.com/DNF_picture/attributes_icon/MainProperty.png',Mg_RoleCareerProperty: 'http://cdn.tgp.qq.com/DNF_picture/attributes_icon/RoleCareerProperty.png',Mg_RolePropertyStrengthen: 'http://cdn.tgp.qq.com/DNF_picture/attributes_icon/RolePropertyStrengthen.png',Mg_RolePropertyEx: 'http://cdn.tgp.qq.com/DNF_picture/attributes_icon/RolePropertyEx.png',Stiffen: 'http://cdn.tgp.qq.com/DNF_picture/attributes_icon/Stiffen.png',AntiMagicEx: 'http://cdn.tgp.qq.com/DNF_picture/attributes_icon/AntiMagicEx.png'}
var max_experience ={
        1: 1e3,
        2: 1035,
        3: 1280,
        4: 1945,
        5: 3240,
        6: 5375,
        7: 8560,
        8: 13005,
        9: 18920,
        10: 26515,
        11: 36e3,
        12: 47585,
        13: 61480,
        14: 88880,
        15: 110760,
        16: 136e3,
        17: 164840,
        18: 197520,
        19: 234280,
        20: 275360,
        21: 321e3,
        22: 371440,
        23: 426920,
        24: 487680,
        25: 553960,
        26: 626e3,
        27: 704040,
        28: 788320,
        29: 879080,
        30: 976560,
        31: 1081e3,
        32: 1192640,
        33: 1311720,
        34: 1438480,
        35: 1573160,
        36: 1716e3,
        37: 1867240,
        38: 2027120,
        39: 2195880,
        40: 2373760,
        41: 2561e3,
        42: 2757840,
        43: 2964520,
        44: 3181280,
        45: 3408360,
        46: 3646e3,
        47: 3894440,
        48: 4153920,
        49: 5530600,
        50: 5883450,
        51: 6251e3,
        52: 6633550,
        53: 7031400,
        54: 8933620,
        55: 9448840,
        56: 9983500,
        57: 10537960,
        58: 11112580,
        59: 11707720,
        60: 12323740,
        61: 12961e3,
        62: 13619860,
        63: 14300680,
        64: 15003820,
        65: 15729640,
        66: 16478500,
        67: 17250760,
        68: 18046780,
        69: 23583400,
        70: 24639175,
        71: 25726e3,
        72: 26844325,
        73: 27994600,
        74: 35012530,
        75: 36471160,
        76: 37969750,
        77: 39508840,
        78: 41088970,
        79: 42710680,
        80: 44374510,
        81: 46081e3,
        82: 47830690,
        83: 49624120,
        84: 51461830,
        85: 165958120,
        86: 205542500,
        87: 209490080,
        88: 213530540,
        89: 217664960,
        90: 0
    }
var snap_reason ={
        0: '手动截图',
        1: '装备武器强化+12及其以上截图',
        2: '地下城爆粉物品截图',
        4: '开罐爆粉物品截图',
        7: '装备武器增幅+10及其以上截图',
        8: '地下城爆SS物品截图',
        9: '开罐爆SS物品截图'
    }
var zone_corres =[
        {name: '测试服',id: '95.0.0.0',value: 999999
        },
        {name: '广东1区',id: '1.0.0.0',value: 1
        },
        {name: '广东2区',id: '15.0.0.0',value: 15
        },
        {name: '广东3区',id: '22.0.0.0',value: 22
        },
        {name: '广东4区',id: '45.0.0.0',value: 45
        },
        {name: '广东5区',id: '52.0.0.0',value: 52
        },
        {name: '广东6区',id: '65.0.0.0',value: 65
        },
        {name: '广东7区',id: '71.0.0.0',value: 71
        },
        {name: '广东8区',id: '81.0.0.0',value: 81
        },
        {name: '广东9区',id: '89.0.0.0',value: 89
        },
        {name: '广东10区',id: '98.0.0.0',value: 98
        },
        {name: '广东11区',id: '105.0.0.0',value: 105
        },
        {name: '广东12区',id: '126.0.0.0',value: 126
        },
        {name: '广东13区',id: '134.0.0.0',value: 134
        },
        {name: '广州1/2区',id: '34.0.0.0',value: 34
        },
        {name: '广西1区',id: '28.0.0.0',value: 28
        },
        {name: '广西2/4区',id: '64.0.0.0',value: 64
        },
        {name: '广西3区',id: '88.0.0.0',value: 88
        },
        {name: '广西5区',id: '133.0.0.0',value: 133
        },
        {name: '湖南1区',id: '5.0.0.0',value: 5
        },
        {name: '湖南2区',id: '25.0.0.0',value: 25
        },
        {name: '湖南3区',id: '50.0.0.0',value: 50
        },
        {name: '湖南4区',id: '66.0.0.0',value: 66
        },
        {name: '湖南5区',id: '74.0.0.0',value: 74
        },
        {name: '湖南6区',id: '85.0.0.0',value: 85
        },
        {name: '湖南7区',id: '117.0.0.0',value: 117
        },
        {name: '湖北1区',id: '9.0.0.0',value: 9
        },
        {name: '湖北2区',id: '24.0.0.0',value: 24
        },
        {name: '湖北3区',id: '48.0.0.0',value: 48
        },
        {name: '湖北4区',id: '68.0.0.0',value: 68
        },
        {name: '湖北5区',id: '76.0.0.0',value: 76
        },
        {name: '湖北6区',id: '94.0.0.0',value: 94
        },
        {name: '湖北7区',id: '115.0.0.0',value: 115
        },
        {name: '湖北8区',id: '127.0.0.0',value: 127
        },
        {name: '上海1区',id: '3.0.0.0',value: 3
        },
        {name: '上海2区',id: '16.0.0.0',value: 16
        },
        {name: '上海3区',id: '36.0.0.0',value: 36
        },
        {name: '上海4/5区',id: '93.0.0.0',value: 93
        },
        {name: '江苏1区',id: '7.0.0.0',value: 7
        },
        {name: '江苏2区',id: '20.0.0.0',value: 20
        },
        {name: '江苏3区',id: '41.0.0.0',value: 41
        },
        {name: '江苏4区',id: '53.0.0.0',value: 53
        },
        {name: '江苏5/7区',id: '79.0.0.0',value: 79
        },
        {name: '江苏6区',id: '90.0.0.0',value: 90
        },
        {name: '江苏8区',id: '109.0.0.0',value: 109
        },
        {name: '浙江1区',id: '11.0.0.0',value: 11
        },
        {name: '浙江2区',id: '21.0.0.0',value: 21
        },
        {name: '浙江3区',id: '55.0.0.0',value: 55
        },
        {name: '浙江4/5区',id: '84.0.0.0',value: 84
        },
        {name: '浙江6区',id: '116.0.0.0',value: 116
        },
        {name: '浙江7区',id: '129.0.0.0',value: 129
        },
        {name: '安徽1区',id: '30.0.0.0',value: 30
        },
        {name: '安徽2区',id: '58.0.0.0',value: 58
        },
        {name: '安徽3区',id: '104.0.0.0',value: 104
        },
        {name: '福建1区',id: '14.0.0.0',value: 14
        },
        {name: '福建2区',id: '44.0.0.0',value: 44
        },
        {name: '福建3/4区',id: '80.0.0.0',value: 80
        },
        {name: '江西1区',id: '29.0.0.0',value: 29
        },
        {name: '江西2区',id: '62.0.0.0',value: 62
        },
        {name: '江西3区',id: '96.0.0.0',value: 96
        },
        {name: '西北1区',id: '12.0.0.0',value: 12
        },
        {name: '西北2/3区',id: '46.0.0.0',value: 46
        },
        {name: '西南1区',id: '17.0.0.0',value: 17
        },
        {name: '西南2区',id: '49.0.0.0',value: 49
        },
        {name: '西南3区',id: '92.0.0.0',value: 92
        },
        {name: '陕西1区',id: '33.0.0.0',value: 33
        },
        {name: '陕西2/3区',id: '63.0.0.0',value: 63
        },
        {name: '云贵1区',id: '124.0.0.0',value: 124
        },
        {name: '云南1区',id: '120.0.0.0',value: 120
        },
        {name: '贵州1区',id: '122.0.0.0',value: 122
        },
        {name: '四川1区',id: '4.0.0.0',value: 4
        },
        {name: '四川2区',id: '26.0.0.0',value: 26
        },
        {name: '四川3区',id: '56.0.0.0',value: 56
        },
        {name: '四川4区',id: '70.0.0.0',value: 70
        },
        {name: '四川5区',id: '82.0.0.0',value: 82
        },
        {name: '四川6区',id: '107.0.0.0',value: 107
        },
        {name: '重庆1区',id: '39.0.0.0',value: 39
        },
        {name: '重庆2区',id: '73.0.0.0',value: 73
        },
        {name: '新疆1区',id: '123.0.0.0',value: 123
        },
        {name: '华北1区',id: '10.0.0.0',value: 10
        },
        {name: '华北2区',id: '19.0.0.0',value: 19
        },
        {name: '华北3区',id: '54.0.0.0',value: 54
        },
        {name: '华北4区',id: '87.0.0.0',value: 87
        },
        {name: '河北1区',id: '38.0.0.0',value: 38
        },
        {name: '河北2/3区',id: '67.0.0.0',value: 67
        },
        {name: '河北4区',id: '118.0.0.0',value: 118
        },
        {name: '河北5区',id: '132.0.0.0',value: 132
        },
        {name: '天津1区',id: '121.0.0.0',value: 121
        },
        {name: '东北1区',id: '13.0.0.0',value: 13
        },
        {name: '东北2区',id: '18.0.0.0',value: 18
        },
        {name: '东北3/7区',id: '23.0.0.0',value: 23
        },
        {name: '东北4/5/6区',id: '83.0.0.0',value: 83
        },
        {name: '北京1区',id: '2.0.0.0',value: 2
        },
        {name: '北京2/4区',id: '35.0.0.0',value: 35
        },
        {name: '北京3区',id: '72.0.0.0',value: 72
        },
        {name: '内蒙古1区',id: '125.0.0.0',value: 125
        },
        {name: '辽宁1区',id: '31.0.0.0',value: 31
        },
        {name: '辽宁2区',id: '47.0.0.0',value: 47
        },
        {name: '辽宁3区',id: '61.0.0.0',value: 61
        },
        {name: '吉林1/2区',id: '42.0.0.0',value: 42
        },
        {name: '黑龙江1区',id: '40.0.0.0',value: 40
        },
        {name: '黑龙江2/3区',id: '51.0.0.0',value: 51
        },
        {name: '河南1区',id: '27.0.0.0',value: 27
        },
        {name: '河南2区',id: '43.0.0.0',value: 43
        },
        {name: '河南3区',id: '57.0.0.0',value: 57
        },
        {name: '河南4区',id: '69.0.0.0',value: 69
        },
        {name: '河南5区',id: '77.0.0.0',value: 77
        },
        {name: '河南6区',id: '103.0.0.0',value: 103
        },
        {name: '河南7区',id: '135.0.0.0',value: 135
        },
        {name: '山东1区',id: '6.0.0.0',value: 6
        },
        {name: '山东2/7区',id: '37.0.0.0',value: 37
        },
        {name: '山东3区',id: '59.0.0.0',value: 59
        },
        {name: '山东4区',id: '75.0.0.0',value: 75
        },
        {name: '山东5区',id: '78.0.0.0',value: 78
        },
        {name: '山东6区',id: '106.0.0.0',value: 106
        },
        {name: '山西1区',id: '32.0.0.0',value: 32
        },
        {name: '山西2区',id: '95.0.0.0',value: 95
        }
    ]
var career_portrait ={
        0: {career: '男鬼剑',portrait_url: 'http: //cdn.tgp.qq.com/DNF_picture/role_portrait/GhostKnightMan.png',base_speed: 870},11: {career: '女鬼剑',portrait_url: 'http://cdn.tgp.qq.com/DNF_picture/role_portrait/GhostKnightWoman.png',base_speed: 920},7: {career: '男格斗',portrait_url: 'http://cdn.tgp.qq.com/DNF_picture/role_portrait/FighterMan.png',base_speed: 900},1: {career: '女格斗',portrait_url: 'http://cdn.tgp.qq.com/DNF_picture/role_portrait/FighterWoman.png',base_speed: 930},2: {career: '男神枪',portrait_url: 'http://cdn.tgp.qq.com/DNF_picture/role_portrait/GunnerMan.png',base_speed: 840},5: {career: '女神枪',portrait_url: 'http://cdn.tgp.qq.com/DNF_picture/role_portrait/GunnerWoman.png',base_speed: 896},8: {career: '男法师',portrait_url: 'http://cdn.tgp.qq.com/DNF_picture/role_portrait/MagiciantMan.png',base_speed: 840},3: {career: '女法师',portrait_url: 'http://cdn.tgp.qq.com/DNF_picture/role_portrait/MagiciantWoman.png',base_speed: 820},4: {career: '圣职者',portrait_url: 'http://cdn.tgp.qq.com/DNF_picture/role_portrait/Priest.png',base_speed: 800},6: {career: '暗夜使者',portrait_url: 'http://cdn.tgp.qq.com/DNF_picture/role_portrait/DarkAngel.png',base_speed: 980},9: {career: '黑暗武士',portrait_url: 'http://cdn.tgp.qq.com/DNF_picture/role_portrait/DarkKnight.png',base_speed: 870},10: {career: '缔造者',portrait_url: 'http://cdn.tgp.qq.com/DNF_picture/role_portrait/Founder.png',base_speed: 820},12: {career: '守护者',portrait_url: 'http://cdn.tgp.qq.com/DNF_picture/role_portrait/MatchWoman.png',base_speed: 920},13: {career: '魔枪士',portrait_url: 'http://cdn.tgp.qq.com/DNF_picture/role_portrait/DemonicLancer.png',base_speed: 920}}
var advance_co ={
                0: ['未转职', '剑魂', '鬼泣', '狂战士', '阿修罗'
                ],
                1: ['未转职', '气功师', '散打', '街霸', '柔道家'
                ],
                2: ['未转职', '漫游枪手', '枪炮师', '机械师', '弹药专家'
                ],
                3: ['未转职', '元素师', '召唤师', '战斗法师', '魔道学者'
                ],
                4: ['未转职', '圣骑士', '蓝拳圣使', '驱魔师', '复仇者'
                ],
                5: ['未转职', '漫游枪手', '枪炮师', '机械师', '弹药专家'
                ],
                6: ['未转职', '刺客', '死灵术士', '忍者', '影舞者'
                ],
                7: ['未转职', '气功师', '散打', '街霸', '柔道家'
                ],
                8: ['未转职', '元素爆破师', '冰结师', '血法师', '逐风者', '次元行者'
                ],
                9: ['未转职'
                ],
                10: ['未转职'
                ],
                11: ['未转职', '驭剑士', '暗殿骑士', '契魔者', '流浪武士'
                ],
                12: ['未转职', '精灵骑士', '混沌魔灵'
                ],
                13: ['未转职', '征战者', '决战者'
                ]
            }
var portrait ={
                0: {
                    0: ['GhostNightMan_1'
                    ],
                    1: ['WeaponMaster', 'WeaponMaster_1', 'WeaponMaster_2'
                    ],
                    2: ['SoulBringer', 'SoulBringer_1', 'SoulBringer_2'
                    ],
                    3: ['Berserker', 'Berserker_1', 'Berserker_2'
                    ],
                    4: ['Asura', 'Asura_1', 'Asura_2'
                    ]
                },
                7: {
                    0: ['FighterMan_1'
                    ],
                    1: ['NenMaster', 'NenMaster_1', 'NenMaster_2'
                    ],
                    2: ['Striker', 'Striker_1', 'Striker_2'
                    ],
                    3: ['StreetFighter', 'StreetFighter_1', 'StreetFighter_2'
                    ],
                    4: ['Grappler', 'Grappler_1', 'Grappler_2'
                    ]
                },
                2: {
                    0: ['GunnerMan_1'
                    ],
                    1: ['Ranger', 'Ranger_1', 'Ranger_2'
                    ],
                    2: ['Launcher', 'Launcher_1', 'Launcher_2'
                    ],
                    3: ['Mechanic', 'Mechanic_1', 'Mechanic_2'
                    ],
                    4: ['SpitFire', 'SpitFire_1', 'SpitFire_2'
                    ]
                },
                3: {
                    0: ['MagiciantWoman_1'
                    ],
                    1: ['ElementalMaster', 'ElementalMaster_1', 'ElementalMaster_2'
                    ],
                    2: ['Summoner', 'Summoner_1', 'Summoner_2'
                    ],
                    3: ['BattleMage', 'BattleMage_1', 'BattleMage_2'
                    ],
                    4: ['Witch', 'Witch_1', 'Witch_2'
                    ]
                },
                4: {
                    0: ['Priest_1'
                    ],
                    1: ['Crusader', 'Crusader_1', 'Crusader_2'
                    ],
                    2: ['Infighter', 'Infighter_1', 'Infighter_2'
                    ],
                    3: ['Exorcist', 'Exorcist_1', 'Exorcist_2'
                    ],
                    4: ['Avenger', 'Avenger_1', 'Avenger_2'
                    ]
                },
                5: {
                    0: ['GunnerWoman_1'
                    ],
                    1: ['Ranger_women', 'Ranger_women_1', 'Ranger_women_2'
                    ],
                    2: ['Launcher_women', 'Launcher_women_1', 'Launcher_women_2'
                    ],
                    3: ['Mechanic_women', 'Mechanic_women_1', 'Mechanic_women_2'
                    ],
                    4: ['SpitFire_women', 'SpitFire_women_1', 'SpitFire_women_2'
                    ]
                },
                6: {
                    0: ['DarkAngel_1'
                    ],
                    1: ['Assassin', 'Assassin_1', 'Assassin_2'
                    ],
                    2: ['Necromancer', 'Necromancer_1', 'Necromancer_2'
                    ],
                    3: ['Ninjia', 'Ninjia_1', 'Ninjia_2'
                    ],
                    4: ['ShadowDancer', 'ShadowDancer_1', 'ShadowDancer_2'
                    ]
                },
                1: {
                    0: ['FighterWoman_1'
                    ],
                    1: ['NenMaster_women', 'NenMaster_women_1', 'NenMaster_women_2'
                    ],
                    2: ['Striker_women', 'Striker_women_1', 'Striker_women_2'
                    ],
                    3: ['StreetFighter_women', 'StreetFighter_women_1', 'StreetFighter_women_2'
                    ],
                    4: ['Grappler_women', 'Grappler_women_1', 'Grappler_women_2'
                    ]
                },
                8: {
                    0: ['MagiciantMan_1'
                    ],
                    1: ['ElementalBlastMaster', 'ElementalBlastMaster_1', 'ElementalBlastMaster_2'
                    ],
                    2: ['IceMaster', 'IceMaster_1', 'IceMaster_2'
                    ],
                    3: ['Bloodmage', 'Bloodmage', 'Bloodmage'
                    ],
                    4: ['SwiftMaster', 'SwiftMaster', 'SwiftMaster'
                    ],
                    5: ['DimensionWalker', 'DimensionWalker', 'DimensionWalker'
                    ]
                },
                9: {
                    0: ['DarkNight_1', 'DarkNight_1', 'DarkNight_1'
                    ]
                },
                10: {
                    0: ['Founder_1', 'Founder_1', 'Founder_1'
                    ]
                },
                11: {
                    0: ['GhostNightWoman_1'
                    ],
                    1: ['Swordman', 'Swordman_1', 'Swordman_2'
                    ],
                    2: ['DarkTemplar', 'DarkTemplar_1', 'DarkTemplar_2'
                    ],
                    3: ['DeedOfDemons', 'DeedOfDemons_1', 'DeedOfDemons_2'
                    ],
                    4: ['WanderingSamurai', 'WanderingSamurai_1', 'WanderingSamurai_2'
                    ]
                },
                12: {
                    0: ['WatchWoman_1'
                    ],
                    1: ['WizardKnight', 'WizardKnight_1', 'WizardKnight_2'
                    ],
                    2: ['ChaosDemon', 'ChaosDemon_1', 'ChaosDemon_2'
                    ]
                },
                13: {
                    0: ['DemonicLancer_1'
                    ],
                    1: ['Vanguard', 'Vanguard_1', 'Vanguard_2'
                    ],
                    2: ['Duelist', 'Duelist_1', 'Duelist_2'
                    ]
                }
            }
var awake ={
                0: {
                    1: ['剑圣', '剑神'
                    ],
                    2: ['弑魂', '黑暗君主'
                    ],
                    3: ['狱血魔神', '帝血弑天'
                    ],
                    4: ['大暗黑天', '天帝'
                    ]
                },
                1: {
                    1: ['百花缭乱', '念帝'
                    ],
                    2: ['武神', '极武圣'
                    ],
                    3: ['毒王', '毒神绝'
                    ],
                    4: ['暴风眼', '风暴女皇'
                    ]
                },
                2: {
                    1: ['枪神', '掠天之翼'
                    ],
                    2: ['狂暴者', '毁灭者'
                    ],
                    3: ['机械战神', '机械元首'
                    ],
                    4: ['大将军', '战场统治者'
                    ]
                },
                3: {
                    1: ['大魔导师', '元素圣灵'
                    ],
                    2: ['月之女皇', '月蚀'
                    ],
                    3: ['贝亚娜斗神', '伊斯塔战灵'
                    ],
                    4: ['魔术师', '古灵精怪'
                    ]
                },
                4: {
                    1: ['天启者', '神思者'
                    ],
                    2: ['神之手', '正义仲裁者'
                    ],
                    3: ['龙斗士', '真龙星君'
                    ],
                    4: ['末日审判者', '永生者'
                    ]
                },
                5: {
                    1: ['沾血蔷薇', '绯红玫瑰'
                    ],
                    2: ['重炮掌控者', '风暴骑兵'
                    ],
                    3: ['机械之心', '机械之灵'
                    ],
                    4: ['战争女神', '芙蕾雅'
                    ]
                },
                6: {
                    1: ['银月', '月影星劫'
                    ],
                    2: ['灵魂收割者', '亡魂主宰'
                    ],
                    3: ['毕方之炎', '不知火'
                    ],
                    4: ['梦魇', '幽冥'
                    ]
                },
                7: {
                    1: ['狂虎帝', '念皇'
                    ],
                    2: ['武极', '极武皇'
                    ],
                    3: ['千手罗汉', '暗街之王'
                    ],
                    4: ['风林火山', '宗师'
                    ]
                },
                8: {
                    1: ['魔皇', '湮灭之瞳'
                    ],
                    2: ['冰冻之心', '刹那永恒'
                    ],
                    3: ['血狱伯爵', '血狱伯爵'
                    ],
                    4: ['御风者', '御风者'
                    ],
                    5: ['虚空行者', '虚空行者'
                    ]
                },
                9: {
                    0: ['黑暗武士', '黑暗武士'
                    ]
                },
                10: {
                    0: ['缔造者', '缔造者'
                    ]
                },
                11: {
                    1: ['剑宗', '剑皇'
                    ],
                    2: ['暗帝', '裁决女神'
                    ],
                    3: ['剑魔', '弑神者'
                    ],
                    4: ['剑豪', '剑帝'
                    ]
                },
                12: {
                    1: ['星辰之光', '大地女神'
                    ],
                    2: ['黑魔后', '黑曜神'
                    ]
                },
                13: {
                    1: ['战魂', '不灭战神'
                    ],
                    2: ['无双之魂', '圣武枪魂'
                    ]
                }
            }
var color_type ={
                0: '白色',
                1: '橙色',
                2: '蓝色',
                3: '粉色',
                4: '紫色',
                5: '勇者',
                6: '红色'
            }
var level_type ={
                0: '普通',
                1: '高级',
                2: '稀有',
                3: '神器',
                4: '史诗',
                5: '勇者',
                6: '传说'
            }
var proper_id ={
                1: '位置',
                2: '品级',
                3: '等级',
                4: 'lv等级',
                5: '强化',
                6: '异次元力量',
                7: '异次元魔力',
                8: '异次元生命',
                9: '异次元智力',
                10: '物理攻击力',
                11: '魔法攻击力',
                12: '无视防御的物理攻击力',
                13: '无视防御的魔法攻击力',
                14: '独立攻击力',
                15: '物理暴击',
                16: '魔法暴击',
                17: '力量',
                18: '智力',
                19: '体力',
                20: '精神',
                21: '抗魔',
                22: '物理防御力',
                23: '魔法防御力',
                24: '所受物理伤害追加减少',
                25: '所受物理伤害减少',
                26: '所受魔法伤害追加减少',
                27: '所受魔法伤害',
                28: '攻击速度',
                29: '施放速度',
                30: '移动速度',
                31: '命中率',
                32: '回避率',
                33: 'HP最大值',
                34: 'MP最大值',
                35: '冰属性抗性',
                36: '火属性抗性',
                37: '光属性抗性',
                38: '暗属性抗性'
            }