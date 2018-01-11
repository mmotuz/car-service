jQuery(document).ready(function() {
    jQuery("#mainMenu li").click(function(event) {
        event.preventDefault();
        const showTabName = jQuery(this).attr('tab');
        if(!showTabName) return;

        const selectedTab = jQuery("#mainMenu li.selected");
        const selectedTabName = jQuery('#'+selectedTab.attr('tab'));

        selectedTab.removeClass("selected");
        selectedTabName.hide();
        jQuery(this).addClass("selected");
        jQuery('#'+showTabName).fadeIn({duration: 1000});
    });
});