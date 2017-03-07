#!/usr/bin/env python
# -*- encoding: utf-8 -*-
"""
详细信息抓取
"""
import logging
import urllib
import json
import pymongo
import scrapy
from scrapy.conf import settings

class RoleCreateSpider(scrapy.Spider):

    name = 'roledetail'
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
        self.coll = tdb.role.find(no_cursor_timeout=True)

    def start_requests(self):
        count = 0
        for i in self.coll:
            if count % 1000 == 0:
                logging.warning('now at %s', str(count))
            count += 1
            url = 'http://webd.tgp.qq.com/dnf/fcg-bin/user_create_time'
            yield scrapy.Request(
                url + '?ZoneID=' + str(i['ZoneId']) +
                '&NickName=' + urllib.request.quote(i['NickName']) +
                '&Uin=' + str(i['Uin']),
                callback=self.parse_role_ct,
                meta=i)
        self.coll.close()

    def parse_role_ct(self, response):
        json_body = json.loads(response.body_as_unicode())
        info = response.meta
        info['CreateTime'] = json_body['CreateTime']

        url = 'http://webd.tgp.qq.com/dnf/fcg-bin/fighting_capacity_get'
        yield scrapy.Request(
            url + '?ZoneID=' + str(response.meta['ZoneId']) +
            '&NickName=' + urllib.request.quote(response.meta['NickName']) +
            '&Uin=' + str(response.meta['Uin']),
            callback=self.parse_role_detail,
            meta=info)

    def parse_role_detail(self, response):
        json_body = json.loads(response.body_as_unicode())
        json_body['Uin'] = response.meta['Uin']
        json_body['CreateTime'] = response.meta['CreateTime']
        yield json_body
