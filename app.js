const args = process.argv.slice(2,process.argv.length);

const printProfileData = args => {
  args.forEach(arg => console.log(arg));
};

printProfileData(args);
