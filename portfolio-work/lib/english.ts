export const enProjects={
  idm:{title:'Platform V IDM',subtitle:'Identity and access management',company:'SberTech',tags:['Product Design','B2B / Enterprise','Identity Management'],intro:'A case study on making save operations, validation and conflict resolution clear and predictable in a complex enterprise identity-management system.',role:'Senior Product Designer',sections:[
    ['Context','Users edit complex objects with dozens of attributes. While a form is open, the same data may be changed by another process, creating a conflict at the moment of saving.'],
    ['Problem','The system needed to explain which values were in conflict, what would be saved and what action the user had to take—without discarding their work.'],
    ['Save flow','Changes are grouped by status, while original and updated values are shown side by side. The outcome remains available for review after the operation.'],
    ['Errors and conflicts','Messages are attached to the relevant fields and describe the next step in plain language, helping users resolve issues without losing entered data.'],
    ['Solution','A consistent sequence of states makes the operation transparent and gives users confidence that complex changes can be completed safely.']
  ]},
  'softlogic-ai':{title:'Softlogic.AI',subtitle:'A B2B computer-vision and video-analytics platform',company:'Softlogic.AI',tags:['Product Design','B2B / Enterprise','Computer Vision'],intro:'A scalable platform that connects cameras, neural networks, detected events and the operational workflows used to investigate them.',role:'Product Designer · Product Manager',sections:[
    ['About the platform','Users connect video sources, configure analytics, receive detected events and move directly to the relevant recording for verification.'],
    ['Business challenge','Detection is only the first step. Operators also need to understand what happened, assess recognition quality, locate the source and investigate the underlying footage.'],
    ['Users','The platform serves monitoring operators, security managers, decision-makers, technical specialists and system administrators.'],
    ['Product architecture','Core entities share consistent navigation, filtering, card and detail-view patterns, allowing the same platform to support different industries and client configurations.'],
    ['My contribution','I led UX/UI design, research, prototyping and design-system development, while coordinating product decisions with analysts, engineers and stakeholders.']
  ]},
  'smart-city':{title:'Smart City',subtitle:'Monitoring the condition of urban infrastructure',company:'Softlogic.AI',tags:['Product Design','Data Visualisation','B2G'],intro:'A monitoring platform that combines district, site, event and camera data into a single operational view of the city.',role:'Product Designer',sections:[
    ['Context','Urban infrastructure data lived in disconnected interfaces, making it difficult to identify a problem area and move from a city-wide indicator to a specific site.'],
    ['Users','Monitoring operators and managers need to assess infrastructure health, locate anomalies and track how quickly responsible teams respond.'],
    ['Research','The work combined stakeholder interviews, current-flow analysis, data exploration and prototype testing to identify the information required at each level.'],
    ['Hypotheses','The main hypotheses focused on indicator hierarchy, progressive drill-down from city to district and site, and clear prioritisation of problem locations.'],
    ['Dashboard and map','A single dashboard connects aggregate metrics, district rankings, the map and event data, letting users investigate without losing context.'],
    ['Outcome','The final design establishes a scalable information architecture and a coherent set of monitoring and investigation flows.']
  ]},
  reporting:{title:'Report Builder',subtitle:'Redesigning manual and scheduled report creation',company:'Softlogic.AI',tags:['Product Design','UX Research','Usability Testing'],intro:'A redesign of the reporting workspace in a video-analytics platform, covering report discovery, configuration and delivery.',role:'Product Designer · UX Researcher',sections:[
    ['Problem','Report types were split across separate pages, while a single overloaded form mixed many dependent settings. Users struggled with device selection, time ranges and the distinction between manual and scheduled reports.'],
    ['Research','I tested three core scenarios with eight participants before the redesign, then repeated the same study with the interactive prototype.'],
    ['Information architecture','Different report types were consolidated into one list with clear visual labels, richer metadata and filters for faster retrieval.'],
    ['Step-by-step creation','The long form became a guided sequence: report type, data source, time range, schedule, recipients and output settings.'],
    ['Feedback','A dedicated success state confirms that the report has been created and clearly communicates what will happen next.'],
    ['Outcome','Manual-report completion increased by 25%, scheduled-report completion by 37.5%, while completion time fell by 30% and 36% respectively in the follow-up test.']
  ]}
} as const;

export const enDetails={
  'face-recognition':{title:'Face Recognition',lead:'Connecting neural-network detections with people, live feeds and events.',challenge:'Operators need to understand who was detected, where and when it happened, and how reliable the match is.',outcome:'A people directory, detection cards, filters, event history and direct access to relevant footage.'},
  'camera-management':{title:'Camera Management',lead:'Managing video sources and camera configuration at scale.',challenge:'Make large camera fleets easy to search, monitor and configure while keeping live video and device details close at hand.',outcome:'Consistent flows for connecting, configuring and monitoring camera health.'},
  'video-analytics':{title:'Video Analytics',lead:'Turning a neural-network signal into an actionable event.',challenge:'Help users configure algorithms, investigate detections and move quickly to the original video source.',outcome:'A library of algorithms, process monitoring, configuration flows and detection analytics.'},
  'report-builder':{title:'Report Builder',lead:'Turning monitoring and analytics data into a clear deliverable.',challenge:'Make the transition from investigation results to a finished report sequential and transparent.',outcome:'Guided flows for selecting data, setting a schedule and producing report materials.'},
  'user-profile':{title:'User Profile',lead:'Personal settings, team administration and account security.',challenge:'Bring personal data, roles, access rights and active sessions into one coherent structure.',outcome:'A unified profile and team-management experience that remains clear at scale.'}
} as const;
