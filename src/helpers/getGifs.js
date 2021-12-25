export const getGifs = async (category) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_GIF_TOKEN}&limit=4&q=${category}`
    const response = await fetch(url)
    const {data} = await response.json()
    const stickers = data.map((img) => {
      return {id: img.id, title: img.title, url: img.images.downsized.url}
    })

  return stickers
  }

export default getGifs