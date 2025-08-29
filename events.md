---
layout: default
title: Events
permalink: /events/
---

{% assign today = site.time | date: "%Y-%m-%d" %}
{% assign events_sorted = site.data.events | sort: "date" %}

<div class="events_page_container">
  <h1 class="events_page_title">Events</h1>

  <!-- Find next upcoming event for countdown (first event with date >= today) -->
  {% assign next_event = nil %}
  {% for ev in events_sorted %}
    {% assign ev_date_str = ev.date | date: "%Y-%m-%d" %}
    {% if ev_date_str >= today %}
      {% assign next_event = ev %}
      {% break %}
    {% endif %}
  {% endfor %}

  {% if next_event %}
  <div class="next-event-card">
    <h2>Next Event: {{ next_event.title }}</h2>
    <p class="event_meta">📅 {{ next_event.date | date: "%B %d, %Y" }} • 📍 {{ next_event.location }}</p>
    <p>Time remianing: <div id="next-event-countdown" data-event-date="{{ next_event.date | date: "%Y-%m-%d" }}"></div> </p>
  </div>
  {% endif %}

  <!-- Upcoming Events -->
  <section class="events_section">
    <h2 class="events_section_title">Upcoming Events</h2>
    <div class="events_list">
      {% for event in events_sorted %}
        {% assign event_date = event.date | date: "%Y-%m-%d" %}
        {% if event_date >= today %}
          <article class="event_card upcoming">
            <h3 class="event_title">{{ event.title }}</h3>
            <p class="event_meta">📅 {{ event.date | date: "%B %d, %Y" }} • 📍 {{ event.location }}</p>
            <p class="event_desc">{{ event.description }}</p>
          </article>
        {% endif %}
      {% endfor %}
    </div>
  </section>

  <!-- Past Events -->
  <section class="events_section">
    <h2 class="events_section_title">Past Events</h2>
    <div class="events_list">
      {% for event in events_sorted reversed %}
        {% assign event_date = event.date | date: "%Y-%m-%d" %}
        {% if event_date < today %}
          <article class="event_card past">
            <h3 class="event_title">{{ event.title }}</h3>
            <p class="event_meta">📅 {{ event.date | date: "%B %d, %Y" }} • 📍 {{ event.location }}</p>
            <p class="event_desc">{{ event.description }}</p>
          </article>
        {% endif %}
      {% endfor %}
    </div>
  </section>
</div>
