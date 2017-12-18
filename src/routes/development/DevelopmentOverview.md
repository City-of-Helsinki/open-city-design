## Getting started

Open City Design System is build using Components, Modules and Patterns. 
The Design System is built using Bootstrap 4 as a reference library. 
You can learn more about Bootstrap and their documentation here [Bootstrap 4 documentation](https://google.com).

#### Components


For clarity, it's recommended that koro sections split white sections and are filled with a brand color.

Use `.section-koro` class in your `<section>` tag to enable the koro shapes around the section. The koros then have four attributes, each that can be put in as separate classname.

 - `.hel-[color]` defines the color of the section. Brand colors are defined according to their names, for example `.hel-metro` or `.hel-suomenlinna`.
 - `.koro-[shape]`, where shape can be any of the following:
      - `normal`
      - `wave`
      - `beat`
      - `pulse`
      - `storm`
- `.koro-[edge]` defines if the koro shape is placed in `top` or `bottom`.
- `.koro-size-[size]` defines the zoom and the size. `x1` koro is 10px high, `x2` 20px and so on.

You can learn more about koros and their usage elsewhere from the [styles subsection about koros](/development/styles/koro).
