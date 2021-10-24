const button = document.querySelector(".btn");
const successDiv = document.querySelector(".success");
const failureDiv = document.querySelector(".failure");
const newLink = document.querySelector(".short");
const originalURLInp = document.querySelector(".originalURL");
const uniqueNameInp = document.querySelector(".uniqueName");

document.querySelector(".baseURL").value =
  window.location.origin.replace("http://", "") + "/";

button.addEventListener("click", (event) => {
  event.preventDefault();

  let originalURL = originalURLInp.value;
  let uniqueName = uniqueNameInp.value;

  if (originalURL.trim() && uniqueName.trim()) {
    originalURLInp.style.border = "none";
    uniqueNameInp.style.border = "none";
    if (
      !originalURL.startsWith("http://") &&
      !originalURL.startsWith("https://")
    ) {
      originalURL = "http://" + originalURL;
    }
    fetch(window.location.origin, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        originalURL,
        uniqueName,
      }),
    })
      .then((response) => {
        if (response.status === 201) {
          return response.json();
        }
        if (response.status === 403) {
          successDiv.style.display = "none";
          failureDiv.style.display = "block";
          throw new Error("Bad Error");
        }
      })
      .then((data) => {
        newLink.innerHTML = data.shortUrl;
        newLink.href = uniqueName;
        failureDiv.style.display = "none";
        successDiv.style.display = "block";
      })
      .catch((err) => console.log("err", err));
  } else {
    originalURLInp.style.border = "solid 1px red";
    uniqueNameInp.style.border = "solid 1px red";
  }
});
