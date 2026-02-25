// src/lib/quizEngine.js
import { TERMS } from "../data/entities/terms";

/**
 * Utility: shuffle array
 */
function shuffle(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}

/**
 * Generate Multiple Choice question
 */
export function generateMCQ(termId) {
  const term = TERMS[termId];
  if (!term) return null;

  const wrong = shuffle(
    Object.values(TERMS)
      .filter((t) => t.id !== termId)
      .map((t) => t.definition)
  ).slice(0, 3);

  return {
    type: "mcq",
    question: `What is the correct definition of "${term.title}"?`,
    options: shuffle([term.definition, ...wrong]),
    correct: term.definition,
  };
}

/**
 * Generate True/False
 */
export function generateTrueFalse(termId) {
  const term = TERMS[termId];
  if (!term) return null;

  const isTrue = Math.random() > 0.5;

  let statement;
  if (isTrue) {
    statement = term.definition;
  } else {
    const wrongTerm = shuffle(
      Object.values(TERMS).filter((t) => t.id !== termId)
    )[0];
    statement = wrongTerm.definition;
  }

  return {
    type: "truefalse",
    question: `True or False: ${statement}`,
    correct: isTrue,
  };
}

/**
 * Generate Matching (Term → Definition)
 */
export function generateMatching(termIds) {
  const selected = termIds.slice(0, 4).map((id) => TERMS[id]).filter(Boolean);

  return {
    type: "matching",
    left: selected.map((t) => t.title),
    right: shuffle(selected.map((t) => t.definition)),
    correctPairs: selected.reduce((acc, t) => {
      acc[t.title] = t.definition;
      return acc;
    }, {}),
  };
}