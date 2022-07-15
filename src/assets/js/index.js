/* eslint-disable */

import '../scss/main.scss';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

$('ul.plans__nav').on('click', 'li:not(.active)', function () {
    $(this).addClass('active').siblings().removeClass('active').closest('div.plans__wrapper').find('div.plans__block').removeClass('active').eq($(this).index()).addClass('active');
});

const swiper = new Swiper(".reviewsSlider", {
    speed: 1500,
    slidesPerView: 1,
    spaceBetween: 60,
    pagination: {
      el: ".reviewsSlider-pagination",
      type: "progressbar",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      991: {
        slidesPerView: 2,
      },
    },
  });

  const plans = new Swiper(".plans__slider", {
    speed: 1500,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });


$('.faqBlock__header').click(function () {
    $(this).toggleClass('active');
});


$('.modal-feedback__open').click(function () {
  $(this).closest('.modal-feedback').addClass('active');
  $(this).addClass('hidden');
});

$('.reviewsItem__button').click(function () {
  $('body').addClass('open-review');
  $('html').addClass('locked');
  const name = $(this).closest('.reviewsItem').children('.reviewsItem__title').html();
  const date = $(this).closest('.reviewsItem').children('.reviewsItem__date').html();
  const txt = $(this).closest('.reviewsItem').children('.reviewsItem__txt-wrapper').children('.reviewsItem__txt').html();
  $('.modal-feedback__title').html(name);
  $('.modal-feedback__date').html(date);
  $('.modal-feedback__txt').html(txt);
});

$('.modal-feedback__close, .backdrop, .modal-thank__close, .modal-form__close').click(function () {
  $('body').removeClass('open-review');
  $('body').removeClass('open-thank');
  $('body').removeClass('open-form');
  $('html').removeClass('locked');
  $('.modal-feedback').removeClass('active');
  $('.modal-feedback__open').removeClass('hidden');
});

$('.js--openThank').click(function () {
  $('body').addClass('open-thank');
  $('html').addClass('locked');
});

$('.js--openForm').click(function () {
  $('body').addClass('open-form');
  $('html').addClass('locked');
});

$('.mob-header__burger').click(function () {
  $(this).toggleClass('active');
  $('.mob-nav').toggleClass('active');
});