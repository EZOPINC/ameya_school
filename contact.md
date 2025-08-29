---
layout: default
title: Contact
permalink: /contact/
---

<section class="page-contact">
  <div class="container page-contact_container">
    <h2 class="page-contact_title">Get in Touch</h2>
    <p class="page-contact_intro">
      Have questions about classes, workshops, or performances?  
      Fill out the form below or reach us directly at 
      <a href="mailto:info@ameyadance.ca">info@ameyadance.ca</a>.
    </p>
    <form class="page-contact_form" action="https://formspree.io/f/your-form-id" method="POST">
      <div class="form-group">
        <label for="name">Your Name</label>
        <input type="text" id="name" name="name" required />
      </div>
      <div class="form-group">
        <label for="email">Your Email</label>
        <input type="email" id="email" name="_replyto" required />
      </div>
      <div class="form-group">
        <label for="message">Your Message</label>
        <textarea id="message" name="message" rows="5" required></textarea>
      </div>
      <!-- Anti-spam hidden field -->
      <input type="text" name="_gotcha" style="display:none" />
      <button type="submit" class="page-contact_btn">Send Message</button>
    </form>
    <div class="page-contact_social">
      <h3>Connect with Us</h3>
      <ul>
        <li><a href="https://www.facebook.com/profile.php?id=100071614934324" target="_blank">Facebook</a></li>
        <li><a href="https://www.youtube.com/@susroy1986" target="_blank">YouTube</a></li>
      </ul>
    </div>
    <!-- Google Maps -->
    <div class="page-contact_map">
      <h3>Find Us</h3>
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2718.1390020783066!2d-106.646207!3d52.133214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5304f6f41a0adf8d%3A0x123456789abcdef!2sSaskatoon%2C%20SK!5e0!3m2!1sen!2sca!4v1693432429084"
        width="100%" height="350" style="border:0;" allowfullscreen="" loading="lazy">
      </iframe>
    </div>
  </div>
</section>
