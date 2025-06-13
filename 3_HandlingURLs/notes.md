# URL - Uniform resource locator

## For example - https://www.nabinsharma.dev/

the https here is a protocol , read about protocols in URL - [Recommended Article](https://developer.mozilla.org/en-US/docs/Web/API/URL)
www.nabinsharma.dev is a user friendly name of IP address of the server
/ - this is the path and / is root path , /about , /contact can be some more paths
and /contacts/linkedIn is a nested path

## Route parameters

eg - nabinsharma.dev/about?userID=1&a=2
these are extra info that can be passed with our URL , everything after the '?' is a query
parameter , we can clearly check the route and what info is coming from user.

eg - https://www.google.com/search?q=javascript+interview+questions&rlz=1C1CHBF_enIN1143IN1143&oq=javascript+intervie&gs_lcrp=EgZjaHJvbWUqEAgAEAAYkQIYsQMYgAQYigUyEAgAEAAYkQIYsQMYgAQYigUyDQgBEAAYkQIYgAQYigUyBggCEEUYOTINCAMQABiRAhiABBiKBTIHCAQQABiABDINCAUQABiRAhiABBiKBTINCAYQABiRAhiABBiKBTIHCAcQABiABDIHCAgQABiABDIHCAkQABiABNIBCDU4MjJqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8

This is a production grade google URL you can see there are so many route paramters passed

In our current server when I sent request to /about using route params , this is what I got in log file:
```1749795079856: /about?myName=Nabin New request received ```
and server said "404 not found"

## url (A node package)



