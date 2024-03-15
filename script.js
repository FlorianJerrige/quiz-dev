document.addEventListener('DOMContentLoaded', function() {
    const startQuizBtn = document.getElementById('start-quiz-btn');
    const startPage = document.getElementById('start-page');
    const quizContainer = document.getElementById('quiz-container');
    const questionElement = document.getElementById('question');
    const optionsElement = document.getElementById('options');
    const nextButton = document.getElementById('next');

    let currentQuestionIndex = 0;
    let correctAnswersCount = 0;
    const questions = [
        // Les 5 questions précédentes
        {
          question: "Quel framework est écrit en JavaScript ?",
          options: ["Django", "Rails", "Angular", "Laravel"],
          answer: "Angular"
        },
      
        {
          question: "Quel langage n'est pas orienté objet par conception ?",
          options: ["Java", "C", "Python", "Ruby"],
          answer: "C"
        },

     
        {
          question: "Dans quel langage de programmation le framework React est-il écrit ?",
          options: ["JavaScript", "TypeScript", "Java", "Python"],
          answer: "JavaScript"
        },
        {
          question: "Quel outil est utilisé principalement pour automatiser le déploiement des applications ?",
          options: ["Docker", "Git", "Jenkins", "Webpack"],
          answer: "Jenkins"
        },
        {
          question: "Quel est le principe de base du fonctionnement de la blockchain ?",
          options: ["Chiffrement symétrique", "Consensus distribué", "Compression de données", "Tri par fusion"],
          answer: "Consensus distribué"
        },
     
        {
          question: "Quel protocole est utilisé pour sécuriser la transmission de données sur le Web ?",
          options: ["HTTP", "HTTPS", "FTP", "SMTP"],
          answer: "HTTPS"
        },
        {
          question: "Quel est le terme utilisé pour décrire le test d'une application ou d'un système sous une charge très lourde ?",
          options: ["Test unitaire", "Test d'intégration", "Test de stress", "Test de régression"],
          answer: "Test de stress"
        },
        {
          question: "Quelle méthode de gestion de version est recommandée pour gérer plusieurs fonctionnalités en développement simultanément ?",
          options: ["Merge", "Rebase", "Branching", "Checkout"],
          answer: "Branching"
        },
        {
          question: "Quel format de données est le plus couramment utilisé pour l'échange de données sur le Web ?",
          options: ["XML", "JSON", "HTML", "YAML"],
          answer: "JSON"
        },
        {
          question: "Quelle est la principale différence entre SQL et NoSQL ?",
          options: ["Syntaxe", "Type de données stockées", "Systèmes de gestion de base de données relationnelle", "Modèle de données"],
          answer: "Modèle de données"
        },
        {
          question: "Quelle technologie est principalement utilisée pour créer des interfaces utilisateur dynamiques ?",
          options: ["HTML", "CSS", "JavaScript", "SQL"],
          answer: "JavaScript"
        },

            // Continuation des questions précédentes
        {
        question: "Qu'est-ce qu'un QA (Quality Assurance) dans le contexte du développement logiciel ?",
        options: ["Un gestionnaire de projet", "Un développeur spécialisé dans les bases de données", "Un testeur assurant la qualité du logiciel", "Un designer UI/UX"],
        answer: "Un testeur assurant la qualité du logiciel"
      },
      {
        question: "Quel langage est principalement utilisé pour le développement d'applications iOS ?",
        options: ["Java", "Swift", "Kotlin", "C#"],
        answer: "Swift"
      },
      {
        question: "Quelle est la principale utilisation de Kotlin dans le développement mobile ?",
        options: ["Applications iOS", "Applications Android", "Applications cross-platform", "Jeux mobiles"],
        answer: "Applications Android"
      },
      {
        question: "Quel framework permet de développer des interfaces utilisateur pour iOS avec Swift ?",
        options: ["React Native", "Flutter", "SwiftUI", "Ionic"],
        answer: "SwiftUI"
      },
      {
        question: "Qu'est-ce que la Clean Architecture vise à résoudre dans le développement logiciel ?",
        options: ["Les problèmes de performance", "Les vulnérabilités de sécurité", "La dette technique et améliorer la maintenabilité", "La gestion de la base de données"],
        answer: "La dette technique et améliorer la maintenabilité"
      },
      {
        question: "Quel est l'objectif de l'Architecture Hexagonale dans le développement de logiciels ?",
        options: ["Faciliter le déploiement", "Améliorer l'interface utilisateur", "Favoriser la séparation des préoccupations", "Optimiser les requêtes de base de données"],
        answer: "Favoriser la séparation des préoccupations"
      },
      {
        question: "Qu'est-ce que DDD (Domain-Driven Design) ?",
        options: ["Une méthode de déploiement", "Un principe de design UI/UX", "Une approche de conception logicielle", "Un framework de développement web"],
        answer: "Une approche de conception logicielle"
      },
      {
        question: "À quoi sert Xcode dans le développement d'applications ?",
        options: ["Développement d'applications Android", "Développement d'applications iOS", "Création de bases de données", "Design graphique"],
        answer: "Développement d'applications iOS"
      },
      {
        question: "Quel est le rôle d'un développeur Full Stack ?",
        options: ["Travailler uniquement sur la base de données", "Se concentrer sur le développement frontal", "Gérer à la fois le front-end et le back-end", "Spécialisation dans les tests logiciels"],
        answer: "Gérer à la fois le front-end et le back-end"
      },
      {
        question: "Quelle technologie n'est pas associée au développement front-end ?",
        options: ["React", "CSS", "Django", "HTML"],
        answer: "Django"
      },
   
     
      {
        question: "Quel est le but principal des tests unitaires dans le développement logiciel ?",
        options: ["Vérifier la performance de l'application", "Tester l'application dans son ensemble", "Vérifier que les petites parties de l'application fonctionnent comme prévu", "Déployer l'application"],
        answer: "Vérifier que les petites parties de l'application fonctionnent comme prévu"
      },
      {
        question: "Qu'est-ce que l'API REST ?",
        options: ["Un protocole de sécurité", "Une architecture de réseau", "Une interface de programmation d'applications", "Un langage de programmation"],
        answer: "Une interface de programmation d'applications"
      },
      {
        question: "Quel langage est principalement utilisé pour styliser des pages web ?",
        options: ["HTML", "CSS", "JavaScript", "PHP"],
        answer: "CSS"
      },
      {
        question: "Quelle méthode Agile implique des sprints de développement ?",
        options: ["Waterfall", "Scrum", "Kanban", "Lean"],
        answer: "Scrum"
      },
      {
        question: "Quel outil est utilisé pour le versionnage du code source ?",
        options: ["Docker", "Git", "Webpack", "JIRA"],
        answer: "Git"
      },
      {
        question: "Quel est le principal avantage des applications web progressives (PWA) ?",
        options: ["Rapidité d'exécution sur serveur", "Capacité de fonctionner hors ligne", "Sécurité accrue des données", "Facilité de déploiement"],
        answer: "Capacité de fonctionner hors ligne"
      },
      {
        question: "Quel langage est utilisé pour interroger et manipuler des bases de données relationnelles ?",
        options: ["SQL", "Python", "Java", "C#"],
        answer: "SQL"
      },
      {
        question: "Quel framework JavaScript est connu pour son approche basée sur les composants ?",
        options: ["Angular", "Vue.js", "React", "Ember.js"],
        answer: "React"
      }
  ];
  
    
  function displayQuestion(question) {
    questionElement.textContent = question.question;
    optionsElement.innerHTML = ''; // Efface les options précédentes
    question.options.forEach(function(option) {
        const li = document.createElement('li');
        li.textContent = option;
        li.addEventListener('click', function() {
            const isCorrect = option === question.answer;
            if (isCorrect) {
                correctAnswersCount++;
                li.classList.add('correct-answer');
            } else {
                li.classList.add('wrong-answer');
            }
            disableOptions();
            if (currentQuestionIndex === questions.length - 1) {
                setTimeout(displayScore, 1000); // Donne du temps pour voir la réponse
            } else {
                nextButton.style.display = 'block';
            }
        });
        optionsElement.appendChild(li);
    });
    nextButton.style.display = 'none'; // Cache le bouton suivant par défaut
}

function disableOptions() {
    Array.from(optionsElement.children).forEach(child => {
        child.style.pointerEvents = 'none';
    });
}

function displayScore() {
    const score = Math.round((correctAnswersCount / questions.length) * 100);
    quizContainer.innerHTML = `<h2>Votre score : ${score}%</h2><p>Vous avez répondu correctement à ${correctAnswersCount} sur ${questions.length} questions.</p>`;
}

startQuizBtn.addEventListener('click', function() {
    startPage.style.display = 'none';
    quizContainer.style.display = 'block';
    displayQuestion(questions[currentQuestionIndex]);
});

nextButton.addEventListener('click', function() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion(questions[currentQuestionIndex]);
    }
});


});
