# code-conf.com
www.code-conf.com

### Testing local changes

Use instruction below to test changes before you push

```
git clone https://github.com/Praqma/code-conf.com.git
cd code-conf
docker run --rm --name gh-pages -v $PWD:/home/jenkins -p 4444:4000 praqma/gh-pages jekyll serve --watch --host=0.0.0.0
```

Conventions
---
Events are built up from partials. Let's say we have a dir `_events/1/2/3`. We start with a file named `_events/1/2/3/index.*` and then output all the files living in `_events/**/3/*`: only the last folder `3` has impact for filtering.

Events
---

`<!--power-icon-->` in brand-txt adds... power icon!

### Event sorting

`weight` is used to order events. Heavy sinks to bottom. The weight property is only honored by `_include/conferences.html`. E.g. used to to design the front page.

#### The order here is:

1. Filter out events that are not live anymore
2. Sort by weight, then by date
3. Include events even if they are defined as containers: `container: true`


When listing upcoming events in `_include/upnext.html` the algorithm is slightly different

#### `Up next` sorting algorithm

1. List upcoming events chronologically
2. Output, grouping by month.
3. Leave out events that are defined as containers:
`container: true`


### Event dates

* Events must have `date_` (`date` is reserved my Jekyll for different purpose)
* Events can have an optional `date_end`.
* Come events are _containers_, they are encapsulating a span of events. An example is academy2016 - wchic contains trd, cph, aar and osl. These container events are mared with `container: true`

#### Defining live events

Events that are no longer live, are automatically filtered out from listings.

A live event is defined as an event which has a date in the future. Even if the start date is in the past, it is still defined as _live_ if it has an end date, that is in the future.

The `_includes/conferences.html` does not filter out containers whereas the `_include/upnext.html` does.

