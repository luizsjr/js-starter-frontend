import 'bootstrap';
import './scss/index.scss';
import {library} from '@fortawesome/fontawesome';
import faSearch from '@fortawesome/fontawesome-free-solid/faSearch';
import faChevronRight from '@fortawesome/fontawesome-free-solid/faChevronRight';
import {getList} from './api/booksApi';

// Font Awesome Search Icon
library.add(faSearch, faChevronRight);

// Change navbar active
$('.nav-link').click( event => {
  changeNavActive(event.currentTarget);
  loadContent(event.currentTarget.id);
});

function changeNavActive(eventTarget) {
  $('li.active').removeClass('active');
  $(eventTarget).closest('li').addClass('active');
}

function loadContent(category) {
  getList(category)
  .done(populateHtml);
}

function populateHtml(content) {
  let contentHtml = '';
  content.forEach(item => {
    contentHtml += `
      <div class="row py-3">
      <div class="text-center col-md-2 col-sm-3">
        <a class="story-title" href="#"><img alt="" src="http://api.randomuser.me/portraits/thumb/men/40.jpg" class="rounded-circle thumbnail"></a>
      </div>
      <div class="col-md-10 col-sm-9">
        <h4>${item.title}</h4>
        <h5><span class="badge badge-secondary">${item.author}</span></h5>
        <h6><small class="text-muted story-time"><a href="#" class="text-muted">Read More</a></small></h6>
      </div>
    </div>
    <hr>
    `;
  });
  $('#content').html(contentHtml);
}
