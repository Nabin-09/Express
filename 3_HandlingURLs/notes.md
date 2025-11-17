# URL - Uniform resource locator
dayum
## For example - https://www.nabinsharma.dev/

the https here is a protocol , read about protocols in URL - [Recommended Article](https://developer.mozilla.org/en-US/docs/Web/API/URL)<br>
www.nabinsharma.dev is a user friendly name of IP address of the server<br>
/ - this is the path and / is root path , /about , /contact can be some more paths<br>
and /contacts/linkedIn is a nested path

## Query parameters

eg - nabinsharma.dev/about?userID=1&a=2<br>
these are extra info that can be passed with our URL , everything after the '?' is a query<br>
parameter , we can clearly check the route and what info is coming from user.

eg - https://www.google.com/search?q=javascript+interview+questions&rlz=1C1CHBF_enIN1143IN1143&oq=javascript+intervie&gs_lcrp=EgZjaHJvbWUqEAgAEAAYkQIYsQMYgAQYigUyEAgAEAAYkQIYsQMYgAQYigUyDQgBEAAYkQIYgAQYigUyBggCEEUYOTINCAMQABiRAhiABBiKBTIHCAQQABiABDINCAUQABiRAhiABBiKBTINCAYQABiRAhiABBiKBTIHCAcQABiABDIHCAgQABiABDIHCAkQABiABNIBCDU4MjJqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8

This is a production grade google URL you can see there are so many query paramters passed

In our current server when I sent request to /about using query params , this is what I got in log file:
```1749795079856: /about?myName=Nabin New request received ```
and server said "404 not found"

## url (A node package)
const myUrl = url.parse(req.url);
    console.log(myUrl);<br>
   //URL- used - http://localhost:8000/about?myName=Nabin
```js 
    Url {
    protocol: null,
    slashes: null,
    auth: null,
    host: null,
    port: null,
    hostname: null,
    hash: null,
    search: '?myName=Nabin',
    query: 'myName=Nabin',
    pathname: '/about',
    path: '/about?myName=Nabin',
    href: '/about?myName=Nabin'
    }
```
```js const myUrl = url.parse(req.url, true);//true enables us to get query params```
   <!-- search: '?myname=Nabin&userID=1',
  query: [Object: null prototype] { myname: 'Nabin', userID: '1' },
  pathname: '/about',
  path: '/about?myname=Nabin&userID=1',
  href: '/about?myname=Nabin&userID=1' -->

