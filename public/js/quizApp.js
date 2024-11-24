// const definition = () => { 
// 	const options = {
//         method: 'GET',
//         headers: {
//             'x-rapidapi-key': 'b4d68ea946mshad498eaea6ef87cp142a6djsn5a8f3c208969',
//             'x-rapidapi-host': 'quizmania-api.p.rapidapi.com'
//         }
//     };
// 	fetch(`https://quizmania-api.p.rapidapi.com/random-trivia`, options)
// 		.then(response => response.json())
// 		.then((response) => {
// 			document.querySelector('#ques').innerText = response.question;
// 			document.querySelector('#corr').innerText = response.answers;
//             console.log(response)
// 	})
// 	.catch(err => console.error(err));
// }

// submitbtn = document.querySelector("#new")
// submitbtn.addEventListener("click", (e)=>{
// 	e.preventDefault();
// 	definition()
// })
// Select all the quiz option <li> elements
// const quizOptions = document.querySelectorAll(".quiz-options li");

// // Add click event listener to each option
// quizOptions.forEach(option => {
//     option.addEventListener("click", () => {
//         // Remove 'selected' class from all options
//         quizOptions.forEach(opt => opt.classList.remove("selected"));
        
//         // Add 'selected' class to the clicked option
//         option.classList.add("selected");
//     });
// });
