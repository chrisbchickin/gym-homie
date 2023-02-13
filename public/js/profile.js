const newFormHandler = async (event) => {
    event.preventDefault();
  
    const exerciseName = document.querySelector('#exercise-name').value.trim();
    const exerciseWeight = document.querySelector('#exercise-weight').value.trim();
    const exerciseReps = document.querySelector('#exercise-reps').value.trim();
    const exerciseDuration = document.querySelector('#exercise-duration').value.trim();
    const categoryID = 1;
  
    if (exerciseName && exerciseWeight && exerciseReps && exerciseDuration && categoryID) {
      const response = await fetch(`/api/exercise`, {
        method: 'POST',
        body: JSON.stringify({ exerciseName, categoryID, exerciseWeight, exerciseReps, exerciseDuration }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create exercise');
      }
    }
  };
  
  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/exercise/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to delete project');
      }
    }
  };
  
  document
    .querySelector('.new-exercise-form')
    .addEventListener('submit', newFormHandler);
  
  document
    .querySelector('.exercise-list')
    .addEventListener('click', delButtonHandler);