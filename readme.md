# Mobile Menu For Hubspot Websites
A mobile menu designed to work with the hubspot framework.

## Installation
Add the `plugins.js` to your template. Then add the `app.js` to your template below the plugins file.

Once those two files are added change the `mobileMenu` script to match the classes you are using fo rthe menu and the logo of your website.
`mobileMenu('.menu-wrapper','.logo-class')`

if you do not wish to add a logo to the menu you can just leave that part out.
`menuMobile('.menu-wrapper')`

If you have a secondary menu you would like to add you can do so by seperating its wrapper with a comma like so:
`menuMobile('.courtesy-menu-wrapper, .main-menu-wrapper', '.logo-class')`

### Styles
The syles are added via the `style.css` file. You can add those css styles to your current stylesheet as well.

To change colors please just change this block.
```
	:root {
		--white: #ffffff;
	  	--color1: #4168B1;
	  	--color2: #EEEEEE;
	  	--color3: rgba(33, 59, 110, 0.9);
	  	--color4: #252525;
	  	--color5: rgba(0,0,0,.25);
	}

```

## Future Additions
This menu is only good for 2 levels currently which is all I usually use. I will be updating it to include unlimited levels soon.