 axios.get('https://api.github.com/users/weslleyzanirate')
	.then(function(response) {
       
       alert(response.data.login);
		console.log(response.data.avatar_url);
	})

	.catch(function(error){
        console.warn(error);
        alert(error);
	});
