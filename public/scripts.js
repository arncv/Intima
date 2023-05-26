

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});


function sendMessage() {
    const message = messageInput.value;
    messageInput.value = '';
  
    const messageEl = document.createElement('div');
    messageEl.className = 'message';
    messageEl.textContent = message;
    chatLog.appendChild(messageEl);
  
    fetch('/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    })
      .then((res) => res.json())
      .then((data) => {
        const reply = data.reply;
        const replyEl = document.createElement('div');
        replyEl.className = 'reply';
        const replyText = document.createElement('p');
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


// When the user clicks on the button, open the modal
btn1.onclick = function() {
  modal1.style.display = "block";
}

btn2.onclick = function() {
  modal2.style.display = "block";
}

btn3.onclick = function() {
  modal3.style.display = "block";
}

btn4.onclick = function() {
    modal4.style.display = "block";
    }

btn5.onclick = function() {
    modal5.style.display = "block";
        }

btn6.onclick = function() {
    modal6.style.display = "block";
}

btn7.onclick = function() {
    modal7.style.display = "block";
}

btn8.onclick = function() {
    modal8.style.display = "block";
}

btn9.onclick = function() {
    modal9.style.display = "block";
}


// When the user clicks on <span> (x), close the modal
span1.onclick = function() {
  modal1.style.display = "none";
}

span2.onclick = function() {
  modal2.style.display = "none";
}

span3.onclick = function() {
    modal3.style.display = "none";
  }

span4.onclick = function() {
    modal4.style.display = "none";
}

span5.onclick = function() {
    modal5.style.display = "none";
}

span6.onclick = function() {
    modal6.style.display = "none";
}

span7.onclick = function() {
    modal7.style.display = "none";
}

span8.onclick = function() {
    modal8.style.display = "none";

}

span9.onclick = function() {
    modal9.style.display = "none";
}





window.onclick = function(event) {
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
  } 
}


function scrollToSection(id) {
    var element = document.querySelector(id);
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  
// Scroll to top button 
let returnToTopButton = document.getElementById('returnToTop');

// Function to scroll to the top of the page
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// Function to toggle the visibility of the "return to top" button
function toggleReturnToTopButton() {
  if (window.scrollY > 200) {
    returnToTopButton.classList.add('active');
  } else {
    returnToTopButton.classList.remove('active');
  }
}

// Add event listeners
window.addEventListener('scroll', toggleReturnToTopButton);
returnToTopButton.addEventListener('click', scrollToTop);