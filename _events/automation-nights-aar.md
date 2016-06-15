---
published: false
type: meetups
title: Automation Night
weight: 100
brand-txt: >
    Automation Night
subtitle: >

caption: >
  Join us for another evening of insightful talks from the industry and some networking with likeminded people.
color: '#669933'
date_:    2016-06-21
time: 16:30—19:00
city: Aarhus
event_header:
  img: /images/pages/meetups/event_main.jpg
  ribbon: Meet-up
agenda-brand-lead: >
    Agenda
agenda-maker: on
agenda-label: on
agenda-picture: /images/pages/meetups/agenda.jpg
agenda:
 - time: "16.30"
   title: Continuous Delivery in the Enterprise by Systematic
   comment: "Switching to CD requires a different mind-set, not just for developers. Notice: This talk will be in Danish."
 - time: "17.15"
   title: Automation at GoMore  by Jacob Poulsgaard-Tjørnholm
   comment: How GoMore puts code into production to hundreds of thousands of users.
 - time: "18.00"
   title: Sandwiches and networking
   comment: There will be sandwiches for everyone signing up before Tuesday the 7th of June.
button_link: http://www.meetup.com/CoDe-U-AROS/events/230864013/
benefit-text: Having attended this seminar, you’ll have more insight on how your company can
---

{% include event-main.html
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
Join us for another evening of insightful talks from the industry and some networking with likeminded people.

Systematic A/S has been so kind to host this Automation Night, which takes place on Søren Frichs Vej 39, 8000 Aarhus C.

The program will again contain two talks about automation and continuous delivery."
button_link=page.button_link
button_text="Join us now!"
image="/images/pages/meetups/summary.jpg"
image_alt=page.title

color=page.color
date=page.date_
date_end=page.date_end
time=page.time
city=page.city
%}


<br>

{% include event-main.html
agenda-label=page.agenda-label
background-image=page.agenda-picture
brand-lead= page.agenda-brand-lead
brand-text-as-marker=page.agenda-maker %}

{% include agenda.html
agenda=page.agenda
agenda-title=page.title %}


<br>



What are you waiting for? [Join us now!](http://www.meetup.com/CoDe-U-AROS/events/230864013/){:.btn .btn-primary style="background: {{ page.color }}; border-color: {{ page.color }};" target="_blank"}
