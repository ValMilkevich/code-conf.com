---
title: CoDe Academy
nav_weight: 10
brand-txt: >
    *Co*{: style="color: black; font-style: normal;"}De Academy
#Co*De*{: style="color: black; font-style: normal;"} Academy
subtitle: >
  A modern continuous delivery bootcamp for graduates
color: '#f58532'
color_cph: '#006666'
color_trd: '#f58532'
color_aar: '#006f00'
color_osl: '#8a66a0'
event_header:
  img: ../images/pages/academy2016/event-main.jpg
  ribbon: Enroll today
checkout:
  eventbriteid: 24573031599
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

<br>

{% include columns.html 
column_number=3
content="
![Continuous Delivery Academy](../images/pages/academy2016/0015.jpg)
{: .image}

## *Co*{: style='color: orange; font-style: normal;'}ntinuous *De*{: style='color: orange; font-style: normal;'}livery<br> Academy
So you’re a student in the field of Computer Science — cool! But still, you get that sinking feeling that you’re missing out on important best practices of the modern era of Continuous Delivery and DevOps?
<!--col-->
![It’s free. Honestly](../images/pages/academy2016/0040.jpg)
{: .image}

## It’s free.<br> Honestly
Students are offered a free seat at the code academy! The only catch is that each day there will be a pitch from one of the sponsors about their company. But then again, they’re only here to recruit, so it makes sense right? But seriously, the lunch will be free.
<!--col-->
![Learn the latest skills](../images/pages/academy2016/0020.jpg)
{: .image}

## Learn<br> the latest skills
Five days of intense hands-on continuous delivery training. A primer on Agile teaching you to groom tasks. Advanced version control with Git. Build and test automation with Jenkins. Test Driven Development to build quality in! Build, Ship, Run with Docker.
"
%}


{% include columns.html 
column_number=2
content="
![Learn the latest skills](../images/pages/academy2016/0013.jpg)
{: .image}

## But why?
Here’s the thing — demand for Continuous Delivery and DevOps skills is far outstripping what is available in the job market. We at Praqma are feeling this most acutely. So we thought: “Why do we only train our new recruits? Why not train everyone looking for work! So that not only Praqma employees get these skills but all people entering the industry?”
<!--col-->
![Supporters](../images/pages/academy2016/0022.jpg)
{: .image}

## Supporters
Each location will have five companies supporting the academy. Companies are looking to recruit in this field — you’ll be given a pitch by each one of them. Each Academy season has a set of technology sponsors as well. They are just happy to support the Continuous Delivery and DevOps revolution — and throw you swags.
"
%}

{% include pullout.html 
img="../images/icons/icon-place-big.png"
caption="Where it’s happening"
color=page.color
content="
Academies will take place from end of June to start September in **Copenhagen**, **Aarhus**, **Oslo** & **Trondheim**. Training will be in English, a full week 9—16 every day. You’re eligible to enroll if you are either a student or unemployed recent graduate in a field related to computer science. Click on the dates below to see the program for the individual academies.
"
%}


<br/>

{% include date-location.html
color=page.color_trd
date="2016-06-13"
city="Trondheim"
url="trd" %}

<br/>

{% include date-location.html
color=page.color_cph
date="August 15th"
city="Copenhagen"
url="cph" %}

<br/>

{% include date-location.html
color=page.color_aar
date="August 22nd"
city="Aarhus"
url="aar" %}

<br/>

{% include date-location.html
color=page.color_osl
date="August 29th"
city="Oslo"
url="osl" %}
