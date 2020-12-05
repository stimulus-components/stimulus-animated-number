import { Controller } from 'stimulus'

export default class extends Controller {
  static values = {
    start: Number,
    end: Number,
    duration: Number,
    lazyThreshold: Number,
    lazyRootMargin: String,
    lazy: Boolean
  }

  connect () {
    this.start = this.startValue
    this.end = this.endValue
    this.duration = this.durationValue

    this.lazyValue ? this.lazyAnimate() : this.animate()
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
      threshold: this.lazyThresholdValue,
      rootMargin: this.lazyRootMarginValue || '0px'
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
