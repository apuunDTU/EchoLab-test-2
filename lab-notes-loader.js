// Lab notes data
const labNotesData = [
  {
    id: 1,
    title: "AI AS CITIZENS?",
    date: "14.06.2024",
    image: "assets/Test.png",
    preview: "Soon, the public conversation could be entirely or partially generated by AI, according to a report by Europol. But are we ready to accept language models as participants in our democracy? We aim to explore this question by letting two language models take part in a debate about their own regulation and the spread of misinformation online. These models are not polite or helpful like ChatGPT—they have been trained by researchers at DTU to express sharp opinions that encourage the audience to reflect on the future of democracy in a digital society.",
    researchTopics: [
      "Technology and digitalization",
      "Public sphere, dialogue and discussion",
      "Generative AI",
      "Synthetic Data"
    ],
    objectives: "The discussions centered on AI as a citizen, addressing specific cases on whether and how we should regulate AI and its growing influence on the public conversation.",
    methodology: "Fine-tuning of chatbots",
    lessons: [
      "Humans excel in live debate due to emotional resonance",
      "Language models are seen as knowledge tools",
      "AI perspectives are easily dismissed without real experiences"
    ],
    collaborators: [
      "Tobias Bornakke",
      "Tanja Nyrup",
      "Peter Bech-Nielsen",
      "Tech critique/positivist chatbot"
    ],
    projectLink: "https://www.linkedin.com/feed/",
    projectLinkText: "View Project",
    publicationLink: "https://www.linkedin.com/feed/",
    publicationLinkText: "Read Publication",
    sectionTitles: {
      topics: "Research Areas",
      lessons: "Key Learnings",
      collaborators: "Team Members"
    }
  },
  {
    id: 2,
    title: "DATA DESTRUCTION WORKSHOP",
    date: "10.05.2024",
    image: "assets/Test.png",
    preview: "A workshop exploring the ethical and practical implications of data destruction in the digital age. Participants will learn about different methods of secure data deletion and discuss the importance of data privacy in research contexts.",
    researchTopics: [
      "Data privacy",
      "Digital ethics",
      "Research methodology",
      "Information security"
    ],
    objectives: "To develop best practices for data destruction in research contexts and raise awareness about the importance of data privacy.",
    methodology: "Workshop sessions, practical demonstrations, and group discussions",
    lessons: [
      "Data destruction is a critical component of research ethics",
      "Different types of data require different destruction methods",
      "Institutional policies often lag behind technological capabilities"
    ],
    collaborators: [
      "ECHO Lab",
      "DTU Data Ethics Group",
      "Privacy International"
    ],
    projectLink: "https://www.linkedin.com/feed/",
    projectLinkText: "Workshop Details",
    publicationLink: "https://www.linkedin.com/feed/",
    publicationLinkText: "View Report",
    sectionTitles: {
      topics: "Key Findings",
      lessons: "Insights Gained",
      collaborators: "Research Team"
    }
  },
  {
    id: 3,
    title: "DIGITAL DEMOCRACY INITIATIVE",
    date: "22.03.2024",
    image: "assets/Test.png",
    preview: "An initiative exploring how digital technologies can enhance democratic processes while addressing challenges such as misinformation, algorithmic bias, and digital divides. The project brings together technologists, social scientists, and policymakers to develop frameworks for more inclusive and transparent digital governance.",
    researchTopics: [
      "Digital democracy",
      "Algorithmic governance",
      "Misinformation",
      "Digital inclusion"
    ],
    objectives: "To develop frameworks and tools that enhance democratic processes through digital technologies while mitigating risks.",
    methodology: "Mixed-methods research combining quantitative analysis of digital platforms with qualitative interviews of stakeholders",
    lessons: [
      "Digital tools can both enhance and undermine democratic processes",
      "Transparency in algorithmic decision-making is essential for trust",
      "Digital literacy is a prerequisite for meaningful participation"
    ],
    collaborators: [
      "Copenhagen Democracy Lab",
      "Digital Society Initiative",
      "Ministry of Digital Affairs"
    ],
    projectLink: "https://www.linkedin.com/feed/",
    projectLinkText: "Initiative Website",
    publicationLink: "https://www.linkedin.com/feed/",
    publicationLinkText: "Research Paper",
    sectionTitles: {
      topics: "Research Components",
      lessons: "Project Insights",
      collaborators: "Collaborators"
    }
  },
  {
    id: 4,
    title: "ETHICAL AI FRAMEWORK",
    date: "15.01.2024",
    image: "assets/Test.png",
    preview: "A comprehensive framework for evaluating the ethical implications of AI systems in research and public applications. This project develops guidelines, assessment tools, and case studies to help researchers and practitioners navigate the complex ethical landscape of AI development and deployment.",
    researchTopics: [
      "AI ethics",
      "Responsible innovation",
      "Algorithmic fairness",
      "AI governance"
    ],
    objectives: "To create practical tools and frameworks for ethical AI development and evaluation that can be adopted across research institutions.",
    methodology: "Literature review, stakeholder interviews, and participatory design workshops",
    lessons: [
      "Ethical considerations must be integrated throughout the AI development lifecycle",
      "Diverse perspectives are essential for identifying potential harms",
      "Transparency and explainability are key components of ethical AI"
    ],
    collaborators: [
      "AI Ethics Consortium",
      "Responsible AI Lab",
      "European Commission AI Ethics Group"
    ],
    projectLink: "https://www.linkedin.com/feed/",
    publicationLink: "https://www.linkedin.com/feed/",
    sectionTitles: {
      topics: "Research Areas",
      lessons: "Key Learnings",
      collaborators: "Team Members"
    }
  }
];

