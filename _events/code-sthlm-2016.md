---
#permalink: /code-sthlm-2016.html
brand-txt: >
  *CO*DE-STHLM
title: CODE-STHLM
color: '#660066'
subtitle: >
  *Co*ntinuous *De*livery and *DevOps* Conference

# events header

event_header:
  img: /images/code-sthlm-2016.jpg
  ribbon: Join us again for...

# date & location

date_: 2016-11-29
time: 09—18:00
city: Stockholm
adress: Guldgränd 8, 104 65 Stockholm, Hilton Slussen

checkout:
  eventbriteid: 24850613855

  speakers:
    danielstahl:
      title: Enterprise Scale Continuous Integration and Delivery - A Bunch of Problems and a Few Solutions
      abstract: >
        TBA
    fatihdegirmenci:
      title: Release engineering OPNFV
      abstract: >
        TBA

sponsors:
- dotw.md





---

{% include event-main.html
background-image=page.event_header.img
dot-text=page.price
brand-lead=page.event_header.ribbon
brand-txt=page.brand-txt
subtitle=page.subtitle
color=page.color %}

{% include date-location.html
color=page.color
date=page.date_
time=page.time
city=page.city %}

{% include speakers.html
keynotes=page.keynote-speakers
speakers=page.speakers
color=page.color
css_classes="colored toprip botrip"
caption="The speakers" %}

{% include eventbrite-ticket-form.html
eventbriteid=page.checkout.eventbriteid
css_classes="black toprip botrip" %}

{% include sponsors.html
sponsors=page.sponsors
caption="Sponsors"
subcaption="A heartfelt thank goes to our friends"
css_classes="" %}
