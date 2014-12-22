 /**
 * jFont.js
 * @version: v1.0.0
 * @author: Dennis Hernández
 * @webSite: http://djhvscf.github.io/Blog
 *
 * Created by Dennis Hernández on 22/Dic/2014.
 *
 * Copyright (c) 2014 Dennis Hernández http://djhvscf.github.io/Blog
 *
 * The MIT License (http://www.opensource.org/licenses/mit-license.php)
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */

(function($) {
    $.fn.jFont = function(minimum, maximum, middle) {
        var oSelf = this,
			fontSize = 'font-size',
			px = 'px';
			
        $(window).resize(function() {
            var size = window.innerWidth / notZero(middle);
            if (size < minimum) {
				size = minimum;
			}
            if (size > maximum) {
				size = maximum;
			}
            oSelf.css(fontSize, size + px);
        }).trigger('resize');
		
		var notZero = function(n) {
			n = +n;
			if (!n) {
				throw new Error('Invalid dividend ' + n);
			}
			return n;
		};
    };
})(jQuery);