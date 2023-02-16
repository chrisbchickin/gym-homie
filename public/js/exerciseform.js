const newExerciseHandler = async (event) => {
  event.preventDefault();

  const exerciseName = document.querySelector('#exercise-name').value.trim();
  const exerciseWeight = document.querySelector('#exercise-weight').value.trim();
  const exerciseReps = document.querySelector('#exercise-reps').value.trim();
  const exerciseDuration = document.querySelector('#exercise-duration').value.trim();
  const categoryID = document.querySelector('#categorymenu').value;

  if ((exerciseName && exerciseWeight && exerciseReps && categoryID)
    || (exerciseName && exerciseDuration && categoryID)) {

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

document
  .querySelector('.new-exercise-form')
  .addEventListener('submit', newExerciseHandler);
