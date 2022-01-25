export const dogApi = async () => {
    const response = await fetch(`https://api.thedogapi.com/v1/images/search`);

    if (!response.ok) {
      throw new Error(`Request failed with status code ${response.status}`);
    }
    return await response.json();
  };