export const catApi = async () => {
    const response = await fetch(`https://api.thecatapi.com/v1/images/search`);
  
    if (!response.ok) {
      throw new Error(`Request failed with status code ${response.status}`);
    }
  
    return await response.json();
  };