let themeButton = document.getElementById("theme-button");

const toggleDarkMode = () => {
    document.body.classList.toggle("dark-mode");
};

themeButton.addEventListener("click", toggleDarkMode);



document.addEventListener("DOMContentLoaded", () => {
    const signNowButton = document.getElementById("sign-now-button");
    let count = 3; 
  
    signNowButton.addEventListener("click", addSignature);
  
    function addSignature() {
      const nameInput = document.getElementById("name").value.trim();
      const hometownInput = document.getElementById("hometown").value.trim();
  
      if (nameInput && hometownInput) {
        
        const newSignature = document.createElement("p");
        newSignature.textContent = `🖊️ ${nameInput} from ${hometownInput} supports this.`;
  
        
        document.querySelector(".signatures").appendChild(newSignature);
  
        count++;
        const counter = document.getElementById("counter");
        counter.textContent = `🖊️ ${count} people have signed this petition and support this cause.`;
  
        document.getElementById("name").value = '';
        document.getElementById("hometown").value = '';
      }
    }
  });
  