/*
* @Author: 卓文理
* @Email : 531840344@qq.com
* @Desc  : Model Tag
*/
'use strict';

var db = require('../db');

module.exports = db.model('Tag', {
    tableName: 'tags',
    hasTimestamps: true
});