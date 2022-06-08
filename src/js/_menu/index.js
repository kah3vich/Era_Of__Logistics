$('.menuCarrier-arrow').on('click', () => {
    if($('.menuCarrier').hasClass('menuCarrier-h')) {
        $('.menuCarrier').removeClass('menuCarrier-h')
    } else {
        $('.menuCarrier').addClass('menuCarrier-h')
    }
})
$('.menuCompany-arrow').on('click', () => {
    if($('.menuCompany').hasClass('menuCompany-h')) {
        $('.menuCompany').removeClass('menuCompany-h')
    } else {
        $('.menuCompany').addClass('menuCompany-h')
    }
})
$('.menuService-arrow').on('click', () => {
    if($('.menuService').hasClass('menuService-h')) {
        $('.menuService').removeClass('menuService-h')
    } else {
        $('.menuService').addClass('menuService-h')
    }
})
