const axios = require('axios');
let num = 0
const cheerio = require('cheerio');
const mongojs = require('mongojs')
const link = "https://metbuat.az/melumat/sirket/"+num+"/a.html"
const db = mongojs(`mongodb/${process.env.uname}:${process.env.password}@localhost:${process.env.PORT}`)
async function scrapeForLearn(){
   for(let i = 0 ; i<8953;i++){
    num=i
    const data = {}
    const result = await axios.get(link);
    const $ = cheerio.load(result.data);
    $('table.table-company-details tr').each((index,value)=>{
        var key = $(value).text('td:eq[0]');
        var values = $(value).text('td:eq[1]');
        key[values] = text
    });
    data.cid = i;
    db.companyInfo.insertOne(data,(err,res)=>{
        if(err){
            console.error(link)
        }else{
            console.log(link)
        }
    })
   }
};

