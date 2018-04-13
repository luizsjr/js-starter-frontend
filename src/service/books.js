import {getList} from '../api/commonApi';

function loadContent() {
  getList('books').done(renderHtml);
}

function renderHtml(booksList) {
  let booksHtml = '';
  booksList.forEach(book => {
    booksHtml += `
      <div class="row py-3">
      <div class="text-center col-md-2 col-sm-3">
        <a class="story-title" href="#"><img alt="" src="http://api.randomuser.me/portraits/thumb/men/40.jpg" class="rounded-circle thumbnail"></a>
      </div>
      <div class="col-md-10 col-sm-9">
        <h4>${book.title}</h4>
        <h5><span class="badge badge-secondary">${book.author}</span></h5>
        <h6><small class="text-muted story-time"><a href="#" class="text-muted">Read More</a></small></h6>
      </div>
    </div>
    <hr>
    `;
  });
  $('#content').html(booksHtml);
}

export default {loadContent};
