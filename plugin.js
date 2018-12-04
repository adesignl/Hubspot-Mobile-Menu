//////////////////////////////////////////////////////////////////////////////
//
// Mobile Menu
//
//////////////////////////////////////////////////////////////////////////////  

// menuWrapper = a comma seperated list of classes you gave the wrapper for the menus of your website you want in your mobile menu.
// logo = logo anchor link if you want it to be clickable.

function mobileMenu(menuWrapper, logo) {

    var $windowWidth = $(window).width(),
        $mainMenu = $(menuWrapper),
        $mobileMenuLocal = $('body').prepend('<nav class="mobile-menu"></nav>'),
        $mobileMenuOverlay = $('body').append('<div class="menu-overlay"></div>'),
        $mobileMenu = $('.mobile-menu'),
        $menuSVG = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M436 124H12c-6.6 0-12-5.4-12-12V80c0-6.6 5.4-12 12-12h424c6.6 0 12 5.4 12 12v32c0 6.6-5.4 12-12 12zm0 320H12c-6.6 0-12-5.4-12-12v-32c0-6.6 5.4-12 12-12h424c6.6 0 12 5.4 12 12v32c0 6.6-5.4 12-12 12zM83.4 201.7h33.8V314h-22v-76c0-2.2 0-5.2.1-9.2.1-3.9.1-7 .1-9.1L74.1 314H51.3l-21.1-94.2c0 2.1 0 5.2.1 9.1 0 3.9.1 7 .1 9.2V314H8.5V201.7h34.1L63.1 290l20.3-88.3zM221.8 221.6h-59.4v23.8H217v19.5h-54.5v28.9h62.1V314h-85.1V201.7h82.3v19.9zM242.5 201.7h24.6l44.6 78.3v-78.3h21.9V314H310l-45.7-79.7V314h-21.9V201.7zM355.5 201.7h23.8v68.9c0 7.7.9 13.3 2.7 16.9 2.8 6.3 9 9.4 18.5 9.4s15.6-3.1 18.4-9.4c1.8-3.6 2.7-9.2 2.7-16.9v-68.9h23.8v69c0 11.9-1.9 21.2-5.6 27.9-6.9 12.2-20 18.3-39.5 18.3s-32.6-6.1-39.5-18.3c-3.7-6.7-5.5-15.9-5.5-27.9v-69z"/></svg>',
        $closeSVG = '<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 384 512"><path d="M231.6 256l130.1-130.1c4.7-4.7 4.7-12.3 0-17l-22.6-22.6c-4.7-4.7-12.3-4.7-17 0L192 216.4 61.9 86.3c-4.7-4.7-12.3-4.7-17 0l-22.6 22.6c-4.7 4.7-4.7 12.3 0 17L152.4 256 22.3 386.1c-4.7 4.7-4.7 12.3 0 17l22.6 22.6c4.7 4.7 12.3 4.7 17 0L192 295.6l130.1 130.1c4.7 4.7 12.3 4.7 17 0l22.6-22.6c4.7-4.7 4.7-12.3 0-17L231.6 256z"/></svg>',
        $chevronArrow = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M441.9 167.3l-19.8-19.8c-4.7-4.7-12.3-4.7-17 0L224 328.2 42.9 147.5c-4.7-4.7-12.3-4.7-17 0L6.1 167.3c-4.7 4.7-4.7 12.3 0 17l209.4 209.4c4.7 4.7 12.3 4.7 17 0l209.4-209.4c4.7-4.7 4.7-12.3 0-17z"/></svg>';

    // if main menu doesnt exist.
    if ($mainMenu.length > 0) {
        // Add Hamburger Menu on mobileMenu() Init
        $mobileMenu.before('<button class="mobileMenuTrigger open">' + $menuSVG + '</button>');
    }

    // clone and append the main menu to a off canvas menu
    var migrateMenu = $mainMenu.find('.hs-menu-wrapper > ul')
        .clone()
        .addClass(function(index) {
            // add classes to each individual menu source
            var menu = 'menu-' + index
            return menu;
        })
        .appendTo($mobileMenu);


    // Add logo To Mobile Menu If True
    if (logo !== '') {
        var $logoClone = $(logo).eq(0).clone();
        $mobileMenu.prepend($logoClone).addClass('logo'); // add class of logo to it
    }

    // add buttons to parent menu items
    $mobileMenu.find('.hs-menu-depth-1.hs-item-has-children > ul')
        .before('<button>' + $chevronArrow + '</button>')

    // add click function for dropdowns
    $mobileMenu.find('.hs-item-has-children > button').on('click', function() {
        var isActive = $(this).hasClass('active');
        switch (isActive) {
            case true:
                $(this).toggleClass('active');
                break;
            default:
                $('.hs-item-has-children > button').removeClass('active');
                $(this).toggleClass('active');
        }
    });

    // Add Click To Open / Close Menu
    $('html').on('click', '.mobileMenuTrigger.open', function() {
        $('body').addClass('menu-open');
        $(this).removeClass('open')
            .addClass('close')
            .html($closeSVG);
    });
    $('html').on('click', '.mobileMenuTrigger.close', function() {
        $('body').removeClass('menu-open');
        $(this).removeClass('close')
            .addClass('open')
            .html($menuSVG);
    });

    // Close mobile menu when you click on the .menu-overlay
    $('html').on('click', '.menu-overlay', function() {
        $('body').removeClass('menu-open');
        $('.mobileMenuTrigger.close').removeClass('close')
            .addClass('open')
            .html($menuSVG)
    });

    // Do Stuff On Resize
    $(window).on('resize', function() {
        $windowWidth = $(window).width();
        if ($windowWidth > 1024) {
            $('body').removeClass('menu-open');
        }
    });

}