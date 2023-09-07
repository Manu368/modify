
    // const playButton = document.getElementById('button02');
    // const messageElement = document.getElementById('manu');
    // const coinImage = document.getElementById('coin');
    // var newSound = new Audio("manu01.mp3");


    // playButton.addEventListener('click', function () {
    //   const h01Selected = document.querySelector('.h01').classList.contains('selected');
    //   const h02Selected = document.querySelector('.h02').classList.contains('selected');

    //   if (!h01Selected && !h02Selected) {
       
    //     messageElement.textContent = 'Enter Bet Amount';
    //     messageElement.style.color = '#fff';
    //   } else {
       
    //     coinImage.classList.add('flipped', 'move-animation');
    //     newSound.play();

    //     setTimeout(function () {
    //       const randomNumber = Math.random(); 
    //       const result = randomNumber < 0.5 ? 'head' : 'tail'; 
    //       coinImage.src = result === 'head' ? 'https://res.cloudinary.com/dqrttxm5s/image/upload/v1688456292/head_image-removebg-preview_gv7su7.png' : 'https://res.cloudinary.com/dqrttxm5s/image/upload/v1688456287/tail_image-removebg-preview_za10pk.png';

    //       if ((result === 'head' && h01Selected) || (result === 'tail' && h02Selected)) {
    //         messageElement.textContent = 'Congratulations! You won!';
    //         messageElement.style.color = 'green';
    //       } else {
    //         messageElement.textContent = 'Sorry! You lose!';
    //         messageElement.style.color = 'red';
    //       }

         
    //       setTimeout(function () {
    //         coinImage.classList.remove('flipped', 'move-animation');
    //       }, 1000); 
    //     }, 1000); 
    //   }
    // });

    // const h01Element = document.querySelector('.h01');
    // const h02Element = document.querySelector('.h02');

    // h01Element.addEventListener('click', function () {
    //   h01Element.classList.toggle('selected');
    //   h02Element.classList.remove('selected');
    //   messageElement.textContent = '';
    //   messageElement.style.color = '';
    //   coinImage.src = 'https://res.cloudinary.com/dqrttxm5s/image/upload/v1688456292/head_image-removebg-preview_gv7su7.png';
    // });

    // h02Element.addEventListener('click', function () {
    //   h02Element.classList.toggle('selected');
    //   h01Element.classList.remove('selected');
    //   messageElement.textContent = '';
    //   messageElement.style.color = '';
    //   coinImage.src = 'https://res.cloudinary.com/dqrttxm5s/image/upload/v1688456292/head_image-removebg-preview_gv7su7.png';
    // });




//     const playButton = document.getElementById('button02');
// const messageElement = document.getElementById('manu');
// const coinImage = document.getElementById('coin');
// const timerElement = document.getElementById('timer02');
// const timerElement01 = document.getElementById('timer01');
// const inputField = document.querySelector('.form01');
// const headOption = document.querySelector('.h01');
// const tailOption = document.querySelector('.h02');
// var newSound = new Audio("manu01.mp3");

// let timer = 20; // Initial timer value in seconds
// let countdownInterval; // Variable to store the countdown interval
// let canSelectImage = true; // Flag to track whether the user can select an image

// // Function to update the timer display
// function updateTimerDisplay() {
//   timerElement.textContent = timer;
  
//   // Change timer color to red between 10 seconds and 0 seconds
//   if (timer <= 10 && timer > 0) {
//     timerElement.style.color = 'red';
//     timerElement01.style.color = 'red';
//   } else {
//     timerElement.style.color = ''; 
//     timerElement01.style.color = '';// Reset to default color
//   }
// }

// // Function to start the countdown timer
// function startCountdown() {
//   countdownInterval = setInterval(function () {
//     timer--; // Decrease timer by 1 second
//     updateTimerDisplay();

//     if (timer === 10) {
//       // Disable input and selections when timer reaches 10 seconds
//       inputField.disabled = true;
//       canSelectImage = false;
      
