document.addEventListener("DOMContentLoaded", function () {
    const questions = [
        
        {
            question: "Sequence of cytochrome is ETS",
            options: [
              "Cyt c, b, c, a3",
              "Cyt b, c, a3, c",
              "Cyt b, a, a3, c",
              "Cyt b, c, c, a3"
            ],
            answer: "Cyt b, c, a3, c"
          },
          {
            question: "Number of ATP from complete oxidation of single molecule of pyruvic acid is: ",
            options: [
              "12",
              "15",
              "24",
              "30"
            ],
            answer: "15"
          },
          {
            question: "Oxidative phosphorylation of one \\(NADH_2\\) yields",
            options: [
              "1 ATP",
              "2 ATP",
              "3 ATP",
              "4 ATP"
            ],
            answer: "3 ATP"
          },
          
          {
            question: "Terminal electron and proton acceptor of aerobic respiration is",
            options: [
              "\\(H_2O\\)",
              "\\(O_2\\)",
              "\\(CO_2\\)",
              "\\(glucose\\)"
            ],
            answer: "\\(O_2\\)"
          },
          {
            question: "ADP differs from ATP in having",
            options: [
              "Fewer phosphate groups",
              "More phosphate groups",
              "Found in eukaryotes",
              "All"
            ],
            answer: "Fewer phosphate groups"
          },
          {
            question: "Production of ATP by Oxidative phosphorylation is driven by energy from",
            options: [
              "Coenzyme-A",
              "Isomerization of cytochrome",
              "Proton gradient",
              "Proton gradient"
            ],
            answer: "Proton gradient"
          },
          {
            question: "The end product of oxidative phosphorylation is:",
            options: [
              "NADH",
              "ADP",
              "Oxygen",
              "ATP + H2O"
            ],
            answer: "ATP + H2O"
          },
          {
            question: "The first electron acceptor of respiration in aerobic organisms is",
            options: [
              "Cytochrome",
              "Oxygen",
              "FMN",
              "CoQ"
            ],
            answer: "FMN"
          },
          {
            question: "Number of ATP molecules from single glucose through ETS is",
            options: [
              "24",
              "36",
              "32",
              "30"
            ],
            answer: "32"
          },
          {
            question: "Which is transferred in between cytochromes in ETS?",
            options: [
              "H2O",
              "O2",
              "CO2",
              "H+"
            ],
            answer: "H+"
          },
          {
            question: "Terminal product of aerobic respiration is",
            options: [
              "\\(H_2O\\)",
              "\\(O_2\\)",
              "\\(CO_2\\)",
              "\\(glucose\\)"
            ],
            answer: "\\(H_2O\\)"
          },
          {
            question: "Terminal electron and proton carrier of aerobic respiration is",
            options: [
              "cyt a",
              "cyt a3",
              "cyt b",
              "FMN"
            ],
            answer: "cyt a3"
          },
          {
            question: "Cytochromes contain",
            options: [
              "Fe",
              "Cu",
              "either Fe or Cu",
              "Mg"
            ],
            answer: "either Fe or Cu"
          },
          {
            question: "Enzyme for ETS are found in",
            options: [
              "F1 particle",
              "matrix",
              "F0 particle",
              "cytoplasm"
            ],
            answer: "F1 particle"
          },
          {
            question: "Krebs cycle begins with",
            options: [
              "Pyruvic acid",
              "Glycogen",
              "Glucose",
              "Lysine"
            ],
            answer: "Pyruvic acid"
          },
         
          {
            question: "The link between glycolysis and Krebs cycle is:",
            options: [
              "Citric acid",
              "acetyl CoA",
              "Succinic acid",
              "Fumaric acid"
            ],
            answer: "acetyl CoA"
          },
          {
            question: "First stable compound of TCA cycle is",
            options: [
              "pyruvic acid",
              "citric acid",
              "oxaloacetic acid",
              "malic acid"
            ],
            answer: "citric acid"
          },
          {
            question: "The end product of Krebs cycle is",
            options: [
              "Pyruvic acid",
              "Citric acid",
              "Lactic acid",
              "CO2 and H2O"
            ],
            answer: "CO2 and H2O"
          },
          {
            question: "ATP is not released in",
            options: [
              "Glycolysis",
              "Krebs cycle",
              "ETS",
              "EMP pathway"
            ],
            answer: "Krebs cycle"
          },
          {
            question: "In Krebs cycle, FAD acts as an electron acceptor during conversion of",
            options: [
              "Fumaric acid to Malic acid",
              "Succinic acid to Fumaric acid",
              "Malic acid to Oxaloacetic acid",
              "Citric acid to Isocitric acid"
            ],
            answer: "Succinic acid to Fumaric acid"
          },
          {
            question: "How many decarboxylation occurs in Krebs cycle?",
            options: [
              "1",
              "2",
              "3",
              "4"
            ],
            answer: "2"
          },
          {
            question: "Number of oxidations in Krebs cycle is",
            options: [
              "4",
              "5",
              "2",
              "6"
            ],
            answer: "4"
          },
          {
            question: "Which is not produced through dehydrogenation in Krebs cycle?",
            options: [
              "succinyl CoA",
              "oxaloacetic acid",
              "citric acid",
              "fumaric acid"
            ],
            answer: "citric acid"
          },
          {
            question: "Number of ATP produced in Krebs cycle is",
            options: [
              "24",
              "11",
              "12",
              "9"
            ],
            answer: "12"
          },
          {
            question: "Number of ATP produced in Krebs cycle during respiration is",
            options: [
              "24",
              "11",
              "22",
              "12"
            ],
            answer: "24"
          },
          {
            question: "Number of ATP produced in Krebs cycle through substrate phosphorylation is",
            options: [
              "2",
              "11",
              "24",
              "1"
            ],
            answer: "1"
          },
          {
            question: "Number of ATP produced in Krebs cycle through oxidative phosphorylation is",
            options: [
              "2",
              "11",
              "24",
              "22"
            ],
            answer: "11"
          },
          {
            question: "Number of ATP produced in Krebs cycle through \\(FADH_2\\) is",
            options: [
              "2",
              "11",
              "24",
              "3"
            ],
            answer: "2"
          },
          {
            question: "Number of ATP produced in Krebs cycle through \\(NADH_2\\) is",
            options: [
              "2",
              "11",
              "9",
              "24"
            ],
            answer: "9"
          },
          {
            question: "How many molecules of ATP are produced from single Acetyl CoA?",
            options: [
              "12",
              "11",
              "24",
              "15"
            ],
            answer: "12"
          },
          {
            question: "Number of carbons in Acetyl CoA, Pyruvic acid, Malic acid, Citric acid are",
            options: [
              "1, 2, 3, 4",
              "2, 3, 4, 5",
              "2, 3, 4, 6",
              "2, 4, 5, 6"
            ],
            answer: "2, 3, 4, 5"
          },
          {
            question: "During Krebs cycle, which compound is not produced?",
            options: [
              "\\(CO_2\\)",
              "\\(H_2O\\)",
              "\\(NADH_2\\)",
              "\\(NADPH_2\\)"
            ],
            answer: "\\(NADPH_2\\)"
          },
          {
            question: "The process in which protoplasm is constructed and destructed",
            options: [
              "catabolism",
              "anabolism",
              "metabolism",
              "none"
            ],
            answer: "metabolism"
          },
          {
            question: "Respiration",
            options: [
              "catabolism, reduction",
              "anabolism",
              "catabolism, oxidation",
              "metabolism"
            ],
            answer: "catabolism, oxidation"
          },
          {
            question: "Usual floating respiration starts from",
            options: [
              "protein",
              "lipids",
              "carbohydrates",
              "fat"
            ],
            answer: "carbohydrates"
          },
          {
            question: "Protoplasmic respiration starts from",
            options: [
              "protein",
              "lipids",
              "carbohydrates",
              "fat"
            ],
            answer: "protein"
          },
          {
            question: "Net gain ATP in glyculysis is:",
            options: [
              "2",
              "4",
              "6",
              "8"
            ],
            answer: "2"
          },
          {
            question: "Glycolysis takes place in",
            options: [
              "Mitochondria",
              "Cytoplasm",
              "Cell membrane",
              "Cell wall"
            ],
            answer: "Cytoplasm"
          },
          {
            question: "Respiratory opening of the plant is :",
            options: [
              "Tentacle",
              "Hydathode",
              "Velamen",
              "Stromata"
            ],
            answer: "Stromata"
          }
          ,
          {
            question: "The end product of Glycolysis",
            options: [
              "One molecule of pyruvic acid",
              "Two molecule of pyruvic acid",
              "One molecule of acetyle CoA",
              "Two molecule of acetyle CoA"
            ],
            answer: "Two molecule of pyruvic acid"
          }
    ];

    const quizForm = document.getElementById('quizForm');
    const submitBtn = document.getElementById('submitBtn');
    const result = document.getElementById('result');

    questions.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');

        const questionP = document.createElement('p');
        questionP.innerHTML = `${index + 1}. ${q.question}`; // Use innerHTML to include HTML content
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
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('footer').innerHTML = `
        <p>&copy; 2024-50 prakash403.com.np . All rights reserved.</p>
    `;
});