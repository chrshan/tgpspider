# -*- coding: utf-8 -*-

# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: http://doc.scrapy.org/en/latest/topics/item-pipeline.html
from scrapy.conf import settings
import pymongo
from tgpspider.items import RoleDetail


class TgpspiderPipeline(object):

    def __init__(self):
        host = settings['MONGODB_HOST']
        port = settings['MONGODB_PORT']
        dbname = settings['MONGODB_DBNAME']
        client = pymongo.MongoClient(host=host, port=port)
        self.tdb = client[dbname]

    def process_item(self, item, spider):
        if spider.name == 'role':
            items = {
                'ZoneId': item['ZoneId'],
                'NickName': item['NickName'],
                'RoleId': item['RoleId'],
                'Uin': item['Uin'],
                'PropVal': item['PropVal'],
                'Career': item['Career'],
                'Advance': item['Advance'],
                'Disillusio': item['Disillusion'],
                'Level': item['Level'],
                'LastPlayTi': item['LastPlayTime']
            }
            self.tdb['role'].insert(items)
        elif spider.name == 'roledetail':
            role_detail = RoleDetail()
            role_detail['Uin'] = item['Uin']
            role_detail['CreateTime'] = item['CreateTime']
            role_detail['FightingCapacityValue'] = item[
                'FightingCapacityValue']
            role_detail['FightingCapacityDetails'] = item[
                'FightingCapacityDetails']
            role_detail['FightingCapacityDetailsExt'] = item[
                'FightingCapacityDetailsExt']
            self.tdb['roledetail'].insert(role_detail)
        elif spider.name == 'roleitem':
            self.tdb['roleitem'].insert(item)
        elif spider.name == 'roleequip':
            self.tdb['roleequip'].insert(item)
        elif spider.name == 'rolesnap':
            self.tdb['rolesnap'].insert(item)
        elif spider.name == 'roleskill':
            self.tdb['roleskill'].insert(item)
        elif spider.name == 'roleproptable':
            self.tdb['roleproptable'].insert(item)
