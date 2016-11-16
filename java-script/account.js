/**
 * Created by mbara3 on 9/29/16.
 */

var accountObj={
    name: "Baggins",
    number: 10645,
    members: ["Frodo, Bilbo"],
    location: "Arizona"
};

var accountStr=JSON.stringify(accountObj);
console.log(accountStr);