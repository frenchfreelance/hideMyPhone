/*
 * hideMyPhone (jQuery Plugin)
 * Version: 0.1.0
 * Date: 2022 August
 * Author: Alexandre Vasseur
 * Description and Demo: http://www.alexandre-vasseur.fr/hide-my-phone/
 *
 *
 * data-i = indicative
 * data-r = phone without indicative
 * data-dp1 = first part of the text of the phone
 * data-dp2 = second part of the text of the phone
 *
 * Example of use HTML: <a class="phone" href="" data-i="+33" data-r="783688537" data-dp1="07" data-dp2="83 68 85 37">Call me</a>
 * Usage example: $( "a.phone" ).hide-my-phone();
 */

(function($) {
	$.fn.hideMyPhone = function() {
		return $(this).each(function() {
		//	get the link
			var link = $(this);

		//	set if there is a subject or not
			var indicative = link.data('i');

		//	set if there is a subject or not
			var phoneRest = link.data('r');


		//	generating the phone number for display
			var phone = link.data('dp1') + ' ' + link.data('dp2');

		//	generate the new fresh href
			link.attr('href', 'tel' + ':' + indicative + '' + phoneRest);

		//	eventually change the text if empty by the phone
			if (link.html() === '' || link.html() === '&nbsp;') { link.html(phone); }
		});
	};
})(jQuery);
