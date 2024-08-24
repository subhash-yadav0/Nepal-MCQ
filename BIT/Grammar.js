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
            question: "I like.......... in my spare time.",
            options: ["reading", "read", "to read", "to reading"],
            answer: "to read"
        },
        {
            question: "I went to the bookshop.......... 'Harry Potter'.",
            options: ["for buying", "to buy", "to buying", "for to buy"],
            answer: "to buy"
        },
        {
            question: "He is interested... .......learning Romanian.",
            options: ["in", "on", "to", "for"],
            answer: "in"
        },
        {
            question: "Would you like.........to drink; sir?",
            options: ["anything", "anywhere", "nothing", "something"],
            answer: "anything"
        },
        {
            question: "What............next weekend?",
            options: ["do you do", "are you doing", "will you do", "did you do"],
            answer: "do you do"
        },
        {
            question: "How many students in your class......from Bangladesh?",
            options: ["comes", "come", "came", "are coming"],
            answer: "come"
        },
        {
            question: "I am hungry I want two..........of chicken.",
            options: ["plates", "pieces", "bowls", "glasses"],
            answer: "plates"
        },
        {
            question: "They are ugly and expensive......people buy them.",
            options: ["though", "yet", "still", "besides"],
            answer: "still"
        },
        {
            question: "What time..........?",
            options: ["the train leaves?", "leaves the train", "is the train leaving?", "does the train leave?"],
            answer: "does the train leave?"
        },
        {
            question: "I promise I.............study harder.",
            options: ["will", "am going to", "may", "must"],
            answer: "will"
        },
        {
            question: "How long........ English?",
            options: ["are you learning", "have you been learning", "do you learn", "you learn"],
            answer: "have you been learning"
        },
        {
            question: "I hope that a school...... for village children.",
            options: ["opens", "is opened", "has to be opened", "be opened"],
            answer: "has to be opened"
        },
        {
            question: "Closest similar meaning of word 'compunction' is",
            options: ["remorse", "merciful", "connive", "recklessness"],
            answer: "remorse"
        },
        {
            question: "Closest similar meaning of word 'demolish' is",
            options: ["repair", "consume", "humiliate", "destroy"],
            answer: "destroy"
        },
        {
            question: "Closest similar meaning of word 'beneficent' is",
            options: ["repair", "consume", "humiliate", "destroy"],
            answer: "humiliate"
        },
        {
            question: "Closest similar meaning of word 'mendacity' is",
            options: ["mandatory", "untruthfulness", "veracity", "potential"],
            answer: "untruthfulness"
        },
        {
            question: "Closest opposite meaning of word 'theocracy' is",
            options: ["hierocracy", "ideology", "conservative", "church state"],
            answer: "ideology"
        },
        {
            question: "Closest opposite meaning of word 'integrate' is",
            options: ["accommodate", "compose", "articulate", "segregate"],
            answer: "segregate"
        },
        {
            question: "Closest opposite meaning of word 'calm' is",
            options: ["excited", "restful", "cool", "serene"],
            answer: "excited"
        },
        {
            question: "Closest opposite meaning of word 'wordy' is",
            options: ["rambling", "concise", "diffuse", "voluble"],
            answer: "concise"
        },
        {
            question: "A teacher needs to discuss in class; it ............curiosity in students.",
            options: ["creates", "created", "create", "will create"],
            answer: "creates"
        },
        {
            question: "Successful people always.......... two things; one determination and second sincerity.",
            options: ["had", "doing", "did", "have"],
            answer: "have"
        },
        {
            question: "They like swimming whenever they have leisure time [which word is a verbal noun?]",
            options: ["leisure", "free", "like", "swimming"],
            answer: "swimming"
        },
        {
            question: "Nobody likes a heap of garbage in front of his house [which word is a verbal noun?]",
            options: ["heap of garbage", "in front", "house", "likes"],
            answer: "heap of garbage"
        },
        {
            question: "Find the interrogative pronoun in the sentence 'Why did you not call me? This made me alarmed'.",
            options: ["you", "me", "why", "did"],
            answer: "why"
        },
        {
            question: "The right grammatical category of the underlined phrase in the sentence 'Ram handed a book to his sister' is",
            options: ["complement", "direct object", "adjunct", "indirect object"],
            answer: "complement"
        },
        {
            question: "Which of the following is a noun?",
            options: ["real", "readable", "reliable", "reality"],
            answer: "reality"
        },
        {
            question: "English is today the third........native language worldwide after Chinese and Hindi with some 380 million speakers.",
            options: ["the most spoken", "the more spoken", "much spoken", "most spoken"],
            answer: "the most spoken"
        },
        {
            question: "We could barely get any information at the airport...... People seemed to have.......idea about the flights.",
            options: ["many/any", "a lot of/any", "few/no", "only a few/some"],
            answer: "only a few/some"
        },
        {
            question: "......his friends speaks any English.",
            options: ["some", "all", "many", "neither of"],
            answer: "neither of"
        },
        {
            question: "These differences between two photographs.......... with the help of Photoshop.",
            options: ["should remove", "have to remove", "could have been removed", "must have removed"],
            answer: "could have been removed"
        },
        {
            question: "New legislation.........in congress but it.....by many.",
            options: ["was introduced/wasn't accepted", "was introduced/didn't accept", "is introduced/won't accept", "introduced/hadn't been accepted"],
            answer: "was introduced/wasn't accepted"
        },
        {
            question: "Mike has been told he will have to pay the fine....... his high rank in the military.",
            options: ["even if", "despite", "furthermore", "on purpose that"],
            answer: "furthermore"
        },
        {
            question: "The economy in China is booming.......... Many foreign investors are planning to enter China's market.",
            options: ["nonetheless", "so as to", "in addition to", "on purpose"],
            answer: "on purpose"
        },
        {
            question: "I wish you...... making that noise. It's bothering me.",
            options: ["would stop", "are going to stop", "stop", "can stop"],
            answer: "would stop"
        },
        {
            question: "......more help could call my neighbour.",
            options: ["Needed", "Should I need", "I have needed", "I should need"],
            answer: "Needed"
        },
        {
            question: "If you plan to take a long trip in the car, you must get a full tank of gas or you..... out of gas.",
            options: ["have to run", "should have run", "had better run", "might run"],
            answer: "might run"
        },
        {
            question: "If you want to get a good night's sleep, you ....... any tea or coffee in the evening.",
            options: ["would rather drink", "don't have to drink", "mustn't drink", "not able to drink"],
            answer: "mustn't drink"
        },
        {
            question: "It is not easy for many civil servants to................ on their salaries as the inflation rate is extremely high.",
            options: ["get by", "turn up", "wear out", "run over"],
            answer: "get by"
        },
        {
            question: "I thought the party was going to be boring, but it.......... to be the most unforgettable of my life.",
            options: ["turned out", "looked around", "passed around", "fell back on"],
            answer: "turned out"
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
