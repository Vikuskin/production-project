import { Project } from 'ts-morph';

const LAYERS = ['app', 'widgets', 'features', 'pages', 'shared', 'entities'];
const project = new Project({});

project.addSourceFilesAtPaths('src/**/*.ts');
project.addSourceFilesAtPaths('src/**/*.tsx');

const files = project.getSourceFiles();
const isAbsoluteProjectPath = (value: string) => LAYERS.some((layer) => value.startsWith(layer));

files.forEach((file) => {
  const importDeclarations = file.getImportDeclarations();

  importDeclarations.forEach((importDeclaration) => {
    const value = importDeclaration.getModuleSpecifierValue();

    isAbsoluteProjectPath(value) && importDeclaration.setModuleSpecifier(`@/${value}`);
  });
});

project.save();