//       // Decrease opacity of images and input field
//       headOption.style.opacity = 0.5;
//       tailOption.style.opacity = 0.5;
//       inputField.style.opacity = 0.5;
//     }

//     if (timer === 0) {
//       clearInterval(countdownInterval); // Stop the countdown
//       coinImage.classList.add('flipped', 'move-animation');
//       newSound.play();

//       // Simulate the coin flip animation
//       setTimeout(function () {
//         const randomNumber = Math.random();
//         const result = randomNumber < 0.5 ? 'head' : 'tail';

//         coinImage.src = result === 'head' ? 'https://res.cloudinary.com/dqrttxm5s/image/upload/v1688456292/head_image-removebg-preview_gv7su7.png' : 'https://res.cloudinary.com/dqrttxm5s/image/upload/v1688456287/tail_image-removebg-preview_za10pk.png';

//         if ((result === 'head' && headOption.classList.contains('selected')) || (result === 'tail' && tailOption.classList.contains('selected'))) {
//           messageElement.textContent = 'Congratulations! You won!';
//           messageElement.style.color = 'green';
//         } else {
//           messageElement.textContent = 'Sorry! You lose!';
//           messageElement.style.color = 'red';
//         }

//         setTimeout(function () {
//           coinImage.classList.remove('flipped', 'move-animation');
//         }, 1000);
//       }, 1000);
//     }
//   }, 1000);
// }

// // Function to handle image selection
// function handleImageSelection(imageElement) {
//   if (canSelectImage) {
//     // Remove the selected class from both images
//     headOption.classList.remove('selected');
//     tailOption.classList.remove('selected');

//     // Add the selected class to the clicked image
//     imageElement.classList.add('selected');
//   }
// }

// headOption.addEventListener('click', function () {
//   handleImageSelection(headOption);
// });

// tailOption.addEventListener('click', function () {
//   handleImageSelection(tailOption);
// });

// // Start the countdown timer when the page is reloaded
// window.addEventListener('load', startCountdown);

// playButton.addEventListener('click', function () {
//   // Your existing code to handle the game logic...
// });





// const playButton = document.getElementById('button02');
// const messageElement = document.getElementById('manu');
// const coinImage = document.getElementById('coin');
// const timerElement = document.getElementById('timer02');
// const timerElement01 = document.getElementById('timer01');
// const inputField = document.querySelector('.form01');
// const headOption = document.querySelector('.h01');
// const tailOption = document.querySelector('.h02');
// var newSound = new Audio("manu01.mp3");

// let timer = 20; // Initial timer value in seconds
// let countdownInterval; // Variable to store the countdown interval
// let canSelectImage = true; // Flag to track whether the user can select an image

// // Winning image URL
// const winningImageUrl = 'https://res.cloudinary.com/dqrttxm5s/image/upload/v1692874693/you-win-neon-signs-style-text-vector-removebg-preview_thyqjb.png';
// const losingImageUrl = 'https://res.cloudinary.com/dqrttxm5s/image/upload/v1692874693/you-lose-comic-speech-bubble-cartoon-game-assets-vector-9673681-removebg-preview_dowzhf.png';


// // Function to update the timer display
// function updateTimerDisplay() {
//   timerElement.textContent = timer;
//   timerElement01.textContent = `Time Remaining : ${timer} sec`;

//   // Change timer color to red between 10 seconds and 0 seconds
//   if (timer <= 10 && timer > 0) {
//     timerElement.style.color = 'red';
//     timerElement01.style.color = 'red';
//   } else {
//     timerElement.style.color = '';
//     timerElement01.style.color = '';
//   }
// }

// // Function to start the countdown timer
// function startCountdown() {
//   countdownInterval = setInterval(function () {
//     timer--;
//     updateTimerDisplay();

//     if (timer === 10) {
//       inputField.disabled = true;
//       canSelectImage = false;

