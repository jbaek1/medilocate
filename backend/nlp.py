from transformers import pipeline 
from datasets import load_from_disk
import torch 
import pandas as pd 
import numpy as np
import warnings
import numpy as np
import matplotlib.pyplot as plt
from sklearn.metrics import confusion_matrix, ConfusionMatrixDisplay

sequence_to_classify = "one day I will see the world" 
candidate_labels = ['travel', 'cooking', 'dancing']
#create classifier on GPU
classifier = pipeline('zero-shot-classification', model="facebook/bart-large-mnli", device=0) 
classifier(sequence_to_classify, candidate_labels)



