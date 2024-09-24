import { Ollama } from "ollama";

const ollama = new Ollama({ host: 'http://127.0.0.1:11434' });

const systemPrompt = `You are a helpful assistant that takes a question and finds the most appropriate answer`;

const promptAndAnswer = async (prompt: string) => {
    try {
        const response = await ollama.generate({
            model: "llama3.1:latest",
            system: systemPrompt,
            prompt,
            stream: true,
            format: "json",
        });

    } catch (error) {
        console.error("Error processing prompt:", prompt, error);
    }
};

// List of prompts to process
const prompts = [
    "What is the weather in London?",
    "What is the weather at 41.881832, -87.640406?",
    "Who is the current CEO of Tesla?",
    "What is located at 41.881832, -87.640406?",
];

// Process each prompt sequentially
const processPrompts = async () => {
    for (const prompt of prompts) {
        console.log(`\nProcessing: ${prompt}\n`);
        await promptAndAnswer(prompt);
    }
};

processPrompts();