---
type: conferences
title: CoDe Academy - Trondheim
weight: 10
nav_weight: 10
brand-txt: >
    *Co*{: style='color: #e87e04; font-style: normal;'}De
    Aca*de*{: style="color: #e87e04; font-style: normal;"}my<!--power-icon-->
#dot-txt: Free <br> 5 Day course
dot-txt-size: small
subtitle: >
  Learn the essentials of *Co*{:.orange}ntinuous *De*{:.orange}livery<br>
caption: >
  A Continuous Delivery Academy in Norway's No. 1 tech city; Trondheim. Five intense days of workshops - all you need to know about CoDe.
color: '#008fd2'
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
sponsors:
  - github

---

{% include decorated-picture.html
no_toprip=true
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
img="/images/icons/icon-list-white.png"
caption="*Program*{:.white}"
color=page.color
no_botrip=true
content="
**MONDAY:**&nbsp;&nbsp;&nbsp;&nbsp;Agile task management and Test Driven Development
{:.whitestrip}
**TUESDAY:**&nbsp;&nbsp;&nbsp;Git
{:.whitestrip}
**WEDNESDAY:**&nbsp;Jenkins
{:.whitestrip}
**THURSDAY:**&nbsp;&nbsp;Docker
{:.whitestrip}
**FRIDAY:**&nbsp;&nbsp;&nbsp;&nbsp;Synthesis - bring it all together in running code
{:.whitestrip}
"
%}

{% include pullout.html
img="/images/icons/icon-go-white.png"
caption="*Extras*{:.white}"
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
header="Enroll"
height="310"%}

{% include sponsors.html
sponsors=page.sponsors caption="Sponsors" subcaption="CoDe Academy is sponsored by:" css_classes="" %}
