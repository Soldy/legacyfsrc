'use strict';
const $nanoTest   = new (require('nanoTest')).test({
    'progress_bar':false,
    'debug_print':'short'
});
const $lfs = require('./index.js').base;
(async function(){
    $nanoTest.add(
        'test file read',
        {
            'function':$lfs.readFile,
            'options':['test.txt']
        },
        '===',
        'test text\n'
    );
    $nanoTest.run();
})();

