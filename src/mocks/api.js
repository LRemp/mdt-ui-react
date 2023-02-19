import { getBulletin } from '../api/bulletin';
import { getActiveWarrants, getWarrants, createWarrant } from '../api/warrants';
import { getReports, createReport } from '../api/reports';
import { getVehicles } from '../api/vehicles';
import { getPersons } from '../api/persons';
import { getArmoury } from '../api/armoury';
import { getIncidentReports, createIncidentReport } from '../api/incidents';
import { getNewEventId } from '../api/misc';

export const TEST_DATA = {
  [getActiveWarrants().type]: [
    {
      id: 0,
      offender: 'Tom Riddle',
      author: 'Dumbledore',
      activeUntil: 1640865365000,
      stateid: 12345,
      time: 1640825365000,
      details: "this is a test warrant",
      reports: [{
        id: 23,
        title: "Report Title",
        offender: "Ben Dover",
      }],
    },
    {
      id: 1,
      offender: 'Tom Riddle',
      author: 'Dumbledore',
      activeUntil: 1640865365000,
      stateid: 12345,
      time: 1640825365000,
      details: "this is a test warrant",
      reports: [],
    },
    {
      id: 2,
      offender: 'Tom Riddle',
      author: 'Dumbledore',
      activeUntil: 1640865365000,
      stateid: 12345,
      time: 1640825365000,
      details: "this is a test warrant",
      reports: [],
    },
    {
      id: 3,
      offender: 'Tom Riddle',
      author: 'Dumbledore',
      activeUntil: 1640865365000,
      stateid: 12345,
      time: 1640825365000,
      details: "this is a test warrant",
      reports: [],
    },
    {
      id: 4,
      offender: 'Tom Riddle',
      author: 'Dumbledore',
      activeUntil: 1640865365000,
      stateid: 12345,
      time: 1640825365000,
      details: "this is a test warrant",
      reports: [],
    },
    {
      id: 5,
      offender: 'Tom Riddle',
      author: 'Dumbledore',
      activeUntil: 1640865365000,
      stateid: 12345,
      time: 1640825365000,
      details: "this is a test warrant",
      reports: [],
    },
    {
      id: 6,
      offender: 'Tom Riddle',
      author: 'Dumbledore',
      activeUntil: 1640865365000,
      stateid: 12345,
      time: 1640825365000,
      details: "this is a test warrant",
      reports: [],
    },
    {
      id: 7,
      offender: 'Tom Riddle',
      author: 'Dumbledore',
      activeUntil: 1640865365000,
      stateid: 12345,
      time: 1640825365000,
      details: "this is a test warrant",
      reports: [],
    },
  ],
  [getBulletin().type]: `# header
    some text
    
    * list
    * items`,
  [getReports().type]: [
    {
      title: '',
      id: 4560,
      time: new Date('2020-09-22 15:44').getTime(),
      author: 'Tomas Jonas',
      offender: 'Ben Dover',
      details:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac euismod urna, et porttitor lacus. Etiam pulvinar pulvinar nunc, quis gravida eros sagittis ut. Curabitur a dui ut tortor auctor pulvinar. Pellentesque non turpis id dolor pellentesque posuere eget id tellus. Sed auctor nisi id eros porttitor, pretium maximus augue pretium. Curabitur tempor nunc in massa venenatis commodo. Aenean vel sem vitae augue placerat bibendum.',
      notes:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac euismod urna, et porttitor lacus. Etiam pulvinar pulvinar nunc, quis gravida eros sagittis ut. Curabitur a dui ut tortor auctor pulvinar. Pellentesque non turpis id dolor pellentesque posuere eget id tellus. Sed auctor nisi id eros porttitor, pretium maximus augue pretium. Curabitur tempor nunc in massa venenatis commodo. Aenean vel sem vitae augue placerat bibendum.',
      charges: [
        {
          id: 4,
          times: 2, 
        },
        {
          id: 3,
          times: 1, 
        },
      ],
      outcome: {
        totalFine: 6250,
        totalSentence: '3',
      },
      editHistory: [
        {
          editedBy: 'Byanko Van Byankovic',
          time: new Date('2020-09-22 15:44').getTime(),
        },
      ],
    },
    {
      title: 'Report Title',
      id: 4561,
      time: new Date('2020-09-22 15:44').getTime(),
      author: 'Tomas Jonas',
      offender: 'Ben Dover',
      details:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac euismod urna, et porttitor lacus. Etiam pulvinar pulvinar nunc, quis gravida eros sagittis ut. Curabitur a dui ut tortor auctor pulvinar. Pellentesque non turpis id dolor pellentesque posuere eget id tellus. Sed auctor nisi id eros porttitor, pretium maximus augue pretium. Curabitur tempor nunc in massa venenatis commodo. Aenean vel sem vitae augue placerat bibendum.',
      notes:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac euismod urna, et porttitor lacus. Etiam pulvinar pulvinar nunc, quis gravida eros sagittis ut. Curabitur a dui ut tortor auctor pulvinar. Pellentesque non turpis id dolor pellentesque posuere eget id tellus. Sed auctor nisi id eros porttitor, pretium maximus augue pretium. Curabitur tempor nunc in massa venenatis commodo. Aenean vel sem vitae augue placerat bibendum.',
      charges: [
        {
          id: 4,
          times: 2, 
        },
        {
          id: 3,
          times: 1, 
        },
      ],
      outcome: {
        totalFine: 6250,
        totalSentence: '3',
      },
      editHistory: [
        {
          editedBy: 'Byanko Van Byankovic',
          time: new Date('2020-09-22 15:44').getTime(),
        },
      ],
    },
    {
      title: 'Report Title',
      id: 4562,
      time: new Date('2020-09-22 15:44').getTime(),
      author: 'Tomas Jonas',
      offender: 'Ben Dover',
      details:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac euismod urna, et porttitor lacus. Etiam pulvinar pulvinar nunc, quis gravida eros sagittis ut. Curabitur a dui ut tortor auctor pulvinar. Pellentesque non turpis id dolor pellentesque posuere eget id tellus. Sed auctor nisi id eros porttitor, pretium maximus augue pretium. Curabitur tempor nunc in massa venenatis commodo. Aenean vel sem vitae augue placerat bibendum.',
      notes:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac euismod urna, et porttitor lacus. Etiam pulvinar pulvinar nunc, quis gravida eros sagittis ut. Curabitur a dui ut tortor auctor pulvinar. Pellentesque non turpis id dolor pellentesque posuere eget id tellus. Sed auctor nisi id eros porttitor, pretium maximus augue pretium. Curabitur tempor nunc in massa venenatis commodo. Aenean vel sem vitae augue placerat bibendum.',
      charges: [
        {
          id: 4,
          times: 2, 
        },
        {
          id: 3,
          times: 1, 
        },
      ],
      outcome: {
        totalFine: 6250,
        totalSentence: '3',
      },
      editHistory: [
        {
          editedBy: 'Byanko Van Byankovic',
          time: new Date('2020-09-22 15:44').getTime(),
        },
      ],
    },
    {
      title: 'Report Title',
      id: 4563,
      time: new Date('2020-09-22 15:44').getTime(),
      author: 'Tomas Jonas',
      offender: 'Ben Dover',
      details:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac euismod urna, et porttitor lacus. Etiam pulvinar pulvinar nunc, quis gravida eros sagittis ut. Curabitur a dui ut tortor auctor pulvinar. Pellentesque non turpis id dolor pellentesque posuere eget id tellus. Sed auctor nisi id eros porttitor, pretium maximus augue pretium. Curabitur tempor nunc in massa venenatis commodo. Aenean vel sem vitae augue placerat bibendum.',
      notes:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac euismod urna, et porttitor lacus. Etiam pulvinar pulvinar nunc, quis gravida eros sagittis ut. Curabitur a dui ut tortor auctor pulvinar. Pellentesque non turpis id dolor pellentesque posuere eget id tellus. Sed auctor nisi id eros porttitor, pretium maximus augue pretium. Curabitur tempor nunc in massa venenatis commodo. Aenean vel sem vitae augue placerat bibendum.',
      charges: [
        {
          id: 4,
          times: 2, 
        },
        {
          id: 3,
          times: 1, 
        },
      ],
      outcome: {
        totalFine: 6250,
        totalSentence: '3',
      },
      editHistory: [
        {
          editedBy: 'Byanko Van Byankovic',
          time: new Date('2020-09-22 15:44').getTime(),
        },
      ],
    },
    {
      title: 'Report Title',
      id: 4564,
      time: new Date('2020-09-22 15:44').getTime(),
      author: 'Tomas Jonas',
      offender: 'Ben Dover',
      details:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac euismod urna, et porttitor lacus. Etiam pulvinar pulvinar nunc, quis gravida eros sagittis ut. Curabitur a dui ut tortor auctor pulvinar. Pellentesque non turpis id dolor pellentesque posuere eget id tellus. Sed auctor nisi id eros porttitor, pretium maximus augue pretium. Curabitur tempor nunc in massa venenatis commodo. Aenean vel sem vitae augue placerat bibendum.',
      notes:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac euismod urna, et porttitor lacus. Etiam pulvinar pulvinar nunc, quis gravida eros sagittis ut. Curabitur a dui ut tortor auctor pulvinar. Pellentesque non turpis id dolor pellentesque posuere eget id tellus. Sed auctor nisi id eros porttitor, pretium maximus augue pretium. Curabitur tempor nunc in massa venenatis commodo. Aenean vel sem vitae augue placerat bibendum.',
      charges: [
        {
          id: 4,
          times: 2, 
        },
        {
          id: 3,
          times: 1, 
        },
      ],
      outcome: {
        totalFine: 6250,
        totalSentence: '3',
      },
      editHistory: [
        {
          editedBy: 'Byanko Van Byankovic',
          time: new Date('2020-09-22 15:44').getTime(),
        },
      ],
    },
  ],
  [getVehicles().type]: [
    {
      id: 1,
      owner: "Speed Speeder",
      modelName: "Omnis",
      manufacturer: "Obey",
      numberplate: "AAABBB",
      color: "Pink",
      vehicleClass: "Sports",
      state: "STOLEN",
    },
    {
      id: 2,
      owner: "Speed Speeder",
      modelName: "ZR350",
      manufacturer: "MAZDA",
      numberplate: "00235V",
      color: "Red",
      vehicleClass: "Sports",
    },
    {
      id: 3,
      owner: "Speed Speeder",
      modelName: "Sultan AWD",
      manufacturer: "Subaru",
      numberplate: "PAD465",
      color: "Black Matte",
      vehicleClass: "Sedan",
    },
  ],
  [getPersons().type]: [
    {
      id: 1,
      identifier: "char3:192389183asd",
      identity: "Ben Dover",
      dob: "22/04/1987",
      gender: "MALE",
      stateid: "23456",
      fingerprint: "34-B3890-DOVER-X1Q",
    },
    {
      id: 2,
      identifier: "char2:12419183asd",
      identity: "Speed Speeder",
      dob: "22/04/1987",
      gender: "MALE",
      stateid: "67882",
      fingerprint: "34-B3890-DOVER-X1Q",
    },
    {
      id: 3,
      identifier: "char1:78432283dgw",
      identity: "Balionas Klesne",
      dob: "22/04/1987",
      gender: "MALE",
      stateid: "45671",
      fingerprint: "34-B3890-DOVER-X1Q",
    },
  ],
  [getArmoury().type]: [
    {
      id: 1,
      identity: "Speed Speeder",
      identifier: "char2:12419183asd",
      itemName: "Combat Pistol",
      itemId: "12345678",
      timestamp: 1639245153910,
      type: "TAKEOUT"
    },
    {
      id: 2,
      identity: "Speed Speeder",
      identifier: "char2:12419183asd",
      itemName: "Combat Pistol",
      itemId: "12345678",
      timestamp: 1639245153910,
      type: "RETURN"
    },
    {
      id: 3,
      identity: "Speed Speeder",
      identifier: "char2:12419183asd",
      itemName: "Combat Pistol",
      itemId: "12345678",
      timestamp: 1639245153910,
      type: "TAKEOUT"
    },
    {
      id: 4,
      identity: "Speed Speeder",
      identifier: "char2:12419183asd",
      itemName: "Combat Pistol",
      itemId: "12345678",
      timestamp: 1639245043588,
      type: "TAKEOUT"
    },
    {
      id: 5,
      identity: "Speed Speeder",
      identifier: "char2:12419183asd",
      itemName: "Combat Pistol",
      itemId: "12345678",
      timestamp: 1639245043588,
      type: "RETURN"
    },
    {
      id: 6,
      identity: "Speed Speeder",
      identifier: "char2:12419183asd",
      itemName: "Combat Pistol",
      itemId: "12345678",
      timestamp: 1639245043588,
      type: "RETURN"
    },
    {
      id: 7,
      identity: "Speed Speeder",
      identifier: "char2:12419183asd",
      itemName: "Combat Pistol",
      itemId: "12345678",
      timestamp: 1639245043588,
      type: "RETURN"
    },
  ],
  [createReport().type]: {
    title: 'Report Title',
    id: 123,
    time: 1600778640000,
    author: 'Tomas Jonas',
    offender: 'Ben Dover',
    details: '',
    notes: '',
    charges: [],
    outcome: {
      totalFine: 0,
      totalSentence: 0,
    },
    editHistory: [
      {
        editedBy: 'Byanko Van Byankovic',
        time: 1600778640000,
      },
    ],
  },
  [getWarrants().type]: [
    {
      id: 0,
      offender: 'Tom Riddle',
      author: 'Dumbledore',
      details: "Lorem ipsum dolor sit amet, adipisicing elit,..." ,
      activeUntil: 1640865365000,
      time: 1640621365000,
      reports: [
      ]
    },
    {
      id: 1,
      offender: 'Tom Riddle',
      author: 'Dumbledore',
      details: "Lorem ipsum dolor sit amet, adipisicing elit,..." ,
      activeUntil: 1640865365000,
      time: 1640621365000,
      reports: [
        {
          id: 23,
          title: "Report Title",
          offender: "Ben Dover",
        }
      ]
    },
    {
      id: 2,
      offender: 'Tom Riddle',
      author: 'Dumbledore',
      details: "Lorem ipsum dolor sit amet, adipisicing elit,..." ,
      activeUntil: 1640865365000,
      time: 1640621365000,
      reports: [
        {
          id: 23,
          title: "Report Title",
          offender: "Ben Dover",
        }
      ]
    },
  ],
  [createWarrant().type]: {
    author: 'Dumbledore',
    stateid: 1234,
    offender: 'Tom Riddle',
    time: 1640621365000,
    activeUntil: 1640899365000,
    details: '',
    reports: []
  },
  [getIncidentReports().type]: [
    {
      id: 0,
      title: 'Shenanigans',
      suspect: 'Tom Riddle',
      author: 'Dumbledore',
      details: "Lorem ipsum dolor sit amet, adipisicing elit,..." ,
      activeUntil: 1640865365000,
      time: 1640621365000,
      editHistory: [
        {
          editedBy: 'Byanko Van Byankovic',
          time: 1600778640000,
        },
      ],
    },
    {
      id: 0,
      title: 'Shenanigans',
      suspect: 'Tom Riddle',
      author: 'Dumbledore',
      details: "Lorem ipsum dolor sit amet, adipisicing elit,..." ,
      activeUntil: 1640865365000,
      time: 1640621365000,
      editHistory: [],
    },
  ],
  [getNewEventId().type]: "10069",
};
