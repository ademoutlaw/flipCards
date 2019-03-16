import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

/**
 * Generated class for the FlipCardComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'flip-card',
  templateUrl: 'flip-card.html'
})
export class FlipCardComponent {
  @Input() card: string;
  @ViewChild('element') element: ElementRef;
  text: string;
  style:string;
  zoomed=false;
  trustedStyle:SafeStyle;
  constructor(private sanitizer: DomSanitizer) {
    console.log('Hello FlipCardComponent Component');
    this.text = 'Hello World';
    console.log(this.element)
    this.trustedStyle = this.sanitizer.bypassSecurityTrustStyle(this.style);
  }
  ngOnInit() {
    const el = this.element.nativeElement;
    console.log(el);
    let {offsetWidth,offsetHeight, offsetLeft, offsetTop} = el;
    console.log(offsetHeight);
    offsetTop-=offsetTop>0?28:0;
    this.style = `posotion:absolute;width:${offsetWidth}px;height:${offsetHeight-28}px;left:${offsetLeft}px;top:${offsetTop}px;`;
    console.log(this.style);
    this.trustedStyle = this.sanitizer.bypassSecurityTrustStyle(this.style);
  }
  zoom(){
    const el = this.element.nativeElement;
    console.log(el);
    const {clientHeight,offsetHeight} = el;
    console.log(offsetHeight, clientHeight);
    if(this.zoomed){
      this.trustedStyle = this.sanitizer.bypassSecurityTrustStyle(this.style);
    }else{
      this.trustedStyle = this.sanitizer.bypassSecurityTrustStyle(`
      z-index:9;posotion:absolute;width:100%;height:100%;left:0;top:0;`);
    }
    this.zoomed = !this.zoomed;
  }

}
