// filepath: /quiz-backend/server.js
const express = require("express");
const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

const ChowMeinQuizQuestions = [
  {
    id: 1,
    question: "How many cups of Soybean Oil are needed for Batch 1?",
    options: ["1/3 cup * 2", "1/3 cup * 4", "1/3 cup * 6", "1/3 cup * 8"],
    answer: "1/3 cup * 2",
  },
  {
    id: 2,
    question: "How many bags of Shredded Cabbage are needed for Batch 1?",
    options: ["1/2 bag", "1 bag", "1.5 bags", "2 bags"],
    answer: "1/2 bag",
  },
  {
    id: 3,
    question:
      "How many cups of Shredded Celery and Onion are needed for Batch 1?",
    options: ["1 cup * 2", "1 cup * 4", "1 cup * 6", "1 cup * 8"],
    answer: "1 cup * 2",
  },
  {
    id: 4,
    question: "How many bags of Noodles are needed for Batch 1?",
    options: ["1 bag", "2 bags", "3 bags", "4 bags"],
    answer: "1 bag",
  },
  {
    id: 5,
    question: "How many teaspoons of Cooking Wine are needed for Batch 1?",
    options: ["1.5 tsp * 2", "1.5 tsp * 4", "1.5 tsp * 6", "1.5 tsp * 8"],
    answer: "1.5 tsp * 2",
  },
  {
    id: 6,
    question: "How many cups of Basic Cooking Sauce are needed for Batch 1?",
    options: ["1/2 cup", "1 cup", "1.5 cups", "2 cups"],
    answer: "1/2 cup",
  },
  {
    id: 7,
    question: "How many teaspoons of Sesame Oil are needed for Batch 1?",
    options: ["1.5 tsp * 2", "1.5 tsp * 4", "1.5 tsp * 6", "1.5 tsp * 8"],
    answer: "1.5 tsp * 2",
  },
  {
    id: 8,
    question: "How many cups of Soybean Oil are needed for Batch 2?",
    options: ["1/3 cup * 4", "1/3 cup * 2", "1/3 cup * 6", "1/3 cup * 8"],
    answer: "1/3 cup * 4",
  },
  {
    id: 9,
    question: "How many bags of Shredded Cabbage are needed for Batch 2?",
    options: ["1 bag", "1/2 bag", "1.5 bags", "2 bags"],
    answer: "1 bag",
  },
  {
    id: 10,
    question:
      "How many cups of Shredded Celery and Onion are needed for Batch 2?",
    options: ["1 cup * 4", "1 cup * 2", "1 cup * 6", "1 cup * 8"],
    answer: "1 cup * 4",
  },
  {
    id: 11,
    question: "How many bags of Noodles are needed for Batch 2?",
    options: ["1 bag", "2 bags", "3 bags", "4 bags"],
    answer: "2 bags",
  },
  {
    id: 12,
    question: "How many teaspoons of Cooking Wine are needed for Batch 2?",
    options: ["1.5 tsp * 4", "1.5 tsp * 2", "1.5 tsp * 6", "1.5 tsp * 8"],
    answer: "1.5 tsp * 4",
  },
  {
    id: 13,
    question: "How many cups of Basic Cooking Sauce are needed for Batch 2?",
    options: ["1 cup", "1/2 cup", "1.5 cups", "2 cups"],
    answer: "1 cup",
  },
  {
    id: 14,
    question: "How many teaspoons of Sesame Oil are needed for Batch 2?",
    options: ["1.5 tsp * 4", "1.5 tsp * 2", "1.5 tsp * 6", "1.5 tsp * 8"],
    answer: "1.5 tsp * 4",
  },
  {
    id: 15,
    question: "How many cups of Soybean Oil are needed for Batch 3?",
    options: ["1/3 cup * 6", "1/3 cup * 2", "1/3 cup * 4", "1/3 cup * 8"],
    answer: "1/3 cup * 6",
  },
  {
    id: 16,
    question: "How many bags of Shredded Cabbage are needed for Batch 3?",
    options: ["1.5 bags", "1 bag", "2 bags", "2.5 bags"],
    answer: "1.5 bags",
  },
  {
    id: 17,
    question:
      "How many cups of Shredded Celery and Onion are needed for Batch 3?",
    options: ["1 cup * 6", "1 cup * 2", "1 cup * 4", "1 cup * 8"],
    answer: "1 cup * 6",
  },
  {
    id: 18,
    question: "How many bags of Noodles are needed for Batch 3?",
    options: ["3 bags", "2 bags", "4 bags", "1 bag"],
    answer: "3 bags",
  },
  {
    id: 19,
    question: "How many teaspoons of Cooking Wine are needed for Batch 3?",
    options: ["1.5 tsp * 6", "1.5 tsp * 2", "1.5 tsp * 4", "1.5 tsp * 8"],
    answer: "1.5 tsp * 6",
  },
  {
    id: 20,
    question: "How many cups of Basic Cooking Sauce are needed for Batch 3?",
    options: ["1.5 cups", "1 cup", "2 cups", "2.5 cups"],
    answer: "1.5 cups",
  },
  {
    id: 21,
    question: "How many teaspoons of Sesame Oil are needed for Batch 3?",
    options: ["1.5 tsp * 6", "1.5 tsp * 2", "1.5 tsp * 4", "1.5 tsp * 8"],
    answer: "1.5 tsp * 6",
  },
];

