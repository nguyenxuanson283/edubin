var index = 1;
function changeImage() {
  var imgs = ["images/s-1.jpg", "images/s-3.jpg"];
  document.getElementById('img').src = imgs[index];
  index++;
  if (index == 2) {
    index = 0;
  }
}
setInterval(changeImage, 5000);

$(document).ready(function () {
  $('.multiple-items').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 641,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },

      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
});

var filtered = false;

$('.js-filter').on('click', function () {
  if (filtered === false) {
    $('.filtering').slick('slickFilter', ':even');
    $(this).text('Unfilter Slides');
    filtered = true;
  } else {
    $('.filtering').slick('slickUnfilter');
    $(this).text('Filter Slides');
    filtered = false;
  }

});

function hoverTeacher(r) {
  let div = r.childNodes[5];
  div.style.display = 'block';
}

function outHoverTeacher(r) {
  let div = r.childNodes[5];
  div.style.display = 'none';
};

fetch('https://60d4611a61160900173cb070.mockapi.io/courses')
  .then(response => {
    return response.json()
  })
  .then(data => {
    console.log(data)
    const html = data.map(user => {
      return ` 
        <div class="our_coures_product lg:w-100 " id="slide">     
        <img class="p-3 lg:h-64 bg-cover lg:w-screen sm:h-96 "  src="${user.image}" alt="">
        <div class="description p-2">
            <div class="star">
                <ul class="flex">
                    <li class="pr-2"> <a href=""><i
                                class="fa-solid fa-star text-yellow-400"></i></a></li>
                    <li class="pr-2"> <a href=""><i
                                class="fa-solid fa-star text-yellow-400"></i></a></li>
                    <li class="pr-2"> <a href=""><i
                                class="fa-solid fa-star text-yellow-400"></i></a></li>
                    <li class="pr-2"> <a href=""><i
                                class="fa-regular fa-star text-yellow-400"></i></a></li>
                    <li class="pr-2"> <a href=""><i
                                class="fa-regular fa-star text-yellow-400"></i></a></li>
                    <li class="pr-2 opacity-80"><a href="">
                            <p>${user.rate}(${user.rate_quantity})</p>
                        </a></li>
                </ul>
            </div>
            <div class="our_content mt-2">
                <h1 class="text text-1xl font-bold">${user.categories}</h1>
                <ul class="flex mt-2">
                    <li class="pr-2"><a href=""><i class="fa-solid fa-user-large"></i> ${user.rate}</a></li>
                    <li class="pr-2"><a href=""><i class="fa-regular fa-clock"></i></i>${user.duration}</a>
                    </li>
                </ul>
                <div class="student_coment flex border-b-2 mt-2  pb-4 h-32">
                    
                    <p>by <b>${user.teacher}</b> in <b>${user.name}</b> </p>
                </div>

                <div class="our_footer flex justify-between">
                    <h1 class="font-bold">${user.price}</h1>
                    <a href=""><i class="fa-solid fa-cart-shopping text-yellow-400"></i>${user.total_enrolled}</a>
                </div>
            </div>

        </div>
    </div>`
    }).join('');
    document.querySelector('.list_our_product').insertAdjacentHTML("afterbegin", html)

  });



function showFeedbackForStudent(numberFeedback) {
  let comments = ['I recommend these courses to everyone, and wish you, guys, luck with the new studies! Lorem ipsum dolor sit amet consectetur adipisicing.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore Lorem ipsum dolor sit amet.', 'I am grateful for your wonderful course! Your tutors are the best, and I am completely satisfied with the level of professional teaching.'];
  let imageStudents = ['images/student_1.jpg', 'images/student_2.jpg', 'images/student_3.jpg'];
  let nameStudents = ['Monica Blews', 'James Smith', 'Eleanor Baker'];
  let jobStudents = ['UX Designer', 'Apps Developer', 'CFO Apple Corp'];

  let student1 = {
    img: document.getElementById('img-student-1'),
    cmt: document.getElementById('cmt-student-1'),
    name: document.getElementById('name-student-1'),
    job: document.getElementById('job-student-1')
  }

  let student2 = {
    img: document.getElementById('img-student-2'),
    cmt: document.getElementById('cmt-student-2'),
    name: document.getElementById('name-student-2'),
    job: document.getElementById('job-student-2')
  }

  student1.img.src = imageStudents[numberFeedback];
  student1.cmt.innerHTML = comments[numberFeedback];
  student1.name.innerHTML = nameStudents[numberFeedback];
  student1.job.innerHTML = jobStudents[numberFeedback];


  if (numberFeedback === jobStudents.length - 1) {
    student2.img.src = imageStudents[0];
    student2.cmt.innerHTML = comments[0];
    student2.name.innerHTML = nameStudents[0];
    student2.job.innerHTML = jobStudents[0];
  } else {
    student2.img.src = imageStudents[numberFeedback + 1];
    student2.cmt.innerHTML = comments[numberFeedback + 1];
    student2.name.innerHTML = nameStudents[numberFeedback + 1];
    student2.job.innerHTML = jobStudents[numberFeedback + 1];
  }


}


$('.filtering_bot').slick({
  slidesToShow: 5,
  slidesToScroll: 5,
  speed: 400,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 758,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },

    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

var filtered = false;

$('.js-filter').on('click', function () {
  if (filtered === false) {
    $('.filtering_bot').slick('slickFilter', ':even');
    $(this).text('Unfilter Slides');
    filtered = true;
  } else {
    $('.filtering_bot').slick('slickUnfilter');
    $(this).text('Filter Slides');
    filtered = false;
  }
});


function show() {
  let showMenu = document.getElementById('showMenu');
  if (showMenu.style.display == 'none') {
    showMenu.style.display = 'block';
  } else {
    showMenu.style.display = 'none';
  }

}


var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}    