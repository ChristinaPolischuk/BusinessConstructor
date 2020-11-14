let movingBar = function () {
	let $navMovingBar = $('.header-nav'),
		$navLink = $('.header-nav__link'),
		$hoverEffect = $('.header-nav__hover'),
		width, left;
	$navLink.on('mouseenter', function () {
		let $self = $(this);
		width = $self.width();
		left = $self.position().left - 10;
		$hoverEffect.css({
			width: width + 'px',
			left: left + 'px'
		});
	});
	$navMovingBar.on('mouseleave', function () {
		$hoverEffect.css({
			width: '20px',
			left: '-10px'
		});
	});
}

movingBar();