$(() => {
	setTimeout(() => {
		for (let i = 1; i <= $('.ind-main__forms-e').length; i++) {
			$('.ind-main__forms-bar')
				.eq(i - 1)
				.css(
					'width',
					`${$('.ind-main__forms-p')
						.eq(i - 1)
						.attr('data-progress')}`
				)
		}
	}, 500)
	$('#index__phone, #reg__phone').mask('+7 (999) 99-99-999')
})

//! Model - Thx Request

$('.registration__submit').on('click', () => {
	$('.thx_request').removeClass('display-n')
	$('body').css('overflow', 'hidden')
})

$('.thx_request__c, .thx_request__close').on('click', () => {
	$('.thx_request').addClass('display-n')
	$('body').css('overflow', 'visible')
})

$('.thx_request').mouseup(function (e) {
	let div = $('.thx_request__w')
	if (!div.is(e.target) && div.has(e.target).length === 0) {
		$('.thx_request').addClass('display-n')
		$('body').css('overflow', 'visible')
	}
})

//! Model - Registration

$('.header__b').on('click', () => {
	$('.registration').removeClass('display-n')
	$('body').css('overflow', 'hidden')
})

$('.registration__c').on('click', () => {
	$('.registration').addClass('display-n')
	$('body').css('overflow', 'visible')
})

$('.registration').mouseup(function (e) {
	let div = $('.registration__w')
	if (!div.is(e.target) && div.has(e.target).length === 0) {
		$('.registration').addClass('display-n')
		$('body').css('overflow', 'visible')
	}
})

//! Model - Info Car

$('.company__list-show').on('click', () => {
	$('.info_car').removeClass('display-n')
	$('body').css('overflow', 'hidden')
})

$('.info_car__c').on('click', () => {
	$('.info_car').addClass('display-n')
	$('body').css('overflow', 'visible')
})

$('.info_car').mouseup(function (e) {
	let div = $('.info_car__w')
	if (!div.is(e.target) && div.has(e.target).length === 0) {
		$('.info_car').addClass('display-n')
		$('body').css('overflow', 'visible')
	}
})

//! Model - Add Client

$('.selectTwo__i-add').on('click', () => {
	$('.addClient').removeClass('display-n')
	$('body').css('overflow', 'hidden')
})

$('.addClient__c').on('click', () => {
	$('.addClient').addClass('display-n')
	$('body').css('overflow', 'visible')
})

$('.addClient').mouseup(function (e) {
	let div = $('.addClient__w')
	if (!div.is(e.target) && div.has(e.target).length === 0) {
		$('.addClient').addClass('display-n')
		$('body').css('overflow', 'visible')
	}
})

//! Model - Status

$('.company__list-more').on('click', () => {
	$('.status').removeClass('display-n')
	$('body').css('overflow', 'hidden')
})

$('.status__c').on('click', () => {
	$('.status').addClass('display-n')
	$('body').css('overflow', 'visible')
})

$('.status').mouseup(function (e) {
	let div = $('.status__w')
	if (!div.is(e.target) && div.has(e.target).length === 0) {
		$('.status').addClass('display-n')
		$('body').css('overflow', 'visible')
	}
})

//! Model - Info

$('').on('click', () => {
	$('.info').removeClass('display-n')
	$('body').css('overflow', 'hidden')
})

$('.info__c').on('click', () => {
	$('.info').addClass('display-n')
	$('body').css('overflow', 'visible')
})

$('.info').mouseup(function (e) {
	let div = $('.info__w')
	if (!div.is(e.target) && div.has(e.target).length === 0) {
		$('.info').addClass('display-n')
		$('body').css('overflow', 'visible')
	}
})

//! Focus - Input

$('input, textarea').focus(function () {
	$('.label').removeClass('focus_')
	$(this).parent().hasClass('label') ? $(this).parent().addClass('focus_') : ''
})

$(document).on('click', function (e) {
	// событие клика по веб-документу
	var div = $('.label') // тут указываем ID элемента

	if (
		!div.is(e.target) && // если клик был не по нашему блоку
		div.has(e.target).length === 0
	) {
		// и не по его дочерним элементам
		div.removeClass('focus_')
	}
})

//! Add - Select One

$('.service__info-more').on('click', function () {
	$('.service__info-more').children("selectOne").addClass('display-n')
	setTimeout(() => {
		$(this).children('.selectOne').removeClass('display-n')
	}, 1);
})

$('.selectOne__i').on('click', () => {
	$('.selectOne').addClass('display-n')
})

$(document).mouseup(function (e) {
	let div = $('.selectOne')
	if (!div.is(e.target)) {
		$('.selectOne').addClass('display-n')
	}
})

//! Add - Select Two

$('.company__list-users').on('click', function () {
	$('.company__list-users').children("selectTwo").addClass('display-n')
	setTimeout(() => {
		$(this).children('.selectTwo').removeClass('display-n')
	}, 1);
})

$('.selectTwo__i').on('click', () => {
	$('.selectTwo').addClass('display-n')
})

$(document).mouseup(function (e) {
	let div = $('.selectTwo')
	if (!div.is(e.target)) {
		$('.selectTwo').addClass('display-n')
	}
})
