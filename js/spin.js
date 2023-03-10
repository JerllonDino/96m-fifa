function randomNumberRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var turns = 3;

var gameOptions = {
  // slices (prizes) placed in the wheel
  slices: 12,

  // prize names, starting from 12 o'clock going clockwise
  slicePrizes: ["SORRY, YOU MISSED!", "CONGRATULATIONS!"],

  // rotation adder
  rotationMultiplier: 10,
};

const randomize = () => {
  const win = [1, 3, 6, 10];
  const fail = [2, 4, 5, 7, 8, 9, 11, 12];
  let slice = fail[randomNumberRange(0, fail.length - 1)];
  let prize = 0;

  if (turns == 1) {
    slice = win[randomNumberRange(0, win.length - 1)];
    $("#spin").prop("disabled", true);
    prize = 1;
  }

  turns -= 1;
  const sliceSize = 360 / gameOptions.slices;
  let startDeg = 360 - (sliceSize * slice);
  const endDeg = startDeg + sliceSize;

  // console.log(startDeg, endDeg, slice, sliceSize);

  return { prize, degrees: endDeg };
};

// Immediately invoked function expression
// to not pollute the global scope
(function () {
  // const wheel = document.querySelector(".wheel");
  // const startButton = document.querySelector("#spin");
  const wheel = $(".wheel");
  const startButton = $("#spin");
  let deg = 0;
  let prize;

  startButton.on("click", () => {
    // Clear interval of the repeater
    clearInterval(repeater);
    isClicked = true;
    $("#info-welcome").css("opacity", 0);
    // Disable button during spin
    // $(".info").fadeOut(300);
    $("#spin").fadeOut(300);
    // Calculate a new rotation between 5000 and 10 000
    // deg = Math.floor(5000 + Math.random() * 5000);
    let random = randomize();
    actualDeg = random.degrees;
    deg = random.degrees + (gameOptions.rotationMultiplier * 360);
    prize = random.prize;
    // Set the transition on the wheel
    wheel.css("transition", "all 4s ease-out");
    // Rotate the wheel
    wheel.css("transform", `rotate(${deg}deg)`);
    // Apply the blur
    // wheel.classList.add("blur");
    wheel.addClass("blur");
  });

  wheel.on("transitionend", () => {
    // Remove blur
    wheel.removeClass("blur");
    // Need to set transition to none as we want to rotate instantly
    wheel.css("transition", "none");
    // Set the real rotation instantly without animation
    wheel.css("transform", `rotate(${actualDeg}deg)`);

    $("#info-header, #info-welcome").removeClass("blink");

    // unhide info
    // $(".info").fadeIn(300);

    $("#info-header").text(gameOptions.slicePrizes[prize]);
    if(turns == 1) {
      $('#spin-countdown-container').addClass('d-none');
      $('#last-chance').removeClass('d-none');
    }
    if (turns == 0) {
      $("#info-body").text(`You are the winner!`);
      $("#info-header, #info-body").addClass("blink");

      setTimeout(() => {
        $("#first-step").fadeOut(300, function () {
          $(this).addClass("d-none");
        });
        setTimeout(() => {
          $("#second-step").fadeIn(300, function () {
            $(this).removeClass("d-none");
          });
        }, 300);
      }, 1000);
    } else {
      $("#info-body").text(
        `You have ${turns} more spin${turns > 1 ? "s" : ""}`
      );
      $("#spin").fadeIn(300);
    }
  });
})();