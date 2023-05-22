window.addEventListener('DOMContentLoaded', () => {
  // * ===== Mask input
  $('input[type="tel"]').mask('+7 (999) 999-99-99');

  // * ===== Nice Select
  // $('select').niceSelect();

  // * ===== Slider
  (function slider() {
    const sliderEl = document.querySelector('.transport-slider__slider');
    new Swiper(sliderEl, {
      slidesPerView: 'auto',
      spaceBetween: 20,
      navigation: {
        nextEl: '.transport-slider__content .swiper-button-next',
        prevEl: '.transport-slider__content .swiper-button-prev',
      },
    });
  })();

  // * ===== Slider
  (function slider() {
    const sliderEl = document.querySelector('.reviews__slider');
    new Swiper(sliderEl, {
      slidesPerView: 'auto',
      spaceBetween: 20,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  })();

  // * ===== Accordion
  const toggleAccordion = (accordionControl, accordionContent, accordion) => {
    const filters = document.querySelectorAll(accordionControl);
    filters.forEach((el) => {
      if (el) {
        el.addEventListener('click', (e) => {
          const target = e.target.closest(accordion);
          const content = target.querySelector(accordionContent);
          target.classList.toggle('active');
          if (target.classList.contains('active')) {
            content.style.maxHeight = content.scrollHeight + 'px';
          } else {
            content.style.maxHeight = null;
          }
        });
      }
    });
  };
  toggleAccordion('.accordion-control-btn', '.accordion-content', '.accordion');

  // * ==== Dropdown
  document.addEventListener('click', (e) => {
    const isDropdownButton = e.target.matches('[data-dropdown-button]');

    if (!isDropdownButton && e.target.closest('[data-dropdown]') != null)
      return;

    let currentDropdown;

    if (isDropdownButton) {
      currentDropdown = e.target.closest('[data-dropdown]');
      currentDropdown.classList.toggle('active');
    }

    document.querySelectorAll('[data-dropdown].active').forEach((dropdown) => {
      if (dropdown === currentDropdown) return;
      dropdown.classList.remove('active');
    });
  });

  // * ==== show dropdown
  (function showDropdown() {
    const links = document.querySelectorAll('.menu__link');
    const dropdowns = document.querySelectorAll('.dropdown');

    links.forEach((link) => {
      if (link) {
        link.addEventListener('mouseover', (e) => {
          dropdowns.forEach((dropdown) => {
            if (link.dataset.target === dropdown.dataset.target) {
              dropdown.classList.toggle('active');
              link.classList.toggle('active');
            }
          });
        });

        link.addEventListener('mouseleave', (e) => {
          dropdowns.forEach((dropdown) => {
            dropdown.classList.remove('active');
            link.classList.remove('active');
          });
        });
      }
    });
  })();

  // * ===== Fixed Header
  (function fixedHeader() {
    function scrollHeader() {
      const nav = document.querySelector('header');
      if (this.scrollY >= 30) {
        nav.classList.add('scroll-header');
      } else {
        nav.classList.remove('scroll-header');
      }
    }
    window.addEventListener('scroll', scrollHeader);
    // ! Change
    function changeBg() {
      const header = document.querySelector('header');
      if (window.pageYOffset >= 30) {
        header.classList.add('scroll-header');
      }
    }
    changeBg();
  })();

  // * ===== Show Menu
  (function showMenu() {
    const menuBtn = document.querySelector('.header__toggle');
    const menu = document.querySelector('.mobile-menu');
    const menuCloseBtn = document.querySelector('.mobile-menu__close');
    const body = document.querySelector('body');

    if (menuBtn) {
      menuBtn.addEventListener('click', (e) => {
        menu.classList.toggle('active');
        body.classList.toggle('no-scroll');
      });

      menuCloseBtn.addEventListener('click', (e) => {
        menu.classList.remove('active');
        body.classList.remove('no-scroll');
      });
    }
  })();

  // * ===== Modal
  (function modals() {
    function bindModal(openBtn, modal, close) {
      const openBtnEl = document.querySelectorAll(openBtn);
      const modalEl = document.querySelector(modal);
      const closeEl = document.querySelectorAll(close);
      const body = document.querySelector('body');
      if (modalEl) {
        openBtnEl.forEach((el) => {
          el.addEventListener('click', (e) => {
            if (e.target) {
              e.preventDefault();
            }
            modalEl.classList.add('active');
            body.classList.add('no-scroll');
          });
        });
        closeEl.forEach((btn) => {
          btn.addEventListener('click', (e) => {
            modalEl.classList.remove('active');
            body.classList.remove('no-scroll');
          });
        });
        modalEl.addEventListener('click', (e) => {
          if (e.target === modalEl) {
            modalEl.classList.remove('active');
            body.classList.remove('no-scroll');
          }
        });
      }
    }
    bindModal('.btn-call', '.popup--call', '.popup__close');
    bindModal('.reviews__btn--send', '.popup--reviews', '.popup__close');
  })();
});
