import 'bootstrap';
import './scss/index.scss';

import {library} from '@fortawesome/fontawesome';
import faSearch from '@fortawesome/fontawesome-free-solid/faSearch';
import faChevronRight from '@fortawesome/fontawesome-free-solid/faChevronRight';

import home from './service/home';
import books from './service/books';
import authors from './service/authors';

// Font Awesome Icons
library.add(faSearch, faChevronRight);

// Change navbar active item
$('.nav-link').click( event => {
  changeNavActive(event.currentTarget);
});

//Categories Handling
$('.nav-link#home').click( () => {
  home.loadContent();
});

$('.nav-link#books').click( () => {
  books.loadBookList();
});

$('.nav-link#authors').click( () => {
  authors.loadContent();
});

function changeNavActive(eventTarget) {
  $('li.active').removeClass('active');
  $(eventTarget).closest('li').addClass('active');
}
