---
layout: default
title: Videos
permalink: /videos/
---

# Dance Performances & Workshops

Welcome to our video library — performances, workshops, and event recordings are hosted on YouTube. Click to watch, or visit our [YouTube channel](https://www.youtube.com/@susroy1986){:target="_blank"} to subscribe.

<section class="videos_page_container section-pad">

<div class="videos_grid">
  {% for video in site.data.videos %}
  <article class="videos_item">
    <h3 class="videos_item_title">{{ video.title }}</h3>
    <p class="videos_item_meta">{{ video.event }}</p>

    <div class="videos_iframe_wrap">
      {% if video.type == "video" %}
        <iframe class="videos_iframe"
                src="https://www.youtube.com/embed/{{ video.youtube_id }}"
                title="{{ video.title }}"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
      {% elsif video.type == "playlist" %}
        <iframe class="videos_iframe"
                src="https://www.youtube.com/embed/videoseries?list={{ video.playlist_id }}"
                title="{{ video.title }}"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
      {% endif %}
    </div>

    <p class="videos_item_description">{{ video.description }}</p>
  </article>
  {% endfor %}
</div>
</section>

## Want your event featured?
If you'd like Ameya School of Dance to perform at your event or book a workshop, please visit our **[Contact page](/contact/)**{:rel="noopener"}.


