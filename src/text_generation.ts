import { Ollama } from "ollama";

const ollama = new Ollama({ host: 'http://127.0.0.1:11434' });

const systemPrompt = `You are a helpful assistant that takes a question`;

/**
 * Function to handle prompt and response generation
 * @param prompt The input question or prompt
 */
const promptAndAnswer = async (prompt: string) => {
    try {
        const response = await ollama.generate({
            model: "mistral:latest",
            system: systemPrompt,
            prompt,
            stream: false,
            format: "json", // Ensure correct format
        });

        // Try to parse the response if it's in JSON format
        if (response && response.response) {
            try {
                const parsedResponse = JSON.parse(response.response.trim());
                console.log("Parsed response:", parsedResponse);
            } catch (parseError) {
                console.log("Raw response (not valid JSON):", response.response);
            }
        } else {
            console.log("Empty or undefined response:", response);
        }

    } catch (error) {
        const err = error as Error;
        console.error("Error processing prompt:", prompt, err.message);
    }
    
};

/**
 * Process an array of prompts sequentially
 */
const processPrompts = async () => {
    const prompts = ["What is the best French cheese?"]; // You can add more prompts here
    
    for (const prompt of prompts) {
        console.log(`\nProcessing: ${prompt}\n`);
        await promptAndAnswer(prompt);
    }
};

processPrompts();
