// Function to fetch data from the API
const baseUrl = 'https://kart-api-a791f9ba7744.herokuapp.com/'
export async function GET<T>(url: string): Promise<T> {
  try {
    const response = await fetch(`${baseUrl}${url}`);
    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching:', error);
    throw error;
  }
}

// Function to post data to the API
export async function POST<T>(url: string, body: T): Promise<T> {
  try {
    const response = await fetch(`${baseUrl}${url}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error posting:', error);
    throw error;
  }
}

// Function to post delete to the API
export async function DELETE(url: string): Promise<void> {
  try {
    const response = await fetch(`${baseUrl}${url}`, {
      method: 'DELETE'
    });
    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }
  } catch (error) {
    console.error('Error posting:', error);
    throw error;
  }
}

// Function to post patch to the API
export async function PATCH<T>(url: string, body: T): Promise<void> {
  try {
    const response = await fetch(`${baseUrl}${url}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }
  } catch (error) {
    console.error('Error posting:', error);
    throw error;
  }
}