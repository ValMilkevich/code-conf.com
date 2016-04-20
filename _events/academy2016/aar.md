---
title: CoDe Academy - Aarhus
nav_weight: 10
brand-txt: >
  Aca*de*{: style="color: black; font-style: normal;"}my Aarhus
subtitle: >
  Continuous Delivery bootcamp Aarhus
color: '#006f00'
date_: 2016-08-22
date_end: 2016-08-19
time: 9:00 - 16:00
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

<div class="pullout" style="background: {{ page.color }}">
    <div class="image">
      <img src="/images/icons/icon-date.png" alt="Location">
    </div>
<div class="text" markdown="1">
## Program
<code>
<b>Monday:</b>&nbsp;&nbsp;&nbsp; Agile task management and Test Driven Development <br/>
<b>Tuesday:</b>&nbsp;&nbsp; Jenkins <br/>
<b>Wednesday:</b> Git <br/>
<b>Thursday:</b>&nbsp; Docker <br/>
<b>Friday:</b>&nbsp;&nbsp;&nbsp; Synthesis - bring it all together in running code&nbsp;
</code>

### Extras:
<code>
<b>Monday evening:</b> Teach-the-teacher workshop (Academy staff only)<br/>
<b>Friday evening:</b> Barbecue: Participants meets sponsors - get a job!!<br>
<b>Each day at lunch time</b>: one of the sponsors will give a 20 minute pitch to the students; why they are interested in hiring.&nbsp;
</code>
</div>
</div>


{% include eventbrite-ticket-form.html
eventbriteid=page.checkout.eventbriteid
css_classes="black toprip botrip"
header="Enroll"%}