// Events data
const eventsData = [
  {
    id: 1,
    date: "24.04",
    title: "Forskningsdøgn event at Danish Technical Museum",
    image: "assets/25.04.png"
  },
  {
    id: 2,
    date: "27.05",
    title: "Data destruction Workshop at ECHOlab",
    image: "assets/25.04.png"
  }
];

// Function to load lab notes from individual files
async function loadLabNotes() {
  try {
    console.log('Starting loadLabNotes function...');
    // Try to load from individual files first
    try {
      console.log('Attempting to load projects from individual files...');
      // Get all project files from the projects directory
      console.log('Fetching projects/index.json...');
      const response = await fetch('projects/index.json');
      console.log('Response status:', response.status);
      
      if (!response.ok) {
        throw new Error(`Failed to load project index: ${response.status} ${response.statusText}`);
      }
      
      const projectIndex = await response.json();
      console.log('Project index loaded:', projectIndex);
      const gridContainer = document.querySelector('.grid-container');
      console.log('Grid container found:', !!gridContainer);
      gridContainer.innerHTML = ''; // Clear existing content
      
      // Load each project file
      for (const projectId of projectIndex.projects) {
        try {
          console.log(`Loading project: ${projectId}`);
          const projectUrl = `projects/${projectId}.js`;
          console.log(`Fetching from URL: ${projectUrl}`);
          const projectResponse = await fetch(projectUrl);
          console.log(`Project response status for ${projectId}:`, projectResponse.status);
          
          if (!projectResponse.ok) {
            console.error(`Failed to load project: ${projectId} - ${projectResponse.status} ${projectResponse.statusText}`);
            continue;
          }
          
          // Execute the project file to get the note data
          const projectScript = await projectResponse.text();
          console.log(`Project script loaded for ${projectId}:`, projectScript.substring(0, 100) + '...');
          
          // Create a function to evaluate the script and return the note data
          console.log(`Evaluating script for ${projectId}...`);
          const getNoteData = new Function(`
            ${projectScript}
            return noteData;
          `);
          
          const noteData = getNoteData();
          console.log(`Note data for ${projectId}:`, noteData);
          
          if (noteData) {
            console.log(`Creating card for ${projectId}...`);
            const card = createLabNoteCard(noteData);
            gridContainer.appendChild(card);
            console.log(`Card for ${projectId} added to grid container`);
          } else {
            console.error(`No note data returned for ${projectId}`);
          }
        } catch (error) {
          console.error(`Error loading project ${projectId}:`, error);
        }
      }
      
      console.log('Successfully loaded all projects from individual files');
      return; // Successfully loaded from individual files
    } catch (error) {
      console.warn('Failed to load from individual files, falling back to hardcoded data:', error);
      // Fall back to hardcoded data
    }
    
    // Fallback to hardcoded data
    console.log('Falling back to hardcoded data');
    const gridContainer = document.querySelector('.grid-container');
    gridContainer.innerHTML = ''; // Clear existing content
    
    // Sort notes by date (newest first)
    const labNotes = [...labNotesData].sort((a, b) => {
      const dateA = new Date(a.date.split('.').reverse().join('-'));
      const dateB = new Date(b.date.split('.').reverse().join('-'));
      return dateB - dateA;
    });
    
    console.log('Creating cards from hardcoded data...');
    labNotes.forEach(note => {
      const cardSection = createLabNoteCard(note);
      gridContainer.appendChild(cardSection);
    });
    console.log('All cards from hardcoded data added to grid container');
  } catch (error) {
    console.error('Error loading lab notes:', error);
    document.querySelector('.grid-container').innerHTML = '<p>Error loading lab notes. Please try again later.</p>';
  }
}

