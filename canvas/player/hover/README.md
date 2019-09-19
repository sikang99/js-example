# jQuery.hoverPlay

Play a video on mouse enter, pause on mouse out

## Installing

Just download `jquery.hoverplay.js` or `jquery.hoverplay.min.js` and add it to your HTML file:

```html
<script type="text/javascript" src="js/jquery.hoverplay.min.js"></script>
```

## Basic usage

### Automatic mode

Create a `video` element and add a `data-play="hover"` attribute.

That's it.

### Manual mode

Call `hoverPlay` on your selected elements:

```javascript
$('#video').hoverPlay();
```

You may also pass an options object:

```javascript
$('#video').hoverPlay({
	playDelay: 500,
	pauseDelay: 100
});
```

## Advanced usage

You may override the default callbacks if you'd like to add/remove a class or perform additional DOM manipulation:

```javascript
$.extend(true, $.hoverPlay.defaults, {
	callbacks: {
		play: function(el,  video) {
			video.play();
			el.addClass('hoverPlay');
		},
		pause: function(el,  video) {
			video.pause();
			el.removeClass('hoverPlay');
		}
	}
});
```

## Requirements

- jQuery 1.8+
- A recent/decent web browser (Firefox, Chrome or Opera suggested; **IE/Edge NOT TESTED/DON'T CARE**)
- A valid HTML 5 DOCTYPE (for `video` tags)

## Licensing

MIT Licensed

## Contributing

Fork the repo, add an interesting feature or fix a bug and send a pull request.

## Troubleshooting

Open an issue and provide a clear description of the error, how to reproduce it and your test environment specs (browser, jQuery version, etc.)

## Credits

Lead coder: biohzrdmx (github.com/biohzrdmx)