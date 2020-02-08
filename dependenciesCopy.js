const fs = require('fs');
const packageDependencies = require('./package.json');

const filteredDeps = {};

const keys = Object.keys(packageDependencies.dependencies);

const filteredKeys = keys.filter(dep => {
  return (
    dep !== 'react' &&
    dep !== 'react-dom' &&
    dep !== 'react-scripts' &&
    dep !== '@testing-library/jest-dom' &&
    dep !== '@testing-library/react' &&
    dep !== '@testing-library/user-event'
  );
});

filteredKeys.forEach(dep => {
  filteredDeps[dep] = packageDependencies.dependencies[dep];
});

const dependencies = {
  dependencies: filteredDeps,
};

fs.writeFile('template.json', JSON.stringify(dependencies, null, 2), function(
  err,
) {
  if (err) {
    console.log('error in writing file to template.json', err);
  }
});
