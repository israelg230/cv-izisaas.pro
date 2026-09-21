from backend.main import app
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
