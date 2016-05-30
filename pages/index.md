---
permalink: /
layout: default
css_class: index
title: Continuous Delivery events
---

{% include event-main.html
background-image="/images/doc-cph-2016.png"
brand-lead="Welcome to the home of..."
brand-txt="*Co*ntinuous *de*livery"
subtitle="CONFERENCES * EVENTS * TRAINING *& MORE*"
color='#3c890f' %}

{% include event-and-upnext.html limit_upnext=4 %}
{% include conferences.html limit=3 offset=1 class="small" %}
