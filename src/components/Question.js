import React from "react";

class Questions extends React.Component {
  render() {
    return (
      <section id="questions">
        <div className="container">
          <h2 className="text-center my-4">
            Frequently asked Questions
            <div className="accordion accordion-flush" id="questions">
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#question-one"
                  >
                    Where are you located?
                  </button>
                </h2>
                <div
                  id="question-one"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingOne"
                  data-bs-parent="#questions"
                >
                  <div className="accordion-body fs-6">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam amet qui dolorum laboriosam temporibus nostrum
                    inventore, magnam dolores, quis rerum voluptatum quod
                    obcaecati minus nemo facere ab. Culpa, quo aspernatur.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="question-two">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseTwo"
                  >
                    How old are you?
                  </button>
                </h2>
                <div
                  id="flush-collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="question-two"
                  data-bs-parent="#questions"
                >
                  <div className="accordion-body fs-6">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Cumque nobis itaque facilis voluptas velit aspernatur iusto,
                    ex, eligendi expedita asperiores earum atque temporibus
                    minus iste ad in fugiat voluptatem rem.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="question-three">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseThree"
                  >
                    What is your name?
                  </button>
                </h2>
                <div
                  id="flush-collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="question-three"
                  data-bs-parent="#questions"
                >
                  <div className="accordion-body fs-6">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Alias libero soluta, dolor, amet explicabo quam corrupti
                    mollitia praesentium consequuntur asperiores qui!
                    Consequatur, eos. Quam, sint quidem pariatur eligendi soluta
                    tempora.
                  </div>
                </div>
              </div>
            </div>
          </h2>
        </div>
      </section>
    );
  }
}
export default Questions;
