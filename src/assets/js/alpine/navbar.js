document.addEventListener('alpine:init', () => {
  Alpine.data('stickyNav', () => ({
    isSticky: false,
    navHeight: 0,
    heroHeight: 0,

    init() {
      this.navHeight = this.$refs.nav.offsetHeight;
      this.heroHeight = this.$refs.hero.offsetHeight;
      
      window.addEventListener('scroll', () => {
        this.isSticky = window.scrollY > (this.heroHeight - this.navHeight);
      });
    }
  }));
});