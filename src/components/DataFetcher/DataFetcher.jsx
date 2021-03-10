
function fetchData(currentIndex) {
  let allData = {}
  fetch(
    `https://www.googleapis.com/books/v1/volumes?q=intitle:&maxResults=40&startIndex=${currentIndex}&key=AIzaSyCOBbymaad4eBVNFVF5JC-Pc0TQzE6AHOw`,
    {
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
    .then((response) => response.json())
    .then((data) => {
       allData = data.totalItems;
      console.log("data" , data)
      return allData
    })
    .catch((error) => {
      console.error("Error:", error);
    });
    
}

export default fetchData;