//Using OpenAI's chatGPT to generate responses to user input

import axios from 'axios';

const getGPTResponse = async () => {
    const url = 'https://api.openai.com/v1/engines/davinci-codex/completions';
    const headers = {
        'Authorization': `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
        'Content-Type': 'application/json'
    };
    const data = {
        prompt: "I am struggling with meditation, and I need a meditation exercise to help me relax. Can you help me generate one mediation exercise, that start with Here is your exercise:",
        max_tokens: 150
    };
    try {
        const response = await axios.post(url, data, { headers: headers });
        return response.data.choices[0].text;
    } catch (error) {
        console.log(error);
    }
}

export { getGPTResponse}