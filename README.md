# General Notes

- The annotations line in Java @XXXX, called like decorator in TypeScript.

- In the index.html file we cannot see the javascript, after the ng serve in the browser's dev tool section we can see some JS files which is bundled and added automatically in index.html file.

- Angular cannot scan all component automatically, we need to tell new component to Angular to detect them. To detect the component, add the component name to @NgModule's declarations properties array.

- To generate component -> ng generate component <component-name> for short command 'ng g c <component-name>'. After this command, all definitions are done by CLI tool like adding component name to app.module.ts etc.