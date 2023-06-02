// API backend route

// http://localhost:3000/api/users

export async function GET(request: any) {
  // Handle GET request for /api/users
  // Retrieve users from the database or any data source

  const users = [
    { id: 1, name: "John" },
    { id: 2, name: "Doug" },
    { id: 3, name: "Karen" },
  ];

  //   send the users as a response
  return new Response(JSON.stringify(users));
}

// export async function HEAD(request) {}

// export async function POST(request) {}

// export async function PUT(request) {}

// export async function PATCH(request) {}

// export async function DELETE(request) {}
