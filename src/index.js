import 'bootstrap';
import './scss/index.scss';
import {library} from '@fortawesome/fontawesome';
import faSearch from '@fortawesome/fontawesome-free-solid/faSearch';
import faChevronRight from '@fortawesome/fontawesome-free-solid/faChevronRight';

// Font Awesome Search Icon
library.add(faSearch, faChevronRight);

// Change navbar active
$('.nav-link').click( (event) => {
  $('li.active').removeClass('active');
  $(event.currentTarget).closest('li').addClass('active');
});
