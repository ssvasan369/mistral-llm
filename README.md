# Ollama Prompt and Response Generation

This project demonstrates how to integrate with the `Ollama` library to generate and handle responses using models like `mistral:latest`. The code shows two variations:
1. Streaming response from the model.
2. Handling responses formatted as JSON.

## Features

- **Ollama Integration**: Uses the `Ollama` library to connect with a local server (`http://127.0.0.1:11434`).
- **Streaming Responses**: Demonstrates how to stream responses chunk by chunk from the model.
- **JSON Response Handling**: Parses and logs responses in JSON format.

## Installation

Before running this project, make sure you have the following dependencies:

### Prerequisites

- Node.js (v14+)
- NPM or Yarn
- Ollama API running locally on `http://127.0.0.1:11434`

### Install Dependencies

```bash
npm install ollama
