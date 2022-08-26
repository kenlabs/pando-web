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

const url = 'https://slack.com/api/chat.postMessage/'
const headers = {
  'Content-type': 'application/json',
  Authorization:'Bearer xoxb-2544772940691-3967276504629-u59O14TpWtYSseshTR1YplDa'
}
document.querySelector('#submitInfo').onclick=()=>{
  const name = document.getElementById('name').value
  const email = document.getElementById('email').value
  const message = document.getElementById('message').value
  const data = {
    "channel": "C02FU0RPDLN",
    "blocks": [
      {
        "type": "section",
        "text": {
          "text": "PandoWeb Chat",
          "type": "mrkdwn"
        },
        "fields": [
          {
            "type": "mrkdwn",
            "text": "*Full Name*"
          },
          {
            "type": "mrkdwn",
            "text": "*Email*"
          },
          {
            "type": "plain_text",
            "text": name
          },
          {
            "type": "plain_text",
            "text": email
          },
          {
            "type": "mrkdwn",
            "text": "*Message*"
          },
          {
            "type": "mrkdwn",
            "text": " "
          },
          {
            "type": "plain_text",
            "text": message
          }
        ]
      }
    ]
  }
  fetch(url,{
    body:JSON.stringify(data),       
    method:'POST',
    headers
  }) .then(response => response.json()).then(json=>{
    if(json.ok){
      alert('Success!')
    }else{
      alert('Fail!')
    }
  }).catch(()=>{
    alert('Fail!')
  })
  return false
}

document.querySelector('#emailOnlySubmit').onclick=()=>{
  const email = document.getElementById('emailOnly').value
  const data = {
    "channel": "C02FU0RPDLN",
    "blocks": [
      {
        "type": "section",
        "text": {
          "text": "PandoWeb Chat",
          "type": "mrkdwn"
        },
        "fields": [
          {
            "type": "mrkdwn",
            "text": "*Full Name*"
          },
          {
            "type": "mrkdwn",
            "text": "*Email*"
          },
          {
            "type": "plain_text",
            "text": email
          },
          {
            "type": "mrkdwn",
            "text": "*Message*"
          },
          {
            "type": "mrkdwn",
            "text": " "
          },
        ]
      }
    ]
  }
  fetch(url,{
    method:'POST',
    body:JSON.stringify(data),       
    headers
  }) .then(response => response.json()).then(json=>{
    if(json.ok){
      alert('Success!')
    }else{
      alert('Fail!')
    }
  }).catch(()=>{
    alert('Fail!')
  })
  return false
}

