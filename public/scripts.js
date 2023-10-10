window.addEventListener("DOMContentLoaded", (event) => {
  // Activate Bootstrap scrollspy on the main nav element
  const mainNav = document.body.querySelector("#mainNav");
  if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: "#mainNav",
      offset: 74,
    });
  }

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector(".navbar-toggler");
  const responsiveNavItems = [].slice.call(
    document.querySelectorAll("#navbarResponsive .nav-link")
  );
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener("click", () => {
      if (window.getComputedStyle(navbarToggler).display !== "none") {
        navbarToggler.click();
      }
    });
  });
});

window.addEventListener("load", () => {
  //opens the modal of the resources
  function getFragmentIdentifier() {
    return window.location.hash.substring(1); // Remove the '#' symbol
  }

  function findButtonByTarget(target) {
    return document.getElementById(target);
  }

  function triggerButtonClick(button) {
    if (button) {
      button.click();
    }
  }

  const fragment = getFragmentIdentifier();
  const buttonToClick = findButtonByTarget(fragment);

  console.log(fragment);
  console.log(buttonToClick);
  console.log("hello");

  if (fragment && buttonToClick) {
    triggerButtonClick(buttonToClick);
  }
});

function sendMessage() {
  const message = messageInput.value;
  messageInput.value = "";

  const messageEl = document.createElement("div");
  messageEl.className = "message";
  messageEl.textContent = message;
  chatLog.appendChild(messageEl);

  fetch("/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message }),
  })
    .then((res) => res.json())
    .then((data) => {
      const reply = data.reply;
      const replyEl = document.createElement("div");
      replyEl.className = "reply";
      const replyText = document.createElement("p");
      replyText.textContent = reply;
      replyEl.appendChild(replyText);
      chatLog.appendChild(replyEl);
      chatLog.scrollTop = chatLog.scrollHeight;
    });
}

// Get the modal
var modal1 = document.getElementById("myModal1");
var modal2 = document.getElementById("myModal2");
var modal3 = document.getElementById("myModal3");
var modal4 = document.getElementById("myModal4");
var modal5 = document.getElementById("myModal5");
var modal6 = document.getElementById("myModal6");
var modal7 = document.getElementById("myModal7");
var modal8 = document.getElementById("myModal8");
var modal9 = document.getElementById("myModal9");
var modal10 = document.getElementById("myModal10");
var modal11 = document.getElementById("myModal11");

//Get the share button
var share1 = document.getElementById("share_btn1");
var share2 = document.getElementById("share_btn2");
var share3 = document.getElementById("share_btn3");
var share4 = document.getElementById("share_btn4");
var share5 = document.getElementById("share_btn5");
var share6 = document.getElementById("share_btn6");
var share7 = document.getElementById("share_btn7");
var share8 = document.getElementById("share_btn8");
var share9 = document.getElementById("share_btn9");
var share10 = document.getElementById("share_btn10");
var share11 = document.getElementById("share_btn11");

//Get the share button text
var share_text1 = document.getElementById("share_txt1");
var share_text2 = document.getElementById("share_txt2");
var share_text3 = document.getElementById("share_txt3");
var share_text4 = document.getElementById("share_txt4");
var share_text5 = document.getElementById("share_txt5");
var share_text6 = document.getElementById("share_txt6");
var share_text7 = document.getElementById("share_txt7");
var share_text8 = document.getElementById("share_txt8");
var share_text9 = document.getElementById("share_txt9");
var share_text10 = document.getElementById("share_txt10");
var share_text11 = document.getElementById("share_txt11");

// Get the button that opens the modal
var btn1 = document.getElementById("button1");
var btn2 = document.getElementById("button2");
var btn3 = document.getElementById("button3");
var btn4 = document.getElementById("button4");
var btn5 = document.getElementById("button5");
var btn6 = document.getElementById("button6");
var btn7 = document.getElementById("button7");
var btn8 = document.getElementById("button8");
var btn9 = document.getElementById("button9");
var btn10 = document.getElementById("button10");
var btn11 = document.getElementById("button11");

// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("btn-close")[0];
var span2 = document.getElementsByClassName("btn-close")[1];
var span3 = document.getElementsByClassName("btn-close")[2];
var span4 = document.getElementsByClassName("btn-close")[3];
var span5 = document.getElementsByClassName("btn-close")[4];
var span6 = document.getElementsByClassName("btn-close")[5];
var span7 = document.getElementsByClassName("btn-close")[6];
var span8 = document.getElementsByClassName("btn-close")[7];
var span9 = document.getElementsByClassName("btn-close")[8];
var span10 = document.getElementsByClassName("btn-close")[9];
var span11 = document.getElementsByClassName("btn-close")[10];


// When the user clicks on the button, open the modal
btn1.onclick = function () {
  modal1.style.display = "block";
};

btn2.onclick = function () {
  modal2.style.display = "block";
};

btn3.onclick = function () {
  modal3.style.display = "block";
};

btn4.onclick = function () {
  modal4.style.display = "block";
};

btn5.onclick = function () {
  modal5.style.display = "block";
};

btn6.onclick = function () {
  modal6.style.display = "block";
};

btn7.onclick = function () {
  modal7.style.display = "block";
};

btn8.onclick = function () {
  modal8.style.display = "block";
};

btn9.onclick = function () {
  modal9.style.display = "block";
};

btn10.onclick = function () {
  modal10.style.display = "block";
};
btn11.onclick = function () {
  modal11.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span1.onclick = function () {
  modal1.style.display = "none";
};

span2.onclick = function () {
  modal2.style.display = "none";
};

span3.onclick = function () {
  modal3.style.display = "none";
};

span4.onclick = function () {
  modal4.style.display = "none";
};

span5.onclick = function () {
  modal5.style.display = "none";
};

span6.onclick = function () {
  modal6.style.display = "none";
};

span7.onclick = function () {
  modal7.style.display = "none";
};

span8.onclick = function () {
  modal8.style.display = "none";
};

span9.onclick = function () {
  modal9.style.display = "none";
};

span10.onclick = function () {
  modal10.style.display = "none";
};
span11.onclick = function () {
  modal11.style.display = "none";
};

// When the user clicks on the share button, copy the link to the clipboard
share1.onclick = function () {
  const link = `${window.location.protocol + "//" + window.location.host}/#${
    btn1.id
  }`;
  navigator.clipboard.writeText(link);
  share_text1.innerHTML = "Copied!";
};
share11.onclick = function () {
  const link = `${window.location.protocol + "//" + window.location.host}/#${
    btn11.id
  }`;
  navigator.clipboard.writeText(link);
  share_text11.innerHTML = "Copied!";
};

window.onclick = function (event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  } else if (event.target == modal2) {
    modal2.style.display = "none";
  } else if (event.target == modal3) {
    modal3.style.display = "none";
  } else if (event.target == modal4) {
    modal4.style.display = "none";
  } else if (event.target == modal5) {
    modal5.style.display = "none";
  } else if (event.target == modal6) {
    modal6.style.display = "none";
  } else if (event.target == modal7) {
    modal7.style.display = "none";
  } else if (event.target == modal8) {
    modal8.style.display = "none";
  } else if (event.target == modal9) {
    modal9.style.display = "none";
  } else if (event.target == modal10) {
    modal10.style.display = "none";
  }
  else if (event.target == modal11) {
    modal11.style.display = "none";
  }
};

function scrollToSection(id) {
  var element = document.querySelector(id);
  element.scrollIntoView({ behavior: "smooth", block: "start" });
}

// Scroll to top button
let returnToTopButton = document.getElementById("returnToTop");

// Function to scroll to the top of the page
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

// Function to toggle the visibility of the "return to top" button
function toggleReturnToTopButton() {
  if (window.scrollY > 200) {
    returnToTopButton.classList.add("active");
  } else {
    returnToTopButton.classList.remove("active");
  }
}

// Add event listeners
window.addEventListener("scroll", toggleReturnToTopButton);
returnToTopButton.addEventListener("click", scrollToTop);
