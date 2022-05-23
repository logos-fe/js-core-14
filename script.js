// Forms
// document.forms - повертає масив усіх форм на сторінці
// const form = document.forms['my_form'];
// const form2 = document.forms['my_form2'];
// const form3 = document.forms['my_form3'];
// console.log(document.forms['my_form']);

// form.elements - повертає масив усіх елементів форми
// console.log(form2.elements.age);

// console.log(form3.elements.select.options[2].selected)

// Основні властивості форми
// form.name - назва форми або елемента
// value - значення елемента
// defaultValue - значення елемента при першому відкритті форми
// checked - при чекбоксі провіряємо чи елемент відмічений
// selected - при селекті провіряємо чи елемент відмічений

// const form1 = document.forms['f1'];
// const form2 = document.forms['f2'];
// const form3 = document.forms['f3'];
// const form4 = document.forms['f4'];
// const form5 = document.forms['f5'];
//
// // Work with form1
// const rightPassword = '12345';
//
// form1.button.onclick = () => {
//   const successMessage = document.querySelector('#success');
//   const pass = form1.password.value;
//   if (pass === rightPassword) {
//     successMessage.innerHTML = 'You are logged in';
//     form1.reset();
//   } else {
//     successMessage.innerHTML = 'Wrong password';
//   }
// }
//
// // blur - при закінченні редагування елемента
// // focus - при натисканні на елемент
//
// form1.email.onblur = () => {
//   if (form1.email.value.includes('@')){
//     form1.email.style.border = '1px solid green'
//   } else {
//     form1.email.style.border = '1px solid red'
//   }
// }
//
// form1.email.onfocus = () => {
//   form1.email.style.border = '1px solid orange'
// }
//
// // Work with form2
//
// for (let i = 0; i < form2.length; i++) {
//   form2.elements[i].addEventListener('click', () => {
//     document.body.style.background = form2.elements[i].value;
//   })
// }
//
// // Work with form3
// form3.checkbox.addEventListener('click', () => {
//   const box = document.querySelector('.form-box');
//   if (form3.checkbox.checked) {
//     box.style.display = 'block'
//   } else {
//     box.style.display = 'none'
//   }
// })
//
// // Work with form4
// form4.colors.onchange = () => {
//   for (let i = 0; i < form4.colors.length; i++) {
//     if (form4.colors[i].selected) {
//       document.body.style.background = form4.colors[i].value
//     }
//   }
// }
//
// // Work with form5
// form5.text.oninput = () => {
//   const result = document.querySelector('#result');
//   result.innerHTML = form5.text.value;
// }




const users = []

const btnOpenRegistration = document.getElementById('open-registration')
const messages = document.querySelector('.messages')

btnOpenRegistration.onclick = () => {
  const registration = document.querySelector('.registration');
  registration.style.display = 'flex';
}

const registrationForm = document.forms.registration;
const loginForm = document.forms.login;

registrationForm.submit_button.addEventListener('click', () => {
  const name = registrationForm.name.value
  const email = registrationForm.email.value

  const pass1 = registrationForm.password.value
  const pass2 = registrationForm.password_repeat.value

  if (name.length < 3 || email.length < 3 || pass1.length < 8) {
    messages.innerHTML = 'Fill all fields';
  } else {
    if (pass1 !== pass2) {
      messages.innerHTML = 'Passwords are not equal';
    }

    const user = {
      name,
      email,
      password: pass1
    }

    users.push(user)
    messages.innerHTML = 'User is registered';
    registrationForm.style.display = 'none'
    loginForm.style.display = 'flex'
  }
})

registrationForm.password.oninput = () => {
  const regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
  if (registrationForm.password.value.match(regex)){
    registrationForm.password.classList.add('success')
    registrationForm.password.classList.remove('error')
  } else {
    registrationForm.password.classList.remove('success')
    registrationForm.password.classList.add('error')
  }
}

registrationForm.email.onblur = () => {
  if (registrationForm.email.value.includes('@')){
    registrationForm.email.classList.add( 'success' )
  } else {
    registrationForm.email.classList.add( 'error' )
  }
}
loginForm['email-login'].onblur = () => {
  if (registrationForm.email.value.includes('@')){
    registrationForm.email.classList.add( 'success' )
  } else {
    registrationForm.email.classList.add( 'error' )
  }
}

registrationForm.email.onfocus = () => {
  registrationForm.email.classList.remove('success')
  registrationForm.email.classList.remove('error')
}
loginForm['email-login'].onfocus = () => {
  registrationForm.email.classList.remove('success')
  registrationForm.email.classList.remove('error')
}

loginForm.submit_button_login.addEventListener('click', () => {
  const email = loginForm['email-login'].value
  const password = loginForm['password-login'].value
  const currentUser = users.find(user => user.email === email)

  if (currentUser) {
    if (currentUser.password === password) {
      messages.innerHTML = '<h1>Welcome to our site</h1>'
      loginForm.style.display = 'none'
      btnOpenRegistration.style.display = 'none'
    }
  } else {
    messages.innerHTML = 'User is not registered';
  }

})


























