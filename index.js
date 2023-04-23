'use strict';

if(typeof  global.theUn1v3rse === 'undefined')
    require('theuniverse');
const $universe = global.theUn1v3rse.controls.interface();

if(!$universe.baseCheck('legacyfiles'))
    $universe.baseAdd(
        'legacyfiles', 
        (new (require('./legacyfiles.js')).base())
    );

exports.base = $universe.baseGet('legacyfiles');
