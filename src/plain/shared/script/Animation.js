import FrameAnimation from "@mediamonks/display-temple/animation/FrameAnimation"

export default class Animation extends FrameAnimation {
  /**
   *
   * @param {HTMLDivElement} container
   * @param {null} config
   */
  constructor(container, config) {
    super();

    this.container = container;
    this.size = config.content.size;
    this.copy_container_b = config.content.copyContainerBPosition;
    this.logo_b = config.content.logoBPosition;
    this.logo = config.content.logoPosition;
  }

  /**
   *
   * @param {gsap.core.Timeline} tl
   */
  frame0(tl){
    tl.addLabel('frame0')
    tl.to('.content', {duration:.8, opacity: 1})
    if(this.size == '300x600'){
      tl.to('.shape', {bottom: '21%', ease: 'expo.inOut', duration: 1}, 'frame0+=.9')
      tl.to('.bg-violet', {height: '22%', ease: 'expo.inOut', duration: 1}, 'frame0+=.9')
    } else {
      tl.to('.shape', {bottom: '0%', ease: 'expo.inOut', duration: 1}, 'frame0+=.9')
      tl.to('.bg-violet', {height: '0%', ease: 'expo.inOut', duration: 1}, 'frame0+=.9')
    }
    tl.from(`.${this.copy_container_b}`, {opacity: 0, y: '10px', ease: 'expo', duration: .8})
    tl.from(`.${this.logo}`, {opacity: 0, y: '10px', ease: 'expo', duration: 1})
    tl.to(`.${this.copy_container_b}`, {width: '73%', ease: 'expo.out', duration: .4})
    tl.from(`.${this.logo_b}`, {scale: 1.8, opacity: 0, ease: 'expo.out', duration: .4})
    tl.to('.bg', {scale: 1.1, duration: 9}, 'frame0')
  }
}
