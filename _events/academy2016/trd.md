---
title: CoDe Academy - Trondheim
nav_weight: 10
brand-txt: >
    Aca*de*{: style="color: black; font-style: normal;"}my TRD
subtitle: >
  Continuous Delivery bootcamp Trondheim
color: '#f58532'
date_:    2016-06-13
date_end: 2016-06-17
time: 9—16:00
city: Trondheim
event_header:
  img: /images/pages/academy2016/trondheim.jpg
  ribbon: Trondheim
checkout:
  eventbriteid: 24573031599
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
img="/images/icons/icon-date.png"
caption="Program"
color=page.color
content="
  | Monday: |    Agile task management and Test Driven Development  |
  | Tuesday: |   Jenkins                                            |
  | Wednesday: | Git                                                |
  | Thursday: |  Docker                                             |
  | Friday: |    Synthesis - bring it all together in running code  |

<br>

### Extras

  | Monday evening: | Teach-the-teacher workshop (Academy staff only)|
  | Friday evening: | Barbecue: Participants meets sponsors - get a job!|
  | Each day at lunch time: | one of the sponsors will give a 20 minute pitch to the students; why they are interested in hiring.|
"
%}


{% include eventbrite-ticket-form.html
eventbriteid=page.checkout.eventbriteid
css_classes="black toprip botrip"
header="Enroll"%}
