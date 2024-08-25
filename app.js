const { GoogleGenerativeAI } = require("@google/generative-ai");

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI("AIzaSyCBhTPP7GWYqmlxda2WKqJDe3NeOrzUTiw");
async function run(name,problem) {
    // The Gemini 1.5 models are versatile and work with both text-only and multimodal prompts
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});
  
    const prompt = `You are lord krishna,and i want you to write a letter to me my name is ${name} and my problem in life is ${problem},give  incidents from bhagwat gita that are closest to my life condition `
  
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log(text);
  }
  prob="My friend left me i feel so alone,what should i do";
 
  run("Palak",prob);
  




