const today = new Date();
const currentHour = today.getHours();

const printIt = () => {
  console.log("Something had to change. Change this. Show time.");

  if (currentHour < 12) {
    console.log("It's AM!");
    console.log(
      `It's ${currentHour} AM. Only ${12 - currentHour} hours to go til noon!`
    );
  } else {
    console.log("It's PM!");
    console.log(
      `It's ${currentHour} PM and only ${24 - currentHour} hours til midnight!`
    );
  }
  console.log(today);
};

module.exports = printIt;
