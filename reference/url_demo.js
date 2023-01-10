const url =  require('url');

const myUrl = new URL('http://mywebsite.com/hello.html?id=100&status=active');

// Seralized Url
// console.log(myUrl.href);
// console.log(myUrl.toString());

// Host (root domain)
// console.log(myUrl.host);

// Hostname (does not get port)
// console.log(myUrl.hostname);

// Pathname
// console.log(myUrl.pathname);

// Serialised query
// console.log(myUrl.search);

// Param object
// console.log(myUrl.searchParams);

// Append Param
// myUrl.searchParams.append('abc','123');
// console.log(myUrl.search);
// myUrl.searchParams.forEach((val,name) => console.log(`${val} : ${name}`))
