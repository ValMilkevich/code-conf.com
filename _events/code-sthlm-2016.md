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
    title:
    abstract: >
      TBA

  fatihdegirmenci:
    title: OPNFV CI and Challenges - How we solved them - if we solved them at all!
    abstract: >
      OPNFV is a carrier-grade, integrated, open source platform to accelerate the introduction of new NFV products and services. It aims to build the platform by integrating components from different upstream projects such as OpenStack, OpenDaylight, OpenVswitch, KVM and so on. Apart from integrating different components, OPNFV aims to identify gaps in these components and fixes them directly in upstream. OPNFV sees CI/CD to be a solution to its challenges by providing a foundation for developing, integrating and testing OPNFV faster and more efficient through the release cycles. It is crucial for OPNFV and the ecosystem we are building the underlying upstream projects to find the best way to realize the principles and best practices of CI/CD methodologies to reduce the impacts caused by the integration work and be able to provide fast feedback to its own developers and other communities and a stable platform to our users release by release. During this session we will talk about the evolution of OPNFV CI/CD from the project's early days up till now and share our experiences.

sponsors:
- dotw
- trifork






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
