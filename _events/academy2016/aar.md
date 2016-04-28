---
title: CoDe Academy - Aarhus
nav_weight: 10
brand-txt: >
  Aca*de*{: style="color: black; font-style: normal;"}my Aarhus
subtitle: >
  Continuous Delivery bootcamp Aarhus
color: '#006f00'
date_:    2016-08-22
date_end: 2016-08-26
time: 9—16:00
city: Aarhus
event_header:
  img: /images/pages/academy2016/aarhus.jpg
  ribbon: Aarhus
checkout:
  eventbriteid: 24617023179
css_class: academy
---

{% include event-main.html
background-image=page.event_header.img
brand-txt=page.brand-txt
subtitle=page.subtitle
dot-text=page.dot-txt
dot-txt-size=page.dot-txt-size
brand-lead=page.event_header.ribbon
color=page.color %}

{% include date-location.html
color=page.color
date=page.date_
date_end=page.date_end
time=page.time
city=page.city %}

{% include pullout.html 
img="/images/icons/icon-list.png"
caption="Program"
color=page.color
no_botrip=true
content="
**MONDAY:**    Agile task management and Test Driven Development
{:.whitestrip}
**TUESDAY:**   Jenkins
{:.whitestrip}
**WEDNESDAY:** Git
{:.whitestrip}
**THURSDAY:**  Docker
{:.whitestrip}
**FRIDAY:**    Synthesis - bring it all together in running code
{:.whitestrip}
"
%}

{% include pullout.html 
img="/images/icons/icon-place-big.png"
caption="Extras"
no_toprip=true
color=page.color
content="
**MONDAY EVENING:** Teach-the-teacher workshop (Academy staff only)
{:.whitestrip}
**FRIDAY EVENING:** Barbecue: Participants meets sponsors - get a job!
{:.whitestrip}
**EACH DAY AT LUNCH TIME:** one of the sponsors will give a 20 minute pitch to the students; why they are interested in hiring.
{:.whitestrip}
"
%}

{% include eventbrite-ticket-form.html
eventbriteid=page.checkout.eventbriteid
css_classes="black toprip botrip"
header="Enroll"%}
