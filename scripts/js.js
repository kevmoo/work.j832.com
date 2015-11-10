// Source: https://gist.github.com/nilliams/7138983
var hasUpdates = false;
[].forEach.call(document.querySelectorAll("pre code"), function(el) {
  hasUpdates = true;
  el.classList.add("prettyprint");
});

if (hasUpdates) {
  var link = document.createElement('link');
  link.type = 'text/css'
  link.rel = 'stylesheet'
  link.href = '//cdn.rawgit.com/google/code-prettify/master/loader/prettify.css'

  document.head.appendChild(link)
  prettyPrint();
}
