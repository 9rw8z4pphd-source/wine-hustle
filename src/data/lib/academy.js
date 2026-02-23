import { LESSONS } from "../entities/academy";
import { TERMS } from "../entities/terms";

export function getAllLessons() {
  return Object.values(LESSONS);
}

export function getLessonById(id) {
  return LESSONS[id] ?? null;
}

export function getTermsForLesson(lesson) {
  if (!lesson?.term_ids?.length) return [];
  return lesson.term_ids.map((termId) => TERMS[termId]).filter(Boolean);
}
