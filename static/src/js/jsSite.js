  $(function() {
                $('.carousel').carousel();
  });

  jQuery(document).ready(function() {
	jQuery(".depois a").click(function(){
		jQuery('#rodape').animate({"height":1},'slow');
		jQuery('#rodape').append('<div class="up"><p class="lm"><a href="javascript:void(0);">&nbsp;</a></p></div>');
		
		jQuery('#rodape').find('.up a').click(function(){
			jQuery('div').remove('.up');
			jQuery('#rodape').animate({"height":55},'slow');
		});
	});
	
	//jQuery('#rodape').css('position','absolute');
	//jQuery(document).scroll(function() {
	//	jQuery('#rodape').css('bottom',('-'+jQuery('body').scrollTop()+'px'));
	//});
	
});