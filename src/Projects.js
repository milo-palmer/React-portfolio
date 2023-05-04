function Projects() {
  return (
    <>
      <section className="grid-reverse" id="projects">
        <a
          className="img-container"
          href="https://github.com/harakeke-2023/sims-final-project"
          target="_blank"
          rel="noreferrer"
        >
          <img src="images/sims.png" alt="Sims Scrabble home page" />
        </a>
        <div className="center-text">
          <h2>Sims Scribble 98</h2>
          <p>
            Sims Scribble is a fun drawing game similar to Telephone where users
            take turns secretly writing captions for drawings from their friends
            and then drawing those captions in the end they are shown the
            results of the drawings and captions to see how wacky and weird it
            gets.
          </p>
        </div>
      </section>
      <section
        className="grid"
        style={{ paddingTop: '40px', paddingBottom: '40px' }}
      >
        <div className="center-text">
          <h2>Todo List</h2>
          <p>
            Classic To do list, Was one of the challenges from dev academy. I
            made this project to work on my full stack ability this Dev
            challenge had no guidence and we had to build the full back-end and
            full front-end parts of the application. I learnt how to build and
            test DB functions to a much higher level than I had done before when
            doing DB calls in specific orders and also implementing a filter
            system using those DB functions. I also worked on my conditional
            rendering in React.
          </p>
          <h3>Tools used</h3>
          <ul>
            <li>React</li>
            <li>Redux</li>
            <li>css</li>
            <li>scss</li>
            <li>Express</li>
            <li>Knex</li>
            <li>Jest</li>
            <li>Supertest</li>
          </ul>
        </div>
        <a
          className="img-container"
          href="http://milo-todo.devacademy.nz/"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/images/todo.png" alt="Todo home page" />
        </a>
      </section>
      <section className="grid-reverse">
        <a
          className="img-container"
          href="https://github.com/harakeke-2023/Team-Misfit-Koalas"
          target="_blank"
          rel="noreferrer"
        >
          <img src="images/Chat.png" alt="Chat API home page" />
        </a>
        <div className="center-text">
          <h2>Chat GPT pick your own adventure</h2>
          <p>
            Pick your own adventure uses the chat GPT API we produced a
            detective story based on the bandersnatch type books where you can
            decided where to go and what to do. Chat GPT is intergrated to
            produce the directions of the story and can then go on infinetly and
            to crazy directions.
          </p>
        </div>
      </section>
    </>
  )
}

export default Projects
