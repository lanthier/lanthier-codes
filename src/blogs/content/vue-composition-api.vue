<template>
  <article>
    <h1 class="subtitle">
      What is the Vue Composition API?
    </h1>
    <p>
      According the [Vue Composition API website](https://composition-api.vuejs.org/#summary), it is a "set
      of additive, function-based APIs that allow flexible composition of component logic."
    </p>
    <p>
      In my words, the Vue Composition API is an API that allows the usage of Vue Component functionality without
      the necesity of that functionality living inside of a Vue Component. You can use <pre class="inline">Watch</pre>
      and <pre class="inline">computed</pre> in composable functionality that utilizes the Vue Composition API without
      the need for that code to be inside of a Vue Component.
    </p>
    <p>
      <em>
        This article is an attempt to simplify the official [Vue Composition API article](https://composition-api.vuejs.org/),
        and how we can use it in Vue 2.
      </em>
    </p>
    <h1 class="subtitle">
      Why the Vue Composition API?
    </h1>
    <p>
      <strong>The 3 Limitations of Vue Components</strong>
    </p>
    <p>
      <strong>1. Readability as components grow</strong> - The logical concerns for a component become
      distributed throughout the component so there is a lot of scrolling up and down the code to understand
      its functionality. Consider this photo found on the Vue Composition API site:
      <img src="https://user-images.githubusercontent.com/499550/62783021-7ce24400-ba89-11e9-9dd3-36f4f6b1fae2.png" alt="Vue Component Code Concern Distribution" />
    </p>
    <p>
      This fragmentation makes it take a long time to understand and maintain complex components. This fragmentation
      is forced by the Vue Component structure. The vue composition API aids in this structure so we can group each
      functional concern together, such as this example:
    </p>
    <img src="https://user-images.githubusercontent.com/499550/62783026-810e6180-ba89-11e9-8774-e7771c8095d6.png" alt="Vue Compisition API vs Component Functionality Distribution" />
    <p>
      <strong>2. Code reuse patterns have drawbacks</strong> - The Vue Composition API can reuse logical functionality
      that needs to be reactive in viewmodels. The composition API can be useful when there is DOM representation for data
      or when there is more than 1 DOM representation for the logic.
    </p>
    <p>
      <strong>3. Limited TypeScript support</strong>
    </p>
    <h1 class="subtitle">
      How to Use the Vue Composition API in Vue 2
    </h1>
    <p>
      You do not need to go through the trouble of upgrading your website to Vue 3 to use the Vue Composition API that comes with
      it. There's <a href="https://github.com/LinusBorg/composition-api-demos/tree/develop/src/composables">a package</a> that
      allows us to use the API separate from the rest of Vue 3. It is important to note the caveats in the readme file at the
      base of the linked repo.
    </p>
    <p><strong>Step 1: Install</strong></p>
    <prism :code="snippet1" language="shell" />
    <p><strong>Step 2: Bump minor Vue versions</strong></p>
    <prism :code="snippet2" language="json" />
    <p><strong>Step 3: Hook up Vue Composition API for Vue 2</strong></p>
    <p>
      Unfortunately, it isn't as easy as importing the package, there are still a few known issues around getting Vue
      to play nicely with the API.
    </p>
    <p>
      Create a file that will hold your composition API import. You need to do this because you need to call
      Vue.use(VueCompositionApi) prior to importing anything that uses the API.
      <a href="https://stackoverflow.com/questions/61885716/uncaught-error-vue-composition-api-must-call-vue-useplugin-before-using-any/61907559#61907559">Better explanation here</a>
    </p>
    <prism :code="snippet3" language="javascript" />
    <p>
      After creating that intial file that holds the API import, you can import the rest of your modules in your application
      entry point. <strong>Note that you need to import this file before importing anything else in your Vue application</strong>.
    </p>
    <prism :code="snippet4" language="javascript" />
    <p><strong>Now you're ready to use it</strong></p>
    <prism :code="snippet5" language="javacript" />
    <h1 class="subtitle">
      Additional resources
    </h1>
    <p>
      Official Vue introduction to the Vue Composition API: <a href="https://composition-api.vuejs.org/" />
    </p>
    <p>
      Many composable examples: <a href="https://github.com/LinusBorg/composition-api-demos/tree/develop/src/composables" />
    </p>
  </article>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class BlogName extends Vue {
  get snippet1 () {
    return 'yarn add @vue/composition-api'
  }

  get snippet2 () {
    return `"dependencies": {
  "vue": "^2.6.12" // Used to be "vue": "^2.6.10",
  ...
},
"devDependencies": {
  "vue-template-compiler": "^2.6.12" // If you use a template compiler, update this to match your vue version
}`
  }

  get snippet3 () {
    return `import Vue from "vue";
import VueCompositionApi from "@vue/composition-api";
 
Vue.use(VueCompositionApi);`
  }

  get snippet4 () {
    return `import Vue from "vue";
import "./composition-api";...`
  }

  get snippet5 () {
    return `import { ref, computed } from "@vue/composition-api";
import { TaskData, TaskStatus } from "@/models/task-data";
 
const tasks = ref([]);
 
const add = (task: TaskData) => {
  tasks.value.push(task);
};
 
const remove = (taskId: string) => {
  tasks.value = tasks.value.filter((task: TaskData) => task.id !== taskId);
};
 
const removeAll = () => {
  tasks.value = [];
};
 
const updateTaskStatus = (taskId: string, status: TaskStatus) => {
  const task = tasks.value.find((task: TaskData) => task.id === taskId);
 
  if (task) {
    task.propsData.status = status;
  }
};
 
const hasTasks = computed(() => tasks.value.length > 0);
const taskCount = computed(() => tasks.value.length);
 
const taskTray = {
  tasks,
  add,
  remove,
  removeAll,
  updateTaskStatus,
  hasTasks,
  taskCount
};
 
export { taskTray };`
  }
}
</script>
<style lang="scss" scoped>
</style>
