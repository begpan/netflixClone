console.log(import.meta.env.VITE_API_KEY);
export const options = {
  params: { language: "en-US" },
  headers: {
    accept: "application/json",
    Authorization: import.meta.env.VITE_API_KEY,
  },
};

// resimlerin basına eklenmesi gereke url

export const baseImgUrl = "https://image.tmdb.org/t/p/original";
