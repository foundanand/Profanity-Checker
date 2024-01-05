const OpenAI = require('openai-api');

// Initialize the OpenAI API client
const openai = new OpenAI({
  apiKey: process.env['OPENAI_API_KEY'], // This is the default and can be omitted
});

async function main() {
    const params = {
        messages: [{ role: 'user', content: 'Say this is a test' }],
        model: 'gpt-3.5-turbo',
    };
    const chatCompletion = await openai.chat.completions.create(params);
}

main();
