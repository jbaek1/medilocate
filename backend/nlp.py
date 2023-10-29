from transformers import pipeline
import sys

classifier = pipeline('zero-shot-classification', model="facebook/bart-large-mnli")
sequence_to_classify = "I'm having some cramps and I'm menstruating."
candidate_labels = [
    'acid reflux', 'Allergies', 'arthritis', 'bloating', 'body pain', 'burn',
    'cold', 'congestion', 'Constipation', 'cough', 'cut', 'diarrhea', 'Dry eyes',
    'eye infection', 'fever', 'flu', 'headache', 'heartburn', 'intestine', 'irritated eyes',
    'Itchy', 'itchy eyes', 'lactose intolerance', 'laxative', 'menstrual pain',
    'nausea', 'red eyes', 'runny nose', 'skin wart', 'sneezing', 'Sore Throat', 'stomach',
    'swelling', 'tingling', 'urinary pain', 'vomiting', 'watery eyes'
]
result = classifier(sequence_to_classify, candidate_labels)
for label, score in zip(result['labels'], result['scores']):
    if score > 0.15:
        print(f"{label}")




