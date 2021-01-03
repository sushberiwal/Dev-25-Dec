const puppeteer = require("puppeteer");
// puppeteer functions => pending promise
const id = "yejak47744@nonicamy.com";
const pw = "123456789";

let tab;

// browser open
let browserOpenPromise = puppeteer.launch({
  headless: false,
  defaultViewport: null,
  args:["--start-maximized"]
//   slowMo:50
});

browserOpenPromise
  .then(function (browser) {
    console.log("Browser opened !!!");
    let pagesPromise = browser.pages();
    return pagesPromise;
  })
  .then(function (pages) {
    let page = pages[0];
    tab = page;
    let gotoPromise = page.goto("https://www.hackerrank.com/auth/login");
    return gotoPromise;
  })
  .then(function () {
      let idTypedPromise = tab.type("#input-1" , id);
      return idTypedPromise;
  })
  .then(function(){
    let pwTypedPromise = tab.type("#input-2" , pw);
    return pwTypedPromise;
  })
  .then(function(){
      let loginPromise = tab.click('.ui-btn.ui-btn-large.ui-btn-primary.auth-button.ui-btn-styled');
      return loginPromise;
  })
  .then(function(){
      let waitPromise = tab.waitForSelector('#base-card-1-link' , {visible:true}); // 30sec wait
      return waitPromise;
  })
  .then(function(){
    //   console.log("Logged in !!");
    let ipKitClickedPromise = tab.click('#base-card-1-link');
    return ipKitClickedPromise;
  })
  .then(function(){
    let waitPromise = tab.waitForSelector('a[data-attr1="warmup"]' , {visible:true}); // 30sec wait
    return waitPromise;
  })
  .then(function(){
    //   console.log("Logged in !!");
    let warmpClickedPromise = tab.click('a[data-attr1="warmup"]');
    return warmpClickedPromise;
  })
  .then(function(){
      console.log("warmup page opened !!");
  })
  .catch(function(error){
      console.log(error);
  })

