# medilocate
A medication-finding app that takes in patient symptoms, uses a built-in NLP model to recommend medications to patients based on map of symptoms and medications

## Backend: 
Built using Python, Node.js, implemented API calls to RxNorm to check for medication interactions. Specifically, the backend integrates Facebook's large-bart-mnli transformer LLM to analyze patient responses/symptoms, and classify the patients' symptoms into one of 30 pre-defined conditions, and match the patients' symptoms with our library of recommended OTC medications. 

## Frontend:
Currently under development using React Native, expected completion in November 2023. In the frontend, users will be directed to a GoodRX page where they can check which nearest pharmacies carry the OTC drug they have been recommended to alleviate their symptoms by our app. 

###Developers:
Jihoon (Jimmy) Baek, Haoran (Hunter) Qin, Aarij Atiq
