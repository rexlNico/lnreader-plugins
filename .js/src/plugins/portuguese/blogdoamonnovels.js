var t=this&&this.__assign||function(){return t=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t},t.apply(this,arguments)},e=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))((function(i,a){function o(t){try{c(r.next(t))}catch(t){a(t)}}function s(t){try{c(r.throw(t))}catch(t){a(t)}}function c(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(o,s)}c((r=r.apply(t,e||[])).next())}))},n=this&&this.__generator||function(t,e){var n,r,i,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]},o=Object.create(("function"==typeof Iterator?Iterator:Object).prototype);return o.next=s(0),o.throw=s(1),o.return=s(2),"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(s){return function(c){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;o&&(o=0,s[0]&&(a=0)),a;)try{if(n=1,r&&(i=2&s[0]?r.return:s[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,s[1])).done)return i;switch(r=0,i&&(s=[2&s[0],i.value]),s[0]){case 0:case 1:i=s;break;case 4:return a.label++,{value:s[1],done:!1};case 5:a.label++,r=s[1],s=[0];continue;case 7:s=a.ops.pop(),a.trys.pop();continue;default:if(!(i=a.trys,(i=i.length>0&&i[i.length-1])||6!==s[0]&&2!==s[0])){a=0;continue}if(3===s[0]&&(!i||s[1]>i[0]&&s[1]<i[3])){a.label=s[1];break}if(6===s[0]&&a.label<i[1]){a.label=i[1],i=s;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(s);break}i[2]&&a.ops.pop(),a.trys.pop();continue}s=e.call(t,a)}catch(t){s=[6,t],r=0}finally{n=i=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,c])}}};Object.defineProperty(exports,"__esModule",{value:!0});var r=require("cheerio"),i=require("@libs/fetch"),a=require("@libs/defaultCover"),o=function(){function o(){this.id="blogdoamonnovels",this.name="Blog do Amon Novels",this.version="1.0.0",this.icon="src/pt-br/blogdoamonnovels/icon.png",this.site="https://www.blogdoamonnovels.com",this.filters={}}return o.prototype.parseNovels=function(t){var e=this,n=[],r=JSON.parse(t);return"entry"in r.feed?(r.feed.entry.forEach((function(t){var r=t.title.$t,i=t.link.find((function(t){return"alternate"==t.rel})).href;if(i){var o={name:r,cover:t.media$thumbnail.url.replace("/s72-c/","/w340/")||a.defaultCover,path:i.replace(e.site,"")};n.push(o)}})),n):n},o.prototype.popularNovels=function(t,o){return e(this,arguments,void 0,(function(t,e){var o,s,c,u=this,l=e.showLatestNovels;return n(this,(function(e){switch(e.label){case 0:return l?[2,this.searchNovels("",t)]:t>1?[2,[]]:[4,(0,i.fetchApi)(this.site).then((function(t){return t.text()}))];case 1:return o=e.sent(),s=(0,r.load)(o),c=[],s(".PopularPosts article").each((function(t,e){var n=s(e).find("h3 a").text().trim(),r=s(e).find("h3 a").attr("href"),i=s(e).find("img").attr("src");if(r){var o={name:n,cover:i||a.defaultCover,path:r.replace(u.site,"")};c.push(o)}})),[2,c]}}))}))},o.prototype.parseNovel=function(a){return e(this,void 0,void 0,(function(){var e,o,s,c,u,l,f,h,p,d,v,m,b,y=this;return n(this,(function(n){switch(n.label){case 0:return[4,(0,i.fetchApi)(this.site+a).then((function(t){return t.text()}))];case 1:if(e=n.sent(),o=(0,r.load)(e),(s={path:a,name:o('[itemprop="name"]').text()||"Untitled",cover:o('img[itemprop="image"]').attr("src"),summary:o("#synopsis").find("br").replaceWith("\n").end().text().trim(),chapters:[]}).author=o('#extra-info dl:contains("Autor") dd').text().trim(),s.artist=o('#extra-info dl:contains("Artista") dd').text().trim(),s.status=o("[data-status]").text().trim(),s.genres=o('dt:contains("Gênero:")').parent().find("a").map((function(t,e){return o(e).text().trim()})).toArray().join(","),!(c=o("#clwd").text().split("'")[1]))return u=[],o("#chapters chapter").each((function(t,e){var n=o(e).find("a").text().trim(),r=o(e).find("a").attr("href");r&&u.push({name:n,path:r.replace(y.site,"")})})),s.chapters=u.reverse().map((function(e,n){return t(t({},e),{name:e.name+" - Ch. ".concat(n+1),chapterNumber:n+1})})),s.summary||((l=o("#chapters")).find("h3").remove(),l.find("div.flex").remove(),l.find("div.separator").remove(),l.find("#custom-hero").remove(),l.find("[id=listItem]").remove(),s.summary=l.text().trim()),[2,s];f=150,h=1,p=0,d=[],n.label=2;case 2:return v="".concat(this.site,"/feeds/posts/default/-/").concat(c,"?alt=json&start-index=").concat(h,"&max-results=").concat(f),[4,(0,i.fetchApi)(v).then((function(t){return t.text()}))];case 3:if(m=n.sent(),!("entry"in(b=JSON.parse(m)).feed))return[3,5];b.feed.entry.forEach((function(t){var e=t.title.$t;if(e!==s.name){var n=t.link.find((function(t){return"alternate"==t.rel})).href,i=new Date(t.updated.$t);if(n){if(t.content&&t.content.$t)try{e=(0,r.load)(t.content.$t)(".conteudo_teste center h1").text().trim()}catch(t){}d.push({name:e,path:n.replace(y.site,""),releaseTime:i.toISOString()})}}})),p=b.feed.entry.length,h+=f,n.label=4;case 4:if(p>=f)return[3,2];n.label=5;case 5:return s.chapters=d.reverse().map((function(e,n){return t(t({},e),{name:e.name+" - Ch. ".concat(n+1),chapterNumber:n+1})})),[2,s]}}))}))},o.prototype.searchNovels=function(t,r){return e(this,void 0,void 0,(function(){var e,a,o;return n(this,(function(n){switch(n.label){case 0:return e=new URLSearchParams,e.append("alt","json"),r>1&&e.append("start-index","".concat(10*(r-1)+1)),e.append("max-results","".concat(10)),e.append("q","label:Series ".concat(t).trim()),a="".concat(this.site,"/feeds/posts/summary?")+e.toString(),[4,(0,i.fetchApi)(a).then((function(t){return t.text()}))];case 1:return o=n.sent(),[2,this.parseNovels(o)]}}))}))},o.prototype.parseChapter=function(t){return e(this,void 0,void 0,(function(){var e,a,o,s=this;return n(this,(function(n){switch(n.label){case 0:return[4,(0,i.fetchApi)(this.site+t).then((function(t){return t.text()}))];case 1:return e=n.sent(),a=(0,r.load)(e),(o=a(".conteudo_teste")).find("p").each((function(t,e){var n,r,i=a(e),o=i.find("img"),c=null===(r=null===(n=i.text())||void 0===n?void 0:n.replace(/\s|&nbsp;/g,""))||void 0===r?void 0:r.replace(s.site,"");0===(null==o?void 0:o.length)&&0===(null==c?void 0:c.length)&&i.remove()})),[2,o.html()||""]}}))}))},o}();exports.default=new o;