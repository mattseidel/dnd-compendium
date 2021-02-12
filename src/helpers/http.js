const url = 'https://www.dnd5eapi.co/api/'
const aditionalUrl = 'https://www.dnd5eapi.co/'
export const getAll = async (query) => {
    const data = await fetch(`${url}${query}`);
    return data.json()
}

export const getAditionalInfo = async (query) => {
    const data = await fetch(`${aditionalUrl}${query}`);

}