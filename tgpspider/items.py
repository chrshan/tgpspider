# -*- coding: utf-8 -*-

# Define here the models for your scraped items
#
# See documentation in:
# http://doc.scrapy.org/en/latest/topics/items.html

import scrapy


class Role(scrapy.Item):
    # define the fields for your item here like:
    # name = scrapy.Field()
    ZoneId = scrapy.Field()
    NickName = scrapy.Field()
    RoleId = scrapy.Field()
    Uin = scrapy.Field()
    PropVal = scrapy.Field()
    Career = scrapy.Field()
    Advance = scrapy.Field()
    Disillusion = scrapy.Field()
    Level = scrapy.Field()
    LastPlayTime = scrapy.Field()


class RoleDetail(scrapy.Item):
    _id = scrapy.Field()
    Uin = scrapy.Field()
    CreateTime = scrapy.Field()
    FightingCapacityValue = scrapy.Field()

    FightingCapacityDetails = scrapy.Field()
    FightingCapacityDetailsExt = scrapy.Field()


class RoleItem(scrapy.Item):
    _id = scrapy.Field()
    Id = scrapy.Field()
    ApparelLev = scrapy.Field()
    Color = scrapy.Field()
    Grade = scrapy.Field()
    Lev = scrapy.Field()
    Name = scrapy.Field()
