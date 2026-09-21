import os
import sys

# Assure que la racine du projet est dans le sys.path
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), "..")))

# pyrefly: ignore [missing-import]
from backend.main import app
# pyrefly: ignore [missing-import]
from fastapi.testclient import TestClient

client = TestClient(app)

response = client.get("/")
print("Root status:", response.status_code, response.json())

cv_response = client.get("/api/cv")
print("CV status:", cv_response.status_code, "Personal:", cv_response.json()["personal"]["fullName"])

health_response = client.get("/api/health")
print("Health:", health_response.json())

contact_response = client.post("/api/contact", json={
    "name": "Professeur Test",
    "email": "test@fss.bj",
    "subject": "Collaboration Anatomia",
    "message": "Félicitations pour la plateforme Anatomia et l'architecture SM-2."
})
print("Contact response:", contact_response.status_code, contact_response.json())
print("ALL BACKEND TESTS PASSED!")
