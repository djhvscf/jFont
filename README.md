# jFont
A jQuery plugin for dynamically changing font sizes according to screen / browser width.
Intended to be used with responsive or adaptive `CSS` layouts.

## Dependencies
This plugin has these dependencies

* >=jquery-1.8.x.js

## How to Use
Define a default `CSS` font base by setting `font-size: 1em` and `line-height: 150%` on the `body` or intended element. Declaring the `font-size` is optional, but highly recommended in case javascript is disabled. Finally, call the plugin on said element.  

**Syntax Example**  
```html
<script src="jQuery.min.js"></script>  
<script src="jQuery.fontFlex.min.js"></script>
```
```javascript
$(function() {

  // All elements
  $('body').fontFlex(14, 20, 70);

  // H1 only
  $('h1').fontFlex(24, 36, 70);	
  
});
```

**Parameters**   
`minimum` Minimum font-size in pixels  
`maximum` Maximum font-size in pixels  
`middle` Mid-range buffer. Values ranging from 60 to 70 produce the best results. Lower values produce a larger initial font-size, while higher values produce the opposite. Adjust accordingly to fit your requirements.

**Demo:** [http://djhvscf.github.io/Blog/experiments/2014/12/jFont.html](http://djhvscf.github.io/Blog/experiments/2014/12/jFont.html)

## Reporting issues
Your feedback is very appreciated!
Use this page to report issues (https://github.com/djhvscf/jFont/issues)