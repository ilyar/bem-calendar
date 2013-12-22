({
    block: 'page',
    title: 'BEM-Calendar',
    favicon: '/favicon.ico',
    head: [
        { elem: 'css', url: '_index.css', ie: false },
        { elem: 'css', url: '_index.ie.css', ie: 'gte IE 6' },
        { elem: 'meta', attrs: { name: 'description', content: '' }}
    ],
    content:[
        { block: 'b-day-planner' },
        { elem: 'js', url: '_index.bemhtml.js' },
        { elem: 'js', url: '_index.js' }
    ]
})
