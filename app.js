// const url = 'https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users';
const url =
	'https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/2';

let user;

async function fetchData() {
	// await fetch(url)
	// 	.then((res) => res.json())
	// 	.then((data) => {
	// 		user = data;
	// 		console.log(user);
	// 		root.textContent = user.profile.firstName + ' ' + user.profile.lastName;
	// 		for (let item in user) {
	// 			console.log(item + ': ' + user[item]);
	// 		}
	// 	})
	// 	// .then(console.log(user))
	// 	.catch((err) => console.log(err));

	// console.log(user);

	const json = await fetch(url);
	const newData = await json.json();
	return newData;
	// console.log(newData);
}

const root = document.querySelector('.root');
const btn = document
	.querySelector('.btn')
	.addEventListener('click', async () => {
		const user = await fetchData();
		console.log(user);
	});

// user.map((item) => console.log(item));

// console.log(user);
// for (const item of user) {
// 	console.log(item);
// }
