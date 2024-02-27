const MockData = [
  {
    title: 'Work Tasks',
    authorizedUsers: [
      '9423e745-c463-4a4b-9b28-9cd872b7ed9a',
      '638db68c-9ebb-4905-83d5-48fb9ff309ef',
    ],
    tasks: [
      {
        title: 'Finish report',
        isCompleted: false,
        dueDate: '2024-02-29T00:47:47.594048',
        createdBy: '92e6c56d-dfcc-4c30-ba76-46ad42a7363d',
        groups: 'Finance',
        priorityLevel: 'high',
      },
      {
        title: 'Prepare presentation',
        isCompleted: false,
        dueDate: '2024-03-02T00:47:47.594078',
        createdBy: 'ce143008-fc6e-4102-a564-c3e7ee94b097',
        groups: 'Marketing',
        priorityLevel: 'medium',
      },
    ],
  },
  {
    title: 'Personal Errands',
    authorizedUsers: ['a4b360e6-4e14-4e52-a801-4326ada92852'],
    tasks: [
      {
        title: 'Grocery shopping',
        isCompleted: true,
        dueDate: '2024-02-26T00:47:47.594125',
        createdBy: '50d80695-6a51-4f8c-95ff-39d49e4451c3',
        groups: 'Home',
        priorityLevel: 'medium',
      },
      {
        title: 'Book dentist appointment',
        isCompleted: false,
        dueDate: '2024-03-08T00:47:47.594134',
        createdBy: '53c7e133-876b-4885-b63e-511b208f7980',
        groups: 'Health',
        priorityLevel: 'low',
      },
    ],
  },
  {
    title: 'Learning Goals',
    authorizedUsers: [
      '93af35d3-2a5a-4587-96a9-6dbdff3f104a',
      '2fb35997-9570-40d9-b392-521ac6ea230b',
    ],
    tasks: [
      {
        title: 'Complete React Course',
        isCompleted: false,
        dueDate: '2024-03-13T01:14:50.772841',
        createdBy: 'd4702872-bfba-44cc-97b6-62c87f64a520',
        groups: 'Online',
        priorityLevel: 'high',
      },
      {
        title: "Read 'Clean Code'",
        isCompleted: false,
        dueDate: '2024-03-28T01:14:50.773114',
        createdBy: '8af41637-8398-4dd2-a8f3-c78976ee1cf0',
        groups: 'Books',
        priorityLevel: 'medium',
      },
      {
        title: 'Practice LeetCode problems',
        isCompleted: false,
        dueDate: '2024-03-03T01:14:50.773561',
        createdBy: '4a787600-4549-4e41-a8a0-fe7f1e0c7122',
        groups: 'Coding',
        priorityLevel: 'high',
      },
      {
        title: 'Build a personal project',
        isCompleted: false,
        dueDate: '2024-04-27T01:14:50.774244',
        createdBy: '626ff795-f5f2-4e81-a5da-21bd370085b8',
        groups: 'Projects',
        priorityLevel: 'medium',
      },
    ],
  },
  {
    title: 'Vacation Planning',
    authorizedUsers: ['a61c5061-67e1-41ee-8b62-0a7e40b4b3c1'],
    tasks: [
      {
        title: 'Book flights',
        isCompleted: false,
        dueDate: '2024-03-05T01:14:50.774846',
        createdBy: 'eb9bdfd5-892f-43f0-aeb6-f0d591974aa5',
        groups: 'Travel',
        priorityLevel: 'high',
      },
      {
        title: 'Reserve hotels',
        isCompleted: false,
        dueDate: '2024-03-07T01:14:50.774892',
        createdBy: '82003e7e-5c27-4a96-a1cc-0aae85b4fe7a',
        groups: 'Accommodation',
        priorityLevel: 'high',
      },
      {
        title: 'Plan itinerary',
        isCompleted: false,
        dueDate: '2024-03-12T01:14:50.774907',
        createdBy: '99702c83-f20a-4172-ba69-6cc708268025',
        groups: 'Activities',
        priorityLevel: 'medium',
      },
      {
        title: 'Renew passport',
        isCompleted: true,
        dueDate: '2024-01-28T01:14:50.774920',
        createdBy: 'e0432a3a-94e4-48ce-8d79-ae9d47cc5335',
        groups: 'Legal',
        priorityLevel: 'low',
      },
    ],
  },
];

export default MockData;
