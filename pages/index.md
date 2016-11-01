---
permalink: /
layout: default
css_class: index
title: Continuous Delivery events
brand-txt: >
    Co*ntinuous*{: style='color: black; font-style: normal;'}
    De*livery*{: style="color: black; font-style: normal;"}
---

{% include decorated-picture.html
no_toprip=true
background-image="/images/doc-cph-2016.png"
brand-lead="Welcome to the home of..."
brand-txt=page.brand-txt
subtitle="...We're building the community of CoDe'ers and DevOps"
color='#e87e04' %}

{% include event-and-upnext.html %}
{% include events.html limit=3 offset=1 class="small" %}

{% capture event_types %}
{% include columns.html
column_number=4
content="
![Conferences](../images/pages/index/get-involved-1.jpg)
{: .image}

## Conferences
We host conferences on Continuous Delivery all year round. Sign up and join us.
<!--col-->
![Meet-Ups](../images/pages/index/get-involved-2.jpg)
{: .image}

## Meet-Ups
CoDe communities are emerging all over Scandinavia. Find one near you.
<!--col-->
![Training](../images/pages/index/get-involved-3.jpg)
{: .image}

## Training
Get up to speed with our courses on CoDe, Atlassian, Git, Docker & Jenkins.
<!--col-->
![Hackathons](../images/pages/index/get-involved-4.jpg)
{: .image}

## Hackathons
Informal gatherings where we exchange ideas and do some coding. Just bring your brain and your laptop.
"
%}
{% endcapture %}
{% assign event_types = event_types | strip %}

{% include pullout.html
caption="Get involved!"
color="#ef6719"
content=event_types
%}


{% include contact-banners.html %}

