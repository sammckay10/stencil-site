/**
* This is an autogenerated file created by the Stencil compiler.
* It contains typing information for all components that exist in this project.
*/
/* tslint:disable */

import '@stencil/core';

import '@stencil/router';
import '@stencil/state-tunnel';
import {
  MarkdownContent,
  SiteStructureItem,
} from './global/definitions';


export namespace Components {

  interface AppBurger {
    'toggleLeftSidebar': () => void;
  }
  interface AppBurgerAttributes extends StencilHTMLAttributes {
    'toggleLeftSidebar'?: () => void;
  }

  interface AppIcon {
    'name'?: string;
  }
  interface AppIconAttributes extends StencilHTMLAttributes {
    'name'?: string;
  }

  interface AppMarked {
    'fetchPath'?: string;
    'renderer'?: (doc: MarkdownContent) => JSX.Element;
  }
  interface AppMarkedAttributes extends StencilHTMLAttributes {
    'fetchPath'?: string;
    'renderer'?: (doc: MarkdownContent) => JSX.Element;
  }

  interface AppRoot {}
  interface AppRootAttributes extends StencilHTMLAttributes {}

  interface CustomClock {}
  interface CustomClockAttributes extends StencilHTMLAttributes {}

  interface DemoCard {
    'SourceBufferList'?: string;
    'demoUrl'?: string;
    'description'?: string;
    'imgPath'?: string;
    'name'?: string;
    'sourceUrl'?: string;
  }
  interface DemoCardAttributes extends StencilHTMLAttributes {
    'SourceBufferList'?: string;
    'demoUrl'?: string;
    'description'?: string;
    'imgPath'?: string;
    'name'?: string;
    'sourceUrl'?: string;
  }

  interface DemosPage {}
  interface DemosPageAttributes extends StencilHTMLAttributes {}

  interface DocumentComponent {
    'page': string;
  }
  interface DocumentComponentAttributes extends StencilHTMLAttributes {
    'page'?: string;
  }

  interface HighlightCodeLine {
    'lines'?: string;
  }
  interface HighlightCodeLineAttributes extends StencilHTMLAttributes {
    'lines'?: string;
  }

  interface LandingPage {}
  interface LandingPageAttributes extends StencilHTMLAttributes {}

  interface LazyIframe {
    'frameBorder'?: string;
    'height'?: string;
    'name'?: string;
    'scrolling'?: string;
    'src'?: string;
    'width'?: string;
  }
  interface LazyIframeAttributes extends StencilHTMLAttributes {
    'frameBorder'?: string;
    'height'?: string;
    'name'?: string;
    'scrolling'?: string;
    'src'?: string;
    'width'?: string;
  }

  interface LowerContentNav {
    'next'?: SiteStructureItem;
    'prev'?: SiteStructureItem;
  }
  interface LowerContentNavAttributes extends StencilHTMLAttributes {
    'next'?: SiteStructureItem;
    'prev'?: SiteStructureItem;
  }

  interface NotfoundPage {}
  interface NotfoundPageAttributes extends StencilHTMLAttributes {}

  interface PwasPage {}
  interface PwasPageAttributes extends StencilHTMLAttributes {}

  interface ResourcesPage {}
  interface ResourcesPageAttributes extends StencilHTMLAttributes {}

  interface SiteHeader {}
  interface SiteHeaderAttributes extends StencilHTMLAttributes {}

  interface SiteMenu {
    'siteStructureList': SiteStructureItem[];
  }
  interface SiteMenuAttributes extends StencilHTMLAttributes {
    'siteStructureList'?: SiteStructureItem[];
  }
}

