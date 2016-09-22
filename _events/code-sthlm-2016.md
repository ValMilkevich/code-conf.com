---
type: conferences
#permalink: /code-sthlm-2016.html
title: CODE-STHLM
brand-txt: >
    *Co*{: style="color: black; font-style: normal;"}De-STHLM<!--power-icon-->
color: '#e89043'
subtitle: >
  *Co*ntinuous *De*livery and *DevOps* Conference. *Embedded* edition
caption: >
  CoDe - is the leading, conference in Scandinavia. Now in Stockholm for the second time.

# events header

event_header:
  img: /images/Codestockholm.jpg
  ribbon: Join us again for...

# date & location

date_: 2016-11-29
time: 09—18:00
city: Stockholm
adress: Alströmergatan 20, 112 47 Stockholm, Meeting Room

checkout:
  eventbriteid: 24850613855

speakers:
  adamtornhill:
    title: Seven Secrets of Maintainable Codebases
    abstract: >
      In this session you'll learn novel techniques that help you make sense of large codebases. You'll learn to identify the code that really matters for your ability to maintain a system, how to prioritize improvements and even evaluate your architecture based on how you actually work with the code. We'll also cover the people side of programming as you learn to mine social information such as communication paths, developer knowledge and hotspots. All techniques are based on software evolution. They use data from the most underused informational source that we have in our industry: our version-control system. Each point is illustrated with a case study from a real-world project.

  perarnoldblaasmo:
    title: Doing development of HW/SW tools using Continuous Development
    abstract: >
      In Microchip we try to use Continuous Development to develop HW/SW tools and applications when inventing new microchips. Looking at challenges, solutions and experiences in a global development environment.

  dmitrybuzdin:
    title: Continuous Testing at Scale
    abstract: >
      With the rise of Continuous Delivery test automation isn’t a luxury anymore — it’s the norm. However, when dealing with highly complex and modular projects you would be disappointed to learn that it is a challenge to set-up a fully automated continuous testing pipeline. The typical problems are tool incompatibility and general lack of suitable solutions to scale out test automation processes. Imagine tens of thousands of automated test cases, which are required to be run for a product to be fully tested. During this talk Dmitry will answer the following questions: How do you run your automated tests in the shortest time frame possible? How can you tell if your functional test coverage is improving? How do you select and run the most appropriate test cases? How do you get actionable insights from the results of your testing process? How to be sure that it’s safe to release a software package to production? This presentation will guide you through a journey of building and improving a test automation pipeline based on Jenkins in a large telco organisation with hundreds of thousands of test executions performed on daily basis. By looking at this example it would be possible to see what tools are currently missing on the market and where the test automation industry should focus its efforts. The talk will outline examples of microservices developed to fill the functional gaps. This experience would be beneficial and applicable to your next large-scale CD project.

  petrawernkvist:
    title: Dynamic automated risk based test selection - test efforts where it matters most
    abstract: >
      Wouldn’t it be great if your automated test framework did intelligent test selections for you? If it tested what’s most important to test every single time without manual effort? Continuous Integration places high demands on automatic regression testing. You need to continuously ensure that your products are of high quality. While doing that, how do you know that you are spending your testing resources on the most important areas when it is not possible to test everything every time? At Westermo we have solved this. We let the automated test framework dynamically select the most important test cases to be executed based on a set of risk factors - every single time we execute a new test round.

  andreyd:
    title: Buffer or suffer? Growth pain of Continuous Delivery pipelines and what to do about it.
    abstract: >
      You were a team of 5 and delivering incremental changes wasn't a problem - if something breaks you just fix it all together. But now you are ten teams. While you fix your colleagues wait. What can you do to avoid pressure and keep delivery pipeline green? I would like to share few ways that I used in different projects to overcome growth issues. Which one would work for you?

  fatihdegirmenci:
    title: OPNFV CI and Challenges - How we solved them - if we solved them at all!
    abstract: >
      OPNFV is a carrier-grade, integrated, open source platform to accelerate the introduction of new NFV products and services. It aims to build the platform by integrating components from different upstream projects such as OpenStack, OpenDaylight, OpenVswitch, KVM and so on. Apart from integrating different components, OPNFV aims to identify gaps in these components and fixes them directly in upstream. OPNFV sees CI/CD to be a solution to its challenges by providing a foundation for developing, integrating and testing OPNFV faster and more efficient through the release cycles. It is crucial for OPNFV and the ecosystem we are building the underlying upstream projects to find the best way to realize the principles and best practices of CI/CD methodologies to reduce the impacts caused by the integration work and be able to provide fast feedback to its own developers and other communities and a stable platform to our users release by release. During this session we will talk about the evolution of OPNFV CI/CD from the project's early days up till now and share our experiences.

  danielstahl:
    title: The Continuity of Continuous Integration - Correlations and Consequences
    abstract: >
      The practice of continuous integration has firmly established itself in the mainstream of the software engineering industry, yet many questions surrounding it remain unanswered. Prominent among these is the issue of scalability: continuous integration has been reported to be possible to scale, but with difficulties. Understanding of the underlying mechanisms causing these difficulties is shallow, however: what is it about size that is problematic, which kind of size, and what aspect of continuous integration does it impede? In a recent multiple-case study (Daniel Ståhl, Torvald Mårtensson and Jan Bosch, 2016) we find that there is indeed a correlation organizational size and composition and the tendency to integrate continuously, and we ask ourselves what this means for software architecture and the manufacturability of software.

  olegnenashev:
    title: The Butler is still young – applying modern Jenkins features to the Embedded area
    abstract: >
      Jenkins is one of the most popular automation servers. It’s being widely used for continuous integration in Embedded projects thanks to its public availability, flexibility and numerous plugins. Actually I consider Jenkins as a generic framework, which can be used for building automation systems after some configuration and integration. In my talk I would like to address common Jenkins use-cases in Embedded projects like integration with development tools, running tests on hardware peripherals and reporting of build results. During the presentation I will focus on new Jenkins features like Pipeline ecosystem and its application in the area: parallelization, failover management, virtualization and build definition libraries.

sponsors:
- praqma
- automic
- t2data
- dotw
- trifork






---

{% include decorated-picture.html
no_toprip=true
background-image=page.event_header.img
dot-text=page.price
brand-lead=page.event_header.ribbon
brand-txt=page.brand-txt
subtitle=page.subtitle
color=page.color %}

<br>

{% include pullout.html
img="../images/icons/icon-list.png"
caption="Embedded edition"
color=page.color
no_botrip=true
content="
{: .whitestrip }
This year we want to pivot conference focus and look more into the most challenging area when it comes to Continuous Delivery - embedded software. Join us and be inspired by the industry leaders who already advanced in their journey towards Continuous Delivery! Do you have a story to tell?
"
%}

{% include pullout.html
img="/images/icons/icon-place-big.png"
caption="Extras"
no_toprip=true
color=page.color
no_toprip=true
content="
**Day before conference:** Pre-conference meetup for everyone who can't make it for the main event!
{: .whitestrip }
**Day after the conference:** Continuous Delivery mastermind group! Engage with the speakers and your peers into facilitated open space discussion. More details are coming soon - stay tuned!
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

{% include eventbrite-ticket-form.html
eventbriteid=page.checkout.eventbriteid
css_classes="black toprip botrip"
height="350" %}

{% include sponsors.html
sponsors=page.sponsors
caption="Sponsors"
subcaption="A heartfelt thank you goes to our friends"
css_classes="" %}
