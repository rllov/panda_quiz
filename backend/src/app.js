// filepath: /quiz-backend/server.js
require("dotenv").config();
const express = require("express");
const app = express();
const PORT = 3000;
const cors = require("cors");

// Middleware to parse JSON
app.use(express.json());

const CompanyCultureQuizQuestions = [
  {
    question: "What is the primary role of a 'Guest Love Builder'?",
    options: [
      "Managing finances and budgets",
      "Emotional connection with guests through Food, Service, and Ambiance",
      "Designing marketing campaigns",
      "Handling logistics",
    ],
    answer:
      "Emotional connection with guests through Food, Service, and Ambiance",
  },
  {
    question: "Which value is NOT listed in the company’s VALUES section?",
    options: ["PROACTIVE", "RESPECT / WIN-WIN", "FLEXIBILITY", "GROWTH"],
    answer: "FLEXIBILITY",
  },
  {
    question: "What does 'Workability' emphasize in the Operating Culture?",
    options: [
      "Avoiding teamwork",
      "Delivering exceptional results with high standards and a great attitude",
      "Focusing only on personal goals",
      "Working minimal hours",
    ],
    answer:
      "Delivering exceptional results with high standards and a great attitude",
  },
  {
    question: "How is 'Integrity' defined in the document?",
    options: [
      "Being late to meetings",
      "Being ALL-IN for highest engagement and execution",
      "Ignoring feedback",
      "Working in isolation",
    ],
    answer: "Being ALL-IN for highest engagement and execution",
  },
  {
    question: "What is the company’s VISION?",
    options: [
      "To become the cheapest in the industry",
      "To be recognized as a World Leader in People Development",
      "To expand to 100 countries",
      "To maximize shareholder profits",
    ],
    answer: "To be recognized as a World Leader in People Development",
  },
  {
    question: "Which of these is part of 'THE PANDA WAY'?",
    options: [
      "Avoiding learning",
      "CONTINUOUS LEARNING",
      "Working in isolation",
      "Ignoring health",
    ],
    answer: "CONTINUOUS LEARNING",
  },
  {
    question: "What does the company’s MISSION focus on?",
    options: [
      "Delivering Exceptional Asian Dining Experiences",
      "Maximizing shareholder profits",
      "Reducing employee benefits",
      "Cutting operational costs",
    ],
    answer: "Delivering Exceptional Asian Dining Experiences",
  },
  {
    question: "What is the purpose of the ENVIRONMENT section?",
    options: [
      "To create a competitive workspace",
      "To empower Team Panda to listen, appreciate, and challenge each other",
      "To enforce strict silence",
      "To discourage collaboration",
    ],
    answer:
      "To empower Team Panda to listen, appreciate, and challenge each other",
  },
  {
    question:
      "Which term is repeated under 'Workability' in the ROLES AND RESPONSIBILITIES section?",
    options: ["Growth", "Integrity", "Respect", "Proactive"],
    answer: "Integrity",
  },
  {
    question: "What does 'BE TRUE!' refer to in the Operating Culture?",
    options: [
      "Being impeccable with words and actions",
      "Hiding mistakes",
      "Avoiding feedback",
      "Blaming others",
    ],
    answer: "Being impeccable with words and actions",
  },
  {
    question:
      "What does 'Community Outreach' involve for a Guest Love Builder?",
    options: [
      "Ignoring local communities",
      "Building relationships outside the company",
      "Only focusing on internal teams",
      "Avoiding public events",
    ],
    answer: "Building relationships outside the company",
  },
  {
    question: "Which value aligns with 'Developing Others'?",
    options: ["PROACTIVE", "GROWTH", "GREAT OPERATIONS", "WIN-WIN"],
    answer: "GROWTH",
  },
  {
    question: "What is the key focus of 'ACKNOWLEDGING OTHERS'?",
    options: [
      "Taking credit for others’ work",
      "Recognizing team contributions",
      "Avoiding praise",
      "Competing with colleagues",
    ],
    answer: "Recognizing team contributions",
  },
  {
    question: "How does the company define 'RESPECT'?",
    options: [
      "As a WIN-WIN mindset",
      "As a competitive tool",
      "As unnecessary",
      "As a one-way street",
    ],
    answer: "As a WIN-WIN mindset",
  },
  {
    question: "What type of lifestyle does 'THE PANDA WAY' promote?",
    options: [
      "Unhealthy habits",
      "HEALTHY LIFESTYLE",
      "Isolated living",
      "Workaholism",
    ],
    answer: "HEALTHY LIFESTYLE",
  },
];

// Mock data for Company Culture Information
const CompanyCultureInformation = {
  rolesAndResponsibilities: {
    title: "ROLES AND RESPONSIBILITIES",
    subsections: [
      {
        title: "GUEST LOVE BUILDER",
        content: [
          "Workability: Integrity, Intensity",
          "Uphold high operation standards and being the best",
          "Emotional connection with Guest through Food, Service and Ambiance",
          "Team Builder: Being a trusted leader",
          "Community Outreach",
        ],
      },
    ],
  },
  operatingCulture: {
    title: "OPERATING CULTURE",
    content: [
      "Workability - Be capable to always deliver exceptional results with high standards and great attitude",
      "Intensity - Be ALL-IN for highest engagement and execution. NOW!",
      "Integrity - Be impeccable with my words and actions. BE TRUE!",
    ],
  },
  environment: {
    title: "ENVIRONMENT",
    content:
      "Create a safe and empowering conversational environment for Team Panda to listen, appreciate and challenge each other in bringing our panda Vision alive and in action.",
  },
  vision: {
    title: "VISION",
    content:
      "Be recognized as a World Leader in People Development to become loved by our Guest.",
  },
  mission: {
    title: "MISSION",
    content:
      "Deliver Exceptional Asian Dining Experiences by Building an Organization where People are Inspired to Better their Lives.",
  },
  values: {
    title: "VALUES",
    content: ["PROACTIVE", "RESPECT / WIN-WIN", "GROWTH", "GREAT OPERATIONS"],
  },
  pandaWay: {
    title: "THE PANDA WAY",
    content: [
      "HEALTHY LIFESTYLE",
      "CONTINUOUS LEARNING",
      "DEVELOPING OTHERS",
      "ACKNOWLEDGING OTHERS",
    ],
  },
};

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

