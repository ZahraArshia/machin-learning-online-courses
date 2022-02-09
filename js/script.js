const lecturers = [
  {
    picURL: 'images/avatar/Picture1.png',
    name: 'Name LastName',
    position: 'Professor of XX at YY university',
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dignissim eu ante vitae imperdiet.',
  },
  {
    picURL: 'images/avatar/Picture2.png',
    name: 'Name LastName',
    position: 'Board member of AAAI',
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer condimentum congue aliquam.',
  },
  {
    picURL: 'images/avatar/Picture4.png',
    name: 'Name LastName',
    position: 'Exceutive director of the XX foundation',
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam laoreet accumsan turpis eget lacinia.',
  },
  {
    picURL: 'images/avatar/Picture3.png',
    name: 'Name LastName',
    position: 'President of XX',
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id vulputate magna.',
  },
  {
    picURL: 'images/avatar/Picture5.png',
    name: 'Name LastName',
    position: 'CEO of XX, ex COO of the YY foundation',
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla semper sed eros vel sodales.',
  },
  {
    picURL: 'images/avatar/Picture6.png',
    name: 'Name LastName',
    position: 'professor of XX university of sience and technology',
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget dui quis urna laoreet ornare.',
  },
];

window.onload = () => {
    lecturers.forEach((lecture) => {
    document.querySelector('.lecturersCards').innerHTML += `
        <div class="card2">
            <img class="lecturerPic" src="${lecture.picURL}" alt="${lecture.name}">
            <div class="lecturer-info">
            <h3 class="lecturer-name">${lecture.name}</h3>
            <h4 class="lecturer-position">${lecture.position}</h4>
            <div class="grey-line"></div>
            <p class="lecturer-detail">${lecture.details}</p>
            </div>
        </div>`;
  });
};

const menu = document.querySelector('.mobile-menu');
const list = document.querySelector('.mobile-menu-list');

function toggleMenu() {
  if (list.style.display === 'flex') {
    list.style.display = 'none';
    menu.innerHTML = '<img src=\'https://img.icons8.com/ios/50/000000/menu--v4.png\'/>';
  } else {
    list.style.display = 'flex';
    menu.innerHTML = '<img src=\'https://img.icons8.com/ios/50/000000/delete-sign--v1.png\'/>';
  }
}
menu.addEventListener('click', toggleMenu);
