const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const answers = [];
const  profile = function(array) {
  for (let answer of array) {
    process.stdout.write(answer,"\n");
    rl.close();
  }
};

rl.question('what\'s your name? Nicknames are also acceptable ', (answer1) => {
 
  answers.push(answer1);

  rl.question('what\'s an activity you like doing? ', (answer2) => {
   
    answers.push(answer2);

    rl.question(' What do you listen to while doing that?', (answer3) => {
    
      answers.push(answer3);
    

      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)', (answer4) => {
       
        answers.push(answer4);
      
  
        rl.question('whats\'s your favourite thing to eat for that meal', (answer5) => {
         
          answers.push(answer5);
        
  
          rl.question('which sport is your absolute favourite ', (answer6) => {
            answers.push(answer6);

            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (answer7) => {
              answers.push(answer7);
            
          
          
        
    
              profile(answers);
 
            });
          });
        });
      });
    });
  });
});