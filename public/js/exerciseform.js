const newExerciseHandler = async (event) => {
  event.preventDefault();

  const exerciseName = document.querySelector('#exercise-name').value.trim();
  const exerciseWeight = document.querySelector('#exercise-weight').value.trim();
  const exerciseReps = document.querySelector('#exercise-reps').value.trim();
  const exerciseDuration = document.querySelector('#exercise-duration').value.trim();
  let categoryID = 0;

  let target = event.target;
  if (target.matches(".dropdown-item")) {
    categoryID = target.getAttribute("data-id");
    console.log(categoryID + 'this is categoryID');
  return categoryID;
  }
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

// const categoryHandler = async (event) => {
//   event.preventDefault();
//   let target = event.target;
//   console.log(target);
//   if (target.matches(".dropdown-item")) {
//     return target.getAttribute("data-id");
//   } else {
//     console.log('no match');
//   }


// }

document
  .querySelector('.new-exercise-form')
  .addEventListener('submit', newExerciseHandler);

document.querySelector('.dropdown-menu').addEventListener('click', newExerciseHandler);
