'use strict';  //kode javascript nya bakal diketatin dan dipastikan berjalan dengan baik

exports.ok = function(values,res) {
    var data = {
        'status' : 200,
        'values' : values
    }
     res.json(data);
     res.end();
}