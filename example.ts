import dotenv from 'dotenv';

dotenv.config({
  path: './.env.example',
});

const greetings = () => {
  console.log('hello world');
};

greetings();

const logEnvs = () => {
  // check env var auto-completion
  console.log(process.env.FOO);
};

logEnvs();
