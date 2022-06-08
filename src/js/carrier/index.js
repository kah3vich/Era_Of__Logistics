$(() => {
	setTimeout(() => {
		for (let i = 1; i <= $('.carrier__car-e').length; i++) {
			$('.carrier__car-bar')
				.eq(i - 1)
				.css(
					'width',
					`${$('.carrier__car-p')
						.eq(i - 1)
						.attr('data-progress')}`
				)
		}
	}, 500)
})

