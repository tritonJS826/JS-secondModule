import {headerHTML,headerCSS1,headerCSS2} from '../pages/header.js';
import {sidebarHTML,sidebarCSS1,sidebarCSS2} from '../pages/sidebar.js';
import {footerHTML,footerCSS1,footerCSS2} from '../pages/footer.js';
import {homeHTML,homeCSS1,homeCSS2} from '../pages/home.js';

import {aboutUsHTML,aboutUsCSS1,aboutUsCSS2} from '../pages/mainBlock/aboutUs.js';
import {basketHTML,basketCSS1,basketCSS2} from '../pages/mainBlock/basket.js';
import {goodsHTML,goodsCSS1,goodsCSS2} from '../pages/mainBlock/goods.js';
import {infoAboutThisGoodHTML,infoAboutThisGoodCSS1,infoAboutThisGoodCSS2} from '../pages/mainBlock/infoAboutThisGood.js';
import {newsHTML,newsCSS1,newsCSS2} from '../pages/mainBlock/news.js';
import {privateOfficeHTML,privateOfficeCSS1,privateOfficeCSS2} from '../pages/mainBlock/privateOffice.js';
import {reviewsHTML,reviewsCSS1,reviewsCSS2} from '../pages/mainBlock/reviews.js';
import {settingsHTML,settingsCSS1,settingsCSS2} from '../pages/mainBlock/settings.js';
import {signInHTML,signInCSS1,signInCSS2} from '../pages/mainBlock/signIn.js';
import {signUpHTML,signUpCSS1,signUpCSS2} from '../pages/mainBlock/signUp.js';


//в поле mode написано какие стили и html шаблоны будут использоваться


export const settings = {
  currentUser: {
    authorisation:false,
    authorisationName : "petya",
    authorisationPassword : "",
  },
 style: {
    authorisation:false,
    authorisationName : "petya",
    authorisationPassword : "",
    languge: "ru",
    mode: "light",

    light :{
      headerHTML: headerHTML(),
      headerCSS: headerCSS1(),
      footerHTML: footerHTML(),
      footerCSS: footerCSS1(),
      sidebarHTML: sidebarHTML(),
      sidebarCSS: sidebarCSS1(),
      homeHTML: homeHTML(),
      homeCSS: homeCSS1(),
      aboutUsHTML: aboutUsHTML(),
      aboutUsCSS: aboutUsCSS1(),
      basketHTML: basketHTML(),
      basketCSS: basketCSS1(),
      goodsHTML: goodsHTML(),
      goodsCSS: goodsCSS1(),
      infoAboutThisGoodHTML: infoAboutThisGoodHTML(),
      infoAboutThisGoodCSS: infoAboutThisGoodCSS1(),
      newsHTML: newsHTML(),
      newsCSS: newsCSS1(),
      privateOfficeHTML: privateOfficeHTML(),
      privateOfficeCSS: privateOfficeCSS1(),
      reviewsHTML:reviewsHTML(),
      reviewsCSS: reviewsCSS1(),
      settingsHTML: settingsHTML(),
      settingsCSS : settingsCSS1(),
      signInHTML:signInHTML(),
      signInCSS: signInCSS1(),
      signUpHTML:signUpHTML(),
      signUpCSS: signUpCSS1(),


    },
    dark :{
      headerHTML: headerHTML(),
      headerCSS: headerCSS2(),
      footerHTML: footerHTML(),
      footerCSS: footerCSS2(),
      sidebarHTML: sidebarHTML(),
      sidebarCSS: sidebarCSS2(),
      homeHTML: homeHTML(),
      homeCSS: homeCSS2(),
      aboutUsHTML: aboutUsHTML(),
      aboutUsCSS: aboutUsCSS2(),
      basketHTML: basketHTML(),
      basketCSS: basketCSS2(),
      goodsHTML: goodsHTML(),
      goodsCSS: goodsCSS2(),
      infoAboutThisGoodHTML: infoAboutThisGoodHTML(),
      infoAboutThisGoodCSS: infoAboutThisGoodCSS2(),
      newsHTML: newsHTML(),
      newsCSS: newsCSS2(),
      privateOfficeHTML: privateOfficeHTML(),
      privateOfficeCSS: privateOfficeCSS2(),
      reviewsHTML:reviewsHTML(),
      reviewsCSS: reviewsCSS2(),
      settingsHTML: settingsHTML(),
      settingsCSS : settingsCSS2(),
      signInHTML:signInHTML(),
      signInCSS: signInCSS2(),
      signUpHTML:signUpHTML(),
      signUpCSS: signUpCSS2(),

    }
  }
 };