//       headOption.style.opacity = 0.5;
//       tailOption.style.opacity = 0.5;
//       inputField.style.opacity = 0.5;
//     }

//     if (timer === 0) {
//       clearInterval(countdownInterval);
//       coinImage.classList.add('flipped', 'move-animation');
//       newSound.play();

//       setTimeout(function () {
//         const randomNumber = Math.random();
//         const result = randomNumber < 0.5 ? 'head' : 'tail';

//         coinImage.src = result === 'head' ? 'https://res.cloudinary.com/dqrttxm5s/image/upload/v1688456292/head_image-removebg-preview_gv7su7.png' : 'https://res.cloudinary.com/dqrttxm5s/image/upload/v1688456287/tail_image-removebg-preview_za10pk.png';

//         if ((result === 'head' && headOption.classList.contains('selected')) || (result === 'tail' && tailOption.classList.contains('selected'))) {
//           // Show the Bootstrap modal with the winning image

//           setTimeout(function(){

         
//           $('#exampleModal01').modal('show');

//           // Add the winning image to the modal body
//           const modalBody = document.querySelector('.modal-body01');
//           modalBody.innerHTML = `<img src="${winningImageUrl}" alt="Congratulations! You Won">`;

//           // Hide the message element

//         }, 1500)
          
//         } else {

//           setTimeout(function(){
//           // Show the Bootstrap modal with the losing image
//           $('#exampleModal01').modal('show');
          
//           // Add the losing image to the modal body
//           const modalBody = document.querySelector('.modal-body01');
//           modalBody.innerHTML = `<img src="${losingImageUrl}" alt="Sorry! You Lose">`;
          
//         }, 1500)
//         }

//         setTimeout(function () {
//           coinImage.classList.remove('flipped', 'move-animation');
//         }, 1000);
//       }, 1000);
//     }
//   }, 1000);
// }

// function handleImageSelection(imageElement) {
//   if (canSelectImage) {
//     headOption.classList.remove('selected');
//     tailOption.classList.remove('selected');

//     imageElement.classList.add('selected');
//   }
// }

// headOption.addEventListener('click', function () {
//   handleImageSelection(headOption);
// });

// tailOption.addEventListener('click', function () {
//   handleImageSelection(tailOption);
// });

// window.addEventListener('load', startCountdown);


const playButton = document.getElementById('button02');
const messageElement = document.getElementById('manu');
const coinImage = document.getElementById('coin');
const timerElement = document.getElementById('timer02');
const timerElement01 = document.getElementById('timer01');
const inputField = document.querySelector('.form01');
const headOption = document.querySelector('.h01');
const tailOption = document.querySelector('.h02');
var newSound = new Audio("manu01.mp3");
let a = document.getElementById("resultDisplay");
const headOption01 = document.getElementById('headb');
const tailOption01 = document.getElementById('tailb');


let timer = 150; // Initial timer value in seconds
let countdownInterval; // Variable to store the countdown interval
let canSelectImage = true; // Flag to track whether the user can select an image

// Winning image URL
const winningImageUrl = 'https://res.cloudinary.com/dqrttxm5s/image/upload/v1693767311/nnn_mzjdgd.png';
const losingImageUrl = 'https://res.cloudinary.com/dqrttxm5s/image/upload/v1692874693/you-lose-comic-speech-bubble-cartoon-game-assets-vector-9673681-removebg-preview_dowzhf.png';


  var inputState01 = document.getElementById('inputState');
  var button001 = document.getElementById('bidAmountInput');

  inputState01.addEventListener('change', function() {
    var selectedOption = inputState01.options[inputState01.selectedIndex].text;
    var amount = selectedOption.split(': ')[1];
    button001.value = amount; 
    button001.style.color = '#fff';// Use .value to set the input field's value
  });


