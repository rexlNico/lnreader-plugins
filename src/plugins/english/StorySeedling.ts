import { Plugin } from '@typings/plugin';
import { fetchApi } from '@libs/fetch';
import { load as parseHTML } from 'cheerio';
import { defaultCover } from '@libs/defaultCover';
import { c } from 'node_modules/vite/dist/node/types.d-aGj9QkWt';

class StorySeedlingPlugin implements Plugin.PluginBase {
  id = 'storyseedling';
  name = 'StorySeedling';
  icon = 'src/en/storyseedling/icon.png';
  site = 'https://storyseedling.com/';
  version = '1.0.7';

  async popularNovels(pageNo: number): Promise<Plugin.NovelItem[]> {
    const novels: Plugin.NovelItem[] = [];
    const body = await fetchApi(this.site + 'browse').then(r => r.text());
    const loadedCheerio = parseHTML(body);

    const postValue = loadedCheerio('div[ax-load][x-data]')
      .attr('x-data')
      ?.replace("browse('", '')
      .replace("')", '') as string;

    const data = new FormData();
    data.append('search', '');
    data.append('orderBy', 'recent');
    data.append('curpage', pageNo.toString());
    data.append('post', postValue);
    data.append('action', 'fetch_browse');

    const response: any = await fetchApi(this.site + 'ajax', {
      body: data,
      method: 'POST',
    }).then(res => res.json());

    response.data.posts.forEach((element: any) =>
      novels.push({
        name: element.title,
        cover: element.thumbnail,
        path: element.permalink.replace(this.site, ''),
      }),
    );

    return novels;
  }

  async parseNovel(novelPath: string): Promise<Plugin.SourceNovel> {
    const site = this.site;
    const novel: Plugin.SourceNovel = {
      path: novelPath,
      name: '',
    };

    const body = await fetchApi(this.site + novelPath).then(r => r.text());
    const loadedCheerio = parseHTML(body);

    novel.name = loadedCheerio('h1').text().trim();

    //novel.artist = "";
    //novel.author = "";
    novel.cover = loadedCheerio(
      'img[x-ref="art"].w-full.rounded.shadow-md',
    ).attr('src');
    if (!novel.cover) {
      novel.cover = defaultCover;
    }

    const genres: string[] = [];
    loadedCheerio(
      'section[x-data="{ tab: location.hash.substr(1) || \'chapters\' }"].relative > div > div > div.flex.flex-wrap > a',
    ).each(function () {
      genres.push(loadedCheerio(this).text().trim());
    });
    novel.genres = genres.join(', ');
    // novel.status = NovelStatus.Completed;
    novel.summary = loadedCheerio('div.mb-4.order-2:not(.lg\\:grid-in-buttons)')
      .text()
      .trim()
      .replace(/(\r\n|\n|\r)/gm, '');

    const chapters: Plugin.ChapterItem[] = [];

    const postValue = loadedCheerio('div[ax-load][x-data]')
      .attr('x-data')
      ?.replace("toc('65335', '", '')
      .replace("')", '') as string;

    const data = new FormData();
    data.append('post', postValue);
    console.log(postValue);
    console.log(novelPath.replace('series', '').replace('/', ''));
    data.append('id', novelPath.replace('series', '').replace('/', ''));
    data.append('action', 'series_toc');
    const response: any = await fetchApi(this.site + 'ajax', {
      body: data,
      method: 'POST',
    }).then(res => res.json());

    response.data.forEach((element: any) => {
      if (element.is_locked) {
        return;
      }
      const releaseTime = element.date;
      const chapterNumber = element.title.split('-')[0].trim().split(' ')[1];
      chapters.push({
        name: element.title,
        path: element.url.replace(site, ''),
        releaseTime,
        chapterNumber: parseInt(chapterNumber),
      });
    });
    novel.chapters = chapters;
    novel.chapters.sort(
      (a, b) => (b.chapterNumber ?? 0) - (a.chapterNumber ?? 0),
    );

    return novel;
  }

  async parseChapter(chapterPath: string): Promise<string> {
    const body = await fetchApi(this.site + chapterPath).then(r => r.text());

    const loadedCheerio = parseHTML(body);
    const t = loadedCheerio('body');
    const chapterText = t.html() || '';

    //console.log(await fetchApi("http://127.0.0.1:8000/page.html").then(r => r.text()));
    const split = chapterPath.split('/');
    const novel = split[1];
    const id = split[2];
    const body2 = await fetchApi(
      'http://93.219.34.136:3000/' + novel + '/' + id,
    ).then(r => r.text());
    //console.log(body2);
    //const cheerio = parseHTML(body2)("body");
    //console.log(cheerio.html());
    return body2 || '';
  }

  async searchNovels(
    searchTerm: string,
    pageNo: number,
  ): Promise<Plugin.NovelItem[]> {
    const novels: Plugin.NovelItem[] = [];

    const body = await fetchApi(this.site + 'browse').then(r => r.text());
    const loadedCheerio = parseHTML(body);

    const postValue = loadedCheerio('div[ax-load][x-data]')
      .attr('x-data')
      ?.replace("browse('", '')
      .replace("')", '') as string;

    const data = new FormData();
    data.append('search', searchTerm);
    data.append('orderBy', 'recent');
    data.append('curpage', pageNo.toString());
    data.append('post', postValue);
    data.append('action', 'fetch_browse');

    const response: any = await fetchApi(this.site + 'ajax', {
      body: data,
      method: 'POST',
    }).then(res => res.json());

    response.data.posts.forEach((element: any) =>
      novels.push({
        name: element.title,
        cover: element.thumbnail,
        path: element.permalink.replace(this.site, ''),
      }),
    );

    return novels;
  }
}

export default new StorySeedlingPlugin();
