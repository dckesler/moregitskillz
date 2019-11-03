const today = new Date();

const printIt = () => {
  console.log("Jim's awesome file!");
  if (today.getHours() < 12) {
    console.log("It's AM!");
  } else {
    console.log("It's PM!");
  }
  console.log(today);
};

module.exports = printIt;
