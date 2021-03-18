async function editFormHandler(event) {
  console.log('edit button clicked')
  event.preventDefault();

  // const title = document.querySelector('input[name="post-title"]').value.trim();
  // const article = document.querySelector('input[name="post-article"]').value.trim();
  // const id = window.location.toString().split('/')[
  //   window.location.toString().split('/').length - 1
  // ];


  if (event.target.hasAttribute('update-id')) {

    const id = event.target.getAttribute('update-id');
    const title = event.target.getAttribute('title').value.trim();
    const article = event.target.getAttribute('article').value.trim();

    const response = await fetch(`/api/edit-post/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        title,
        article
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response.ok) {
      document.location.replace('/dashboard/');
    } else {
      alert(response.statusText);
    }
  }
};



async function deleteFormHandler(event) {
  console.log('delete button clicked')
  event.preventDefault();

  if (event.target.hasAttribute('delete-id')) {

    // const id = window.location.toString().split('/');[
    //   window.location.toString().split('/').length - 1
    // ];
    const id = event.target.hasAttribute('delete-id');
    

    const response = await fetch(`/api/edit-post/${id}`, {
      method: 'DELETE',

    });
    if (response.ok) {
      document.location.replace('/dashboard/');
    } else {
      alert(response.statusText);
    }
  }
};


document.querySelector('.deletePostBtn').addEventListener('click', deleteFormHandler);

document.querySelector('.editPostBtn').addEventListener('click', editFormHandler);
