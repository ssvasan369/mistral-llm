import { Ollama } from "ollama";

const ollama = new Ollama({ host: 'http://127.0.0.1:11434' });

const systemPrompt = `You are a helpful assistant that takes a question`;

/**
 * Function to handle prompt and response generation
 * @param prompt The input question or prompt
 */
const promptAndAnswer = async (prompt: string) => {
    try {
        // Await the promise to get the async iterator
        const response = await ollama.generate({
            model: "mistral:latest", // Use the appropriate model
            system: systemPrompt,
            prompt,
            stream: true // Enable streaming response
        });

        // Stream each chunk of response
        for await (const chunk of response) {
            const streamText = chunk.response; // Access content properly
            if (streamText) {
                process.stdout.write(streamText); // Output stream chunk
            }
        }

    } catch (error) {
        if (error instanceof Error) {
            console.error("Error processing prompt:", prompt, error.message);
        } else {
            console.error("Unknown error occurred", error);
        }
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
