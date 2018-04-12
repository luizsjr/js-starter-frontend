import jquery from 'jquery';

const baseUrl = 'http://localhost:8081/';

export function getList(uri) {
  return jquery.ajax({
    method: "GET",
    url: baseUrl + uri
  });
}
