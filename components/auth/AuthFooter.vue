<template>
  <footer class="auth-footer">
    <p class="auth-footer-p">
      This site uses cookies. By continuing browsing this site, you agree to the use of cookies.
    </p>
    <p class="auth-footer-p">
      All information on the website is provided by the company Udimicom, Limited.
    </p>
    <p class="auth-footer-p">
      61 Spyrou Kyprianou, 4003 Limassol, Cyprus, contact@quwi. com
    </p>
    <div class="auth-footer-links">
      <router-link to="/download" class="auth-footer-link link">
        Download Quwi
      </router-link>
      <router-link to="/tos" class="auth-footer-link link">
        Terms and Conditions
      </router-link>
      <router-link to="/privacy" class="auth-footer-link link">
        Privacy Policy
      </router-link>
    </div>
    <p>© 2008 - 2022 Udimicom, Limited</p>
  </footer>
</template>

<script>
export default {
  name: 'AuthFooter'
}
</script>
