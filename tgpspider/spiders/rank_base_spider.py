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
                        'now Career is %s ,Advanceis %s,ZoneIDMerge is %s', Career, Advance, ZoneIDMerge)
                    for StartId in range(0, 3600, 32):
                        url = 'http://webd.tgp.qq.com/dnf/fcg-bin/GlobeRankInfo?ZoneId=29&NickName=%E8%80%81%E8%A1%A8%E6%81%B0%E8%B7%9F%E9%87%91%E5%9C%A3'
                        yield scrapy.Request(
                            url + '&Career=' + str(Career) +
                            '&Advance=' + str(Advance) +
                            '&PropertyId=26' +
                            '&StartId=' + str(StartId) +
                            '&Count=500' +
                            '&RankDay=2017022719' +
                            '&ZoneIDMerge=' + str(ZoneIDMerge),
                            cookies={
                                'RK': '5HurjGRaXt',
                                'pgv_pvi': '7687267328',
                                'tgp_newFlag': '497456022%3A',
                                'eas_sid': 'z1H4h8Z4R6F5n2k7r0p9r7T5W1',
                                'pkey': '000158B4431400706B573CD68EE42F48A1DC251BC5E4ABACE6E70195372F334BA52BAE72744E83881A3AAF1B2839319A3A1B1EB79F58F2E03A4DCF13CF537574B46EE1ED8D2A23F74588B41919657A5C4903BD68ECE6A07043E8C640C2B6B56C93E5731D99F402C5B3E0834BEA16B83C1B50556DD1633333',
                                'pgv_si': 's21011456',
                                'session_token': 'prk+mjulBpqNUa1TTymivmhwuvHgUwQrr/p//qyR6Zo=',
                                'pt2gguin': 'o0497456022',
                                'uin': 'o0497456022',
                                'skey': '@SeUnivUgG',
                                'ptisp': 'ctc',
                                'ptcz': '09cfef3c01466fc0c6c94b3d2ba94293e14ed07a870fcac5cd63f88ed7825bef',
                                'puin': '497456022',
                                'paid': '29',
                                'pgv_info': 'ssid=s6522609848',
                                'pgv_pvid': '2758795718'
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
