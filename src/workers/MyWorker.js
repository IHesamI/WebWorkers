let interval;
export default (e) => {
  self.onmessage = (msg) => {
    console.log();

    if (msg.data.type != "stop") {
      console.log("in start");
      interval = setInterval(() => {
        console.log("worker works");
      }, 1000);
    } else {
      console.log("in stop");
      clearInterval(interval);
    }
  };
};
