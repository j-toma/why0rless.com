jQuery(document).ready(function($) {

if (jQuery.fn.popup) {
   $('.WelcomePopup').trigger('click');
}

var $opened = null;

$('.MegaMenus .Tab').mouseenter(function() {
    var $this = $(this);

    if ($opened == null)
        $this.addClass('Open');
}).mouseleave(function() {
    var $this = $(this);

    if (!$this.hasClass('Open-Click'))
        $this.removeClass('Open');
});

$('.JumpToCategory a').click(function(event) {
    event.preventDefault();

    // Calculate destination
    var dest = 0;
    if ($(this.hash).offset().top > $(document).height()-$(window).height()) {
        dest = $(document).height()-$(window).height();
    } else {
        dest = $(this.hash).offset().top;
    }

    // Scroll to destination
    $('html,body').animate({
        scrollTop:dest
    }, 200);
});

$('.MegaMenus .Tab > .Wrap').click(function() {
    var $this = $(this).closest('.Tab');

    // Check to see if the tab is open.
    if ($this.hasClass('Open-Click')) {
        $opened.removeClass('Open-Click Open');
        $opened = null;
    } else {
        if ($opened !== null && $opened != $this) {
            // Close the previous opened menu.
            $opened.removeClass('Open-Click Open');
        }

        $opened = $this;
        $opened.addClass('Open-Click Open');
    }
});

$('.Mega .Close').click(function(e) {
    $(this).closest('.Tab').removeClass('Open-Click Open');
    $opened = null;
    return false;
});

// Move cursor on Reply click
$('.ReactReply').click(function(e) {
    if ($('#Form_Body').length > 0) {
        $('#Form_PostComment').focus(); // Focus button first to scroll page far enough
        $('#Form_Body').focus();
        return false;
    }
});

});
