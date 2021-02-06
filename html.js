export default `<!doctype html>
<html lang="en" with-selection-styled>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Lazy Invoice · By Adam Schwartz · Powered by Cloudflare Workers®</title>

    <meta name="description" content="Lazily generate PDF invoices—powered by Cloudflare Workers®.">
    <meta name="keywords" content="Invoice, PDF, generation, generate, Cloudflare Workers®, app">
    <meta name="author" content="Adam Schwartz">
    <meta name="generator" content="Adam Schwartz">

    <meta property="og:type" content="website">
    <meta property="og:title" content="Lazy Invoice">
    <meta property="og:description" content="Lazily generate PDF invoices—powered by Cloudflare Workers®.">
    <meta property="og:url" content="https://lazy.invoice.workers.dev">

    <meta name="twitter:site" content="@adamfschwartz">
    <meta name="twitter:creator" content="@adamfschwartz">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Lazy Invoice">
    <meta name="twitter:description" content="Lazily generate PDF invoices—powered by Cloudflare Workers®.">
    <meta name="twitter:url" content="https://lazy.invoice.workers.dev">

    <link href="https://ui.components.workers.dev/?components=Link,Button,FormField,Input,Checkbox,Stack,Row,Dialog" rel="stylesheet">
    <script>/* focus-visible polyfill */!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e():"function"==typeof define&&define.amd?define(e):e()}(0,function(){"use strict";"undefined"!=typeof document&&function(t){var e;function n(){e||(e=!0,t())}["interactive","complete"].indexOf(document.readyState)>=0?t():(e=!1,document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1))}(function(){var t=!0,e=!1,n=null,o={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function r(t){return!!(t&&t!==document&&"HTML"!==t.nodeName&&"BODY"!==t.nodeName&&"classList"in t&&"contains"in t.classList)}function i(t){""!==t.getAttribute("is-focus-visible")&&t.setAttribute("is-focus-visible","")}function u(e){t=!1}function c(){document.addEventListener("mousemove",s),document.addEventListener("mousedown",s),document.addEventListener("mouseup",s),document.addEventListener("pointermove",s),document.addEventListener("pointerdown",s),document.addEventListener("pointerup",s),document.addEventListener("touchmove",s),document.addEventListener("touchstart",s),document.addEventListener("touchend",s)}function s(e){"html"!==e.target.nodeName.toLowerCase()&&(t=!1,document.removeEventListener("mousemove",s),document.removeEventListener("mousedown",s),document.removeEventListener("mouseup",s),document.removeEventListener("pointermove",s),document.removeEventListener("pointerdown",s),document.removeEventListener("pointerup",s),document.removeEventListener("touchmove",s),document.removeEventListener("touchstart",s),document.removeEventListener("touchend",s))}document.addEventListener("keydown",function(e){r(document.activeElement)&&i(document.activeElement),t=!0},!0),document.addEventListener("mousedown",u,!0),document.addEventListener("pointerdown",u,!0),document.addEventListener("touchstart",u,!0),document.addEventListener("focus",function(e){var n,u,c;r(e.target)&&(t||(n=e.target,u=n.type,"INPUT"==(c=n.tagName)&&o[u]&&!n.readOnly||"TEXTAREA"==c&&!n.readOnly||n.isContentEditable))&&i(e.target)},!0),document.addEventListener("blur",function(t){var o;r(t.target)&&t.target.hasAttribute("is-focus-visible")&&(e=!0,window.clearTimeout(n),n=window.setTimeout(function(){e=!1,window.clearTimeout(n)},100),""===(o=t.target).getAttribute("is-focus-visible")&&o.removeAttribute("is-focus-visible"))},!0),document.addEventListener("visibilitychange",function(n){"hidden"==document.visibilityState&&(e&&(t=!0),c())},!0),c(),document.documentElement.setAttribute("js-focus-visible-polyfill-available","")})})</script>
    <script>/* dialog */(()=>{const t='*[tabindex]:not([tabindex="-1"]),a[href]:not([tabindex="-1"]),input:not([disabled]),select:not([disabled]),textarea:not([disabled]),button:not([disabled])',e=e=>{e.querySelectorAll(t).forEach(t=>{if(t.setAttribute("data-inert",""),t.matches("[tabindex]")){const e=t.getAttribute("tabindex");e&&t.setAttribute("data-original-tabindex",e),t.setAttribute("tabindex",-1)}else t.setAttribute("disabled","")})},i=(t=>{let e=!1;return()=>{e||(t(),e=!0)}})(()=>{let t;document.documentElement.addEventListener("dialogOpen",({detail:{dialog:e}})=>{t&&(t.originalActiveElement=null,t.close()),t=e}),document.documentElement.addEventListener("dialogClose",({detail:{dialog:e}})=>{t=null})});window.Dialog=class{constructor(t){this.el=t,this.el.setAttribute("tabindex",0),this.backdropEl=t.closest("[dialog-backdrop]"),this.setupARIA(),this.prepareFocusTrap(),this.checkForEscape=(t=>e=>{e.target.matches("input[type=text],input[type=email],input[type=number],input[type=password],input[type=search],input[type=tel],input[type=url],textarea")||"Escape"===e.key&&t.close()})(this),this.setupClosers(),e(this.backdropEl),this.isOpen=!1,i()}setupARIA(){this.el.setAttribute("role","dialog"),this.el.setAttribute("aria-modal",!0)}prepareFocusTrap(){const e='<div tabindex="0"></div>';this.el.insertAdjacentHTML("beforebegin",e),this.el.insertAdjacentHTML("afterend",e),this.trapFocus=(e=>i=>{if(e.contains(i.target))return;const s=Array.from(e.querySelectorAll(t));s.unshift(e),e.previousElementSibling===i.target?s[s.length-1].focus():e.nextElementSibling===i.target&&s[0].focus()})(this.el)}setupClosers(){this.backdropEl.addEventListener("click",t=>{const e=t.target;(e===this.backdropEl||e.matches("[dialog-close]")||e.closest("[dialog-close]"))&&this.close()})}dispatch(t){this.el.dispatchEvent(new CustomEvent(t,{bubbles:!0,detail:{dialog:this}}))}open(){if(this.isOpen)return;this.isOpen=!0,this.backdropEl.querySelectorAll("[data-inert]").forEach(t=>{if(t.matches("[tabindex]")){const e=t.getAttribute("data-original-tabindex");t.removeAttribute("tabindex"),null!==e&&t.setAttribute("tabindex",e)}else t.removeAttribute("disabled");t.removeAttribute("data-inert")}),this.originalActiveElement=document.activeElement,this.backdropEl.setAttribute("is-active",""),document.documentElement.setAttribute("is-dialog",""),document.addEventListener("focus",this.trapFocus,!0),document.addEventListener("keyup",this.checkForEscape,!0);const t=this.el.querySelector("[dialog-autofocus]");t?t.focus():matchMedia("(hover: hover) and (pointer: fine)").matches&&(this.el.focus({preventScroll:!0}),requestAnimationFrame(()=>{requestAnimationFrame(()=>{this.backdropEl.scrollTo(0,0)})})),this.dispatch("dialogOpen")}close(){this.isOpen&&(this.isOpen=!1,e(this.backdropEl),this.backdropEl.removeAttribute("is-active",""),document.documentElement.removeAttribute("is-dialog"),document.removeEventListener("focus",this.trapFocus,!0),document.removeEventListener("keyup",this.checkForEscape,!0),this.originalActiveElement&&this.originalActiveElement.focus(),this.dispatch("dialogClose"))}}})()</script>
    <script>/* autoresize textarea */(function(){window.btoa&&window.getComputedStyle&&document.documentElement.querySelector&&document.documentElement.setAttribute&&((window.TextareaAutoResize={}).init=function(a){if(!("TEXTAREA"!==a.nodeName||a.getAttribute("textarea-auto-resize-initted-"))){a.setAttribute("textarea-auto-resize-initted",!0),a.style.overflow="hidden",a.style.overflowY="hidden",a.style.wordWrap="break-word";var b=a.value;a.value="",a.value=b;var c="position: absolute; top: -999px; right: auto; bottom: auto;left: 0; overflow: hidden; -webkit-box-sizing: content-box;-moz-box-sizing: content-box; box-sizing: content-box;min-height: 0 !important; height: 0 !important; padding: 0;word-wrap: break-word; border: 0;",d=document.createElement("textarea");d.setAttribute("tabindex",-1),d.setAttribute("aria-label","Text input clone"),d.setAttribute("style",c);var e=getComputedStyle(a),f="border-box"===e.getPropertyValue("box-sizing")||"border-box"===e.getPropertyValue("-moz-box-sizing")||"border-box"===e.getPropertyValue("-webkit-box-sizing"),g=f?{width:parseInt(e.getPropertyValue("border-right-width"),10)+parseInt(e.getPropertyValue("padding-right"),10)+parseInt(e.getPropertyValue("padding-left"),10)+parseInt(e.getPropertyValue("border-left-width"),10),height:parseInt(e.getPropertyValue("border-top-width"),10)+parseInt(e.getPropertyValue("padding-top"),10)+parseInt(e.getPropertyValue("padding-bottom"),10)+parseInt(e.getPropertyValue("border-bottom-width"),10)}:{width:0,height:0},h=parseInt(e.getPropertyValue("min-height"),10),i=parseInt(e.getPropertyValue("height"),10),j=Math.max(h,i)-g.height,k=parseInt(e.getPropertyValue("max-height"),10);k=k&&0<k?k:9e4,d.parentNode!==document.body&&document.body.appendChild(d),a.style.resize="none";var l,m,n=["font-family","font-size","font-weight","font-style","letter-spacing","line-height","text-transform","word-spacing","text-indent"],o=function(){l=a,e=getComputedStyle(a),n.forEach(function(a){c+=a+":"+e.getPropertyValue(a)+";"}),d.setAttribute("style",c)},p=function(){if(l!==a&&o(),!m){m=!0,d.value=a.value+"",d.style.overflowY=a.style.overflowY;var b=""===a.style.height?"auto":parseInt(a.style.height,10),c=getComputedStyle(a).getPropertyValue("width");if("px"===c.substr(c.length-2,2)){var e=parseInt(c,10)-g.width;d.style.width=e+"px"}var f,h=d.scrollHeight;h>k?(h=k,f="scroll"):h<j&&(h=j),h+=g.height,a.style.overflowY=f||"hidden",b!==h&&(a.style.height=h+"px"),setTimeout(function(){m=!1},1000)}},q=function(){m=!1,p()};window.addEventListener("resize",q),a.addEventListener("input",function(){q()}),setTimeout(p)}})})();</script>

    <style>
      html {
        --font-family: Avenir, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
        --color-rgb: 8, 10, 60;
        --accent-color-rgb: 74, 76, 105;
      }

      @media(min-width: 84em) {
        body {
          font-size: 1.2em;
        }
      }

      a {
        color: rgb(var(--accent-color-rgb));
      }

      html {
        --preview-background: #525659; /* Chrome PDF viewer background color */
        background: var(--preview-background);
      }

      html, body {
        overscroll-behavior: none;
      }

      body {
        margin: 0;
      }

      html, body, .Surface {
        height: 100%;
      }

      .Surface {
        display: flex;
      }

      h1 {
        margin: 0;
        font-weight: bold;
        font-size: 1.25em;
      }

      @media (max-width: 360px) {
        h1 {
          font-size: 1.15em;
        }
      }

      h1 + .Button {
        margin-left: auto;
      }

      .Button-is-help {
        margin: -.5em 0;
        padding: 0;
        font-size: 1.0625em;
        font-weight: bold;
        text-align: center;
        width: 1.76470588236em;
        height: 1.76470588236em;
        line-height: 1.9;
        border-radius: 50%;
      }

      .FormField--label {
        font-weight: 500;
      }

      .Panel {
        position: relative;
        z-index: 1;
        display: flex;
        flex-direction: column;
        width: 28em;
        background: #efefef;
        box-shadow: 0 0 1em rgba(0, 0, 0, .5);
      }

      .Panel--top, .Panel--main, .Panel--bottom {
        box-sizing: border-box;
        padding-left: 1.5em;
        padding-right: 1.5em;
      }

      .Panel--top {
        position: relative;
        z-index: 2;
        display: flex;
        align-items: center;
        padding-top: 1em;
        padding-bottom: 1em;
        background: #fff;
        box-shadow: 0 1px rgba(0, 0, 0, .07), 0 3px 3px -2px rgba(0, 0, 0, .09);
        flex-shrink: 0;
      }

      .Panel--main {
        padding-top: 1.5em;
        padding-bottom: 1.5em;
        overflow: auto;
        -webkit-overflow-scrolling: touch;
      }

      .Panel--deemphasized {
        position: relative;
      }

      .Panel--deemphasized::after {
        content: "";
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: #efefef;
        opacity: .3;
      }

      .Panel--bottom {
        position: relative;
        z-index: 1;
        margin-top: auto;
        padding-top: 1em;
        padding-bottom: 1em;
        background: #fff;
        box-shadow: 0 -1px rgba(0, 0, 0, .07), 0 -3px 3px -2px rgba(0, 0, 0, .09);
        flex-shrink: 0;
      }

      .Preview {
        flex: 1;
        margin: 0;
        padding: 0;
      }

      .Preview--iframe {
        display: block;
        border: 0;
        height: 100%;
        width: 100%;
      }

      .LazyInvoiceLogo > span {
        display: inline-block;
      }

      .LazyInvoiceLogo--muted {
        position: relative;
      }

      .LazyInvoiceLogo--muted::after {
        content: "";
        display: block;
        position: absolute;
        top: 3px;
        right: 0;
        bottom: 3px;
        left: 0;
        background: #fff;
        opacity: .5;
      }

      @media (max-width: 319px) {
        .LazyInvoiceLogo > .LazyInvoiceLogo--muted {
          display: none;
        }
      }

      .Panel--bottom .Button-is-primary .mobile-only {
        display: none;
      }

      @media (max-width: 800px) {
        .Panel {
          width: 100%;
        }

        .Preview,
        .Panel--bottom .Button-is-primary .desktop-only,
        .Panel--bottom .Button-is-bordered {
          display: none;
        }

        .Panel--bottom .Button-is-primary .mobile-only {
          display: inline;
        }
      }

      .Dialog--content .Link {
        --underline-size: 1px;
        --underline-color: rgba(var(--accent-color-rgb), .7);
        display: inline-block;
        line-height: 1.1;
      }
    </style>
  </head>

  <body>
    <div class="Surface">
      <div class="Panel">
        <div class="Panel--top">
          <h1><a href="https://lazy.invoice.workers.dev" class="Link Link-without-underline"><span class="LazyInvoiceLogo"><span>lazy.invoice</span><span class="LazyInvoiceLogo--muted">.workers.dev</span></span></a></h1>
          <button data-js-dialog-open class="Button Button-is-help Button-is-bordered" type="button" aria-label="Help">?</button>
        </div>

        <main class="Panel--main" is-smooth-scrolling>
          <form id="form" class="Stack" method="GET" action="https://generate.invoice.workers.dev">
            <div class="FormField">
              <div class="FormField--text">
                <label class="FormField--label" for="company">Company <span class="Panel--deemphasized">name &amp; address</span></label>
                <p id="company-describedby" class="FormField--description">The company or individual sending the invoice.</p>
              </div>
              <textarea class="Input Input-textarea" id="company" aria-describedby="company-describedby" name="company" rows="3" autocomplete="off" autofocus></textarea>
            </div>

            <div class="FormField">
              <div class="FormField--text">
                <label class="FormField--label" for="customer">Customer <span class="Panel--deemphasized">name &amp; address</span></label>
                <p id="customer-describedby" class="FormField--description">The company or individual receiving the invoice.</p>
              </div>
              <textarea class="Input Input-textarea" id="customer" aria-describedby="customer-describedby" name="customer" rows="3" autocomplete="off"></textarea>
            </div>

            <div class="FormField">
              <div class="FormField--text">
                <label class="FormField--label" for="description">Description</label>
                <p id="description-describedby" class="FormField--description">Default value is “Products and services”.</p>
              </div>
              <input class="Input" id="description" type="text" name="description" aria-describedby="description-describedby" autocomplete="off">
            </div>

            <div class="FormField">
              <div class="FormField--text">
                <label class="FormField--label" for="amount">Amount</label>
                <p class="FormField--description">e.g. “$100” or “¥39000” or simply “500”.</p>
              </div>
              <input class="Input" id="amount" type="text" name="amount" autocomplete="off">
            </div>

            <div class="FormField">
              <div class="FormField--text">
                <label class="FormField--label" for="total">Total <span class="Panel--deemphasized">(optional)</span></label>
              </div>
              <input class="Input" id="total" type="text" name="total" autocomplete="off">
            </div>

            <div class="FormField">
              <div class="FormField--text">
                <label class="FormField--label" for="number">Invoice Number/ID <span class="Panel--deemphasized">(optional)</span></label>
              </div>
              <input class="Input" id="number" type="text" name="number" autocomplete="off">
            </div>

            <div class="FormField">
              <div class="FormField--text">
                <label class="FormField--label" for="date">Invoice date</label>
                <p id="date-describedby" class="FormField--description">Default value is <em>today</em>.</p>
              </div>
              <input class="Input" id="date" type="text" name="date" aria-describedby="date-describedby" autocomplete="off">
            </div>
          </form>
        </main>

        <div class="Panel--bottom">
          <div class="Row">
            <button class="Button Button-is-primary" type="submit" form="form"><span class="desktop-only">Update preview</span><span class="mobile-only">Generate PDF</span></button>
            <a data-js-permalink href="https://generate.invoice.workers.dev" class="Button Button-is-bordered" type="button">Permalink</a>
          </div>
        </div>
      </div>

      <figure class="Preview">
        <iframe class="Preview--iframe" src="https://generate.invoice.workers.dev" border="0" title="Invoice PDF preview"></iframe>
      </figure>
    </div>

    <div class="Dialog---backdrop" dialog-backdrop>
      <div class="Dialog Dialog-is-medium" role="dialog" aria-modal="true" aria-labelledby="dialog-title" dialog>
        <h2 class="Dialog--title" id="dialog-title">About</h2>

        <div class="Dialog--content">
          <p>Lazy Invoice is a simple tool for generating a PDF invoice for a single product or service. Just fill out the form and see the PDF update as you go.</p>

          <p>Built by <a class="Link" href="https://adamschwartz.co" target="_blank" rel="noopener">Adam Schwartz</a> using <a class="Link" href="https://workers.cloudflare.com" target="_blank" rel="noopener">Cloudflare Workers</a>.</p>
        </div>

        <div class="Dialog--actions">
          <div class="Row">
            <button class="Button Button-is-primary" dialog-close dialog-autofocus>Done</button>
            <button class="Button Button-is-bordered" dialog-close data-js-fill-example>View example</button>
          </div>
        </div>

        <div class="Dialog--close-positioner">
          <button class="Button Button-is-close" aria-label="Close" dialog-close>
            <svg viewBox="0 0 8 8"><path stroke="currentColor" stroke-width=".75" d="M0 0 L8 8 M8 0 L0 8"/></svg>
          </button>
        </div>
      </div>
    </div>

    <script>
      const Debounce = (fn, delay) => {
        let timeout

        return () => {
          clearTimeout(timeout)
          timeout = setTimeout(() => fn(), delay)
        }
      }

      const form = document.querySelector('form')
      const iframe = document.querySelector('iframe')
      const openDialog = document.querySelector('[data-js-dialog-open]')
      const fillExample = document.querySelector('[data-js-fill-example]')
      const permalink = document.querySelector('[data-js-permalink]')

      const mobileQuery = window.matchMedia('(max-width: 800px)')

      const dialog = new Dialog(document.querySelector('[dialog]'))
      openDialog.addEventListener('click', () => dialog.open())

      fillExample.addEventListener('click', () => {
        const data = {
          company: 'Ginza Natsuno\\n4F Marunouchi 1-5-1\\nChiyoda-ku, Tokyo, Japan',
          customer: 'Sukiyabashi Jiro\\n2-15, Ginza 4-chome\\nCity Chuo, Tokyo, Japan',
          description: '4 pairs of rounded red sandalwood chopsticks',
          amount: '4 × ¥8,000 per pair',
          total: '¥32,000',
          number: '373267' // Dreams ;)
        }

        const getFieldEl = id => form.querySelector(\`#\${ id }\`)

        let pristine = true
        for (property in data) {
          const fieldEl = getFieldEl(property)
          if (fieldEl && fieldEl.value !== '') pristine = false
        }

        if (pristine === false) {
          const confirmValue = confirm('Are you sure you want to replace all of the entries in the form with the example values?')
          if (!confirmValue) return
        }

        for (property in data) {
          const fieldEl = getFieldEl(property)
          if (fieldEl) fieldEl.value = data[property]
        }

        update()
      })

      let lastPreviewURL = iframe.src
      const update = () => {
        const data = new FormData(form)
        const queryString = new URLSearchParams(data).toString()
        const url = \`\${ form.action }?\${ queryString }\`

        if (url === lastPreviewURL) return
        lastPreviewURL = url

        iframe.src = url
        permalink.href = url
      }

      form.addEventListener('submit', event => {
        if (mobileQuery.matches) return

        event.preventDefault()
        update()
      })

      const events = ['input', 'change']
      const debouncedUpdateFn = Debounce(update, 380)

      document.querySelectorAll('textarea, input').forEach(el => {
        events.forEach(eventName => {
          el.addEventListener(eventName, event => {
            if (mobileQuery.matches) return
            debouncedUpdateFn()
          })
        })
      })

      document.querySelectorAll('textarea').forEach(t => TextareaAutoResize.init(t))
    </script>
  </body>
</html>`
