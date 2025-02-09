var e=this&&this.__awaiter||function(e,l,a,t){return new(a||(a=Promise))((function(i,n){function u(e){try{r(t.next(e))}catch(e){n(e)}}function o(e){try{r(t.throw(e))}catch(e){n(e)}}function r(e){var l;e.done?i(e.value):(l=e.value,l instanceof a?l:new a((function(e){e(l)}))).then(u,o)}r((t=t.apply(e,l||[])).next())}))},l=this&&this.__generator||function(e,l){var a,t,i,n={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]},u=Object.create(("function"==typeof Iterator?Iterator:Object).prototype);return u.next=o(0),u.throw=o(1),u.return=o(2),"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u;function o(o){return function(r){return function(o){if(a)throw new TypeError("Generator is already executing.");for(;u&&(u=0,o[0]&&(n=0)),n;)try{if(a=1,t&&(i=2&o[0]?t.return:o[0]?t.throw||((i=t.return)&&i.call(t),0):t.next)&&!(i=i.call(t,o[1])).done)return i;switch(t=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return n.label++,{value:o[1],done:!1};case 5:n.label++,t=o[1],o=[0];continue;case 7:o=n.ops.pop(),n.trys.pop();continue;default:if(!(i=n.trys,(i=i.length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){n=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){n.label=o[1];break}if(6===o[0]&&n.label<i[1]){n.label=i[1],i=o;break}if(i&&n.label<i[2]){n.label=i[2],n.ops.push(o);break}i[2]&&n.ops.pop(),n.trys.pop();continue}o=l.call(e,n)}catch(e){o=[6,e],t=0}finally{a=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,r])}}},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});var t=require("@libs/filterInputs"),i=require("@libs/fetch"),n=require("@libs/novelStatus"),u=require("cheerio"),o=a(require("dayjs")),r=function(){function a(){this.id="jaomix.ru",this.name="Jaomix",this.site="https://jaomix.ru",this.version="1.0.0",this.icon="src/ru/jaomix/icon.png",this.parseDate=function(e){void 0===e&&(e="");var l={"Янв":1,"Фев":2,"Мар":3,"Апр":4,"Май":5,"Июн":6,"Июл":7,"Авг":8,"Сен":9,"Окт":10,"Ноя":11,"Дек":12},a=e.split(" "),t=a[0],i=a[1],n=a[2],u=a[3];return t&&i&&l[n]&&u?(0,o.default)(u+"-"+l[n]+"-"+i+" "+t).format("LLL"):e||null},this.filters={sortby:{label:"Сортировка:",value:"topweek",options:[{label:"Топ недели",value:"topweek"},{label:"По алфавиту",value:"alphabet"},{label:"По дате обновления",value:"upd"},{label:"По дате создания",value:"new"},{label:"По просмотрам",value:"count"},{label:"Топ года",value:"topyear"},{label:"Топ дня",value:"topday"},{label:"Топ за все время",value:"alltime"},{label:"Топ месяца",value:"topmonth"}],type:t.FilterTypes.Picker},sortdaycreate:{label:"Дата добавления:",value:"1",options:[{label:"Любое",value:"1"},{label:"От 120 до 180 дней",value:"1218"},{label:"От 180 до 365 дней",value:"1836"},{label:"От 30 до 60 дней",value:"3060"},{label:"От 365 дней",value:"365"},{label:"От 60 до 90 дней",value:"6090"},{label:"От 90 до 120 дней",value:"9012"},{label:"Послед. 30 дней",value:"30"}],type:t.FilterTypes.Picker},sortcountchapt:{label:"Количество глав:",value:"1",options:[{label:"Любое кол-во глав",value:"1"},{label:"До 500",value:"500"},{label:"От 1000 до 2000",value:"1020"},{label:"От 2000 до 3000",value:"2030"},{label:"От 3000 до 4000",value:"3040"},{label:"От 4000",value:"400"},{label:"От 500 до 1000",value:"510"}],type:t.FilterTypes.Picker},genre:{label:"Жанры:",value:{include:[],exclude:[]},options:[{label:"Боевые Искусства",value:"Боевые Искусства"},{label:"Виртуальный Мир",value:"Виртуальный Мир"},{label:"Гарем",value:"Гарем"},{label:"Детектив",value:"Детектив"},{label:"Драма",value:"Драма"},{label:"Игра",value:"Игра"},{label:"Истории из жизни",value:"Истории из жизни"},{label:"Исторический",value:"Исторический"},{label:"История",value:"История"},{label:"Исэкай",value:"Исэкай"},{label:"Комедия",value:"Комедия"},{label:"Меха",value:"Меха"},{label:"Мистика",value:"Мистика"},{label:"Научная Фантастика",value:"Научная Фантастика"},{label:"Повседневность",value:"Повседневность"},{label:"Постапокалипсис",value:"Постапокалипсис"},{label:"Приключения",value:"Приключения"},{label:"Психология",value:"Психология"},{label:"Романтика",value:"Романтика"},{label:"Сверхъестественное",value:"Сверхъестественное"},{label:"Сёнэн",value:"Сёнэн"},{label:"Сёнэн-ай",value:"Сёнэн-ай"},{label:"Спорт",value:"Спорт"},{label:"Сэйнэн",value:"Сэйнэн"},{label:"Сюаньхуа",value:"Сюаньхуа"},{label:"Трагедия",value:"Трагедия"},{label:"Триллер",value:"Триллер"},{label:"Фантастика",value:"Фантастика"},{label:"Фэнтези",value:"Фэнтези"},{label:"Хоррор",value:"Хоррор"},{label:"Школьная жизнь",value:"Школьная жизнь"},{label:"Шоунен",value:"Шоунен"},{label:"Экшн",value:"Экшн"},{label:"Этти",value:"Этти"},{label:"Юри",value:"Юри"},{label:"Adult",value:"Adult"},{label:"Ecchi",value:"Ecchi"},{label:"Josei",value:"Josei"},{label:"Lolicon",value:"Lolicon"},{label:"Mature",value:"Mature"},{label:"Shoujo",value:"Shoujo"},{label:"Wuxia",value:"Wuxia"},{label:"Xianxia",value:"Xianxia"},{label:"Xuanhuan",value:"Xuanhuan"},{label:"Yaoi",value:"Yaoi"}],type:t.FilterTypes.ExcludableCheckboxGroup},lang:{label:"Выбрать языки:",value:[],options:[{label:"Английский",value:"Английский"},{label:"Китайский",value:"Китайский"},{label:"Корейский",value:"Корейский"},{label:"Японский",value:"Японский"}],type:t.FilterTypes.CheckboxGroup}}}return a.prototype.popularNovels=function(a,t){return e(this,arguments,void 0,(function(e,a){var t,n,o,r,v,c,s,b,d,h,p,f,m,y,g,x=this,w=a.showLatestNovels,k=a.filters;return l(this,(function(l){switch(l.label){case 0:return t=this.site+"/?searchrn",(null===(c=null===(v=null==k?void 0:k.lang)||void 0===v?void 0:v.value)||void 0===c?void 0:c.length)&&(t+=k.lang.value.map((function(e,l){return"&lang[".concat(l,"]=").concat(e)})).join("")),(null===(d=null===(b=null===(s=null==k?void 0:k.genre)||void 0===s?void 0:s.value)||void 0===b?void 0:b.include)||void 0===d?void 0:d.length)&&(t+=k.genre.value.include.map((function(e,l){return"&genre[".concat(l,"]=").concat(e)})).join("")),(null===(f=null===(p=null===(h=null==k?void 0:k.genre)||void 0===h?void 0:h.value)||void 0===p?void 0:p.exclude)||void 0===f?void 0:f.length)&&(t+=k.genre.value.exclude.map((function(e,l){return"&delgenre[".concat(l,"]=del ").concat(e)})).join("")),t+="&sortcountchapt="+((null===(m=null==k?void 0:k.sortcountchapt)||void 0===m?void 0:m.value)||"1"),t+="&sortdaycreate="+((null===(y=null==k?void 0:k.sortdaycreate)||void 0===y?void 0:y.value)||"1"),t+="&sortby="+(w?"upd":(null===(g=null==k?void 0:k.sortby)||void 0===g?void 0:g.value)||"topweek"),t+="&gpage="+e,[4,(0,i.fetchApi)(t).then((function(e){return e.text()}))];case 1:return n=l.sent(),o=(0,u.load)(n),r=[],o('div[class="block-home"] > div[class="one"]').each((function(e,l){var a,t=o(l).find('div[class="img-home"] > a').attr("title"),i=null===(a=o(l).find('div[class="img-home"] > a > img').attr("src"))||void 0===a?void 0:a.replace("-150x150",""),n=o(l).find('div[class="img-home"] > a').attr("href");t&&n&&r.push({name:t,cover:i,path:n.replace(x.site,"")})})),[2,r]}}))}))},a.prototype.parseNovel=function(a){return e(this,void 0,void 0,(function(){var e,t,o,r,v,c=this;return l(this,(function(l){switch(l.label){case 0:return[4,(0,i.fetchApi)(this.site+a).then((function(e){return e.text()}))];case 1:return e=l.sent(),t=(0,u.load)(e),o={path:a,name:t('div[class="desc-book"] > h1').text().trim(),cover:t('div[class="img-book"] > img').attr("src"),summary:t('div[id="desc-tab"]').text().trim()},t("#info-book > p").each((function(){var e=t(this).text().replace(/,/g,"").split(" ");"Автор:"===e[0]?o.author=e.splice(1).join(" "):"Жанры:"===e[0]?o.genres=e.splice(1).join(","):"Статус:"===e[0]&&(o.status=e.includes("продолжается")?n.NovelStatus.Ongoing:n.NovelStatus.Completed)})),r=[],v=t(".download-chapter div.title").length,t(".download-chapter div.title").each((function(e,l){var a=t(l).find("a").attr("title"),i=t(l).find("a").attr("href");if(a&&i){var n=t(l).find("time").text();r.push({name:a,path:i.replace(c.site,""),releaseTime:c.parseDate(n),chapterNumber:v-e})}})),o.chapters=r.reverse(),[2,o]}}))}))},a.prototype.parseChapter=function(a){return e(this,void 0,void 0,(function(){var e,t;return l(this,(function(l){switch(l.label){case 0:return[4,(0,i.fetchApi)(this.site+a).then((function(e){return e.text()}))];case 1:return e=l.sent(),(t=(0,u.load)(e))('div[class="adblock-service"]').remove(),[2,t('div[class="entry-content"]').html()||""]}}))}))},a.prototype.searchNovels=function(a){return e(this,arguments,void 0,(function(e,a){var t,n,o,r,v=this;return void 0===a&&(a=1),l(this,(function(l){switch(l.label){case 0:return t=this.site+"/?searchrn="+e+"&but=Поиск по названию&sortby=upd&gpage="+a,[4,(0,i.fetchApi)(t).then((function(e){return e.text()}))];case 1:return n=l.sent(),o=(0,u.load)(n),r=[],o('div[class="block-home"] > div[class="one"]').each((function(e,l){var a,t=o(l).find('div[class="img-home"] > a').attr("title"),i=null===(a=o(l).find('div[class="img-home"] > a > img').attr("src"))||void 0===a?void 0:a.replace("-150x150",""),n=o(l).find('div[class="img-home"] > a').attr("href");t&&n&&r.push({name:t,cover:i,path:n.replace(v.site,"")})})),[2,r]}}))}))},a}();exports.default=new r;