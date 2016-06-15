---
type: meetups
title: Working smarter with GitHub
weight: 100
brand-txt: >
    GitHub & Praqma
# subtitle: >
caption: >
  We'll touch upon development best practices focusing on collaboration, Continuous Delivery and Continuous Improvement.
color: '#569c1b'
date_:  2016-06-15
time: 5—8:00PM
city: Copenhagen
event_header:
  img: /images/pages/meetups/event_main.jpg
  ribbon: ""
agenda-picture: /images/pages/meetups/agenda.jpg
agenda-brand-lead: >
    Agenda
agenda-maker: on
agenda-label: on
agenda:
 - time: "17:00"
   title: Welcome 
 - time: "17:05"
   title: Food and drinks 
 - time: "17:30"
   title: Working Smarter To Make Happier More Efficient Developers, GitHub
 - time: "18:15"
   title: A pragmatic workflow
   comment: A workflow automated and optimized for simplicity, Praqma
 - time: "19:00"
   title: Discussion & Socialize
button_link: http://www.meetup.com/code-u/events/230840654/
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
Enter through Borgergade 24B and use the buzzer for Trifork.
"
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
agenda-title=page.agenda-brand-lead %}

***A joint GitHub & Praqma Meetup***

**1. Working Smarter To Make Happier More Efficient Developers**

We’ll touch upon development best practices focusing on collaboration, Continuous Delivery and Continuous Improvement.
We will look at ways to bring your tools into your chat interface so that you and your co-workers can be better informed of events happening with your development, deployments, or build status. 

We will explore some collaboration best practices, but also how to find good projects and people to collaborate with.

Lastly, we’ll see how to refactor code with some science and how all of these pieces help make happier developers who ship better code.

**2. A pragmatic workflow — A workflow automated and optimized for simplicity**

Imagine a workflow so sophisticated, that you couldn’t break the integration branch even if you tried. And at the same time you wouldn’t have to go anywhere else than your terminal and your favorite IDE to manage issues, promotions and deploys.

We’ll present the ideal workflow from the perspective of a developer using a simple, minimalistic toolstack consisting of Git, GitHub, Waffle.io, Jenkins and just a couple tools simple tools.

***Speakers:* Bas Peters, GitHub**
Bas is a Solutions Engineer at GitHub. He is fascinated by software and how it eats everything and enjoys helping people to understand the power and beauty of Git and GitHub.

**Lars Kruse, Praqma**
Lars Kruse is Continuous Delivery Coach at Praqma. He has throughout his entire career been working with software configuration management, processes automation, quality assurance and agile software development. Works by the DORITH principle: Do the RIght THing.


- We have the venue until 8pm so stick around for a beer and CoDe-discussions!

<br>

What are you waiting for?  
[Join us now!]({{ page.button_link }}){:.btn .btn-primary style="background: {{ page.color }}; border-color: {{ page.color }};" target="_blank"}
