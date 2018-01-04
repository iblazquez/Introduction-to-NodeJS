const fs = require('fs')
const path = require('path')
const csvtojson = require('csvtojson')

const convert = (csvFile) => {
    if (csvFile == null || csvFile == '') 
        return console.log('Falta el nombre del csv a convertir');
    if (!fs.existsSync(csvFile))    
        return console.log('El fichero ',csvFile,' no existe');
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

convert(process.argv[2]);


