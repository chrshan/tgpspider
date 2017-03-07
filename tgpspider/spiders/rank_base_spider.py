#!/usr/bin/env python
# -*- encoding: utf-8 -*-
"""
基本信息抓取
"""
import logging
import json
import scrapy
from scrapy.shell import inspect_response

from tgpspider.items import Role


# career
# <li career_id="0"><a href="#" hidefocus="">男鬼剑</a></li>
# <li career_id="1"><a href="#" hidefocus="">女格斗</a></li>
# <li career_id="2"><a href="#" hidefocus="">男神枪</a></li>
# <li career_id="3"><a href="#" hidefocus="">女法师</a></li>
# <li career_id="4"><a href="#" hidefocus="">圣职者</a></li>
# <li career_id="5"><a href="#" hidefocus="">女神枪</a></li>
# <li career_id="6"><a href="#" hidefocus="">暗夜使者</a></li>
# <li career_id="7"><a href="#" hidefocus="">男格斗</a></li>
# <li career_id="8"><a href="#" hidefocus="">男法师</a></li>
# <li career_id="9"><a href="#" hidefocus="">黑暗武士</a></li>
# <li career_id="10"><a href="#" hidefocus="">缔造者</a></li>
# <li career_id="11"><a href="#" hidefocus="">女鬼剑</a></li>
# <li career_id="12"><a href="#" hidefocus="">守护者</a></li>
# <li career_id="13"><a href="#" hidefocus="">魔枪士</a></li>


# advance:
# 0: ['未转职', '剑魂', '鬼泣', '狂战士', '阿修罗'
# ],
# 1: ['未转职', '气功师', '散打', '街霸', '柔道家'
# ],
# 2: ['未转职', '漫游枪手', '枪炮师', '机械师', '弹药专家'
# ],
# 3: ['未转职', '元素师', '召唤师', '战斗法师', '魔道学者'
# ],
# 4: ['未转职', '圣骑士', '蓝拳圣使', '驱魔师', '复仇者'
# ],
# 5: ['未转职', '漫游枪手', '枪炮师', '机械师', '弹药专家'
# ],
# 6: ['未转职', '刺客', '死灵术士', '忍者', '影舞者'
# ],
# 7: ['未转职', '气功师', '散打', '街霸', '柔道家'
# ],
# 8: ['未转职', '元素爆破师', '冰结师', '血法师', '逐风者', '次元行者'
# ],
# 9: ['未转职'
# ],
# 10: ['未转职'
# ],
# 11: ['未转职', '驭剑士', '暗殿骑士', '契魔者', '流浪武士'
# ],
# 12: ['未转职', '精灵骑士', '混沌魔灵'
# ],
# 13: ['未转职', '征战者', '决战者'

# property
#<li proper_id="26"><a href="#" hidefocus="">战斗力</a></li>
#<li proper_id="8"><a href="#" hidefocus="">力量</a></li>
#<li proper_id="9"><a href="#" hidefocus="">智力</a></li>
#<li proper_id="10"><a href="#" hidefocus="">体力</a></li>
#<li proper_id="11"><a href="#" hidefocus="">精神</a></li>
#<li proper_id="1"><a href="#" hidefocus="">物理攻击</a></li>
#<li proper_id="3"><a href="#" hidefocus="">物理无视防御攻击力</a></li>
#<li proper_id="2"><a href="#" hidefocus="">魔法攻击</a></li>
#<li proper_id="4"><a href="#" hidefocus="">魔法无视防御攻击力</a></li>
#<li proper_id="5"><a href="#" hidefocus="">独立攻击力（物理/魔法）</a></li>
#<li proper_id="13"><a href="#" hidefocus="">物理防御</a></li>
#<li proper_id="14"><a href="#" hidefocus="">魔法防御</a></li>
#<li proper_id="6"><a href="#" hidefocus="">物理暴击</a></li>
#<li proper_id="7"><a href="#" hidefocus="">魔法暴击</a></li>
#<li proper_id="15"><a href="#" hidefocus="">攻击速度</a></li>
#<li proper_id="16"><a href="#" hidefocus="">施放速度</a></li>
#<li proper_id="17"><a href="#" hidefocus="">移动速度</a></li>
#<li proper_id="18"><a href="#" hidefocus="">命中率</a></li>
#<li proper_id="19"><a href="#" hidefocus="">回避率</a></li>
#<li proper_id="20"><a href="#" hidefocus="">硬直</a></li>
#<li proper_id="21"><a href="#" hidefocus="">火属性强化</a></li>
#<li proper_id="22"><a href="#" hidefocus="">冰属性强化</a></li>
#<li proper_id="23"><a href="#" hidefocus="">光属性强化</a></li>
#<li proper_id="24"><a href="#" hidefocus="">暗属性强化</a></li>
#<li proper_id="12"><a href="#" hidefocus="">抗魔</a></li>
#<li proper_id="25"><a href="#" hidefocus="">僵直度</a></li>


