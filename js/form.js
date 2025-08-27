function openPopup() {
    document.getElementById('loginPopup').style.display = 'block';
    document.body.classList.add('blur');
}

function closePopup() {
    document.getElementById('loginPopup').style.display = 'none';
    document.body.classList.remove('blur');
}

function switchForm(formType) {
    if (formType === 'login') {
        document.getElementById('loginForm').style.display = 'flex';
        document.getElementById('signupForm').style.display = 'none';
        document.getElementById('loginSwitch').classList.add('active');
        document.getElementById('signupSwitch').classList.remove('active');
    } else {
        document.getElementById('loginForm').style.display = 'none';
        document.getElementById('signupForm').style.display = 'flex';
        document.getElementById('loginSwitch').classList.remove('active');
        document.getElementById('signupSwitch').classList.add('active');
    }
}

function validateLoginForm() {
    var email = document.getElementById('loginEmail').value;
    var password = document.getElementById('loginPassword').value;
    if (email && password) {
        return true;
    }
    alert("Please fill in all fields.");
    return false;
}

function validateSignupForm() {
    var username = document.getElementById('signupUsername').value;
    var email = document.getElementById('signupEmail').value;
    var password = document.getElementById('signupPassword').value;
    if (username && email && password) {
        return true;
    }
    alert("Please fill in all fields.");
    return false;
}

document.querySelectorAll('section > div').forEach(card => {
card.addEventListener('mouseover', () => {
  card.style.transform = 'scale(1.05)';
  card.querySelector('div:last-child').style.opacity = '1';
});
card.addEventListener('mouseout', () => {
  card.style.transform = 'scale(1)';
  card.querySelector('div:last-child').style.opacity = '0';
});
});

document.getElementById("pop").addEventListener("click", openPopup);
document.getElementById("loginSwitch").addEventListener("click", function() {
    switchForm('login');
});

document.getElementById("signupSwitch").addEventListener("click", function() {
    switchForm('signup');
});

document.getElementById("closePopupButton").addEventListener("click", function() {
    closePopup();
});

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("loginForm").addEventListener("submit", function(event) {
        if (!validateLoginForm()) {
            event.preventDefault(); // Prevent form submission if validation fails
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("signupForm").addEventListener("submit", function(event) {
        if (!validateSignupForm()) {
            event.preventDefault(); // Prevent form submission if validation fails
        }
    });
});

