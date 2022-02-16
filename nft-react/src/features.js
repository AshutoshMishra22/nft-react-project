const props = ["name", "email", "tel", "address", "icon"];
const opts = { multiple: true };
const supported = "contacts" in navigator && "ContactsManger" in window;

async function getContacts() {
  console.log("trying to access contacts", supported);
  if (supported) {
    const contacts = await navigator.contacts.select(props, opts);
    alert("Contacts Added ", contacts);
  }
  alert("failed to load Contacts ");
}
var allowGeoRecall = true;
async function getGeoLocation() {
  console.log("getGeoLocation was called");
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, positionError);
  } else {
    console.log("Geolocation is not supported by this device");
  }
}

function positionError() {
  console.log("Geolocation is not enabled. Please enable to use this feature");

  if (allowGeoRecall) {
    getGeoLocation();
  }
}

function showPosition() {
  console.log("posititon accepted");
  allowGeoRecall = false;
  const watchID = navigator.geolocation.watchPosition((position) => {
    // alert(position.coords.latitude, position.coords.longitude);
  });
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
