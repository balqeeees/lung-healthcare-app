export const PATIENTS = {
  1: {
    id: 1,
    name: "Ali Sami Mohamed",
    gender: "Male",
    birthdate: "1985-04-12",
    bloodType: "O+",
    email: "Ali.Sami@example.com",
    contact: "+1 (555) 123-4567",
    images: [
      {
        url: "https://via.placeholder.com/300x200?text=Histopathology+1",
        label: "Histopathology - Lung Sample 1",
        date: "2024-06-20",
        details: {
          benign: 0.91,
          adenocarcinoma: 0.01,
          squamousCellCarcinoma: 0.003,
          result: "Benign",
        },
      },
    ],
    appointments: [
      { date: "2025-05-03", day: "Saturday", time: "10:00 AM" },
      { date: "2025-06-15", day: "Sunday", time: "2:00 PM" },
    ],
    visits: [
      {
        date: "2024-03-05",
        diagnosis: "Chronic Obstructive Pulmonary Disease (COPD)",
        notes: "Shortness of breath, prescribed bronchodilators",
      },
      {
        date: "2023-11-20",
        diagnosis: "Mild Asthma",
        notes: "Inhaler prescribed, monitor during winter",
      },
    ],
    reports: [
      {
        id: 1,
        title: "Annual Checkup",
        content:
          "Patient appears healthy. Blood pressure: 120/80. Heart rate: 72 bpm.",
        date: "2025-04-15",
        doctorName: "Dr. Smith",
      },
      {
        id: 2,
        title: "Follow-up Report",
        content:
          "Patient recovering well from previous condition. Medications reduced.",
        date: "2025-03-02",
        doctorName: "Dr. Smith",
      },
      {
        id: 3,
        title: "Initial Consultation",
        content: "New patient intake. General health assessment completed.",
        date: "2025-01-10",
        doctorName: "Dr. Jones",
      },
    ],
  },

  2: {
    id: 2,
    name: "Asim Mohamed",
    gender: "Male",
    birthdate: "1978-09-30",
    bloodType: "A-",
    email: "Asim.Mohamed@example.com",
    contact: "+1 (555) 765-4321",
    images: [
      {
        url: "https://via.placeholder.com/300x200?text=Histopathology+2",
        label: "Histopathology - Lung Sample 2",
        date: "2024-06-21",
        details: {
          benign: 0.15,
          adenocarcinoma: 0.82,
          squamousCellCarcinoma: 0.01,
          result: "Adenocarcinoma",
        },
      },
    ],
    appointments: [{ date: "2025-05-20", day: "Tuesday", time: "11:30 AM" }],
    visits: [
      {
        date: "2024-01-15",
        diagnosis: "Lung Cancer - Stage 1",
        notes: "Small tumor detected, scheduled for surgery",
      },
    ],
    reports: [],
  },

  3: {
    id: 3,
    name: "Abdelrahman Ali",
    gender: "Male",
    birthdate: "1992-07-08",
    bloodType: "B+",
    email: "Abdelrahman.Ali@example.com",
    contact: "+1 (555) 678-9101",
    images: [
      {
        url: "https://via.placeholder.com/300x200?text=Histopathology+3",
        label: "Histopathology - Lung Sample 3",
        date: "2024-06-22",
        details: {
          benign: 0.1,
          adenocarcinoma: 0.05,
          squamousCellCarcinoma: 0.8,
          result: "Squamous Cell Carcinoma",
        },
      },
    ],
    appointments: [{ date: "2025-05-10", day: "Saturday", time: "9:00 AM" }],
    visits: [
      {
        date: "2025-01-25",
        diagnosis: "Pneumonia",
        notes: "Antibiotics prescribed, advised rest",
      },
    ],
    reports: [],
  },
  4: {
    id: 4,
    name: "Salma Ali",
    gender: "Female",
    birthdate: "1972-07-08",
    bloodType: "A+",
    email: "Salma.Ali@example.com",
    contact: "+1 (555) 678-9101",
    images: [
      {
        url: "https://via.placeholder.com/300x200?text=Histopathology+3",
        label: "Histopathology - Lung Sample 3",
        date: "2024-06-22",
        details: {
          benign: 0.1,
          adenocarcinoma: 0.05,
          squamousCellCarcinoma: 0.8,
          result: "Squamous Cell Carcinoma",
        },
      },
    ],
    appointments: [{ date: "2025-05-10", day: "Saturday", time: "9:00 AM" }],
    visits: [
      {
        date: "2025-01-25",
        diagnosis: "Pneumonia",
        notes: "Antibiotics prescribed, advised rest",
      },
    ],
    reports: [],
  },
};
