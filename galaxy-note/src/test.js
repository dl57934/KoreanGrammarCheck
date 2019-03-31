const puppeteer = require("puppeteer");

const getScreen = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(
    "https://search.naver.com/search.naver?sm=top_sug.pre&fbm=1&acr=1&acq=%EB%A7%9E%EC%B6%A4%EB%B2%95&qdt=0&ie=utf8&query=%EB%A7%9E%EC%B6%A4%EB%B2%95%EA%B2%80%EC%82%AC%EA%B8%B0"
  );
  await page.screenshot({ path: "devpools.png" });
  browser.close();
};

getScreen();

//export default getScreen;
