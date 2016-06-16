---
permalink: /
layout: default
css_class: index
title: Continuous Delivery events
brand-txt: >
    Co*ntinuous*{: style='color: black; font-style: normal;'}
    De*livery*{: style="color: black; font-style: normal;"}
---

{% include event-main.html
no_toprip=true
background-image="/images/doc-cph-2016.png"
brand-lead="Welcome to the home of..."
brand-txt=page.brand-txt
subtitle="...We're building the community of CoDe'ers and DevOps"
color='#F58126' %}

{% include event-and-upnext.html %}
{% include conferences.html limit=3 offset=1 class="small" %}
