---
title: Music
---

We do necessarily play all of these songs exactly like you see
here.

{% for dance in site.data.dances %}

  {% if dance.song_image %}

## {{ dance.song}}
![{{dance.song}}]({{ dance.song_image }})

  {% endif %}

{% endfor %}
