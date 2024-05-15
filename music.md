---
title: Music
---

{% for dance in site.data.dances %}

  {% if dance.song_pdf %}
## [{{dance.song}}]({{ dance.song_pdf }})
  {% elsif dance.song_image %}
## ![{{dance.song}}]({{ dance.song_image }})
  {% endif %}

{% endfor %}
