---
type: meet-ups
title: DevOpsDays
weight: 100
brand-txt: >
    Dev Ops Days Oslo
caption: >
  For the first time, DevOpsDays is coming to Oslo!
color: '#187F9E'
date_:    2016-09-06
date_end: 2016-09-07
city: Oslo
event_header:
  img: /images/pages/meetups/event_main dev.jpg
  ribbon: Meet-up
button_link: "http://www.devopsdays.org/events/2016-oslo/registration/"
summary_picture: "/images/pages/meetups/event_dropin dev.jpg"
---

{% include decorated-picture.html
no_toprip=true
background-image=page.event_header.img
brand-txt=page.brand-txt
brand-txt-size=4.0
subtitle=page.subtitle
dot-text=page.dot-txt
dot-txt-size=page.dot-txt-size
brand-lead=page.event_header.ribbon
color=page.color %}

{% include meetup/summary.html
content="
DevOpsDays is a self-organizing conference for DevOps practitioners. It brings together leaders in Software Development and IT Operations to collaborate and learn from each other. It is both a technical conference and a conference focusing on culture, processes and structure within organizations. We encourage both technologists and business people to attend, learn and share experiences.

At a high-level, each day will consist of a mix of presentations, ignite presentations, and open spaces. There will be an evening party for all participants scheduled for the evening of September 5th. A great opportunity for networking, mingling and having a good time."
button_link=page.button_link
button_text="Join us now!"
image=page.summary_picture
image_alt=page.title

color=page.color
date=page.date_
date_end=page.date_end
time=page.time
city=page.city%}

<br>

{% include meetup/join-us.html link=page.button_link color=page.color %}
