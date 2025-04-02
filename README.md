# Echo Lab Website

This repository contains the code for the Echo Lab website, which displays research projects and upcoming events.

## Adding New Projects

To add a new research project to the website, follow these steps:

### 1. Create a New Project File

Create a new JavaScript file in the `projects` directory with a descriptive name (use kebab-case, e.g., `my-new-project.js`). The file should follow this structure:

```javascript
// My New Project data
const noteData = {
  id: 5, // Use a unique ID number
  title: "MY NEW PROJECT TITLE",
  date: "DD.MM.YYYY", // Use the format DD.MM.YYYY
  image: "assets/your-image.png", // Path to the project image
  preview: "A brief description of the project that will appear in the card preview...",
  researchTopics: [
    "Topic 1",
    "Topic 2",
    "Topic 3"
  ],
  objectives: "The main objectives of the research project.",
  methodology: "The methodology used in the research.",
  lessons: [
    "Lesson 1",
    "Lesson 2",
    "Lesson 3"
  ],
  collaborators: [
    "Collaborator 1",
    "Collaborator 2",
    "Collaborator 3"
  ],
  projectLink: "https://example.com/project",
  projectLinkText: "View Project", // Custom text for the project link
  publicationLink: "https://example.com/publication",
  publicationLinkText: "Read Publication", // Custom text for the publication link
  sectionTitles: {
    topics: "Research Areas", // Custom title for the topics section
    lessons: "Key Learnings", // Custom title for the lessons section
    collaborators: "Team Members" // Custom title for the collaborators section
  }
};
```

### 2. Add the Project to the Index

Open the `projects/index.json` file and add your project ID (the filename without the .js extension) to the `projects` array:

```json
{
  "projects": ["ai-as-citizens", "data-destruction-workshop", "digital-democracy-initiative", "ethical-ai-framework", "my-new-project"]
}
```

### 3. Add Project Images

Place any images for your project in the `assets` directory. Make sure to use the correct path in your project file.

## Customizing Section Titles and Link Text

Each project can have custom section titles and link text:

- **Section Titles**: Use the `sectionTitles` object to customize the titles for the topics, lessons, and collaborators sections.
- **Link Text**: Use the `projectLinkText` and `publicationLinkText` properties to customize the text for the project and publication links.

## Example

Here's a complete example of a new project file:

```javascript
// AI Ethics in Healthcare project data
const noteData = {
  id: 5,
  title: "AI ETHICS IN HEALTHCARE",
  date: "01.07.2024",
  image: "assets/ai-healthcare.png",
  preview: "An investigation into the ethical implications of AI systems in healthcare settings, focusing on patient privacy, algorithmic bias, and the doctor-patient relationship.",
  researchTopics: [
    "Healthcare AI",
    "Medical ethics",
    "Patient privacy",
    "Algorithmic fairness"
  ],
  objectives: "To develop ethical guidelines for the implementation of AI systems in healthcare settings.",
  methodology: "Case studies, interviews with healthcare professionals, and ethical analysis",
  lessons: [
    "Transparency is crucial for patient trust in AI systems",
    "Algorithmic bias can exacerbate existing healthcare disparities",
    "Human oversight remains essential even with advanced AI systems"
  ],
  collaborators: [
    "Copenhagen University Hospital",
    "AI Ethics Research Group",
    "Danish Health Authority"
  ],
  projectLink: "https://example.com/ai-healthcare",
  projectLinkText: "View Case Studies",
  publicationLink: "https://example.com/ai-healthcare-paper",
  publicationLinkText: "Download Guidelines",
  sectionTitles: {
    topics: "Research Focus",
    lessons: "Key Findings",
    collaborators: "Research Partners"
  }
};
```

## Troubleshooting

If your new project doesn't appear on the website:

1. Make sure the file is correctly named and placed in the `projects` directory
2. Verify that the project ID is correctly added to the `index.json` file
3. Check the browser console for any JavaScript errors
4. Ensure all required properties are included in your project file 