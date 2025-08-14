import { NextResponse } from 'next/server';

export async function GET() {
  const mockData = {
    newKYC: {
      count: 2847,
      change: 12.5,
      trend: 'up',
    },
    modifiedKYC: {
      count: 1234,
      change: -8.2,
      trend: 'down',
    },
    status: {
      initiated: 1234,
      underProcess: 856,
      registered: 2341,
      validated: 1892,
      hold: 234,
      docsPending: 567,
    },
    categories: {
      individual: {
        ri: { progress: 75, total: 1500, completed: 1125 },
        nri: { progress: 60, total: 800, completed: 480 },
      },
      nonIndividual: {
        ri: { progress: 68, total: 1200, completed: 816 },
        nri: { progress: 55, total: 600, completed: 330 },
      },
    },
    solicited: {
      solicited: 4000,
      received: 3200,
      consumed: 2800,
      pending: 800,
    },
    panStats: {
      withImage: 2847,
      withoutImage: 1234,
    },
    dataStats: {
      withImage: 2156,
      withoutImage: 987,
    },
  };

  return NextResponse.json(mockData);
}