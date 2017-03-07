#!/usr/bin/env python
# -*- encoding: utf-8 -*-
"""
物品获取
"""
import logging
import urllib
import json
import pymongo
import scrapy
from scrapy.conf import settings


class RoleItemSpider(scrapy.Spider):
    """
    item -> name
    """
    name = 'roleitem'
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
        tdb = client[dbname]
        self.coll = client['role']['roledetail'].find(no_cursor_timeout=True).distinct(
            'FightingCapacityDetailsExt.ExtendEquipList.EquipId')

    def start_requests(self):
        url = 'http://webd.tgp.qq.com/dnf/fcg-bin/dnf_equip_static_info?callback=&uin=0d134a3b140913abbaa04b4a32d33e1b&equip_id='
        for i in self.coll:
            logging.warning('now at %s', str(i))
            url += str(i) + '|'
            if i % 100 == 0:
                yield scrapy.Request(
                    url,
                    callback=self.parse_role_item)
                url = 'http://webd.tgp.qq.com/dnf/fcg-bin/dnf_equip_static_info?callback=&uin=0d134a3b140913abbaa04b4a32d33e1b&equip_id='
        yield scrapy.Request(url, callback=self.parse_role_item)
        self.coll.close()

    def parse_role_item(self, response):
        res_str = response.body_as_unicode()
        json_body = json.loads(res_str[1:len(res_str) - 2])
        for item in json_body['list']:
            yield item
