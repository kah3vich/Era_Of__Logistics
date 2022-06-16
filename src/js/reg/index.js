$(() => {
	$('.reg__tab-i').on('click', function () {
		$('.reg__tab-i').removeClass('reg__tab-a')
		$(this).addClass('reg__tab-a')
		$('.reg__code').addClass('display-n')
		if ($(this).attr('id') == 'reg__tab__one') {
			$('.reg__auth').removeClass('display-n')
			$('.reg__regist').addClass('display-n')
		} else {
			$('.reg__regist').removeClass('display-n')
			$('.reg__auth').addClass('display-n')
		}
	})

	$('input[name="code"]').on('keyup', function (e) {
		setTimeout(() => {
			var index = $(this).index('input[name="code"]')

			$('input[name="code"]')
				.eq(index + 1)
				.focus()
			if (e.keyCode == 8 && index != 0) {
				$('input[name="code"]')
					.eq(index - 1)
					.focus()
			}
		}, 100)
	})

	$('.reg__regist-a').on('click', () => {
		$('.reg__code').removeClass('display-n')
		$('.reg__regist').addClass('display-n')
	})
})

//! Notif

$('.notif__h-c').on('click', () => $('.notif').addClass('display-n'))
