import {
  ComponentFactoryResolver,
  ElementRef,
  Injector,
  ViewContainerRef,
  Directive,
  Output,
  EventEmitter,
} from '@angular/core';

import { AngularDelegate } from '../../providers/angular-delegate';
import { ProxyCmp } from '../angular-component-lib/utils';

@ProxyCmp({
  tagName: 'ion-nav',
  inputs: ['animated', 'animation', 'root', 'rootParams', 'swipeGesture'],
  methods: [
    'push',
    'insert',
    'insertPages',
    'pop',
    'popTo',
    'popToRoot',
    'removeIndex',
    'setRoot',
    'setPages',
    'getActive',
    'getByIndex',
    'canGoBack',
    'getPrevious',
  ],
})
@Directive({
  selector: 'ion-nav',
})
// eslint-disable-next-line @angular-eslint/directive-class-suffix
export class NavDelegate {
  @Output() ionNavDidChange = new EventEmitter<CustomEvent>();
  @Output() ionNavWillChange = new EventEmitter<CustomEvent>();

  protected el: HTMLElement;
  constructor(
    ref: ElementRef,
    resolver: ComponentFactoryResolver,
    injector: Injector,
    angularDelegate: AngularDelegate,
    location: ViewContainerRef
  ) {
    this.el = ref.nativeElement;
    ref.nativeElement.delegate = angularDelegate.create(resolver, injector, location);
  }
}
