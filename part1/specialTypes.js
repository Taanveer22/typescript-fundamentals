"use strict";
// =============== any
let looseVar = "john";
looseVar = 28;
looseVar = true;
console.log(looseVar);
// ================= unknown
let secureData = "crypto";
console.log(secureData);
// let characters = secureData.length;
// console.log(characters);
// ❌ Error: secureData is of type 'unknown'
if (typeof secureData === "string") {
    let characters = secureData.length;
    console.log(characters);
}
//==================== void
function showInfo(info) {
    console.log(info);
}
// let result = showInfo("hasin");
// console.log("function return", result);
// ❌ Error: function return undefined always
// ================ never
function infiniteLoop() {
    while (true) {
        console.log("ongoing...");
    }
}
infiniteLoop();
