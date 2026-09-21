
document.querySelectorAll('.js-slider').forEach((section) => {

  const slider = section.querySelector('.slider');

  const prevButton = section.querySelector('.slider-button-prev');
  const nextButton = section.querySelector('.slider-button-next');

  const pagination = section.querySelector('.slider-pagination');


  new Swiper(slider, {

    slidesPerView: 4,
    spaceBetween: 20,
    slidesPerGroup: 1,

    navigation: {
      prevEl: prevButton,
      nextEl: nextButton,
    },

    pagination: {
      el: pagination,
      clickable: true,
    },

    breakpoints: {

      0: {
        slidesPerView: 2,
        spaceBetween: 16,
      },

      1024: {
        slidesPerView: 4,
        spaceBetween: 20,
      }

    }

  });

});


document.querySelectorAll('.js-slider2').forEach(section => {
  new Swiper(section.querySelector('.slider'), {
    slidesPerView: 2,
    spaceBetween: 16,

    navigation: {
      prevEl: section.querySelector('.slider-button-prev'),
      nextEl: section.querySelector('.slider-button-next'),
    },

    pagination: {
      el: section.querySelector('.slider-pagination'),
      clickable: true,
    },

    breakpoints: {
      300: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
      }
    }
  });
});

document.querySelectorAll('.js-slider3').forEach(section => {
  new Swiper(section.querySelector('.slider'), {
    slidesPerView: 4,
    spaceBetween: 16,

    navigation: {
      prevEl: section.querySelector('.slider-button-prev'),
      nextEl: section.querySelector('.slider-button-next'),
    },

    pagination: {
      el: section.querySelector('.slider-pagination'),
      clickable: true,
    },

    breakpoints: {
      300: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 20,
      }
    }
  });
});

document.querySelectorAll('.js-slider4').forEach(section => {
  new Swiper(section.querySelector('.slider'), {
    slidesPerView: 4,
    spaceBetween: 16,

    navigation: {
      prevEl: section.querySelector('.slider-button-prev'),
      nextEl: section.querySelector('.slider-button-next'),
    },

    pagination: {
      el: section.querySelector('.slider-pagination'),
      clickable: true,
    },

    breakpoints: {
      300: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 20,
      }
    }
  });
});

document.querySelectorAll('.js-slider5').forEach(section => {
  new Swiper(section.querySelector('.slider'), {
    slidesPerView: 4,
    spaceBetween: 16,

    navigation: {
      prevEl: section.querySelector('.slider-button-prev'),
      nextEl: section.querySelector('.slider-button-next'),
    },

    pagination: {
      el: section.querySelector('.slider-pagination'),
      clickable: true,
    },

    breakpoints: {
      300: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 20,
      }
    }
  });
});


// const cards = document.querySelectorAll('.certificate-card');

// cards.forEach(card => {
//   card.onclick = () => {
//     const img = card.querySelector('img');
//     if (!img) return;

//     const modal = document.createElement('div');

//     modal.style.cssText = `
//       position: fixed;
//       inset: 0;
//       z-index: 9999;
//       background: rgba(0, 0, 0, .8);
//       display: flex;
//       align-items: center;
//       justify-content: center;
//     `;

//     modal.innerHTML = `
//       <span style="
//         position: absolute;
//         top: 20px;
//         right: 30px;
//         color: #fff;
//         font-size: 40px;
//         cursor: pointer;
//       ">×</span>

//       <img src="${img.src}" style="
//         object-fit: contain;
//       ">
//     `;

//     document.body.append(modal);

//     modal.onclick = e => {
//       if (e.target === modal || e.target.tagName === 'SPAN') {
//         modal.remove();
//       }
//     };
//   };
// });


document.querySelectorAll('.favorite-btn').forEach(btn => {
    btn.addEventListener('click', function () {
        this.classList.toggle('active');
    });
});


new Swiper('.promo-slider', {
    loop: true,

    pagination: {
        el: '.promo-pagination',
        clickable: true,
    },

    navigation: {
        prevEl: '.promo-prev',
        nextEl: '.promo-next',
    },


    speed: 600,
});


const cards = document.querySelectorAll('.certificate-card');
const popup = document.querySelector('.certificate-popup');
const image = popup.querySelector('img');
const close = popup.querySelector('.popup-close');
const prev = popup.querySelector('.popup-prev');
const next = popup.querySelector('.popup-next');

let index = 0;

const open = i => {
  index = i;
  image.src = cards[index].querySelector('img').src;
  popup.classList.add('active');
};

cards.forEach((card, i) => card.onclick = () => open(i));

close.onclick = () => popup.classList.remove('active');

prev.onclick = () => open((index - 1 + cards.length) % cards.length);

next.onclick = () => open((index + 1) % cards.length);

popup.onclick = e => {
  if (e.target === popup) {
    popup.classList.remove('active');
  }
};

document.querySelectorAll('.mobile-bottom-panel .links a').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector('.mobile-bottom-panel .links a.active')?.classList.remove('active');
    link.classList.add('active');
  });
});