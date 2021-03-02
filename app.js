window.onload = () => {
      
      //smooth scroll: select all a elements in the navbar
      $(".navbar a").click(function(){
        $("body,html").animate({
          scrollTop:$("#" + $(this).data('value')).offset().top
        },1000);
  
      });
      //select all a elements on the footer
      $("footer .container .row .col-md-4 .py-0 a").click(function(){
        $("body,html").animate({
          scrollTop:$("#" + $(this).data('value')).offset().top
        },1000);
  
      });
      
			let othertext = document.getElementById('othertext');
			let moreButton = document.querySelectorAll('#content button');
			moreButton[0].addEventListener('click',() => {
					othertext.style.display = 'inline';
					moreButton[0].style.display = 'none';
					moreButton[1].style.display = 'inline';
			})
			moreButton[1].addEventListener('click',() => {
					setTimeout(() => {
								othertext.style.display = 'none';
					      moreButton[1].style.display = 'none';
					      moreButton[0].style.display = 'inline';
					}, 1000);
			});
     function emailcheck(email) {
     			return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
     } 	
     const loginform = document.querySelector('#login-form');
     loginform.addEventListener('submit',(event) => {
     			event.preventDefault();
     			let email = document.querySelector('#login-form #email');
     			let password = document.querySelector('#login-form #password');
     			let modalclosebuttons = document.querySelectorAll('[data-close-modal]');
     			let overlay = document.getElementById('overlay');
     			let emailerror = document.getElementById('email-error');
     			let pwderror = document.getElementById('pwd-error');
     			let tobeauthenticated = {};
         let emailmessages = [];
         let pwdmessages = [];
         if(email.value.trim() === '' || email.value === null) {
             email.classList.add('is-invalid');
         			emailmessages.push('*Email cannot be empty');
         } else if(!emailcheck(email.value.trim())) {
         			emailmessages.push('*Email is not valid');
         			email.classList.add('is-invalid');
         } else {
             tobeauthenticated.email = email.value;
         			emailerror.innerText === '' ? '' : emailerror.style.display = "none";
         			email.classList.remove('is-invalid');
            email.classList.add('is-valid');
         }
         if(password.value.trim() === '' || password.value === null) {
         			password.classList.add('is-invalid');
         			pwdmessages.push('*Password cannot be empty');
         }else if(password.value.trim() === 'password') {
             password.classList.add('is-invalid');
         			pwdmessages.push('*Password cannot password');
         } else if(password.value.length <=7 ) {
             password.classList.add('is-invalid');
             pwdmessages.push('*Password must be longer than 7 characters')
         } else {
         			tobeauthenticated.password = password.value;
         			pwderror.innerText === '' ? '' : pwderror.style.display = "none";
         			password.classList.remove('is-invalid');
         			password.classList.add('is-valid');
         }
         modalclosebuttons.forEach(button => {
         			button.addEventListener('click',() => {
         			   emailerror.innerText === '' ? '' : emailerror.style.display = "none";
         			   !email.classList.contains('is-invalid') ? email.classList.remove('is-valid') : email.classList.remove('is-invalid');
         			   pwderror.innerText === '' ? '' : pwderror.style.display = "none";
         			   !password.classList.contains('is-invalid') ? password.classList.remove('is-valid') : password.classList.remove('is-invalid');
         			});
         });
         overlay.addEventListener('click',() => {
         			 emailerror.innerText === '' ? '' : emailerror.style.display = "none";
         			 !email.classList.contains('is-invalid') ? email.classList.remove('is-valid') : email.classList.remove('is-invalid');
         			 pwderror.innerText === '' ? '' : pwderror.style.display = "none";
         			 !password.classList.contains('is-invalid') ? password.classList.remove('is-valid') : password.classList.remove('is-invalid');
         });
         if(emailmessages.length > 0) {
         			 emailerror.innerText = emailmessages.join(',');
         }
         if(pwdmessages.length > 0) {
         			 pwderror.innerText = pwdmessages.join(',');
         }
         firebase.auth().signInWithEmailAndPassword(tobeauthenticated.email,tobeauthenticated.password)
            .then(success => {
            			Swal.fire({
            					icon: 'success',
            					type: 'success',
            					title: 'Success',
            					text: 'You are logged in'
            			});
            })
            .catch(err => {
            			Swal.fire({
            			      icon: 'error',
            						type: 'error',
            						title: 'Error',
            						text: err.message
            			})
            });
     });
     const signupform = document.querySelector('#signup-form');
     signupform.addEventListener('submit',(event) => {
     			event.preventDefault();
     			let email = document.querySelector('#signup-form #email');
     			let name = document.querySelector('#signup-form #name')
     			let password = document.querySelector('#signup-form #newpassword');
     			let modalclosebuttons = document.querySelectorAll('[data-close-signup]');
     			let overlay = document.getElementById('overlay');
     			let emailerror = document.getElementById('signemail-error');
     			let nameerror = document.getElementById('signname-error');
     			let pwderror = document.getElementById('signpwd-error');
     			let tobeauthenticated = {};
         let emailmessages = [];
         let pwdmessages = [];
         let namemessages = [];
         if(email.value.trim() === '' || email.value === null) {
             email.classList.add('is-invalid');
         			emailmessages.push('*Email cannot be empty');
         } else if(!emailcheck(email.value.trim())) {
         			emailmessages.push('*Email is not valid');
         			email.classList.add('is-invalid');
         } else {
             tobeauthenticated.email = email.value;
         			emailerror.innerText === '' ? '' : emailerror.style.display = "none";
         			email.classList.remove('is-invalid');
            email.classList.add('is-valid');
         }
         if(name.value === '' || name.value === null) {
         			name.classList.add('is-invalid');
         			namemessages.push('*Your name is required');
         } else {
         			tobeauthenticated.name = name.value;
         			nameerror.innerText === '' ? '' : nameerror.style.display = "none";
         			name.classList.remove('is-invalid');
         			name.classList.add('is-valid');
         }
         if(password.value.trim() === '' || password.value === null) {
         			password.classList.add('is-invalid');
         			pwdmessages.push('*Password cannot be empty');
         }else if(password.value.trim() === 'password') {
             password.classList.add('is-invalid');
         			pwdmessages.push('*Password cannot password');
         } else if(password.value.length <=7 ) {
             password.classList.add('is-invalid');
             pwdmessages.push('*Password must be longer than 7 characters')
         } else {
         			tobeauthenticated.password = password.value;
         			pwderror.innerText === '' ? '' : pwderror.style.display = "none";
         			password.classList.remove('is-invalid');
         			password.classList.add('is-valid');
         }
         modalclosebuttons.forEach(button => {
         			button.addEventListener('click',() => {
         			   emailerror.innerText === '' ? '' : emailerror.style.display = "none";
         			   !email.classList.contains('is-invalid') ? email.classList.remove('is-valid') : email.classList.remove('is-invalid');
         			   nameerror.innerText === '' ? '' : nameerror.style.display = "none";
         			   !name.classList.contains('is-invalid') ? name.classList.remove('is-valid') : name.classList.remove('is-invalid');
         			   pwderror.innerText === '' ? '' : pwderror.style.display = "none";
         			   !password.classList.contains('is-invalid') ? password.classList.remove('is-valid') : password.classList.remove('is-invalid');
         			});
         });
         overlay.addEventListener('click',() => {
         			emailerror.innerText === '' ? '' : emailerror.style.display = "none";
         			   !email.classList.contains('is-invalid') ? email.classList.remove('is-valid') : email.classList.remove('is-invalid');
         			   nameerror.innerText === '' ? '' : nameerror.style.display = "none";
         			   !name.classList.contains('is-invalid') ? name.classList.remove('is-valid') : name.classList.remove('is-invalid');
         			   pwderror.innerText === '' ? '' : pwderror.style.display = "none";
         			   !password.classList.contains('is-invalid') ? password.classList.remove('is-valid') : password.classList.remove('is-invalid');
         });
         if(emailmessages.length > 0) {
         			 emailerror.innerText = emailmessages.join(',');
         }
         if(pwdmessages.length > 0) {
         			 pwderror.innerText = pwdmessages.join(',');
         }
         if(namemessages.length > 0) {
         			nameerror.innerText = namemessages.join(',');
         }
         firebase.auth().createUserWithEmailAndPassword(tobeauthenticated.email, tobeauthenticated.password)
         .then((success) => {
            let user = firebase.auth().currentUser;
            var uid;
            if (user != null) {
                uid = user.uid;
            }
            let databaseRef = firebase.database().ref();
            let userdata = {
            			name: tobeauthenticated.name,
            			email: tobeauthenticated.email,
            			password: tobeauthenticated.password
            };
            databaseRef.child(uid).set(userdata);
            Swal.fire('Your Account Created','Your account was created successfully, you can log in now.')
            }).catch((error) => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            Swal.fire({
                icon: 'error',
                type: 'error',
                title: 'Error',
                text: errorMessage,
            })
        })
     });
    const app = () => {
		    const openmodalbuttons = document.querySelectorAll('[data-open-modal]');
		    const closemodalbuttons = document.querySelectorAll('[data-close-modal]');
		    const opensignupmodals = document.querySelectorAll('[data-open-signup]');
		    const closesignupmodals = document.querySelectorAll('[data-close-signup]');
		    const overlay = document.querySelector('#overlay');
		    openmodalbuttons.forEach(button => {
				   button.addEventListener('click',() => {
							 const modal = document.querySelector(".login");
							 openModal(modal);
				  });
		   });
		   opensignupmodals.forEach(button => {
				   button.addEventListener('click',() => {
							 const modal = document.querySelector(".signup");
							 const loginmodal = document.querySelector(".login");
							 openSignupModal(modal,loginmodal);
				  });
		   });
		   function openSignupModal(modal,close) {
		   		if(modal == null) return;
		   		close.classList.remove('active');
		   		modal.classList.add('active');
		   		overlay.classList.add('active');
		   }
		   function openModal(modal) {
				  if(modal == null) return;
				  modal.classList.add('active');
				  overlay.classList.add('active');
		   }
		   closemodalbuttons.forEach(button => {
		   			button.addEventListener('click',() => {
		   						const modal = document.querySelector(".login");
		   						let inputs = document.querySelectorAll('#login-form input');
                closeModal(modal,loginform);
		   			});
		   });
		   closesignupmodals.forEach(button => {
		   			button.addEventListener('click',() => {
		   						const modal = document.querySelector(".signup");
		   						const signupform = document.querySelector('#signup-form');
                closeSignupModal(modal,signupform);
		   			});
		   });
		   overlay.addEventListener('click',() => {
		   			const modals = document.querySelectorAll('#modal.active');
		   			modals.forEach(modal => {
		   			    const signupform = document.querySelector('#signup-form');
		   					closeModal(modal,loginform);
		   					closeSignupModal(modal,signupform);
		   			});
		   });
		   function closeModal(modal,form) {
		   			if(modal == null) return;
		   			form.reset();
		   			modal.classList.remove('active');
		   			overlay.classList.remove('active');
		   }
		   function closeSignupModal(modal,form) {
		       form.reset();
		   			if(modal == null) return;
		   			modal.classList.remove('active');
		   			overlay.classList.remove('active');
		   }
  }
  app();
  let contactnameinput = document.querySelector('#contact #name');
  let contactemailinput = document.querySelector('#contact #email');
  let signOutbutton = document.querySelector('#signout');
  let signInbutton = document.querySelector('#signin');
  firebase.auth().onAuthStateChanged(user => {
  		 if(user) {
  		 		let user = firebase.auth().currentUser;
         let uid
         if(user != null){
            uid = user.uid;
         }
         let databaseRef = firebase.database().ref().child(uid);
         databaseRef.on('value',(snap) => {
         			contactnameinput.value = snap.val().name;
         			contactemailinput.value = snap.val().email;
         });
         signInbutton.classList.add('d-none');
         signOutbutton.classList.remove('d-none');
  		 } else {
  		 			signInbutton.classList.remove('d-none');
          signOutbutton.classList.add('d-none');
  		 }
  });
  signOutbutton.addEventListener('click',() => {
  		 firebase.auth().signOut()
  		   .then(success => {
  		   			Swal.fire({
  		   					icon: 'success',
  		   					type: 'success',
  		   					title: 'success',
  		   					text: 'You are signed out successfully'
  		   			})
  		   })
  		   .catch(err => {
  		   			Swal.fire({
  		   					icon: 'error',
  		   					type: 'error',
  		   					title: 'Erorr',
  		   					text: err.message
  		   			})
  		   });
  });
}