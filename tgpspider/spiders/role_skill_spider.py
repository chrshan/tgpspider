#!/usr/bin/env python
# -*- encoding: utf-8 -*-
"""
技能抓取
"""
import logging
import urllib
import json
import pymongo
import scrapy
from scrapy.conf import settings
from scrapy.shell import inspect_response


class RoleCreateSpider(scrapy.Spider):

    name = 'roleskill'
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
            url = 'http://webd.tgp.qq.com/dnf/fcg-bin/dnf_role_skill_equipment_info?IsCurEquip=1&IsSkill=1&IsCopySkill=1&'
            yield scrapy.Request(
                url + 'Uin=' + str(i['Uin']) +
                '&NickName=' + urllib.request.quote(i['NickName']) +
                '&ZoneId=' + str(i['ZoneId']) +
                '&RoleId=' + str(i['RoleId']),
                callback=self.parse_role_equip)
        self.coll.close()

    def parse_role_equip(self, response):
        if response.status == 404:
            inspect_response(response, self)
        json_body = json.loads(response.body_as_unicode())
        if json_body['Ret'] == 0:
            data = json_body['SkillList']
            data['Uin'] = json_body['RoleBase']['Uin']
            yield data