declare global {
  interface StencilElementInterfaces {
    'AppBurger': Components.AppBurger;
    'AppIcon': Components.AppIcon;
    'AppMarked': Components.AppMarked;
    'AppRoot': Components.AppRoot;
    'CustomClock': Components.CustomClock;
    'DemoCard': Components.DemoCard;
    'DemosPage': Components.DemosPage;
    'DocumentComponent': Components.DocumentComponent;
    'HighlightCodeLine': Components.HighlightCodeLine;
    'LandingPage': Components.LandingPage;
    'LazyIframe': Components.LazyIframe;
    'LowerContentNav': Components.LowerContentNav;
    'NotfoundPage': Components.NotfoundPage;
    'PwasPage': Components.PwasPage;
    'ResourcesPage': Components.ResourcesPage;
    'SiteHeader': Components.SiteHeader;
    'SiteMenu': Components.SiteMenu;
  }

  interface StencilIntrinsicElements {
    'app-burger': Components.AppBurgerAttributes;
    'app-icon': Components.AppIconAttributes;
    'app-marked': Components.AppMarkedAttributes;
    'app-root': Components.AppRootAttributes;
    'custom-clock': Components.CustomClockAttributes;
    'demo-card': Components.DemoCardAttributes;
    'demos-page': Components.DemosPageAttributes;
    'document-component': Components.DocumentComponentAttributes;
    'highlight-code-line': Components.HighlightCodeLineAttributes;
    'landing-page': Components.LandingPageAttributes;
    'lazy-iframe': Components.LazyIframeAttributes;
    'lower-content-nav': Components.LowerContentNavAttributes;
    'notfound-page': Components.NotfoundPageAttributes;
    'pwas-page': Components.PwasPageAttributes;
    'resources-page': Components.ResourcesPageAttributes;
    'site-header': Components.SiteHeaderAttributes;
    'site-menu': Components.SiteMenuAttributes;
  }


  interface HTMLAppBurgerElement extends Components.AppBurger, HTMLStencilElement {}
  var HTMLAppBurgerElement: {
    prototype: HTMLAppBurgerElement;
    new (): HTMLAppBurgerElement;
  };

  interface HTMLAppIconElement extends Components.AppIcon, HTMLStencilElement {}
  var HTMLAppIconElement: {
    prototype: HTMLAppIconElement;
    new (): HTMLAppIconElement;
  };

  interface HTMLAppMarkedElement extends Components.AppMarked, HTMLStencilElement {}
  var HTMLAppMarkedElement: {
    prototype: HTMLAppMarkedElement;
    new (): HTMLAppMarkedElement;
  };

  interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {}
  var HTMLAppRootElement: {
    prototype: HTMLAppRootElement;
    new (): HTMLAppRootElement;
  };

  interface HTMLCustomClockElement extends Components.CustomClock, HTMLStencilElement {}
  var HTMLCustomClockElement: {
    prototype: HTMLCustomClockElement;
    new (): HTMLCustomClockElement;
  };

  interface HTMLDemoCardElement extends Components.DemoCard, HTMLStencilElement {}
  var HTMLDemoCardElement: {
    prototype: HTMLDemoCardElement;
    new (): HTMLDemoCardElement;
  };

  interface HTMLDemosPageElement extends Components.DemosPage, HTMLStencilElement {}
  var HTMLDemosPageElement: {
    prototype: HTMLDemosPageElement;
    new (): HTMLDemosPageElement;
  };

  interface HTMLDocumentComponentElement extends Components.DocumentComponent, HTMLStencilElement {}
  var HTMLDocumentComponentElement: {
    prototype: HTMLDocumentComponentElement;
    new (): HTMLDocumentComponentElement;
  };

  interface HTMLHighlightCodeLineElement extends Components.HighlightCodeLine, HTMLStencilElement {}
  var HTMLHighlightCodeLineElement: {
    prototype: HTMLHighlightCodeLineElement;
    new (): HTMLHighlightCodeLineElement;
  };

  interface HTMLLandingPageElement extends Components.LandingPage, HTMLStencilElement {}
  var HTMLLandingPageElement: {
    prototype: HTMLLandingPageElement;
    new (): HTMLLandingPageElement;
  };

  interface HTMLLazyIframeElement extends Components.LazyIframe, HTMLStencilElement {}
  var HTMLLazyIframeElement: {
    prototype: HTMLLazyIframeElement;
    new (): HTMLLazyIframeElement;
  };

  interface HTMLLowerContentNavElement extends Components.LowerContentNav, HTMLStencilElement {}
  var HTMLLowerContentNavElement: {
    prototype: HTMLLowerContentNavElement;
    new (): HTMLLowerContentNavElement;
  };

  interface HTMLNotfoundPageElement extends Components.NotfoundPage, HTMLStencilElement {}
  var HTMLNotfoundPageElement: {
    prototype: HTMLNotfoundPageElement;
    new (): HTMLNotfoundPageElement;
  };

  interface HTMLPwasPageElement extends Components.PwasPage, HTMLStencilElement {}
  var HTMLPwasPageElement: {
    prototype: HTMLPwasPageElement;
    new (): HTMLPwasPageElement;
  };

  interface HTMLResourcesPageElement extends Components.ResourcesPage, HTMLStencilElement {}
  var HTMLResourcesPageElement: {
    prototype: HTMLResourcesPageElement;
    new (): HTMLResourcesPageElement;
  };

  interface HTMLSiteHeaderElement extends Components.SiteHeader, HTMLStencilElement {}
  var HTMLSiteHeaderElement: {
    prototype: HTMLSiteHeaderElement;
    new (): HTMLSiteHeaderElement;
  };

  interface HTMLSiteMenuElement extends Components.SiteMenu, HTMLStencilElement {}
  var HTMLSiteMenuElement: {
    prototype: HTMLSiteMenuElement;
    new (): HTMLSiteMenuElement;
  };

  interface HTMLElementTagNameMap {
    'app-burger': HTMLAppBurgerElement
    'app-icon': HTMLAppIconElement
    'app-marked': HTMLAppMarkedElement
    'app-root': HTMLAppRootElement
    'custom-clock': HTMLCustomClockElement
    'demo-card': HTMLDemoCardElement
    'demos-page': HTMLDemosPageElement
    'document-component': HTMLDocumentComponentElement
    'highlight-code-line': HTMLHighlightCodeLineElement
    'landing-page': HTMLLandingPageElement
    'lazy-iframe': HTMLLazyIframeElement
    'lower-content-nav': HTMLLowerContentNavElement
    'notfound-page': HTMLNotfoundPageElement
    'pwas-page': HTMLPwasPageElement
    'resources-page': HTMLResourcesPageElement
    'site-header': HTMLSiteHeaderElement
    'site-menu': HTMLSiteMenuElement
  }

  interface ElementTagNameMap {
    'app-burger': HTMLAppBurgerElement;
    'app-icon': HTMLAppIconElement;
    'app-marked': HTMLAppMarkedElement;
    'app-root': HTMLAppRootElement;
    'custom-clock': HTMLCustomClockElement;
    'demo-card': HTMLDemoCardElement;
    'demos-page': HTMLDemosPageElement;
    'document-component': HTMLDocumentComponentElement;
    'highlight-code-line': HTMLHighlightCodeLineElement;
    'landing-page': HTMLLandingPageElement;
    'lazy-iframe': HTMLLazyIframeElement;
    'lower-content-nav': HTMLLowerContentNavElement;
    'notfound-page': HTMLNotfoundPageElement;
    'pwas-page': HTMLPwasPageElement;
    'resources-page': HTMLResourcesPageElement;
    'site-header': HTMLSiteHeaderElement;
    'site-menu': HTMLSiteMenuElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
