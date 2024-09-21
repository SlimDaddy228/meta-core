const join = require("path").join;
const fs = require("fs");

const toReplace = `
  const alternativePath = alternativePaths.find((altPath) => {
    return fs.existsSync(path.join(process.cwd(), altPath, 'schema.prisma'))
  }) ?? alternativePaths[0]

  config.dirname = path.join(process.cwd(), alternativePath)
  config.isBundled = true
`;

const replaceValue = `
  const alternativePath = alternativePaths.find((altPath) => {
    return fs.existsSync(path.join(process.cwd(), altPath, 'schema.prisma'))
  }); 

  if(alternativePath) {
    config.dirname = path.join(process.cwd(), alternativePath)
  } else if(config?.generator?.output?.value) {
    config.dirname = config.generator.output.value;
  } else {
    config.dirname = path.join(process.cwd(), alternativePaths[0]);
  }

  config.isBundled = true  
`;

const file = join(process.cwd(), "server", ".prisma", "index.js");

const indexContent = fs.readFileSync(file, {encoding: "utf-8"});

const newIndexContent = indexContent.replace(toReplace, replaceValue);

fs.writeFileSync(file, newIndexContent);