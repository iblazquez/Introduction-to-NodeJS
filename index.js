const fs = require('fs')
const path = require('path')
const csvtojson = require('csvtojson')

const convert = (csvFile) => {
    console.log('File to convert ', csvFile);
    let json ='';
    csvtojson().fromFile(csvFile).on('json',(jsonObj)=>{
        json += JSON.stringify(jsonObj,'','\t');
    }).on('done',(error)=>{
        if (error)
            console.log(error);
        fs.writeFile(path.basename(csvFile, '.csv')+'.json',json,(err) => {
            if (err) console.log(err);
            console.log('The file ',path.basename(csvFile, '.csv')+'.json', 'has been saved!');
        });
        
    })
    
}

convert('customer-data.csv');


