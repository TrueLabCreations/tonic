"use strict";

import type { AnyCnameRecord } from "dns";

declare global {

  namespace JSX {

    type ElementType = HTMLElement;

    interface Element extends ElementType { }

    interface IntrinsicElements {
      // HTML
      // a: DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;
      // abbr: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      // address: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      // area: React.DetailedHTMLProps<React.AreaHTMLAttributes<HTMLAreaElement>, HTMLAreaElement>;
      // article: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      // aside: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      // audio: React.DetailedHTMLProps<React.AudioHTMLAttributes<HTMLAudioElement>, HTMLAudioElement>;
      // b: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      // base: React.DetailedHTMLProps<React.BaseHTMLAttributes<HTMLBaseElement>, HTMLBaseElement>;
      // bdi: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      // bdo: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      // big: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      // blockquote: React.DetailedHTMLProps<React.BlockquoteHTMLAttributes<HTMLElement>, HTMLElement>;
      // body: React.DetailedHTMLProps<React.HTMLAttributes<HTMLBodyElement>, HTMLBodyElement>;
      br: BaseElement<HTMLBRElement>; // React.DetailedHTMLProps<React.HTMLAttributes<HTMLBRElement>, HTMLBRElement>;
      // button: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
      // canvas: React.DetailedHTMLProps<React.CanvasHTMLAttributes<HTMLCanvasElement>, HTMLCanvasElement>;
      // caption: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      // cite: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      // code: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      // col: React.DetailedHTMLProps<React.ColHTMLAttributes<HTMLTableColElement>, HTMLTableColElement>;
      // colgroup: React.DetailedHTMLProps<React.ColgroupHTMLAttributes<HTMLTableColElement>, HTMLTableColElement>;
      // data: React.DetailedHTMLProps<React.DataHTMLAttributes<HTMLDataElement>, HTMLDataElement>;
      // datalist: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDataListElement>, HTMLDataListElement>;
      // dd: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      // del: React.DetailedHTMLProps<React.DelHTMLAttributes<HTMLElement>, HTMLElement>;
      // details: React.DetailedHTMLProps<React.DetailsHTMLAttributes<HTMLElement>, HTMLElement>;
      // dfn: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      // dialog: React.DetailedHTMLProps<React.DialogHTMLAttributes<HTMLDialogElement>, HTMLDialogElement>;
      div: BaseElement<HTMLDivElement>; // DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
      // dl: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDListElement>, HTMLDListElement>;
      // dt: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      // em: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      // embed: React.DetailedHTMLProps<React.EmbedHTMLAttributes<HTMLEmbedElement>, HTMLEmbedElement>;
      // fieldset: React.DetailedHTMLProps<React.FieldsetHTMLAttributes<HTMLFieldSetElement>, HTMLFieldSetElement>;
      // figcaption: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      // figure: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      footer: BaseElement<HTMLDivElement>; //React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      // form: React.DetailedHTMLProps<React.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>;
      // h1: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
      // h2: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
      // h3: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
      // h4: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
      // h5: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
      // h6: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
      // head: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadElement>, HTMLHeadElement>;
      header: BaseElement<HTMLDivElement>; //React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      // hgroup: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      // hr: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHRElement>, HTMLHRElement>;
      // html: React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLHtmlElement>, HTMLHtmlElement>;
      // i: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      // iframe: React.DetailedHTMLProps<React.IframeHTMLAttributes<HTMLIFrameElement>, HTMLIFrameElement>;
      // img: React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>;
      input: InputElement;
      // ins: React.DetailedHTMLProps<React.InsHTMLAttributes<HTMLModElement>, HTMLModElement>;
      // kbd: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      // keygen: React.DetailedHTMLProps<React.KeygenHTMLAttributes<HTMLElement>, HTMLElement>;
      // label: React.DetailedHTMLProps<React.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>;
      // legend: React.DetailedHTMLProps<React.HTMLAttributes<HTMLLegendElement>, HTMLLegendElement>;
      li: BaseElement<HTMLLIElement>; //React.DetailedHTMLProps<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>;
      // link: React.DetailedHTMLProps<React.LinkHTMLAttributes<HTMLLinkElement>, HTMLLinkElement>;
      // main: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      // map: React.DetailedHTMLProps<React.MapHTMLAttributes<HTMLMapElement>, HTMLMapElement>;
      // mark: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      // menu: React.DetailedHTMLProps<React.MenuHTMLAttributes<HTMLElement>, HTMLElement>;
      // menuitem: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      // meta: React.DetailedHTMLProps<React.MetaHTMLAttributes<HTMLMetaElement>, HTMLMetaElement>;
      // meter: React.DetailedHTMLProps<React.MeterHTMLAttributes<HTMLElement>, HTMLElement>;
      // nav: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      // noindex: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      // noscript: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      // object: React.DetailedHTMLProps<React.ObjectHTMLAttributes<HTMLObjectElement>, HTMLObjectElement>;
      // ol: React.DetailedHTMLProps<React.OlHTMLAttributes<HTMLOListElement>, HTMLOListElement>;
      // optgroup: React.DetailedHTMLProps<React.OptgroupHTMLAttributes<HTMLOptGroupElement>, HTMLOptGroupElement>;
      // option: React.DetailedHTMLProps<React.OptionHTMLAttributes<HTMLOptionElement>, HTMLOptionElement>;
      // output: React.DetailedHTMLProps<React.OutputHTMLAttributes<HTMLElement>, HTMLElement>;
      p: BaseElement<HTMLParagraphElement>;
      // param: React.DetailedHTMLProps<React.ParamHTMLAttributes<HTMLParamElement>, HTMLParamElement>;
      // picture: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      // pre: React.DetailedHTMLProps<React.HTMLAttributes<HTMLPreElement>, HTMLPreElement>;
      // progress: React.DetailedHTMLProps<React.ProgressHTMLAttributes<HTMLProgressElement>, HTMLProgressElement>;
      // q: React.DetailedHTMLProps<React.QuoteHTMLAttributes<HTMLQuoteElement>, HTMLQuoteElement>;
      // rp: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      // rt: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      // ruby: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      // s: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      // samp: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      // slot: React.DetailedHTMLProps<React.SlotHTMLAttributes<HTMLSlotElement>, HTMLSlotElement>;
      // script: React.DetailedHTMLProps<React.ScriptHTMLAttributes<HTMLScriptElement>, HTMLScriptElement>;
      // section: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      // select: React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>;
      // small: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      // source: React.DetailedHTMLProps<React.SourceHTMLAttributes<HTMLSourceElement>, HTMLSourceElement>;
      span: BaseElement<HTMLSpanElement>; // { children?: LEChildElement | LEChildElement[]} //DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;
      // strong: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      // style: React.DetailedHTMLProps<React.StyleHTMLAttributes<HTMLStyleElement>, HTMLStyleElement>;
      // sub: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      // summary: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      // sup: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      // table: React.DetailedHTMLProps<React.TableHTMLAttributes<HTMLTableElement>, HTMLTableElement>;
      // template: React.DetailedHTMLProps<React.HTMLAttributes<HTMLTemplateElement>, HTMLTemplateElement>;
      // tbody: React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>;
      // td: React.DetailedHTMLProps<React.TdHTMLAttributes<HTMLTableDataCellElement>, HTMLTableDataCellElement>;
      // textarea: React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>;
      // tfoot: React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>;
      // th: React.DetailedHTMLProps<React.ThHTMLAttributes<HTMLTableHeaderCellElement>, HTMLTableHeaderCellElement>;
      // thead: React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>;
      // time: React.DetailedHTMLProps<React.TimeHTMLAttributes<HTMLElement>, HTMLElement>;
      // title: React.DetailedHTMLProps<React.HTMLAttributes<HTMLTitleElement>, HTMLTitleElement>;
      // tr: React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement>;
      // track: React.DetailedHTMLProps<React.TrackHTMLAttributes<HTMLTrackElement>, HTMLTrackElement>;
      // u: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      ul: BaseElement<HTMLUListElement>; //React.DetailedHTMLProps<React.HTMLAttributes<HTMLUListElement>, HTMLUListElement>;
      // "var": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      // video: React.DetailedHTMLProps<React.VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement>;
      // wbr: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      // webview: React.DetailedHTMLProps<React.WebViewHTMLAttributes<HTMLWebViewElement>, HTMLWebViewElement>;

      // // SVG
      // svg: React.SVGProps<SVGSVGElement>;

      // animate: React.SVGProps<SVGElement>; // TODO: It is SVGAnimateElement but is not in TypeScript's lib.dom.d.ts for now.
      // animateMotion: React.SVGProps<SVGElement>;
      // animateTransform: React.SVGProps<SVGElement>; // TODO: It is SVGAnimateTransformElement but is not in TypeScript's lib.dom.d.ts for now.
      // circle: React.SVGProps<SVGCircleElement>;
      // clipPath: React.SVGProps<SVGClipPathElement>;
      // defs: React.SVGProps<SVGDefsElement>;
      // desc: React.SVGProps<SVGDescElement>;
      // ellipse: React.SVGProps<SVGEllipseElement>;
      // feBlend: React.SVGProps<SVGFEBlendElement>;
      // feColorMatrix: React.SVGProps<SVGFEColorMatrixElement>;
      // feComponentTransfer: React.SVGProps<SVGFEComponentTransferElement>;
      // feComposite: React.SVGProps<SVGFECompositeElement>;
      // feConvolveMatrix: React.SVGProps<SVGFEConvolveMatrixElement>;
      // feDiffuseLighting: React.SVGProps<SVGFEDiffuseLightingElement>;
      // feDisplacementMap: React.SVGProps<SVGFEDisplacementMapElement>;
      // feDistantLight: React.SVGProps<SVGFEDistantLightElement>;
      // feDropShadow: React.SVGProps<SVGFEDropShadowElement>;
      // feFlood: React.SVGProps<SVGFEFloodElement>;
      // feFuncA: React.SVGProps<SVGFEFuncAElement>;
      // feFuncB: React.SVGProps<SVGFEFuncBElement>;
      // feFuncG: React.SVGProps<SVGFEFuncGElement>;
      // feFuncR: React.SVGProps<SVGFEFuncRElement>;
      // feGaussianBlur: React.SVGProps<SVGFEGaussianBlurElement>;
      // feImage: React.SVGProps<SVGFEImageElement>;
      // feMerge: React.SVGProps<SVGFEMergeElement>;
      // feMergeNode: React.SVGProps<SVGFEMergeNodeElement>;
      // feMorphology: React.SVGProps<SVGFEMorphologyElement>;
      // feOffset: React.SVGProps<SVGFEOffsetElement>;
      // fePointLight: React.SVGProps<SVGFEPointLightElement>;
      // feSpecularLighting: React.SVGProps<SVGFESpecularLightingElement>;
      // feSpotLight: React.SVGProps<SVGFESpotLightElement>;
      // feTile: React.SVGProps<SVGFETileElement>;
      // feTurbulence: React.SVGProps<SVGFETurbulenceElement>;
      // filter: React.SVGProps<SVGFilterElement>;
      // foreignObject: React.SVGProps<SVGForeignObjectElement>;
      // g: React.SVGProps<SVGGElement>;
      // image: React.SVGProps<SVGImageElement>;
      // line: React.SVGProps<SVGLineElement>;
      // linearGradient: React.SVGProps<SVGLinearGradientElement>;
      // marker: React.SVGProps<SVGMarkerElement>;
      // mask: React.SVGProps<SVGMaskElement>;
      // metadata: React.SVGProps<SVGMetadataElement>;
      // mpath: React.SVGProps<SVGElement>;
      // path: React.SVGProps<SVGPathElement>;
      // pattern: React.SVGProps<SVGPatternElement>;
      // polygon: React.SVGProps<SVGPolygonElement>;
      // polyline: React.SVGProps<SVGPolylineElement>;
      // radialGradient: React.SVGProps<SVGRadialGradientElement>;
      // rect: React.SVGProps<SVGRectElement>;
      // stop: React.SVGProps<SVGStopElement>;
      // switch: React.SVGProps<SVGSwitchElement>;
      // symbol: React.SVGProps<SVGSymbolElement>;
      // text: React.SVGProps<SVGTextElement>;
      // textPath: React.SVGProps<SVGTextPathElement>;
      // tspan: React.SVGProps<SVGTSpanElement>;
      // use: React.SVGProps<SVGUseElement>;
      // view: React.SVGProps<SVGViewElement>;
    }
  }
}