const ChowMeinInstructions = {
  "Batch 1": [
    { Ingredient: "Soybean", Amount: "1/3 cup * 2" },
    { Ingredient: "Shredded Cabbage", Amount: "1/2 bag" },
    { Ingredient: "Shredded Celery and Onion", Amount: "1 cup * 2" },
    { Ingredient: "Noodles", Amount: "1 bag" },
    { Ingredient: "Cooking Wine", Amount: "1.5 tsp * 2" },
    { Ingredient: "Basic Cooking Sauce", Amount: "1/2 cup" },
    { Ingredient: "Sesame Oil", Amount: "1.5 tsp * 2" },
  ],
  "Batch 2": [
    { Ingredient: "Soybean", Amount: "1/3 cup * 4" },
    { Ingredient: "Shredded Cabbage", Amount: "1 bag" },
    { Ingredient: "Shredded Celery and Onion", Amount: "1 cup * 4" },
    { Ingredient: "Noodles", Amount: "2 bag" },
    { Ingredient: "Cooking Wine", Amount: "1.5 tsp * 4" },
    { Ingredient: "Basic Cooking Sauce", Amount: "1 cup" },
    { Ingredient: "Sesame Oil", Amount: "1.5 tsp * 4" },
  ],
  "Batch 3": [
    { Ingredient: "Soybean", Amount: "1/3 cup * 6" },
    { Ingredient: "Shredded Cabbage", Amount: "1.5 bag" },
    { Ingredient: "Shredded Celery and Onion", Amount: "1 cup * 6" },
    { Ingredient: "Noodles", Amount: "3 bag" },
    { Ingredient: "Cooking Wine", Amount: "1.5 tsp * 6" },
    { Ingredient: "Basic Cooking Sauce", Amount: "1.5 cup" },
    { Ingredient: "Sesame Oil", Amount: "1.5 tsp * 6" },
  ],
};

const cors = require("cors");
app.use(cors());

//default route
app.get("/", (req, res) => {
  res.send("Welcome to the Quiz API!");
});

// API endpoint to get quiz questions
app.get("/api/questions", (req, res) => {
  res.json(ChowMeinQuizQuestions.map(({ answer, ...rest }) => rest)); // Exclude answers for security
});

// API endpoint to get Chow Mein Instructions
app.get("/api/instructions", (req, res) => {
  res.json(ChowMeinInstructions);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
