🧠 Singleton Pattern – Logger Example
This example demonstrates the Singleton Design Pattern using a simple logger system in TypeScript.

The Singleton pattern ensures that only one instance of a class exists throughout the application, providing a global point of access to that instance.

📌 Real-World Use Cases
Logging systems

Configuration managers

Database connection pools

Caching modules

📁 File Structure
bash
Copy
Edit
Singleton_Pattern/
├── logger-singleton.ts          # Logger implemented using Singleton Pattern
├── logger-without-singleton.ts # Logger without Singleton Pattern
└── README.md                    # Explanation and usage guide
▶️ How to Run
Make sure you have TypeScript and Node.js installed.

Compile the TypeScript files:

bash
Copy
Edit
npx tsc logger-singleton.ts
npx tsc logger-without-singleton.ts
Run the compiled JavaScript files:

bash
Copy
Edit
node logger-singleton.js
node logger-without-singleton.js
✅ Advantage of Singleton Pattern in This Example
Feature	With Singleton (logger-singleton.ts)	Without Singleton (logger-without-singleton.ts)
Instance Control	One shared instance	Multiple independent instances
Global Access	✅ Yes	❌ No
Memory Usage	Efficient	Can increase with multiple instances
Consistency	Consistent behavior across the app	Behavior varies between instances
State Management	Centralized	Scattered and uncoordinated

🔍 Key Observations
With Singleton
logger1 and logger2 both reference the same instance, ensuring consistent and centralized logging behavior.

Without Singleton
loggerA and loggerB are separate instances, leading to inconsistent logging and potentially higher memory usage.

