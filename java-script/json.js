/**
 * Created by mbara3 on 9/29/16.
 */

var accountStr = '{"name":"Jedi", "members":["Yoda","Obi Wan"], \
                   "number":34512, "location": "A galaxy far, far away"}';
var accountObj = JSON.parse(accountStr);
console.log(accountObj.name);
console.log(accountObj.members);