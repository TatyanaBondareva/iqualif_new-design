$(document).ready(function () {
    $('.js-header-menu-link-list').on('click', openList);
    $('.js-header-menu-sublist-link').on('click', changeCurrency);
    $('.js-header-menu-sublist-lang').on('click', changeLang);
    $('.js-footer-links-title').on('click', toggleLinks);

    $('#closeMenu').on('click', closeMobileMenu);
    $('#openMenu').on('click', openMobileMenu);
    $('.video-block:nth-child(-n+3)').css('display', 'flex');
    $('.playlist__button').on('click', getAllList);
    $('.js-help').on('click', showForm);
    $('.js-support-form-close').on('click', closeForm);
});

function openList(e) {
    e.preventDefault();
    $(this).next('.header__menu-sublist').slideToggle();
}

function changeCurrency() {
    $('.js-header-menu-link-currency').html($(this).data('currency'));
}

function changeLang() {
    $('.js-header-menu-link-lang').html($(this).data('lang'));
}

function showForm() {
    $('.js-support-form').show(500);
}

function closeForm(e) {
    e.preventDefault();
    $('.js-support-form').hide(500);
}

function openMobileMenu() {
    $('#headerMobileMenu').show(800);
}

function closeMobileMenu() {
    $('#headerMobileMenu').hide(800);
}

function getAllList() {
    console.log($(this.closest('.playlist')).children('.video-wrapper').children('.video-block'));
    $(this.closest('.playlist')).children('.video-wrapper').children('.video-block').css({
        'display': 'flex',
        'animation': 'blick 1s  ease-in-out'
    });
    $(this).prop('disabled', true).css('opacity', '0.5');
}

function toggleLinks() {
    if (screen.width > 768) {
        return;
    }
    else {
        $(this).next('.js-footer-links-list').slideToggle();
        if ($(this).children('.footer-links__title-span').text() == '+') {
            $(this).children('.footer-links__title-span').text('-');
        }
        else {
            $(this).children('.footer-links__title-span').text('+');
        }
    }
}
