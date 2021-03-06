---
type: conferences
brand-txt: >
    D*OC*-STHLM<!--power-icon-->
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
city: Citykonferensen, Stockholm
adress: Citykonferensen Malmskillnadsgatan 111 84 Stockholm, Sweden

checkout:
  eventbriteid: 20692623193


speakers:
  kelseyhightower:
    keynote: true
    title: Containers and the death of the Linux Distribution
    abstract: >
      Kelsey will take a dive into the future of the operating system and how containers have the potential to destroy the Linux distro as we know it.
  andreyd:
    title: Docker 101
    abstract: >
      If you are new to docker, this session is for you! In this sessions you will learn all the basics of docker and its main components. We will go through the the concept of containers, writing your own docker files, connecting data volumes, and basic orchestration with compose and swarm. Bring your laptops!
  maximguenis:
    title: CI and Dev-Test Environment on Dockers
    abstract: >
      Developers and testers struggle every day to have a working local development environment ready when developing, debugging and going through the continuous integration cycle (CI).
      We can test our software either on production or using Virtualisation solutions or solve that by using docker based dev testing environment.
      As well we can test our software without creating tests with Diffy. Diffy finds potential bugs in your service using running instances of your new code and your old code side by side.
  fredriknilsson:
    title: Getting your hands dirty with Windows Containers
    abstract: >
      Windows Containers in Windows Server 2016 is a new big thing – Get a solid introduction to the upcoming Windows and Hyper-V Containers that will be part of the next release of Windows Server.
  gergohoranyi:
    title: Building and observing services on Docker Swarm clusters. The latest and greatest from Docker, inspired by Netflix.
    abstract: >
      This workshop will be split into two parts.In the first part, we will go over some of the features of the latest edition of Docker Swarm and we will set up a few services on it. In the second part, we will dive into a new way of visualizing your clusters and how can we use your engineering intuition to understand complex failure scenarios.
  mhausenblas:
    title: Building hybrid microservices with Docker
    abstract: >
      Docker plays an increasingly important role in building and operating modern applications, both on-premises and in the cloud. In this introductory workshop, you will get an end-to-end understanding of Linux containers and how to operate and orchestrate them at scale. The course will teach you about the low-level concepts that make up Linux containers, how to deploy Docker containers, and how to orchestrate them using tools like Kubernetes and Mesos Marathon
  viktorfarcic:
    keynote: true
    title: Self-Healing Systems
    abstract: >
      We'll explore practices and tools required to set up fully autonomous self-healing systems capable of both reactive recuperation from failures and proactive predictions of steps that should be taken to prevent failures before they happen.   We'll use tools like Docker, Docker Swarm, Docker Compose, Consul, Consul Template, Registrator and Jenkins to design and develop a system that is continuously deploying services packed as containers and performs actions that will recuperate it from failures and scale or de-scale depending on historical records.
  joakimohman:
    title: Build your own private CaaS
    abstract: >
      When you have decided that containers is the way to go and you want to take it in to production then this session is for you. We will explore on how to build and manage a scalable and fault tolerant private Container as a Service (CaaS) platform on top of IaaS using Terraform and Rancher.
      With this setup you can manage any of your favorit Kubernetes, Mesos or Swarm container cluster.

sponsors:
  - praqma
  - docker
  - elastx
  - dockersthlm

---

{% include decorated-picture.html
no_toprip=true
background-image=page.event_header.img
dot-text=page.dot-txt
dot-txt-size=page.dot-txt-size
brand-lead=page.event_header.ribbon
brand-txt=page.brand-txt
subtitle=page.subtitle
color=page.color %}

{% include pullout.html
img="/images/icons/icon-list-white.png"
caption="*DAY OF CONTAINERS*{:.white}"
color=page.color
no_botrip=true
content="
A full day festival focused on hands-on workshops and demos of the Docker ecosystem and the newest trends of containerization in general. Developers of all experience levels will learn about and get hands-on with all different aspects of Docker from introductory sessions on creating and running Docker containers to advanced composition and orchestration in cloud environments.
{: .whitestrip }  
 <br />

**Bring Your Own Laptop (B.Y.O.L.)** at Day Of Containers takes conferences to the next level. The interactive sessions provide a unique opportunity to learn hands-on, following along with an instructor step-by-step.
{: .whitestrip }
"
%}

{% include pullout.html
img="/images/icons/icon-go-white.png"
caption="*Extras*{:.white}"
no_toprip=true
color=page.color
no_toprip=true
content="
**Day before conference:** Pre-conference meetup for everyone who can't make it for the main event [Pre-Conference Meetup](http://www.meetup.com/Docker-Stockholm/events/231517148/)!
{: .whitestrip }
**Post-Conference Workshop with Kelsey Hightower from Google:** A full day tutorial on Taming microservices with CoreOS and Kubernetes! [Post-Conference Workshop](https://docsthlmworkshop.eventbrite.co.uk)
{: .whitestrip }
"
%}

<br/>

{% include date-location.html
color=page.color
date=page.date_
time=page.time
city=page.city %}

{% include speakers.html
speakers=page.speakers
color=page.color
css_classes="colored toprip botrip"
event_path=page.path
caption="The speakers" %}


{% include decorated-picture.html
background-image="/images/agenda.jpg"
brand-txt="What's on"
color="black" %}

08:30
**Registration & Light Breakfast**
09:00
**Welcome & Announcements**
09:15
**Keynote: Self Healing Systems**, Viktor Farcic, Docker Captain	
10:00
**Break**
10:15
**Docker 101**, Andrey Devyatkin, Praqma
**CI and Dev-Test Environment on Dockers**, Maxim Guenis, IronSource
11:45
**Lunch**
12:45
**Getting your hands dirty with Windows Containers**, Fredrik Nilsson, Crayon
**Building and observing services on Docker Swarm clusters. The latest and greatest from Docker, inspired by Netflix.** Gergo Horanyi, Founders
14:15
**Break**
14:30
**Building hybrid microservices with Docker**, Michael Hausenblas, Mesosphere
**Build your own private CaaS**, Joakim Öhman, Elasxt
16:00
**Break**
16:45
**Keynote: Containers and the death of the Linux Distribution**, Kelsey Hightower, Google
17:30
**Socialize & Beers**
{:.agenda-formatter}


{% include eventbrite-ticket-form.html
eventbriteid=page.checkout.eventbriteid
css_classes="black toprip botrip" %}

{% include sponsors.html
sponsors=page.sponsors
caption="Sponsors"
subcaption="A heart felt thank you goes to our friends"
css_classes="" %}
