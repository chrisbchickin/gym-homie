const newExerciseHandler = async (event) => {
  event.preventDefault();

  const exerciseName = document.querySelector('#exercise-name').value.trim();
  const exerciseWeight = document.querySelector('#exercise-weight').value.trim();
  const exerciseReps = document.querySelector('#exercise-reps').value.trim();
  const exerciseDuration = document.querySelector('#exercise-duration').value.trim();
  let categoryID;

  let target = event.target;

  function findcategoryid() {
    if (categoryID === 1 || categoryID === 2) {
      console.log(categoryID);
      categoryID = target.getAttribute("data-id");
      console.log(categoryID);
      return categoryID;
    } else {
      return;
    }
  }

  categoryID = findcategoryid();
  console.log(categoryID + 'this is categoryID');

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
      document.location.replace('/workouts');
    } else {
      alert('Failed to create exercise');
    }
  }
};

document
  .querySelector('.new-exercise-form')
  .addEventListener('submit', newExerciseHandler);

document
  .querySelector('.dropdown-menu')
  .addEventListener('click', newExerciseHandler);
