---
type: meetups
title: Next Generation Software Development
weight: 100
brand-txt: >
    I'm a GitHub man
#subtitle: >
caption: >
  GitHub and Praqma are jointly inviting you to a half-day seminar for VIPs on how businesses are disruptively transforming and changing software practices.
color: '#34b3ee'
date_:    2016-06-22
time: 8:45—13:00
city: Copenhagen
event_header:
  img: /images/pages/meetups/event_main.jpg
  ribbon: VIP meet-up
agenda-picture: /images/pages/meetups/agenda.jpg
agenda-brand-lead: >
    Agenda
agenda-maker: on
agenda-label: on
agenda:
 - time: 8.45 – 9.15
   title: Breakfast & Networking
 - time: 9.15 – 9.25
   title: Welcome by Praqma
 - time: 9.25 – 9.45
   title: Next Gen Software Development by GitHub
 - time: 9.45 – 11.15
   title: Three Workshops to Engage & Learn
   comment: Each workshop is 30 mins - and we will rotate - so you’ll get to attend all three of them
 - time: 11.15
   title: Lunch is served
button_link: https://ti.to/github-events/copenhagen-breakfast-seminar
benefit-text: Having attended this seminar, you’ll have more insight on how your company can
benefits:
 - Attract and retain new talent
 - Ship code faster
 - Compete smarter
button_link: https://ti.to/github-events/copenhagen-breakfast-seminar
redirect_from:
  -  /next-generation-software-development/
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
no_toprip=true
color=page.color %}

{% include meetup/summary.html
content="
## For forward-thinking software executives

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

{% include event-main.html
agenda-label=page.agenda-label
background-image=page.agenda-picture
brand-lead= page.agenda-brand-lead
brand-text-as-marker=page.agenda-maker %}

{% include agenda.html
agenda=page.agenda
agenda-title=page.title %}

{% include benefit.html
text=page.benefit-text
benefits = page.benefits %}

<br>

{% capture workshops_content %}
![Continuous Delivery Academy](../images/pages/meetups/workshop_git.jpg)
{: .image}

## GitHub Enterprise<br>Power of Community
{: .marker .workshop-header}
Power of Code. On Premises
{: .workshop-text}

<!--col-->
![It’s free. Honestly](../images/pages/meetups/workshop_workflow.jpg)
{: .image}

## Praqmatic<br>Workflow
{: .marker .workshop-header}
An agile task approach. Powered by GitHub Issues
{: .workshop-text}
<!--col-->

![Learn the latest skills](../images/pages/meetups/workshop_roadmap.jpg)
{: .image}

## Your road<br>to the future
{: .marker .workshop-header}
Create a roadmap for DevOps transformation with Praqma’s CoDe Assessment
{: .workshop-text}
{% endcapture %}

{% capture workshops %}
{% include columns.html
column_number=3
content=workshops_content
css_classes="centered"
%}
{% endcapture %}

{% include pullout.html
caption="WORKSHOPS"
color=page.color
content=workshops
css_classes="marker white-font big space-under"
%}


{% include meetup/join-us.html link=page.button_link color=page.color %}
