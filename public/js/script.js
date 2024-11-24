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
// 			document.querySelector('#question').innerText = response.question;
// 			document.querySelector('#corr').innerText = response.answers;
//             console.log(response)
// 	})
// 	.catch(err => console.error(err));
// }

// submitbtn = document.querySelector("#check-answer")
// submitbtn.addEventListener("click", (e)=>{
// 	e.preventDefault();
// 	definition()
// })

const definition = () => { 
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'b4d68ea946mshad498eaea6ef87cp142a6djsn5a8f3c208969',
            'x-rapidapi-host': 'quizmania-api.p.rapidapi.com'
        }
    };

    fetch(`https://quizmania-api.p.rapidapi.com/random-trivia`, options)
        .then(response => response.json())
        .then((response) => {
            const questionElement = document.querySelector('#question');
            questionElement.innerText = response.question;

            const optionsContainer = document.querySelector('.quiz-options');
            optionsContainer.innerHTML = ''; // Clear old options

            response.answers.forEach((answer, index) => {
                const optionElement = document.createElement('li');
                optionElement.className = 'quiz-option';
                optionElement.innerHTML = `${index + 1}. <span id=option-${index+1}>${answer}</span>`;
                optionsContainer.appendChild(optionElement);

                optionElement.addEventListener('click', () => {
                    // Clear previous selections
                    document.querySelectorAll('.quiz-options li').forEach(opt => 
                        opt.classList.remove('selected')
                    );
                    optionElement.classList.add('selected');
                });
            });
        })
        .catch(err => console.error(err));
};
definition();
// Attach event listener to the button
const submitbtn = document.querySelector("#next-question");
submitbtn.addEventListener("click", (e) => {
    e.preventDefault();
    definition();
});


