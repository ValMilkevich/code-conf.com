---
type: meetups
title: Docker Meetup
weight: 100
brand-txt: >
    Docker Meetup
# subtitle: >
caption: >
  Last time it was the Docker Birthday party and it was a blast - We were really happy to see so many of you, both beginners and experts alike!
color: '#38A0D5'
date_:  2016-08-31
time: 4:30PM
city: "Århus"
event_header:
  img: /images/pages/meetups/event_main docker.jpg
summary_picture: /images/pages/meetups/event_dropin docker.jpg
agenda-picture: /images/pages/meetups/event_mid docker.jpg
agenda-brand-lead: >
    Tentative Agenda
agenda-maker: on
agenda-label: on
agenda:
 - time: "16.30"
   title: Doors open
 - time: "17.00"
   title: Using Docker at Rohde & Schwarz
 - time: "17.45"
   title: break
 - time: "18.00"
   title: "Talk two: Something other about Docker"
   comment: This might be you!
 - time: "19.00"
   title: Networking, and goodbyes
button_link: http://www.meetup.com/Docker-Aarhus/events/231441979/
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
It's time for another Docker Meetup.

Last time it was the Docker Birthday party and it was a blast - We were really happy to see so many of you, both beginners and experts alike!

This time the format will be a bit different, we will aim to have two talks - If you have something burning that you want to share, please contact us, otherwise we'll do our best to provide talks and interesting speakers :D

INCUBA, Åbogade 15, Århus N
We'll be in the downstairs cantina!
"
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

{% include event-main.html
agenda-label=page.agenda-label
background-image=page.agenda-picture
brand-lead= page.agenda-brand-lead
brand-text-as-marker=page.agenda-maker %}

{% include agenda.html
agenda=page.agenda
agenda-title=page.agenda-brand-lead %}

If there is something you'd like to have covered, then let us know and we'll do our best to satiate your hunger for cool Docker things!

<br>

What are you waiting for? [Join us now!]({{ page.button_link }}){:.btn .btn-primary style="background: {{ page.color }}; border-color: {{ page.color }};" target="_blank"}
