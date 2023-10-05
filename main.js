const fs = require("node:fs");
fs.readFile("data.json", (err, data) => {
    if (err) {
        console.log(err)
    }
    else {
        let jsonData = JSON.parse(data);
        let max = -Infinity;
        for (let i = 0; i < jsonData.length; i++){
            if (jsonData[i].rate > max) max = jsonData[i].rate;
        }

        let rateString = "Максимальний курс:" + max;
        
        fs.writeFile('output.txt', rateString, (err) => {
            if (err){
                console.log(err);
            }
            else {
                console.log(rateString);
            }
        })
    }
});