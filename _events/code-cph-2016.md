---
type: conferences
title: CODE-CPH
weight: 30
brand-txt: >
  *CO*DE*-*CPH<!--power-icon-->
color: '#006666 '
subtitle: >
  *Co*ntinuous *De*livery and *DevOps* Conference - Copenhagen
caption: >
  CoDe - is the leading, conference in Scandinavia with sole focus on Continuous Delivery and DevOp for senior executives and C-levels in general.

# events header

event_header:
  img: /images/code-cph-audience.png
  ribbon: 3rd year in CPH...

# date & location

date_: 2016-09-13
time: 09—17:00
city: Copenhagen
adress: Copenhagen Marriott Hotel, Kalvebod Brygge 5, 1560 Copenhagen V, Denmark

checkout:
  eventbriteid: 23441015709

keynote-speakers:

speakers:
  januhagen:
    keynote: true
    title: Continuous Delivery - Lessons from the Aviation Industry
    abstract: >
      Assuming that Continuous Delivery is the solution to your problems Jan will explore - through various stories - which character traits should be present in your team members if they are to build and deliver cutting edge software. He will touch on how to build such a team. A non-technical keynote for anyone who is managing, or is a member of, a team who are trying to implement continuous delivery.
  jejensen:
    keynote: true
    title: Continuous Delivery and DevOps at Lego
    abstract: >
      For the past 4 years Jørn Erik has focused on implementing Continuous Delivery and DevOps processes and practices in development, quality and operations at Lego.
  lakruzzmeekrosoft:
    title: CoDe - The Metaphors We Live By
    abstract: >
      Having our hands buried deep into DevOps and Continuous Delivery - "CoDe" every single day, we tend to expand our vocabulary and lingo with metaphors, proverbs and anecdotes that enables us to understand and explain our domain. Mike and Lars will cover tales in the range from Tarantino's Pulp Fiction to Indonesia's stone age population.
  andrewjturner:
    title: Automation & Continuous Delivery – Lessons from the Front Line
    abstract: >
       Continuous Delivery is on the C-Level agenda and so it should be – it’s a game changer for IT change. But how do you prioritize what to do and align your stakeholders to get the most from the opportunity? Automation provides the foundation for continuous delivery, and learning from real life customer experiences across regulated industries is an excellent way to accelerate your adoption.
  ethomson:
    title: Stop Breaking Things - Continuous Delivery at GitHub
    abstract: >
       You've probably heard the famous quote: "move fast and break things". Of course we all want to move fast, but our customers expect reliable and working services. Can you move quickly, deliver continuously, but not break things?  Learn about the tools and processes that GitHub uses to deploy continuously, while breaking as few things as possible, and how we detect and fix the problems that arise.
  kristofferlippert:
        title: Elephant jiu jitsu - Throwing big things gracefully through the air
        abstract: >
          How deploying a relatively large and heavily integrated application in an elegant an speedy agile fashion turned out to not be quite as easy as it seemed. Following agile and Continuous Delivery principles when working with SAP hybris is a bit like practicing jiu jitsu with an elephant - the elephant has quite an impact on the end result. But it’s not impossible...
  sebrose:
    title: Test automation is dead. Long live test automation!
    abstract: >
      For Continuous Delivery to work well we need more test automation (or to be precise, we need to do less manual testing) but each initiative seems to deliver another pile of incomprehensible, brittle, unmaintainable scripts that suck resources and deliver questionable returns. The more we chase test automation, the further away it seems to get.

      Meanwhile, a growing band of organizations have found that wielding the power of examples in workshops (where the business, the developers and the testers collaborate) is helping promote early discovery of assumptions, risks and missing requirements. What’s more, these examples are powering the creation of a ubiquitous language, helping prevent future misunderstandings. And, if that isn’t enough already, these examples can then be automated, using tools like Cucumber, to become an executable specification.
      In this session, Seb asks: is this the test automation you were looking for?
  mandiwalls:
    title: Successful Practices for Continuous Delivery
    abstract: >
      Infrastructure as Code and DevOps practices are necessary pre-requisites for safely adopting Continuous Delivery. With software becoming more and more crucial to business success in various parts of the market, speed of delivery becomes the game changer. This talk will explore some of the practices your team will need to adopt to safely move fast, continuously delivering value to your customers.



sponsors:
- praqma
- chef
- t2data
- github
- dotw
- simcorp
- milestone
- itforum
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
speakers=page.speakers
color=page.color
css_classes="colored toprip botrip"
caption="The speakers"
event_path=page.path
%}

{% include eventbrite-ticket-form.html
eventbriteid=page.checkout.eventbriteid
css_classes="black toprip botrip"
header="Enroll"
height="330" %}

{% include sponsors.html
sponsors=page.sponsors
caption="Sponsors"
subcaption="A heartfelt thank goes to our friends"
css_classes="" %}
