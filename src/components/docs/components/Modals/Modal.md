## How it works

Before getting started with Bootstrap’s modal component, be sure to read the following as our menu options have recently changed.

* Modals are built with HTML, CSS, and JavaScript. They’re positioned over everything else in the document and remove scroll from the `&lt;body&gt;` so that modal content scrolls instead.
* Clicking on the modal “backdrop” will automatically close the modal.
* Bootstrap only supports one modal window at a time. Nested modals aren’t supported as we believe them to be poor user experiences.
* Modals use `position: fixed`, which can sometimes be a bit particular about its rendering. Whenever possible, place your modal HTML in a top-level position to avoid potential interference from other elements. You’ll likely run into issues when nesting a `.modal` within another fixed element.
* Once again, due to `position: fixed`, there are some caveats with using modals on mobile devices. [See Bootstrap browser support docs](https://getbootstrap.com/docs/4.0/getting-started/browsers-devices/#modals-and-dropdowns-on-mobile) for details.
* Due to how HTML5 defines its semantics, [the `autofocus` HTML attribute]("https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-autofocus) has no effect in Bootstrap modals. To achieve the same effect, use some custom JavaScript.