// import type CSS from 'csstype';

interface LEPropsType {
  [key: string | number]: any;
}

interface LEState {
  [key: string]: any;
}

export interface LEStyleType {
  [key: string]: any;
}

export type LEStyleSheetType = string;

export class LERef<T = HTMLElement> {
  parent: LiveElement | null;
  current: T | null;
  prior: T | null;

  constructor(value?: T) {
    this.parent = null;
    this.current = value || null;
    this.prior = null;
  }
}

type TagType<P> = keyof JSX.IntrinsicElements | LEConstructor | LEFunctionalComponent<P> | LEStyledConstructor;

type LETextualElement = string | number;
type LEChildElement = LiveElement | Node | LETextualElement;
type LEFragment = Iterable<LEElement>;
type LEElement = LEChildElement | LEFragment | boolean | null | undefined;
interface LEStyledComponent<P extends LEPropsType = {}> {
  props: P;
  isStyledComponent: boolean;
  tag: TagType<P>;
  style: Partial<CSSStyleDeclaration>;
};
type LEFunctionalComponent<P extends LEPropsType> = (props: P) => HTMLElement;

type LEConstructor<P extends LEPropsType = {}, T extends HTMLElement = LiveElement> = new (props?: P) => T;
type LEStyledConstructor<P extends LEPropsType = {}> = () => LEStyledComponent<P>;

