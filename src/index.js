import 'bootstrap'
import './scss/index.scss'
import fontawesome from '@fortawesome/fontawesome';
import faSearch from '@fortawesome/fontawesome-free-solid/faSearch';
import faChevronRight from '@fortawesome/fontawesome-free-solid/faChevronRight';

//Font Awesome Search Icon
fontawesome.library.add(faSearch, faChevronRight);

//Change navbar active
$(".nav-link").on("click", function() {
  $('li.active').removeClass('active');
  $(this).closest('li').addClass('active');
});
