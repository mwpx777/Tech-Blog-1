async function updateFormHandler(event) {
  console.log('edit button clicked')
  event.preventDefault();
  
  const title = document.querySelector('textarea[name="post-title"]').value.trim();
  const article = document.querySelector('textarea[name="post-article"]').value.trim();
  const articleid = document.querySelector('div[name="postId"]').value.trim();
  
  
  // if (event.target.hasAttribute('update-id')) {
    // const id = event.target.getAttribute('update-id');
    // const title = event.target.getAttribute('post-title').value.trim();
    // const article = event.target.getAttribute('post-article').value.trim();

    if(id && title && article ){
    console.log(id, title, article)
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


document
.querySelector('.deletePostBtn')
.addEventListener('click', deleteFormHandler);

document
.querySelector('.updatePostBtn')
.addEventListener('click', updateFormHandler);