// Function to update the timer display
function updateTimerDisplay() {
  timerElement.textContent = timer;
  timerElement01.textContent = `Live : ${timer} sec`;

  // Change timer color to red between 10 seconds and 0 seconds
  if (timer <= 10 && timer > 0) {
    timerElement.style.color = 'red';
    timerElement01.style.color = 'red';
  } else {
    timerElement.style.color = '';
    timerElement01.style.color = '';
  }
}

// Function to start the countdown timer
function startCountdown() {
  // Reset the timer to 20 seconds
  timer = 150;
  updateTimerDisplay();

  inputField.disabled = false;
  canSelectImage = true;
  headOption.style.opacity = 1; // Reset opacity
  tailOption.style.opacity = 1; // Reset opacity
  inputField.style.opacity = 1;
  inputState01.style.opacity = 1;


  countdownInterval = setInterval(function () {
    timer--;
    updateTimerDisplay();

    if (timer === 10) {
      inputField.disabled = true;
      canSelectImage = false;

      headOption.style.opacity = 0.5;
      tailOption.style.opacity = 0.5;
      inputField.style.opacity = 0.5;
      inputState01.style.opacity = 0.5;
    }

    if (timer === 0) {
      clearInterval(countdownInterval);
      coinImage.classList.add('flipped', 'move-animation');
      newSound.play();

      setTimeout(function () {
        const randomNumber = Math.random();
        const result = randomNumber < 0.5 ? 'head' : 'tail';

        coinImage.src = result === 'head' ? 'https://res.cloudinary.com/dqrttxm5s/image/upload/v1688456292/head_image-removebg-preview_gv7su7.png' : 'https://res.cloudinary.com/dqrttxm5s/image/upload/v1688456287/tail_image-removebg-preview_za10pk.png';

        if ((result === 'head' && headOption.classList.contains('selected')) || (result === 'tail' && tailOption.classList.contains('selected'))) {
          // Show the Bootstrap modal with the winning image

          setTimeout(function(){

         
          $('#exampleModal01').modal('show');

          // Add the winning image to the modal body
          const modalBody = document.querySelector('.modal-body01');
          a.innerHTML = `<img src="${winningImageUrl}" alt="Congratulations! You Won">`;

          // Hide the message element

        }, 1500)
          
        } else {

          setTimeout(function(){
          // Show the Bootstrap modal with the losing image
          $('#exampleModal01').modal('show');
          
          // Add the losing image to the modal body
          const modalBody = document.querySelector('.modal-body01');
          a.innerHTML = `<img src="${losingImageUrl}" alt="Sorry! You Lose">`;
          
        }, 1500)
        }

        setTimeout(function () {
          coinImage.classList.remove('flipped', 'move-animation');
        }, 1000);
      }, 1000);
    }
  }, 1000);
}

function handleImageSelection(imageElement) {
  if (canSelectImage) {
    headOption.classList.remove('selected');
    tailOption.classList.remove('selected');

    imageElement.classList.add('selected');

    if (imageElement === headOption) {
      headOption01.style.backgroundColor = 'green';
      tailOption01.style.backgroundColor = ''; // Reset background color for the other option
    } else if (imageElement === tailOption) {
      tailOption01.style.backgroundColor = 'green';
      headOption01.style.backgroundColor = ''; // Reset background color for the other option
    }

    
  }
}

headOption.addEventListener('click', function () {
  handleImageSelection(headOption);
});

tailOption.addEventListener('click', function () {
  handleImageSelection(tailOption);
});

// Event listener for the close button
const closeButton = document.getElementById('close02');

closeButton.addEventListener('click', function () {
  // Start the countdown timer when the close button is clicked
  startCountdown();
  headOption.classList.remove('selected');
  tailOption.classList.remove('selected');
  headOption01.style.backgroundColor = '';
  tailOption01.style.backgroundColor = '';
  button001.value = ''; 
});

// Start the countdown timer initially when the page loads
window.addEventListener('load', startCountdown);
