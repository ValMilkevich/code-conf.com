---
published: false
permalink: /sponsor/
nav_weight: 1
layout: default
css_class: sponsor
title: Sponsor inquiries
brand-txt: >
  Want to become a sponsor?
---

{% include event-main.html
no_toprip=true
background-image="/images/doc-cph-2016.png"
brand-txt=page.brand-txt
subtitle="Just throw us a string!"
color='#F58126' %}

<form action="https://formspree.io/{{ site.email_sponsor_inquires }}" method="POST">
  <input type="text" name="_gotcha">
  <div class="form-group">
    <label for="formMessage">Message</label>
    <textarea id="formMessage" class="form-control" rows="3" name="message"></textarea> 
  </div>
  <div class="form-group">
    <label for="formContact">Your email or phone, please!</label>
    <input id="formContact" class="form-control" type="text" name="contact">
  </div>
  <button type="Send the message" class="btn btn-default">Submit</button>
</form>
