---
brand-txt: >
    D*OC*-STHLM
title: DOC-STHLM
weight: 20
color: '#9d006e'
subtitle: >
  Day Of *Co*ntainers - Stockholm
caption: >
  A different conference, more workshops than presentations. Don't just listen - work and learn. Bring your laptop; we'll be hacking containers all day
dot-txt: Bring your laptop
dot-txt-size: small

# events header

event_header:
  img: /images/doc-sthlm-2016.jpg
  ribbon: Join us for Day Of Containers

# date & location

date_: 2016-08-25
time: 09—18:00
city: Stockholm
adress: Clarion Hotel Sign Östra Järnvägsgatan 35 101 26 Stockholm, Sweden

checkout:
  eventbriteid: 20692623193

keynote-speakers:
  kelseyhightower:
    title: Docker and the Future of Operating Systems
    abstract: >
      Kelsey will take a dive into the future of the operating system and how containers have the potential to destroy the Linux distro as we know it.

speakers:
  mhausenblas:
    title: Building hybrid microservices with Docker
    abstract: >
      Docker plays an increasingly important role in building and operating modern applications, both on-premises and in the cloud. In this introductory workshop, you will get an end-to-end understanding of Linux containers and how to operate and orchestrate them at scale. The course will teach you about the low-level concepts that make up Linux containers, how to deploy Docker containers, and how to orchestrate them using tools like Kubernetes and Mesos Marathon
  diptanu:
    title: Microservices at Scale with Nomad and Consul on elastic infrastructure
    abstract: >
      Microservices architecture is becoming more common for writing scalable modern services targeted for public and private clouds. However, the architecture brings in with itself a lot of challenges with respect to availability, reliable inter-process communication across services, deployment orchestration and operations. In this talk, I will go into how to design and run Microservices at scale on Docker and elastic infrastructure.
  fredriknilsson:
    title: Getting your hands dirty with Windows Containers
    abstract: >
      Windows Containers in Windows Server 2016 is a new big thing – Get a solid introduction to the upcoming Windows and Hyper-V Containers that will be part of the next release of Windows Server.
  andreyd:
    title: Docker 101
    abstract: >
      If you are new to docker, this session is for you! In this sessions you will learn all the basics of docker and its main components. We will go through the the concept of containers, writing your own docker files, connecting data volumes, and basic orchestration with compose and swarm. Bring your laptops!
  viktorfarcic:
    title: Self-Healing Systems
    abstract:
      We'll explore practices and tools required to set up fully autonomous self-healing systems capable of both reactive recuperation from failures and proactive predictions of steps that should be taken to prevent failures before they happen.   We'll use tools like Docker, Docker Swarm, Docker Compose, Consul, Consul Template, Registrator and Jenkins to design and develop a system that is continuously deploying services packed as containers and performs actions that will recuperate it from failures and scale or de-scale depending on historical records.

sponsors:
  - docker
  - dockersthlm

---

{% include event-main.html
background-image=page.event_header.img
dot-text=page.dot-txt
dot-txt-size=page.dot-txt-size
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
subcaption="A heart felt thank goes to our friends"
css_classes="" %}
