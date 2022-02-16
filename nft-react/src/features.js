const props = ["name", "email", "tel", "address", "icon"];
const opts = { multiple: true };
const supported = "contacts" in navigator && "ContactsManger" in window;

async function getContacts() {
  console.log("trying to access contacts", supported);
  if (supported) {
    const contacts = await navigator.contacts.select(props, opts);
    alert(contacts);
  }
}

async function getGeoLocation() {
  console.log("accessing geolocation");
  window.navigator.geolocation.getCurrentPosition(console.log);
}

async function detectMotion() {
  window.addEventListener("devicemotion", (event) => {
    console.log(event.rotationRate);
  });
}

async function shareApp() {
  if (navigator.canShare) {
    navigator.share({
      url: "https://punkblock.netlify.app/",
      title: "Krypt(PWA): Transaction with Trust.",
      text: "Sharing an awesome PWA app.",
    });
  }
}

export { getContacts, shareApp, getGeoLocation, detectMotion };
