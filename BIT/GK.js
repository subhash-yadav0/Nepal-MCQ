document.addEventListener("DOMContentLoaded", function () {
    const questions = [
        // Each question object is structured as follows:
        // { question: 'Question text', options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'], answer: 'Correct Option' }
        // {
        //     question: "The system: x − y = 7; −x + y = 3 has ……….",
        //     options: ["one solution", "no solution ", "infinitely many solutions", "two solutions"],
        //     answer: "no solution "
        // },
        // {
        //     question: "The vectors 𝐚 = (2, 3)and 𝐛 = (4, 6) are ……….",
        //     options: ["Linearly dependent", "Orthogonal", "Parallel", "linearly independent "],
        //     answer: "Linearly dependent"
        // },
        
        {
            question: "The study of sound and sound waves is called",
            options: ["mechanical", "technical", "acoustics", "sound waves"],
            answer: "acoustics"
        },
        {
            question: "A river always has",
            options: ["delta", "fishes", "boats", "bank"],
            answer: "bank"
        },
        {
            question: "Which is the international sports competition that is held only in Nepal?",
            options: ["dandi", "elephant polo", "bhale judhai", "kabaddi"],
            answer: "elephant polo"
        },
        {
            question: "Which mountain is understood by killer mountain?",
            options: ["manaslu", "ama dablam", "Cho OYU", "kala patthar"],
            answer: "Cho OYU"
        },
        {
            question: "Which of the following is understood by 'killer mountain'?",
            options: ["school", "teacher", "text book", "clearing"],
            answer: "clearing"
        },
        {
            question: "Two concepts are related in some way; establish the same relationship on the basis of the alternatives given for UTS: FDC:: WVU:?",
            options: ["YWV", "WXY", "UVW", "HGF"],
            answer: "HGF"
        },
        {
            question: "Insert the appropriate arithmetical signs in (?,?) to establish the relation: 9?6?3=27",
            options: ["+, x", "-, +", "÷, +", "+, +"],
            answer: "+, x"
        },
        {
            question: "If LIGHT is coded as GILTH, find the code for RAINY.",
            options: ["IARYN", "ARINY", "NAIRY", "RINAY"],
            answer: "IARYN"
        },
        {
            question: "A, B, and C are intelligent, A, D, and E are laborious, D, C, and E are honest and A, B, and E are ambitious. Which of the following are not honest?",
            options: ["A and B", "C and A", "A and D", "A and D"],
            answer: "A and B"
        },
        {
            question: "What is the full form of OTP?",
            options: ["once transfer protocol", "one time password", "over treated password", "one time pin"],
            answer: "once transfer protocol"
        },
        {
            question: "Which of the following is not a search engine?",
            options: ["Google", "Altavista", "Yahoo", "Firefox Mozilla"],
            answer: "Yahoo"
        },
        {
            question: "Name of the screen that recognizes touch input",
            options: ["Recog screen", "Touch Screen", "Point Screen", "Android Screen"],
            answer: "Point Screen"
        },
        {
            question: "Arrange in ascending order the units of memory TB, KB, GB, MB",
            options: ["TB>MB>GB>KB", "MB>GB>TB>KB", "TB>GB>MB>KB", "GB>MB>KB>TB"],
            answer: "TB>GB>MB>KB"
        },
        {
            question: "What is the full form of WWW?",
            options: ["World Wide Web", "Wide World Web", "Web Wide World", "World Web Wide"],
            answer: "World Wide Web"
        },
        {
            question: "Junk email is also called",
            options: ["Spam", "Sniffer", "Spoof", "Jmail"],
            answer: "Spam"
        },
        {
            question: "Which of the following is used to make presentation slides?",
            options: ["PowerPoint", "Excel", "Word", "Internet"],
            answer: "PowerPoint"
        },
        {
            question: "Who is the father of computers?",
            options: ["Charles Babbage", "Blaise Pascal", "Gordon Moore", "John Von Neumann"],
            answer: "Charles Babbage"
        },
        {
            question: "Which of the following is used as memory in computers?",
            options: ["RAM", "Printer", "Keyboard", "Mouse"],
            answer: "RAM"
        },
        {
            question: "MS-Word is an example of ..............",
            options: ["Operating System", "Application Software", "Output Device", "Processing Device"],
            answer: "Operating System"
        },
        {
            question: "The printed output from a computer is known as",
            options: ["Soft copy", "Photo Copy", "Hard Copy", "Paper"],
            answer: "Photo Copy"
        }
        
       
        
       
        //    ------------------------------------------------------------------------------






        
        //    ------------------------------------------------------------------------------

        
        
    ];

    const quizForm = document.getElementById('quizForm');
    const submitBtn = document.getElementById('submitBtn');
    const result = document.getElementById('result');

    questions.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');

        const questionP = document.createElement('p');
        questionP.textContent = `${index + 1}. ${q.question}`;
        questionDiv.appendChild(questionP);

        const optionsUl = document.createElement('ul');
        optionsUl.classList.add('options');

        q.options.forEach((option) => {
            const optionLi = document.createElement('li');

            const optionInput = document.createElement('input');
            optionInput.type = 'radio';
            optionInput.name = `question${index}`;
            optionInput.value = option;

            // Check if the option is the correct answer
            if (option === q.answer) {
                optionInput.classList.add('correct');
            } else {
                optionInput.classList.add('incorrect');
            }

            const optionLabel = document.createElement('label');
            optionLabel.textContent = option;

            optionLi.appendChild(optionInput);
            optionLi.appendChild(optionLabel);
            optionsUl.appendChild(optionLi);
        });

        questionDiv.appendChild(optionsUl);
        quizForm.appendChild(questionDiv);
    });

    submitBtn.addEventListener('click', () => {
        let score = 0;

        // Loop through all questions to check answers
        questions.forEach((q, index) => {
            const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);

            if (selectedOption) {
                const isCorrect = selectedOption.value === q.answer;
                if (isCorrect) {
                    score++;
                }
            }
        });

        // Display the result
        result.textContent = `You scored ${score} out of ${questions.length}`;
    });
});
