const commentors = [
  {
    name: "Kelvin Ma",
    date: "February 18",
    profileImage: "./assets/profiles/Kelvin.png",
    comment:
      "Wah, this 96M platform is really syok ah! So many chances to win big!",
  },
  {
    name: "Vivien Chong",
    date: "January 9",
    profileImage: "./assets/profiles/Vivien.png",
    comment:
      "Confirm trusted platform lah, with Jacky Wu as ambassador some more. No need to worry about kena tip or anything like that.",
  },
  {
    name: "Koo Teck Feng",
    date: "January 28",
    profileImage: "./assets/profiles/Koo.png",
    comment:
      "Walao eh, I just won 3K plus on this platform using the 288% Magnificent Welcome Bonus. Really lucky lah!",
  },
  {
    name: "Tan Kien Loong",
    date: "March 11",
    profileImage: "./assets/profiles/Tan.png",
    comment:
      "I don't usually trust online platforms, but this one really impressed me. The 288% Magnificent Welcome Bonus is just too good to miss out on!",
  },
  {
    name: "Raymond Lai",
    date: "February 1",
    profileImage: "./assets/profiles/Raymond.png",
    comment:
      "Trust me guys, you won't regret signing up for this platform and using the 288% Magnificent Welcome Bonus. Confirm win big one!",
  },
  {
    name: "Rexxx Tan",
    date: "January 15",
    profileImage: "./assets/profiles/Rexxx.png",
    comment:
      "Eh bro, if you haven't tried the 96M, you're missing out on some serious money-making opportunities.",
  },
  {
    name: "Sushi Long",
    date: "January 30",
    profileImage: "./assets/profiles/Sushi.png",
    comment:
      "Just got my bonus credited into my account after claimed the 288% Magnificent Welcome Bonus. Can't wait to start playing and hopefully win big!",
  },
  {
    name: "Shantini Sham",
    date: "January 25",
    profileImage: "./assets/profiles/Shantini.png",
    comment:
      "Honestly, I was a bit skeptical at first, but after trying the 96M 288% Magnificent Welcome Bonus on this platform and winning some money, I'm a believer now!",
  },
  {
    name: "Teoh Mei Xin",
    date: "January 18",
    profileImage: "./assets/profiles/Teoh.png",
    comment:
      "So many people talking about this platform and the 288% Magnificent Welcome Bonus. Had to give it a try and boy was it worth it. Made some extra cash, boleh!",
  },
  {
    name: "Libra Loh",
    date: "March 4",
    profileImage: "./assets/profiles/Libra.png",
    comment:
      "Highly recommended lah this platform with Jacky Wu as ambassador leh. Don't say I bojio if you miss out on this chance to win big!",
  },
];

function populateComments() {
  commentors.forEach((x, i) => {
    const commentHtml = `<div class="comment-container card ${i == x.length - 1 ? "mb-1" : "mb-3"} py-2 px-3 w-100 d-flex flex-column">
                <div class="comment-header d-flex justify-content-between">
                  <div class="profile-section d-flex">
                    <img
                      class="profile-image me-2"
                      src="${x.profileImage}"
                      alt="profile"
                    />
                    <div
                      class="profile-name d-flex flex-column justify-content-center"
                    >
                      <h6 class="fb-text-blue fw-bold">${x.name}</h6>
                      <div class="profile-date d-flex align-items-center">
                        <small class="text-muted">${x.date} </small>
                        <span
                          ><i class="fa-solid fa-circle text-muted mx-2"></i
                        ></span>
                        <img
                          class="my-auto"
                          src="./assets/images/globe.webp"
                          alt="globe"
                          srcset=""
                        />
                      </div>
                    </div>
                  </div>
                  <div class="comment-ellipsis">
                    <button class="btn p-0 m-0 border-0"><i class="fa-solid fa-ellipsis text-muted m-0 p-0"></i></button>
                  </div>
                </div>
                <div class="comment-body mt-1">
                  <p>${x.comment}</p>
                </div>
                <div class="comment-footer d-flex mt-2">
                  <button class="footer-btn btn text-muted p-0 border-0 d-flex align-items-center me-4">
                    <i class="fa-regular fa-thumbs-up me-1"></i> 
                    <small>Like</small>
                  </button>
                  <button class="footer-btn btn text-muted p-0 border-0 d-flex align-items-center me-4">
                    <i class="fa-regular fa-message me-1"></i>
                    <small>Comment</small>
                  </button>
                  <button class="footer-btn btn text-muted p-0 border-0 d-flex align-items-center me-4">
                    <i class="fa-solid fa-share me-1"></i>
                    <small>Share</small>
                  </button>
                </div>
              </div>`;

    $("#testimonial-body").append(commentHtml);
  });
}
