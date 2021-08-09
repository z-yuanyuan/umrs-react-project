// briggs: EI, SN, TF, JP
// color: brown, green, blue, red
// letter: a, b, c, d
var quizQuestions = [
  // question #1
  {
    question: "I am task oriented in order to achieve certain goals.",
    answers: [
      {
        // briggs, color, letter
        type: "J,Brown,D",
        content: "YES",
      },
      {
        type: "J,Brown,D,No",
        content: "NO",
      },
    ],
  },
  // question #2
  {
    question: "I get bored easily when disscussing abstract concepts.",
    answers: [
      {
        // briggs, color, letter
        type: "N,Green,C",
        content: "YES",
      },
      {
        type: "N,Green,C,No",
        content: "NO",
      },
    ],
  },
  // question #3
  {
    question: "I like to try things out myself.",
    answers: [
      {
        // briggs, color, letter
        type: "S,Red,A",
        content: "YES",
      },
      {
        type: "S,Red,A,No",
        content: "NO",
      },
    ],
  },
  // question #4
  {
    question: "I like to know where I'm going before I leave the house.",
    answers: [
      {
        // briggs, color, letter
        type: "J,Brown,D",
        content: "YES",
      },
      {
        type: "J,Brown,D,No",
        content: "NO",
      },
    ],
  },
  // question #5
  {
    question: "I believe there is a logical explanation for everything.",
    answers: [
      {
        // briggs, color, letter
        type: "T,Brown,C",
        content: "YES",
      },
      {
        type: "T,Brown,C,No",
        content: "NO",
      },
    ],
  },
  // question #6
  {
    question: "I tend to keep my social circle small.",
    answers: [
      {
        // briggs, color, letter
        type: "I,Green,C",
        content: "YES",
      },
      {
        type: "I,Green,C,No",
        content: "NO",
      },
    ],
  },
  // question #7
  {
    question: "I like to share my ideas with others.",
    answers: [
      {
        // briggs, color, letter
        type: "E,Blue,B",
        content: "YES",
      },
      {
        type: "E,Blue,B,No",
        content: "NO",
      },
    ],
  },
  // question #8
  {
    question: "I enjoy using social media.",
    answers: [
      {
        // briggs, color, letter
        type: "E,Blue,B",
        content: "YES",
      },
      {
        type: "E,Blue,B,No",
        content: "NO",
      },
    ],
  },
  // question #9
  {
    question: "I always express concern for others when making decisions.",
    answers: [
      {
        // briggs, color, letter
        type: "F,Blue,B",
        content: "YES",
      },
      {
        type: "F,Blue,B,No",
        content: "NO",
      },
    ],
  },
  // question #10
  {
    question: "I like to try new things.",
    answers: [
      {
        // briggs, color, letter
        type: "P,Red,A",
        content: "YES",
      },
      {
        type: "P,Red,A,No",
        content: "NO",
      },
    ],
  },
  // question #11
  {
    question: "I can easily adjust to a change in decision.",
    answers: [
      {
        // briggs, color, letter
        type: "P,Red,A",
        content: "YES",
      },
      {
        type: "P,Red,A,No",
        content: "NO",
      },
    ],
  },
  // question #12
  {
    question:
      "I solve problems by working through facts until I understand the problem.",
    answers: [
      {
        // briggs, color, letter
        type: "S,Brown,C",
        content: "YES",
      },
      {
        type: "S,Brown,C,No",
        content: "NO",
      },
    ],
  },
  // question #13
  {
    question: "I rely on logic rather than intuition when making a decision.",
    answers: [
      {
        // briggs, color, letter
        type: "T,Green,C",
        content: "YES",
      },
      {
        type: "T,Green,C,No",
        content: "NO",
      },
    ],
  },
  // question #14
  {
    question: "I make decisions with my heart.",
    answers: [
      {
        // briggs, color, letter
        type: "F,Blue,B",
        content: "YES",
      },
      {
        type: "F,Blue,B,No",
        content: "NO",
      },
    ],
  },
  // question #15
  {
    question: "I learn best by seeing step by step instructions.",
    answers: [
      {
        // briggs, color, letter
        type: "S,Brown,D",
        content: "YES",
      },
      {
        type: "S,Brown,D,No",
        content: "NO",
      },
    ],
  },
  // question #16
  {
    question:
      "I sometimes move onto another task before completing my current one.",
    answers: [
      {
        // briggs, color, letter
        type: "P,Red,A",
        content: "YES",
      },
      {
        type: "P,Red,A,No",
        content: "NO",
      },
    ],
  },
  // question #17
  {
    question: "I prefer a flexible and spontaneous way of life.",
    answers: [
      {
        // briggs, color, letter
        type: "P,Red,A",
        content: "YES",
      },
      {
        type: "P,Red,A,No",
        content: "NO",
      },
    ],
  },
  // question #18
  {
    question: "I like to keep my options open when making decisions.",
    answers: [
      {
        // briggs, color, letter
        type: "P,Green,D",
        content: "YES",
      },
      {
        type: "P,Green,D,No",
        content: "NO",
      },
    ],
  },
  // question #19
  {
    question: "I feel comfortable in crowds.",
    answers: [
      {
        // briggs, color, letter
        type: "E,Blue,B",
        content: "YES",
      },
      {
        type: "E,Blue,B,No",
        content: "NO",
      },
    ],
  },
  // question #20
  {
    question: "I like to share my feelings with others.",
    answers: [
      {
        // briggs, color, letter
        type: "E,Blue,B",
        content: "YES",
      },
      {
        type: "E,Blue,B,No",
        content: "NO",
      },
    ],
  },
  // question #21
  {
    question:
      "I prefer to work/do right away rather than spend time making a plan.",
    answers: [
      {
        // briggs, color, letter
        type: "S,Brown,A",
        content: "YES",
      },
      {
        type: "S,Brown,A,No",
        content: "NO",
      },
    ],
  },
  // question #22
  {
    question: "I know my priorities.",
    answers: [
      {
        // briggs, color, letter
        type: "S,Brown,A",
        content: "YES",
      },
      {
        type: "S,Brown,A,No",
        content: "NO",
      },
    ],
  },
  // question #23
  {
    question: "I tend to work alone.",
    answers: [
      {
        // briggs, color, letter
        type: "I,Green,D",
        content: "YES",
      },
      {
        type: "I,Green,D,No",
        content: "NO",
      },
    ],
  },
  // question #24
  {
    question: "I don't like going to parties.",
    answers: [
      {
        // briggs, color, letter
        type: "I,Green,C",
        content: "YES",
      },
      {
        type: "I,Green,C,No",
        content: "NO",
      },
    ],
  },
  // question #25
  {
    question:
      "I am in tune with my own emotions and let them guide me in life.",
    answers: [
      {
        // briggs, color, letter
        type: "F,Blue,B",
        content: "YES",
      },
      {
        type: "F,Blue,B,No",
        content: "NO",
      },
    ],
  },
  // question #26
  {
    question: "I rely on my intution and experience more than facts.",
    answers: [
      {
        // briggs, color, letter
        type: "N,Red,A",
        content: "YES",
      },
      {
        type: "N,Red,A,No",
        content: "NO",
      },
    ],
  },
  // question #27
  {
    question: "I like to think things through.",
    answers: [
      {
        // briggs, color, letter
        type: "T,Green,D",
        content: "YES",
      },
      {
        type: "T,Green,D,No",
        content: "NO",
      },
    ],
  },
  // question #28
  {
    question: "I am a visual learner.",
    answers: [
      {
        // briggs, color, letter
        type: "S,Red,A",
        content: "YES",
      },
      {
        type: "S,Red,A,No",
        content: "NO",
      },
    ],
  },
  // question #29
  {
    question: "I think carefully before I make decisions.",
    answers: [
      {
        // briggs, color, letter
        type: "J,Brown,D",
        content: "YES",
      },
      {
        type: "J,Brown,D,No",
        content: "NO",
      },
    ],
  },
  // question #30
  {
    question:
      "I feel uneasy if my actions disrupt harmony in my social circle.",
    answers: [
      {
        // briggs, color, letter
        type: "F,Blue,B",
        content: "YES",
      },
      {
        type: "F,Blue,B,No",
        content: "NO",
      },
    ],
  },
  // question #31
  {
    question:
      "I put my personal opinions aside in pursuit of fairness and justice.",
    answers: [
      {
        // briggs, color, letter
        type: "T,Brown,C",
        content: "YES",
      },
      {
        type: "T,Brown,C,No",
        content: "NO",
      },
    ],
  },
  // question #32
  {
    question: "I tend to sit at the back or corner of the room.",
    answers: [
      {
        // briggs, color, letter
        type: "I,Green,C",
        content: "YES",
      },
      {
        type: "I,Green,C,No",
        content: "NO",
      },
    ],
  },
  // question #33
  {
    question: "I like being the centre of attention.",
    answers: [
      {
        // briggs, color, letter
        type: "E,Red,B",
        content: "YES",
      },
      {
        type: "E,Red,B,No",
        content: "NO",
      },
    ],
  },
  // question #34
  {
    question:
      "I solve problems by leaping between different ideas and possibilities.",
    answers: [
      {
        // briggs, color, letter
        type: "N,Green,C",
        content: "YES",
      },
      {
        type: "N,Green,C,No",
        content: "NO",
      },
    ],
  },
  // question #35
  {
    question: "I like to complete my work before playing.",
    answers: [
      {
        // briggs, color, letter
        type: "J,Red,D",
        content: "YES",
      },
      {
        type: "J,Red,D,No",
        content: "NO",
      },
    ],
  },
  // question #36
  {
    question: "I don't let other people influence my thoughts or actions.",
    answers: [
      {
        // briggs, color, letter
        type: "T,Red,A",
        content: "YES",
      },
      {
        type: "T,Red,A,No",
        content: "NO",
      },
    ],
  },
  // question #37
  {
    question: "I use my sense of smell to help remember memories.",
    answers: [
      {
        // briggs, color, letter
        type: "N,Blue,D",
        content: "YES",
      },
      {
        type: "N,Blue,D,No",
        content: "NO",
      },
    ],
  },
  // question #38
  {
    question: "I make decisions based on my emotions.",
    answers: [
      {
        // briggs, color, letter
        type: "F,Blue,B",
        content: "YES",
      },
      {
        type: "F,Blue,B,No",
        content: "NO",
      },
    ],
  },
  // question #39
  {
    question: "I need time alone to recharge.",
    answers: [
      {
        // briggs, color, letter
        type: "I,Green,C",
        content: "YES",
      },
      {
        type: "I,Green,C,No",
        content: "NO",
      },
    ],
  },
  // question #40
  {
    question: "I like to keep my room organized and clean.",
    answers: [
      {
        // briggs, color, letter
        type: "J,Brown,D",
        content: "YES",
      },
      {
        type: "J,Brown,D,No",
        content: "NO",
      },
    ],
  },
];

export default quizQuestions;
