/*
var fs = require('fs');
 fs.readFile('index.txt', 'utf8', function (err, data) {
  fs.writeFile('writeMeNowPlease.txt', data, 'utf8', function(err, result) {
     if(err) console.log('error', err);
   });
 });

var fs = require('fs');
        var dataHouse = fs.readFileSync('readMe.txt').toString().split("\n");
        dataHouse.splice(lineNumber, 3, "is not");
        var text = dataHouse.join("\n");
        
        fs.writeFile('writeMeNow.txt', text, function (err) {
          if (err) return console.log(err);
        });

var fs = require('fs')
fs.readFile('readMe.txt', 'utf8', function (err,data) {

  var formatted = data.replace(/Read me please/g, 'This new line replaces the old line');

 fs.writeFile('newLine.txt', formatted, 'utf8', function (err) {
    if (err) return console.log(err);
 });
});
the one bleow works
        var fs = require('fs')
        fs.readFile('readMe.txt', 'utf8', function (err,data) {
        
          var formatted = data.replace(/Read me please/g, 'This new newest line replaces the old line');
        
         fs.writeFile('newLine.txt', formatted, 'utf8', function (err) {
            if (err) return console.log(err);
         });
        });

*/


/*

const puppeteer = require('puppeteer');

setInterval(function() {

async function houseStatus(url) {
    const browser = await puppeteer.launch({headless: true});
    const page = await browser.newPage();
    await page.goto(url);

    const [el] = await page.$x('//*[@id="content"]/div[2]/div/div[1]/div[1]/div[1]/div/div[1]/div[1]/h4/a[1]');
    const txt = await el.getProperty('textContent');
    const rawTxtHouse = await txt.jsonValue();

    if (rawTxtHouse == 'Not in Session') {
        var fs = require('fs')
        fs.readFile('readMe.txt', 'utf8', function (err,data) {
        
          var formatted = data.replace(/sample word/g, 'Is not in Session');
        
         fs.writeFile('newLine.txt', formatted, 'utf8', function (err) {
            if (err) return console.log(err);
         });
        });
    } else {
        var fs = require('fs')
        fs.readFile('readMe.txt', 'utf8', function (err,data) {
        
          var formatted = data.replace(/sample word/g, 'Is in Session');
        
         fs.writeFile('newLine.txt', formatted, 'utf8', function (err) {
            if (err) return console.log(err);
         });
        });
    };

    browser.close();
}

houseStatus('https://www.congress.gov/')

}); 

*/
const puppeteer = require('puppeteer');

setInterval(function() {

  async function houseStatus(url) {
    const browser = await puppeteer.launch({headless: true});
    const page = await browser.newPage();
    await page.goto(url);

    const [el] = await page.$x('//*[@id="content"]/div[2]/div/div[1]/div[1]/div[1]/div/div[1]/div[1]/h4/a[1]');
    const txt = await el.getProperty('textContent');
    const rawTxtHouse = await txt.jsonValue();

    if (rawTxtHouse == 'Not in Session') {
      var fs = require('fs')
      fs.readFile('index.html', 'utf8', function (err,data) {
      
        var formatted = data.replace(/totally is/g, 'isnt');
      
       fs.writeFile('index.html', formatted, 'utf8', function (err) {
          if (err) return console.log(err);
       });
      });
    } else {
      var fs = require('fs')
      fs.readFile('index.html', 'utf8', function (err,data) {
      
        var formatted = data.replace(/isnt/g, 'totally is');
      
       fs.writeFile('index.html', formatted, 'utf8', function (err) {
          if (err) return console.log(err);
       });
      });
    };

    browser.close();
}

houseStatus('https://www.congress.gov/')


async function senateStatus(url) {
  const browser = await puppeteer.launch({headless: true});
  const page = await browser.newPage();
  await page.goto(url);

  const [el] = await page.$x('//*[@id="content"]/div[2]/div/div[1]/div[1]/div[1]/div/div[2]/div[1]/h4/a[1]');
  const txt = await el.getProperty('textContent');
  const rawTxtSenate = await txt.jsonValue();

  if (rawTxtSenate == 'Not in Session') {
    var fs = require('fs')
    fs.readFile('index.html', 'utf8', function (err,data) {
    
      var formatted = data.replace(/sure is/g, 'unfortunately is not');
    
     fs.writeFile('index.html', formatted, 'utf8', function (err) {
        if (err) return console.log(err);
     });
    });
  } else {
    var fs = require('fs')
    fs.readFile('index.html', 'utf8', function (err,data) {
    
      var formatted = data.replace(/unfortunately is not/g, 'sure is');
    
     fs.writeFile('index.html', formatted, 'utf8', function (err) {
        if (err) return console.log(err);
     });
    });
  };

  browser.close();
}

senateStatus('https://www.congress.gov/')

}, 20 * 1000); 



