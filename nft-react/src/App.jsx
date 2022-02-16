import { Navbar, Welcome, Footer, Services, Transactions } from "./components";

const App = () => {
  // if ("IdleDetector" in window) {
  //   async function detectIdleTime() {
  //     console.log("IdleDetector", IdleDetector);
  //     const state = await IdleDetector.requestPermission();
  //     console.log(state);
  //     const idleDetector = new IdleDetector();
  //     idleDetector.addEventListener("change", (e) => {
  //       const { userState, screenState } = idleDetector;
  //       if (userState === "idle") {
  //         alert("User is Idle");
  //       }
  //     });
  //     await idleDetector.start({
  //       threshold: 3000,
  //     });
  //   }
  //   detectIdleTime();
  // }
  return (
    <div className='min-h-screen'>
      <div className='gradient-bg-welcome'>
        <Navbar />
        <Welcome />
      </div>
      <Services />
      <Transactions />
      <Footer />
    </div>
  );
};

export default App;