class RoleSpider(scrapy.Spider):
    name = 'role'
    allowed_domains = ["tgp.qq.com"]
    # start_urls = (
    #     'http://webd.tgp.qq.com/',
    # )
    custom_settings = {
        'DEFAULT_REQUEST_HEADERS': {
            'Host': 'webd.tgp.qq.com',
            'Accept': '*/*',
            'User-Agent': 'zh-CN,zh;q=0.8',
            'Referer': 'http://game.tgp.qq.com/dnf/v3/rank/index.html',
            'Accept-Language': 'zh-CN,zh;q=0.8,en-US;q=0.6,en;q=0.5;q=0.4'
        }
    }

    def __init__(self):
        self.zone_table = {
            1: "广东区",
            5: "湖南区",
            9: "湖北区",
            3: "上海区",
            7: "江苏区",
            11: "浙江区",
            30: "安徽区",
            14: "福建区",
            29: "江西区",
            12: "西北区",
            17: "西南区",
            33: "陕西区",
            124: "云贵区",
            120: "云南区",
            122: "贵州区",
            4: "四川区",
            39: "重庆区",
            123: "新疆区",
            10: "华北区",
            38: "河北区",
            121: "天津区",
            13: "东北区",
            2: "北京区",
            125: "内蒙古区",
            31: "辽宁区",
            42: "吉林区",
            40: "黑龙江区",
            27: "河南区",
            6: "山东区",
            32: "山西区",
            28: "广西区"
        }

    def start_requests(self):
        for Career in range(0, 14):
            for Advance in range(0, 5):
                for ZoneIDMerge in self.zone_table:
                    logging.warning(
                        ' now Career is %s ,Advanceis %s,ZoneIDMerge is %s', Career, Advance, ZoneIDMerge)
                    for StartId in range(0, 3600, 32):
                        #nickname  = 你的游戏角色名
                        url = 'http://webd.tgp.qq.com/dnf/fcg-bin/GlobeRankInfo?ZoneId=29&NickName=%E8%80%81%E8%A1%A8%E6%81%B0%E8%B7%9F%E9%87%91%E5%9C%A3'
                        yield scrapy.Request(
                            url + '&Career=' + str(Career) +
                            '&Advance=' + str(Advance) +
                            '&PropertyId=26' +
                            '&StartId=' + str(StartId) +
                            '&Count=500' +
                            '&RankDay=2017022719' +
                            '&ZoneIDMerge=' + str(ZoneIDMerge),
                            # 你的QQ登陆后返回的cookie
                            cookies={
                                #your cookies
                            },
                            callback=self.parse_role,)

    def parse_role(self, response):
        if response.status == 404:
            inspect_response(response, self)
        json_body = json.loads(response.body_as_unicode())
        if json_body['Ret'] == -1:
            return
        roles = json_body['RoleGlobleRankInfoList']
        for role in roles:
            info = Role()
            info['ZoneId'] = role['RoleRankInfo']['RoleBase']['ZoneId']
            info['NickName'] = role['RoleRankInfo']['RoleBase']['NickName']
            info['RoleId'] = role['RoleRankInfo']['RoleBase']['RoleId']
            info['Uin'] = role['RoleRankInfo']['RoleBase']['Uin']
            info['PropVal'] = role['RoleRankInfo']['PropVal']
            info['Career'] = role['RoleBasicInfo']['Career']
            info['Advance'] = role['RoleBasicInfo']['Advance']
            info['Disillusion'] = role['RoleBasicInfo']['Disillusion']
            info['Level'] = role['RoleBasicInfo']['Level']
            info['LastPlayTime'] = role['RoleBasicInfo']['LastPlayTime']
            yield info
