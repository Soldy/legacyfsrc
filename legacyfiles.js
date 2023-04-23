'use strict';

const currentfilesBase = function(){
    /**
     * 
     * @param {string}
     * @param {string}
     * @public
     * @return {string}
     */
    this.readFile = async function(file, encoding = 'utf8'){
        return await _fs.readFile(file, {encoding});
    };
    const _fs = require('node:fs/promises');
};

const legacyFilesBase = function(){
    /**
     * 
     * @param {string}
     * @param {string}
     * @public
     * @return {string}
     */
    this.readFile = function (file, encoding = 'utf8'){
        return new Promise((resolve) => {
            _fs.readFile(file, encoding, function (error, data) {
                if (error) throw Error(error);
                resolve(data);
            });
        });
    };
    const _fs = require('fs');
};


if(
   (parseInt((process.versions.node).split('.')[0]) > 15) ||
   (parseInt((process.versions.node).split('.')[0]) === 14)
){
    exports.base = currentfilesBase;
}else{
    exports.base = legacyFilesBase;
}