// Function to load upcoming events
function loadEvents() {
  try {
    // Generate HTML for events
    const eventList = document.querySelector('.event-list');
    eventList.innerHTML = ''; // Clear existing content
    
    eventsData.forEach(event => {
      const eventItem = createEventItem(event);
      eventList.appendChild(eventItem);
    });
    
    return eventsData;
  } catch (error) {
    console.error('Error loading events:', error);
    return [];
  }
}

// Function to create a lab note card
function createLabNoteCard(note) {
  const cardSection = document.createElement('div');
  cardSection.className = 'card-section';
  
  // Create the research card
  const researchCard = document.createElement('article');
  researchCard.className = 'research-card';
  researchCard.setAttribute('onclick', 'openModal(this)');
  
  // Create card header
  const cardHeader = document.createElement('header');
  cardHeader.className = 'card-header';
  
  const img = document.createElement('img');
  img.src = note.image;
  img.alt = note.title;
  
  const cardDate = document.createElement('div');
  cardDate.className = 'card-date';
  cardDate.textContent = note.date;
  
  cardHeader.appendChild(img);
  cardHeader.appendChild(cardDate);
  
  // Create card content
  const cardContent = document.createElement('div');
  cardContent.className = 'card-content';
  
  // Left side
  const cardLeft = document.createElement('div');
  cardLeft.className = 'card-left';
  
  const projectTitle = document.createElement('h2');
  projectTitle.className = 'project-title';
  projectTitle.textContent = note.title;
  
  const cardPreview = document.createElement('p');
  cardPreview.className = 'card-preview';
  cardPreview.textContent = note.preview;
  
  cardLeft.appendChild(projectTitle);
  cardLeft.appendChild(cardPreview);
  
  // Right side
  const cardRight = document.createElement('div');
  cardRight.className = 'card-right';
  
  // Research topics section
  const topicsSection = document.createElement('section');
  topicsSection.className = 'section';
  
  const topicsTitle = document.createElement('h3');
  topicsTitle.className = 'section-title';
  
  // Use custom section title if available, otherwise use default
  if (note.sectionTitles && note.sectionTitles.topics) {
    topicsTitle.textContent = note.sectionTitles.topics.toUpperCase() + ':';
  } else {
    topicsTitle.textContent = 'RESEARCH TOPICS:';
  }
  
  const topicsContent = document.createElement('p');
  topicsContent.className = 'topic-content';
  topicsContent.textContent = note.researchTopics.join(' - ');
  
  topicsSection.appendChild(topicsTitle);
  topicsSection.appendChild(topicsContent);
  
  // Objectives section
  const objectivesSection = document.createElement('section');
  objectivesSection.className = 'section detailed-section';
  
  const objectivesTitle = document.createElement('h3');
  objectivesTitle.className = 'section-title';
  objectivesTitle.textContent = 'OBJECTIVES:';
  
  const objectivesContent = document.createElement('p');
  objectivesContent.className = 'topic-content';
  objectivesContent.textContent = note.objectives;
  
  objectivesSection.appendChild(objectivesTitle);
  objectivesSection.appendChild(objectivesContent);
  
  // Methodology section
  const methodologySection = document.createElement('section');
  methodologySection.className = 'section detailed-section';
  
  const methodologyTitle = document.createElement('h3');
  methodologyTitle.className = 'section-title';
  methodologyTitle.textContent = 'METHODOLOGY:';
  
  const methodologyContent = document.createElement('p');
  methodologyContent.className = 'topic-content';
  methodologyContent.textContent = note.methodology;
  
  methodologySection.appendChild(methodologyTitle);
  methodologySection.appendChild(methodologyContent);
  
  // Lessons section
  const lessonsSection = document.createElement('section');
  lessonsSection.className = 'section';
  
  const lessonsTitle = document.createElement('h3');
  lessonsTitle.className = 'section-title';
  
  // Use custom section title if available, otherwise use default
  if (note.sectionTitles && note.sectionTitles.lessons) {
    lessonsTitle.textContent = note.sectionTitles.lessons.toUpperCase() + ':';
  } else {
    lessonsTitle.textContent = 'LESSONS LEARNED:';
  }
  
  const lessonsList = document.createElement('ul');
  lessonsList.className = 'lessons-list topic-content';
  
  note.lessons.forEach(lesson => {
    const lessonItem = document.createElement('li');
    lessonItem.textContent = lesson;
    lessonsList.appendChild(lessonItem);
  });
  
  lessonsSection.appendChild(lessonsTitle);
  lessonsSection.appendChild(lessonsList);
  
  // Collaborators section
  const collaboratorsSection = document.createElement('section');
  collaboratorsSection.className = 'section';
  
  const collaboratorsTitle = document.createElement('h3');
  collaboratorsTitle.className = 'section-title';
  
  // Use custom section title if available, otherwise use default
  if (note.sectionTitles && note.sectionTitles.collaborators) {
    collaboratorsTitle.textContent = note.sectionTitles.collaborators.toUpperCase() + ':';
  } else {
    collaboratorsTitle.textContent = 'COLLABORATORS:';
  }
  
  const collaboratorsList = document.createElement('ul');
  collaboratorsList.className = 'collaborator-list';
  
  note.collaborators.forEach(collaborator => {
    const collaboratorItem = document.createElement('li');
    collaboratorItem.textContent = collaborator;
    collaboratorsList.appendChild(collaboratorItem);
  });
  
  collaboratorsSection.appendChild(collaboratorsTitle);
  collaboratorsSection.appendChild(collaboratorsList);
  
  // Append all sections to card right
  cardRight.appendChild(topicsSection);
  cardRight.appendChild(objectivesSection);
  cardRight.appendChild(methodologySection);
  cardRight.appendChild(lessonsSection);
  cardRight.appendChild(collaboratorsSection);
  
  // Append left and right to card content
  cardContent.appendChild(cardLeft);
  cardContent.appendChild(cardRight);
  
  // Append header and content to research card
  researchCard.appendChild(cardHeader);
  researchCard.appendChild(cardContent);
  
  // Create card links
  const cardLinks = document.createElement('div');
  cardLinks.className = 'card-links';
  
  const projectLink = document.createElement('a');
  projectLink.href = note.projectLink;
  projectLink.target = '_blank';
  projectLink.textContent = note.projectLinkText || 'Project';
  
  const publicationLink = document.createElement('a');
  publicationLink.href = note.publicationLink;
  publicationLink.target = '_blank';
  publicationLink.textContent = note.publicationLinkText || 'Publication';
  
  cardLinks.appendChild(projectLink);
  cardLinks.appendChild(publicationLink);
  
  // Append research card and card links to card section
  cardSection.appendChild(researchCard);
  cardSection.appendChild(cardLinks);
  
  return cardSection;
}

// Function to create an event item
function createEventItem(event) {
  const eventItem = document.createElement('li');
  eventItem.className = 'event-item';
  eventItem.setAttribute('onclick', `openEventModal('${event.image}')`);
  
  const eventDate = document.createElement('div');
  eventDate.className = 'event-date';
  eventDate.textContent = event.date;
  
  const eventTitle = document.createElement('a');
  eventTitle.href = '#';
  eventTitle.className = 'event-title';
  eventTitle.textContent = event.title;
  
  eventItem.appendChild(eventDate);
  eventItem.appendChild(eventTitle);
  
  return eventItem;
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
  loadLabNotes();
  loadEvents();
}); 