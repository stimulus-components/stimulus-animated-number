import { Controller } from '@hotwired/stimulus'

export default class extends Controller {
  // @ts-ignore
  element: HTMLElement
  lazyThresholdValue: number
  lazyRootMarginValue: string
  startValue: number
  endValue: number
  durationValue: number
  lazyValue: number
  formatValue: string
  formatterLocaleValue: string

  static values = {
    start: Number,
    end: Number,
    duration: Number,
    lazyThreshold: Number,
    lazyRootMargin: {
      type: String,
      default: '0px'
    },
    lazy: Boolean,
    format: {
      type: Boolean,
      default: false
    },
    formatterLocale: {
      type: String,
      default: 'en-US'
    }
  }

  connect (): void {
    this.lazyValue ? this.lazyAnimate() : this.animate()
  }

  animate (): void {
    const formatter = new Intl.NumberFormat(this.formatterLocaleValue);

    let startTimestamp: number = null

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp

      const elapsed: number = timestamp - startTimestamp
      const progress: number = Math.min(elapsed / this.durationValue, 1)
      const elementValue: number = Math.floor(progress * (this.endValue - this.startValue) + this.startValue)

      if (this.formatValue) {
        this.element.innerHTML = formatter.format(elementValue).toString()
      } else {
        this.element.innerHTML = elementValue.toString()
      }

      if (progress < 1) {
        window.requestAnimationFrame(step)
      }
    }

    window.requestAnimationFrame(step)
  }

  lazyAnimate (): void {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry: IntersectionObserverEntry) => {
        if (entry.isIntersecting) {
          this.animate()

          observer.unobserve(entry.target)
        }
      })
    }, this.lazyAnimateOptions)

    observer.observe(this.element)
  }

  get lazyAnimateOptions (): IntersectionObserverInit {
    return {
      threshold: this.lazyThresholdValue,
      rootMargin: this.lazyRootMarginValue
    }
  }
}
