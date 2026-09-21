from typing import List, Optional
from pydantic import BaseModel, EmailStr, Field

class StatItem(BaseModel):
    number: str
    label: str

class PersonalInfo(BaseModel):
    full_name: str = Field(..., alias="fullName")
    first_name: str = Field(..., alias="firstName")
    last_name: str = Field(..., alias="lastName")
    title: str
    subtitle: str
    status_badge: str = Field(..., alias="statusBadge")
    location: str
    email: str = Field(..., pattern=r"^[^@\s]+@[^@\s]+\.[^@\s]+$")
    phone: str
    phone_clean: str = Field(..., alias="phoneClean")
    github: str
    github_username: str = Field(..., alias="githubUsername")
    linkedin: str
    website: str
    philosophy: str
    bio: str
    stats: List[StatItem]

class SkillItem(BaseModel):
    name: str
    level: int = Field(..., ge=0, le=100)
    tag: str

class SkillCategory(BaseModel):
    id: str
    name: str
    description: str
    items: List[SkillItem]

class ExperienceItem(BaseModel):
    role: str
    company: str
    period: str
    details: str
    badges: List[str]

class EducationItem(BaseModel):
    degree: str
    institution: str
    period: str
    details: str

class ProjectItem(BaseModel):
    id: str
    title: str
    category: str
    category_label: str = Field(..., alias="categoryLabel")
    icon_type: str = Field(..., alias="iconType")
    featured: bool
    short_desc: str = Field(..., alias="shortDesc")
    full_desc: str = Field(..., alias="fullDesc")
    tags: List[str]
    demo_url: str = Field(..., alias="demoUrl")
    github_url: str = Field(..., alias="githubUrl")

class TestimonialItem(BaseModel):
    quote: str
    author: str
    role: str
    avatar_letter: str = Field(..., alias="avatarLetter")

class ContactMessage(BaseModel):
    name: str = Field(..., min_length=2, max_length=100)
    email: str = Field(..., pattern=r"^[^@\s]+@[^@\s]+\.[^@\s]+$")
    subject: str = Field(..., min_length=3, max_length=150)
    message: str = Field(..., min_length=10, max_length=2000)

class ContactResponse(BaseModel):
    success: bool
    message: str
    timestamp: str
