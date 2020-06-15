<template>
  <section class="container">
    <div class="columns">
      <div class="column is-half">
        <h1 class="subtitle">
          Alex Lanthier - Software Engineer II + Teacher
        </h1>
        <hr />
        <p>
          Hey all, I'm Alex. I'm an experienced Full Stack Software Engineer who wants to help spread information about programming! I also just wanted an excuse just to build
          another website. During the day I work as a software engineer, then in the evenings I teach and tutor programming online. I love coffee, teaching and mentoring, helping people and programming.
          I have a strong will to develop new skills, especially programming wise, so I will go out of my comfort zone to learn a new language or framework!
        </p>
        <p>
          I enjoy traveling and exploring more than most things. Also in my freetime I enjoy exercising and going for runs. I hope to be a part of the Peace Corps Response team as a programmer one day. Until
          then, I will continue improving myself both as a professional and in my own personal life.
        </p>
        <p>
          In terms of programming, I know quite a few programming languages. I've coded in more than ten languages, but I am well-versed in JavaScript, C#, Java and Python. Right now I am most skilled in Web Development, specifically
          in ASP / JavaScript stack, but I am always trying to learn new tech stacks to stay relevant. Academically I enjoy learning about various types of languages and their paradigms.
          Please don't hesitate if you want to contact me, whether it be for employment, to work together on a project, or just to have a cup of coffee and chat!
        </p>
      </div>
      <div class="column is-half img-column">
        <img src="../assets/itsme.jpg" width="324" />
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Home'
}
</script>
<style scoped lang="scss">
.container {
  margin: 164px;
}

.column {
  display: flex;
  flex-direction: column;

  p {
    margin: 8px;
  }
}

.img-column {
  display: flex;
  align-items: center;
}

.subtitle {
  margin-bottom: 0px;
}
</style>