const charsToEscape = /["&'<>`/]/g;
const escapeCharsTo: { [key: string]: string; } = {
  '"': '&quot;',
  '&': '&amp;',
  '\'': '&#x27;',
  '<': '&lt;',
  '>': '&gt;',
  '`': '&#x60;',
  '/': '&#x2F;'
};

class LiveElement<P extends LEPropsType = LEPropsType> extends window.HTMLElement {
  static isLiveElement: boolean = true;
  noShadow = false;
  root: HTMLElement | ShadowRoot;
  props: P = {} as any;
  private static activeRefs: LERef[] = [];
  private static refCleanup: Promise<void> | null = null;
  constructor(props?: P) {
    super();
    this.root = this;
  }

  static escape = (source: string): string => {
    if (typeof source === "string")
      return source.replace(charsToEscape, c => escapeCharsTo[c]);
    return "";
  };

  createRef = <T = HTMLElement>(value?: T): LERef<T> => {
    const ref = new LERef(value);
    ref.parent = this;
    return ref;
  };

  static cleanupRefs = () => {
    for (let index = this.activeRefs.length - 1; index >= 0; --index) {
      const ref = this.activeRefs[index];
      if ((ref.parent && !ref.parent.isConnected) || !ref.current || !ref.current.isConnected) {
        ref.current = null;
        this.activeRefs.splice(index, 1);
      }
      ref.prior = null;
    }
  };

  static scheduleRefCleanup = () => {
    if (!this.refCleanup) {
      this.refCleanup = new Promise<void>(resolve => setTimeout(() => {
        this.cleanupRefs();
        this.refCleanup = null;
        resolve();
      }, 0));
    }
  };

  static addToActiveRefs = (ref: LERef<any>) => {
    if (ref instanceof LERef) {
      if (this.activeRefs.indexOf(ref) < 0)
        this.activeRefs.push(ref);
      this.scheduleRefCleanup();
    }
  };

  getElementById = (id: string): Element | null | undefined => {
    if (this.shadowRoot)
      return this.shadowRoot.getElementById(id);
    return document.getElementById(id);
  };

  update = (ref: LERef<Element> | Element | null | undefined, element: Element | null | undefined) => {
    if (!ref || !element)
      return;

    if (ref instanceof Element) {
      ref.replaceWith(element);
      LiveElement.scheduleRefCleanup();
      return;
    }
    if (ref instanceof LERef && ref.current) {
      if (ref.current === element) {
        ref.prior?.replaceWith(element);
      }
      else {
        ref.current.replaceWith(element);
        ref.current = element;
      }
      ref.prior = null;
      LiveElement.scheduleRefCleanup();
    }
  };

  updateChildren = (ref: LERef<Element> | Element | null | undefined, element: Element | Element[] | null | undefined) => {
    if (!ref || !element)
      return;

    if (!Array.isArray(element))
      element = [element];

    if (ref instanceof Element) {
      ref.replaceChildren(...element);
      LiveElement.scheduleRefCleanup();
      return;
    }
    if (ref instanceof LERef && ref.current) {
      ref.current.replaceChildren(...element);
      LiveElement.scheduleRefCleanup();
    }
  };

  render = (): any | null => {
    return null;
  };
}

namespace LiveElement {

  const styleToString = (style: LEStyleType): string =>
    Object.keys(style).reduce((result, key) =>
      `${result}${key.split(/(?=[A-Z])/).join("-").toLowerCase()}:${style[key]};`, "");

  // export const createElement2 = (
  //   tag: TagType,
  //   props?: LEPropsType,
  //   ...children: LEElement[]): HTMLElement | null => { return null; };
  export const createElement = <P>(
    tag: TagType<P>,
    props?: LEPropsType,
    ...children: LEElement[]): HTMLElement | null => {
    // console.log("createElement{");
    // console.dir(tag);
    // console.dir(props);
    // console.log("}");
    let element: HTMLElement;
    let root: HTMLElement | ShadowRoot;

    const appendChildren = (root: HTMLElement | ShadowRoot, children: any[]) => {
      for (let index = 0; index < children.length; ++index) {
        if (typeof children[index] === "string") {
          root.append(document.createTextNode(LiveElement.escape(children[index] as string)));
        }
        else if (typeof children[index] === "number") {
          root.append(document.createTextNode(children[index]!.toString()));
        }
        else if (children[index] instanceof HTMLElement) {
          root.append(children[index] as HTMLElement);
        }
        else if (Array.isArray(children[index]))
          appendChildren(root, children[index]);
      }
    };

    if (typeof tag === "string") {
      root = element = document.createElement(tag);
    }
    else if (typeof tag === "function") {
      if ((tag as any)["isLiveElement"]) {
        const name = tag.name;

        if (!name || name.length < 2) {
          throw new Error(`LiveElement: invalid name "${name}"`);
        };

        const elementName = name.match(/[A-Z][a-z0-9]*/g)?.join("-").toLowerCase();

        if (!elementName || elementName.length < 3 || elementName.indexOf("-") <= 0) {
          throw new Error(`LiveElement: invalid element name "${elementName}"`);
        };

        if (!window.customElements.get(elementName)) {
          window.customElements.define(elementName, tag as LEConstructor<LiveElement>);
        }

        const liveElement: LiveElement = root = document.createElement(elementName) as LiveElement;

        if (!props?.noShadow && !liveElement.noShadow) {
          liveElement.root = root = liveElement.attachShadow({ mode: "open" });

          if (props?.styles && typeof props.styles === "string") {
            const styleElement = document.createElement("style");
            styleElement.append(props.styles);
            root.append(styleElement);
          }
        }

        liveElement.props = props || {};

        const result = liveElement.render();

        if (result instanceof HTMLElement)
          root.append(result);

        element = liveElement;
      }
      else {
        root = element = (tag as any)(props) as HTMLElement;
      }
    }
    else {
      const result = tag as LEStyledComponent;
      if (result.isStyledComponent && result.tag && result.style) {
        props = { ...props };
        props.style = { ...result.style, ...props.style };
        return LiveElement.createElement(result.tag, props, ...children);
      }
      return null;
    }
    // }
    // else {
    //   // console.dir(tag);
    //   return null;
    // }
    for (const property in props) {
      if (property === "style" && typeof props[property] === "object") {
        element.setAttribute(property, styleToString(props[property]));
      }
      else if (property === "ref") {
        if (props[property]) {
          const ref = props[property];
          if (ref instanceof LERef) {
            ref.prior = ref.prior || ref.current;
            ref.current = element;
            LiveElement.addToActiveRefs(ref);
          }
        }
      }
      else if (property === "className") {
        element.setAttribute("class", props[property]);
      }
      else if (typeof element[property as keyof HTMLElement] !== "undefined") {
        if (property.substring(0, 2) === "on") {
          if (typeof props[property] === "function") {
            element.addEventListener(property.substring(2), props[property]);
          }
          else if (typeof props[property] === "string") {
            element.setAttribute(property.substring(2), props[property]);
          }
          else
            element.setAttribute(property, props[property]);
        }
      }
      else if ((element as any).isLiveElement && (element as any).props) {
        (element as LiveElement).props[property] = (props[property] as string | number);
      }
      // (typeof props[property] === "string" || typeof props[property] === "number")) 

    }
    appendChildren(root, children);
    return element;
  };

}

export function styled<P = LEPropsType>(
  tag: TagType<P>,
  style: Partial<CSSStyleDeclaration>
): (props: P) => HTMLElement | null {
  // console.dir(style)
  return (props: P & Partial<HTMLElement>) => {
    // console.log("Styled{");
    // console.dir(tag);
    // console.dir(props);
    // console.dir(style);
    // console.log("}");
    return LiveElement.createElement(tag, { ...props, style: { ...((props && props.style) || {}), ...style } });
  };
};

export const createRef = <T = HTMLElement>(value?: T): LERef<T> => {
  const ref = new LERef(value);
  ref.parent = null;
  return ref;
};

export default LiveElement;

type LEBaseType<T = any, P = LEPropsType> = Partial<Omit<T, "children">> & {
  props?: P;
  // style?: Partial<CSSStyleDeclaration>;
  ref?: LERef;
  children?: Node[];
};

interface BaseElement<P = any> extends LEBaseType<HTMLElement, P> { }

interface InputElement<P = any> extends LEBaseType<HTMLInputElement, P> { }
