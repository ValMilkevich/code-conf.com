---
title: Events
css_class: events
permalink: /events/
---

{% include events.html sort="date_" %}


{% include javascript/filtering.js 
url=site.filter_event.event_page_url
default_tag=site.filter_event.filter_any_item_tag
css_selector=site.filter_event.event_page_css_selector
all_header=site.filter_event.event_page_all_events_header
%}

<a href="/events-past/" class="btn btn-primary">Past events</a>
