---
type: meetups
title: Next Generation Software Development
weight: 100
brand-txt: >
    I'm a GitHub man
subtitle: >
    For forward-thinking software executives
caption: >
  GitHub and Praqma are jointly inviting you to a half-day seminar for VIPs on how businesses are disruptively transforming and changing software practices.
color: '#34b3ee'
date_:    2016-06-22
time: 8:45—13:00
city: Copenhagen
event_header:
  img: /images/pages/meetups/event_main.jpg
  ribbon: VIP meet-up
button_link: https://ti.to/github-events/copenhagen-breakfast-seminar
redirect_from:
  -  /next-generation-software-development/

---

{% include event-main.html
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
GitHub and Praqma have entered into partnership in Scandinavia - we believe it’s a perfect
match, come and hear why! We’re jointly inviting you to a breakfast-to-lunch seminar of
three short workshops that will give you insight on how businesses are transforming by
building methodologies and practices that will drive software development into the future.

The event will be held in Copenhagen on June 22nd with the doors opening at 8.45am.
Location Lysthuset, Islands Brygge 18, 2300 København S."
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

AGENDA
---

**8.45 – 9.15**  Breakfast & Networking

**9.15 – 9.25**  Welcome by Praqma

**9.25 – 9.45**  Next Gen Software Development by GitHub

**9.45 – 11.15** Three Workshops to Engage & Learn

Each workshop is 30 mins - and we will rotate - so you’ll get to attend all three of them
**11.15** Lunch is served

Having attended this seminar, you’ll have more insight on how your company can:

* Attract and retain new talent
* Ship code faster
* Compete smarter

<br>

Workshops
---

{% capture workshops %}
{% include columns.html
column_number=3
content="
![Continuous Delivery Academy](../images/pages/meetups/workshop_git.jpg)
{: .image}

## GitHub Enterprise<br>Power of Community
Power of Code. On Premises
<!--col-->
![It’s free. Honestly](../images/pages/meetups/workshop_workflow.jpg)
{: .image}

## Praqmatic<br>Workflow
And agile task approach. Powered by GitHub Issues
<!--col-->
![Learn the latest skills](../images/pages/meetups/workshop_roadmap.jpg)
{: .image}

## Your road<br>to the future
Create a roadmap for DevOps transformation with Praqma’s CoDe Assessment
"
%}
{% endcapture %}
{{ workshops }}

{% comment %}
{% include pullout.html
caption="WORKSHOPS"
color=page.color
content=workshops
%}
{% endcomment %}




What are you waiting for? [Join us now!](https://ti.to/github-events/copenhagen-breakfast-seminar){:.btn .btn-primary style="background: {{ page.color }}; border-color: {{ page.color }};" target="_blank"}
