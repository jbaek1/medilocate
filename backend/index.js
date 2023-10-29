const express = require('express');
const bodyParser = require('body-parser');
const { spawn } = require('child_process');
const express = require('express');
const csv = require('csv-parser');
const fs = require('fs');
const axios = require('axios');
const app = express();
const port = 3000;

app.use(bodyParser.json()); 
const output = [];
const medications = [];
const recommended1 = [];
const sequence "";
app.get('/classify', (req, res) => {// accepts text sequence and classifies disease that 
    output = [];
    const pythonProcess = spawn('python', ['./nlp.py', sequence]);
    pythonProcess.stdout.on('data', (data) => {
        if (data.toString() === ""){
            res.status(500).send("Sorry, we weren't able to find a matching condition for your input. Please try rephrasing.")
        }
        else{
        const lines = data.toString().split('\n').filter(line => line);  // Split the output into lines and remove any empty lines
        output = [...output, ...lines];  // Append the lines to the existing output
        res.send(lines.join(', '));  // Send the lines as a comma-separated string (or any other format you prefer)
        }
    });
});
app.get('/recommended-medication', (req, res) => {
    fs.createReadStream('dataset.csv')  // Specify the path to your CSV file here.
    .pipe(csv())
    .on('data', (row) => {
        let score = 0;
        for (let condition of output) {
            if (Object.values(row).includes(condition)) {
                score++;
            }
        }
        medications.push({ medication: row.Medication, score: score });
    })
    .on('end', () => {
        // Sort the medications array by score in descending order and pick the first one (highest score)
        medications.sort((a, b) => b.score - a.score);
        recommended1 = medications.filter(med => med.score === medications[0].score);
        res.json(recommended1);
    });
});
app.get('/medication-interactions', async (req, res) => {
    const recommended = req.body.recommended;  // Get the recommended array from request body
    if (!Array.isArray(recommended)) {
        return res.status(400).send("Recommended must be an array");
    }

    const rxcuiCodes = recommended.map(med => medicationMap.get(med)).filter(code => code);  // Filter out any undefined codes.

    const interactions = [];
    for (let rxcui of rxcuiCodes) {
        try {
            const response = await axios.get(`https://rxnav.nlm.nih.gov/REST/interaction/interaction.json?rxcui=${rxcui}&sources=ONCHigh`);
            interactions.push(...response.data.interactionTypeGroup[0].interactionType);
        } catch (error) {
            console.error(`Failed to fetch interactions for RxCUI: ${rxcui}`, error);
            return res.status(500).send("Error fetching interactions");
        }
    }

    res.json(interactions);
});

app.post('/storeInput', (req, res) => {
    const sequence = req.body.input;
    if (!userInput) {
      return res.status(400).send('User input is required');
    }
}









































app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});