module.exports = {
  "locales": {
    "/": {
      "lang": "zh-CN"
    }
  },
  "title": "Alvis Lee's Blog",
  "description": "loading...",
  "dest": "public",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "reco",
  "themeConfig": {
    "nav": [
      {
        "text": "首页",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "关于作者",
        "link": "/about/about.html"
      }
    ],

    "type": "blog",

    "search": true,
    "searchMaxSuggestions": 10,

    "nextLinks": true,
    "prevLinks": true,

    "lastUpdated": "Last Updated",

    "author": "Alvis Lee",
    // "authorAvatar": "/avatar.png",

    "startYear": "2022",

    "mode": "dark",
    "modePicker": false,

    "noFoundPageByTencent": false
  },
  "markdown": {
    "lineNumbers": true
  }
}