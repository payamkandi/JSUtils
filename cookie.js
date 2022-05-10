document.cookie
    .split('; ')
    .map(x => { const i = x.indexOf('='); return { k: x.substring(0, i), v: x.substring(i + 1) } })
    .reduce((a, b) => { a[b.k] = b.v; return a; }, {});