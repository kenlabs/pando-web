// ==== darkToggler
const darkTogglerCheckbox = document.querySelector("#darkToggler");
const html = document.querySelector("html");

const darkModeToggler = () => {
  html.classList.remove("ud-dark")
  // darkTogglerCheckbox.checked
  //   ? html.classList.remove("ud-dark")
  //   : html.classList.add("ud-dark");
};
darkModeToggler();

if(darkTogglerCheckbox){
  darkTogglerCheckbox.addEventListener("click", darkModeToggler);
}

// ====== scroll top js
function scrollTo(element, to = 0, duration = 500) {
  const start = element.scrollTop;
  const change = to - start;
  const increment = 20;
  let currentTime = 0;

  const animateScroll = () => {
    currentTime += increment;

    const val = Math.easeInOutQuad(currentTime, start, change, duration);

    element.scrollTop = val;

    if (currentTime < duration) {
      setTimeout(animateScroll, increment);
    }
  };

  animateScroll();
}

Math.easeInOutQuad = function (t, b, c, d) {
  t /= d / 2;
  if (t < 1) return (c / 2) * t * t + b;
  t--;
  return (-c / 2) * (t * (t - 2) - 1) + b;
};


document.querySelector(".back-to-top").onclick = () => {
  document.body.scrollTop = document.documentElement.scrollTop = 0;
};

// send us a message
document.querySelector('#submitInfo').onclick=()=>{
  const action = 'send slack message'
  const url = 'https://web-api.pando.network/message'
  const name = document.getElementById('name').value
  const email = document.getElementById('email').value
  const message = document.getElementById('message').value

  const body = {
    "fullName": name,
    "emailAddress": email,
    "message": message
  }

  axios.post(url, body, {
    timeout: 60000,
  }).then(res => {
    console.log(res)
    console.log("success: "+action)
  }).catch(err => {
    console.log(err)
    console.log("failed: "+action)
  })
  return false
}

// newsletter
document.querySelector('#emailOnlySubmit').onclick=()=>{
  const action = 'subscribe newsletter'
  const url = 'https://web-api.pando.network/newsletter/subscribers'
  const email = document.getElementById('emailOnly').value
  const body = {
    "email": email,
    "name": email.split('@')[0],
    "status": "enabled",
    "lists": [
      3
    ],
  }
  axios.post(url, body, {
    timeout: 60000,
  }).then(res => {
    console.log(res)
    console.log("success "+action)
  }).catch(err => {
    console.log(err)
    console.log("failed "+action)
  })
  return false
}