const FriedRiceQuizQuestions = [
  {
    id: 1,
    question: "How much Basic Sauce Rice is needed for Batch 1?",
    options: ["6 lb 8 oz", "13 lb", "3 lb", "10 lb"],
    answer: "6 lb 8 oz",
  },
  {
    id: 2,
    question: "How much Soybean Oil is needed for Batch 1?",
    options: ["1/3 cup * 2", "1/3 cup * 4", "1/3 cup * 6", "1/3 cup * 8"],
    answer: "1/3 cup * 2",
  },
  {
    id: 3,
    question: "How many cups of Liquid Eggs are needed for Batch 1?",
    options: ["1.5 cups", "3 cups", "2 cups", "4 cups"],
    answer: "1.5 cups",
  },
  {
    id: 4,
    question: "How much Carrots and Peas are needed for Batch 1?",
    options: ["2 cups", "4 cups", "1 cup", "3 cups"],
    answer: "2 cups",
  },
  {
    id: 5,
    question: "How much Green Onions are needed for Batch 1?",
    options: ["1 cup", "2 cups", "1.5 cups", "3 cups"],
    answer: "1 cup",
  },
  {
    id: 6,
    question: "How much Sesame Oil is needed for Batch 1?",
    options: ["1.5 tsp * 2", "1.5 tsp * 4", "1.5 tsp * 6", "1.5 tsp * 8"],
    answer: "1.5 tsp * 2",
  },
  {
    id: 7,
    question: "How much Basic Sauce Rice is needed for Batch 2?",
    options: ["13 lb", "6 lb 8 oz", "10 lb", "15 lb"],
    answer: "13 lb",
  },
  {
    id: 8,
    question: "How much Soybean Oil is needed for Batch 2?",
    options: ["1/3 cup * 4", "1/3 cup * 2", "1/3 cup * 6", "1/3 cup * 8"],
    answer: "1/3 cup * 4",
  },
  {
    id: 9,
    question: "How many cups of Liquid Eggs are needed for Batch 2?",
    options: ["3 cups", "1.5 cups", "2 cups", "4 cups"],
    answer: "3 cups",
  },
  {
    id: 10,
    question: "How much Carrots and Peas are needed for Batch 2?",
    options: ["4 cups", "2 cups", "3 cups", "5 cups"],
    answer: "4 cups",
  },
  {
    id: 11,
    question: "How much Green Onions are needed for Batch 2?",
    options: ["2 cups", "1 cup", "1.5 cups", "3 cups"],
    answer: "2 cups",
  },
  {
    id: 12,
    question: "How much Sesame Oil is needed for Batch 2?",
    options: ["1.5 tsp * 4", "1.5 tsp * 2", "1.5 tsp * 6", "1.5 tsp * 8"],
    answer: "1.5 tsp * 4",
  },
];
const FriedRiceInstructions = {
  "Batch 1": [
    { Ingredient: "Basic Sauce Rice", Amount: "6 lb 8 oz" },
    { Ingredient: "Soybean Oil", Amount: "1/3 cup * 2" },
    { Ingredient: "Liquid Eggs", Amount: "1.5 cups" },
    { Ingredient: "Carrots and Peas", Amount: "2 cups" },
    { Ingredient: "Green Onions", Amount: "1 cup" },
    { Ingredient: "Sesame Oil", Amount: "1.5 tsp * 2" },
  ],
  "Batch 2": [
    {
      Ingredient: "Basic Sauce Rice",
      Amount: "13",
    },
    { Ingredient: "Soybean Oil", Amount: "1/3 cup * 4" },
    {
      Ingredient: "Liquid Eggs",
      Amount: "3 cups",
    },
    { Ingredient: "Carrots and Peas", Amount: "4 cups" },
    { Ingredient: "Green Onions", Amount: "2 cup" },
    { Ingredient: "Sesame Oil", Amount: "1.5 tsp * 4" },
  ],
};

const allowedOrigins = process.env.ALLOWED_ORIGINS
  ? process.env.ALLOWED_ORIGINS.split(",")
  : ["http://localhost:3000"];

// console.log("Allowed Origins:", allowedOrigins); // Debugging log

app.use(
  cors({
    origin: allowedOrigins,
  })
);

app.get("/", (req, res) => {
  res.send("Welcome to the Panda Shift Lead Training API!");
});
// API endpoint to get Chow Mein Instructions
app.get("/api/chow-mein-info", (req, res) => {
  res.json(ChowMeinInstructions);
});

// API endpoint to get quiz questions
app.get("/api/chow-mein-quiz", (req, res) => {
  res.json(ChowMeinQuizQuestions);
});

//CompanyCultureQuiz
app.get("/api/company-culture-quiz", (req, res) => {
  res.json(CompanyCultureQuizQuestions);
});

// API endpoint to serve the data
app.get("/api/company-culture-info", (req, res) => {
  res.json(CompanyCultureInformation);
});

app.get("/api/fried-rice-quiz", (req, res) => {
  res.json(FriedRiceQuizQuestions);
});

app.get("/api/fried-rice-info", (req, res) => {
  res.json(FriedRiceInstructions);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
