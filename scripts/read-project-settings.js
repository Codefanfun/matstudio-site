const project = await framer.getProjectInfo();
const publish = await framer.getPublishInfo();
console.log(JSON.stringify({ project, publish }, null, 2));
