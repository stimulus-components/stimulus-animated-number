import { Controller } from 'stimulus'

export default class extends Controller {
  connect () {
    this.start = parseInt(this.data.get('start'), 10)
    this.end = parseInt(this.data.get('end'), 10)
    this.duration = parseInt(this.data.get('duration'), 10)

    this.data.has('lazy') ? this.lazyAnimate() : this.animate()
  }

  animate () {
    let startTimestamp = null

    const step = timestamp => {
      if (!startTimestamp) startTimestamp = timestamp

      const elapsed = timestamp - startTimestamp
      const progress = Math.min(elapsed / this.duration, 1)

      this.element.innerHTML = Math.floor(progress * (this.end - this.start) + this.start)

      if (progress < 1) {
        window.requestAnimationFrame(step)
      }
    }

    window.requestAnimationFrame(step)
  }

  lazyAnimate () {
    const options = {
      threshold: this.data.get('lazyThreshold') || 0,
      rootMargin: this.data.get('lazyRootMargin') || '0px'
    }

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.animate()

          observer.unobserve(entry.target)
        }
      })
    }, options)

    observer.observe(this.element)
  }
}
