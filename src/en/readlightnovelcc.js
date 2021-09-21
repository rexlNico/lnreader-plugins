import cheerio from "react-native-cheerio";

const baseUrl = "https://m.readlightnovel.cc/";

const popularNovels = async (page) => {
    let totalPages = 1;
    const result = await fetch(baseUrl);
    const body = await result.text();

    $ = cheerio.load(body);

    let novels = [];

    $(".section-item").each(function (result) {
        const novelName = $(this).find(".book-name").text();
        const novelCover = $(this).find("img").attr("src");

        let novelUrl = $(this).find("a").attr("href").slice(1);

        const novel = {
            sourceId: 19,
            novelName,
            novelCover,
            novelUrl,
        };

        novels.push(novel);
    });

    return { totalPages, novels };
};

const parseNovelAndChapters = async (novelUrl) => {
    const url = `${baseUrl}${novelUrl}/`;

    const result = await fetch(url);
    const body = await result.text();

    $ = cheerio.load(body);

    let novel = {};

    novel.sourceId = 19;

    novel.sourceName = "ReadLightNovel.cc";

    novel.url = url;

    novel.novelUrl = novelUrl;

    novel.novelName = $(".book-name").text();

    novel.novelCover = $("div.book-img > img").attr("src");

    novel.genre = $("div.book-catalog > span.txt").text();

    novel.status = $("div.book-state > span.txt").text();

    novel.author = $("div.author > span.name").text();

    novelSummary = $("div.content > p.desc").text();
    novel.summary = novelSummary.trim();

    let novelChapters = [];

    $(".chapter-item").each(function (result) {
        const chapterName = $(this).find(".chapter-name").text();
        const releaseDate = null;
        const chapterUrl = $(this).attr("href").slice(1);

        novelChapters.push({
            chapterName,
            releaseDate,
            chapterUrl,
        });
    });

    novel.chapters = novelChapters;

    return novel;
};

const parseChapter = async (novelUrl, chapterUrl) => {
    const url = `${baseUrl}${chapterUrl}`;

    const result = await fetch(url);
    const body = await result.text();

    $ = cheerio.load(body);

    const chapterName = $("h1.chapter-title").text();
    let chapterText = $("div.chapter-entity").html();
    const chapter = {
        sourceId: 19,
        novelUrl,
        chapterUrl,
        chapterName,
        chapterText,
    };

    return chapter;
};

const searchNovels = async (searchTerm) => {
    const url = `${baseUrl}search/${searchTerm}/1`;

    const result = await fetch(url);
    const body = await result.text();

    $ = cheerio.load(body);

    let novels = [];

    $(".list-item").each(function (result) {
        $(this).find("font").remove();

        const novelName = $(this).find(".book-name").text();
        const novelCover = $(this).find("img").attr("src");

        let novelUrl = $(this).find("a").attr("href").slice(1);

        const novel = {
            sourceId: 19,
            novelName,
            novelCover,
            novelUrl,
        };

        novels.push(novel);
    });

    return novels;
};

const readLightNovelCcScraper = {
    popularNovels,
    parseNovelAndChapters,
    parseChapter,
    searchNovels,
};

export default readLightNovelCcScraper;