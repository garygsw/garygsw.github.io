---
layout: page
permalink: /publications/
title: publications
nav-title: publications
leave_right: true
description: My publications in reversed chronological order.
years: [2021, 2018, 2016, 2015]
nav: true
---

<div class="publications">

{% for y in page.years %}

  <h2 class="year">{{y}}</h2>
  {% bibliography -f papers -q @*[year={{y}}]* %}
{% endfor %}

</div>
