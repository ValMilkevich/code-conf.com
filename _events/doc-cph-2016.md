---
type: conferences
brand-txt: >
    D*OC*-CPH<!--power-icon-->
title: DOC-CPH
color: '#539184'
subtitle: >
  Day Of *Co*ntainers - Copenhagen
caption: >
  A different conference, more workshops than presentations. Don't just listen - work and learn. Bring your laptop; we'll be hacking containers all day
dot-txt: Bring your laptop
dot-txt-size: small

# events header

event_header:
  img: /images/doc-cph-2016.png
  ribbon: A hands-on conference...

# date & location

date_: 2016-08-29
time: 09—18:00
city: Symbion, Copenhagen
adress: Fruebjergvej 3,2100 København Ø, Denmark

checkout:
  eventbriteid: 20856339874

speakers:
  kelseyhightower:
    keynote: true
    title: Docker and the Future of Operating Systems
    abstract: >
      Kelsey will take a dive into the future of the operating system and how containers have the potential to destroy the Linux distro as we know it.
  jankrag:
    title: Docker 101
    abstract: >
      If you are new to docker, this session is for you! In this sessions you will learn all the basics of docker and its main components. We will go through the the concept of containers, writing your own docker files, connecting data volumes, and basic orchestration with compose and swarm. Bring your laptops!
  jansorensen:
    title: Buld your own Docker and feel the magic!
    abstract: >
      How does Docker do its magic? This session will show you how to implement some essential Docker commands as shell scripts. You will learn how to setup a “containerized environment” using standard Linux features. We will implement core Docker features including image builds, pulling images, and running an image as a container.
      This session will really be hands-on with exercises to get a better understanding of the topic. A Vagrant virtual machine will be provided with all the tools you need, so make sure you have Vagrant on you laptop.
      A good understanding of Docker and Linux is assumed.
  rasmushald:
    title: Getting your hands dirty with Windows Containers
    abstract: >
      Windows Containers in Windows Server 2016 is a new big thing – Get a solid introduction to the upcoming Windows and Hyper-V Containers that will be part of the next release of Windows Server.
  laurafrank:
    title: Stop being lazy and test your software
    abstract: >
      Testing software is necessary, no matter the size or status of your company. Introducing Docker to your development workflow can help you write and run your testing frameworks more efficiently, so that you can always deliver your best product to your customers and there are no excuses for not writing tests anymore.
  gergohoranyi:
    title:  Building and observing services on Docker Swarm clusters. The latest and greatest from Docker, inspired by Netflix.
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

sponsors:
  - praqma
  - docker
  - dockercph
  - police
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
img="../images/icons/icon-list.png"
caption="DAY OF CONTAINERS"
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
img="/images/icons/icon-place-big.png"
caption="Extra"
no_toprip=true
color=page.color
no_toprip=true
content="
**Day before conference:** Pre-conference meetup for everyone who can't make it for the main event [Pre-Conference Meetup](http://www.meetup.com/Docker-Copenhagen/events/231588987/)!
{: .whitestrip }
**Post-Conference Workshop with Kelsey Hightower from Google:** A full day tutorial on Taming microservices with CoreOS and Kubernetes! [Post-Conference Workshop](https://doccphworkshop.eventbrite.co.uk)
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


Agenda
---

8:30
Registration & Light Breakfast 
9:00
Welcome & Announcements	
9:15
**Keynote: Self Healing System**, Viktor Farcic, Docker Captain	
10:00
Break	
10:15
**Docker 101**, Jan Krag, Praqma
**Buld your own Docker and feel the magic**, Jan Sørensen, Docker Expert
11:45
Lunch	
12:45
**Getting your hands dirty with Windows Containers**, Rasmus Hald, Microsoft
**Stop being lazy and test your software**, Laura Frank, Codeship
14:15
Break	
14:30
**Building and observing services on Docker Swarm clusters. The latest and greatest from Docker, inspired by Netflix.Gergo**, Horanyi, Founders
**Building hybrid microservices with Docker**, Michael Hausenblas, Mesosphere
16:00
Break	
16:45
**Keynote: Containers and the death of the Linux Distributio**, Kelsey Hightower, Google
17:30
Socialize & Beers
{:.agenda-formatter}


{% include eventbrite-ticket-form.html
eventbriteid=page.checkout.eventbriteid
css_classes="black toprip botrip" %}

{% include sponsors.html
sponsors=page.sponsors
caption="Sponsors"
subcaption="A heartfelt thank you goes to our friends"
css_classes="" %}
