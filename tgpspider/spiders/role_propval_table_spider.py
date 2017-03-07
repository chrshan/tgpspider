#!/usr/bin/env python
# -*- encoding: utf-8 -*-
"""
战力表
"""
import logging
import urllib
import json
import pymongo
import scrapy
from scrapy.conf import settings

"""
探索
开拓
无畏
征服
战绝
英杰
"""
class RoleCreateSpider(scrapy.Spider):

    name = 'roleproptable'
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
        """

        """
        host = settings['MONGODB_HOST']
        port = settings['MONGODB_PORT']
        dbname = dbname = settings['MONGODB_DBNAME']
        client = pymongo.MongoClient(host=host, port=port)
        self.tdb = client[dbname]

    def start_requests(self):
        url = 'http://webd.tgp.qq.com/dnf/fcg-bin/fighting_capacity_get'
        for i in range(0, 14):
            for j in range(0, 5):
                logging.info('now Career = %s,Advance = %s', i, j)
                col = self.tdb['role'].find_one(
                    {'Career': i, 'Advance': j}, no_cursor_timeout=True)
                if col != None:
                    yield scrapy.Request(
                        url + '?ZoneID=' + str(col['ZoneId']) +
                        '&NickName=' + urllib.request.quote(col['NickName']) +
                        '&Uin=' + str(col['Uin']),
                        callback=self.parse_role_propt,
                        meta=col)

    def parse_role_propt(self, response):
        meta = response.meta
        json_body = json.loads(response.body_as_unicode())
        data = dict()
        data['Career'] = meta['Career']
        data['Advance'] = meta['Advance']
        data['FightingCapacityLevelTable'] = json_body[
            'FightingCapacityLevelTable']
        yield data
