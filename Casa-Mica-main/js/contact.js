const sendMail = function () {
	var email = document.getElementById('email').value;
	var name = document.getElementById('name').value;
	var myText = document.getElementById('myText').value;

	console.log(email, name, myText);
	Email.send({
		Host: 'smtp.elasticemail.com',
		Username: 'mazilu.andrei.2014@gmail.com',
		Password: 'C7CE0910E8A40B97B54BE097F3D42687E20E',
		To: 'andrei_mazilu_2006@yahoo.com',
		From: email,
		Subject: `Mesaj de la ${name}`,
		Body: myText,
	})
		.then(function (message) {
			alert('mail sent successfully');
		})
		.catch((error) => console.log(error));
};
