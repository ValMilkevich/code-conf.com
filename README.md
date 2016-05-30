# code-conf.com
www.code-conf.com

Conventions
---
Events are built up from partials. Let's say we have a dir `_events/1/2/3`. We start with a file named `_events/1/2/3/index.*` and then output all the files living in `_events/**/3/*`: only the last folder `3` has impact for filtering.

### Event sorting
 
`weight` is used to order events. Heavy sinks to bottom.
 
#### `Up next` sorting algorithm

1. Sort events by weight.
1. Filter outdated events out.
1. Take N first.
1. Sort N events by date.
1. Output, grouping by month.

Event dates
---

* Every event mast have `date_` (`date` is reserved) and may have `date_end`.
* Only exception — parent events like `academy2016.md`. They must have at least one of these fields. Not setting `date_` is useful when you want to hide event dates.

### Finding outdated

If event has `date_end`, it's outdated on the next day. Otherwise it's expired on the next day after `date_`
