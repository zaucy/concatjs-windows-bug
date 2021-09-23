fetch('text.txt')
  .then(async response => {
    if(response.ok) {
      const txt = await response.text();
      document.body.innerHTML += 'text.txt contents:' + txt;
    } else {
      document.body.innerHTML += 'text.txt request failed: ' + response.status + ' ' + response.statusText;
    }
  })
  .catch(err => document.body.innerHTML += 'error:' + err);
