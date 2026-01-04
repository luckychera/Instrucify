const params = new URLSearchParams(window.location.search);
const courseKey = params.get("course");

if (!courses[courseKey]) {
  alert("Course not found");
  window.location.href = "course.html";
}

const course = courses[courseKey];
let currentLesson = course.lessons[0];

document.getElementById("course-title").textContent = course.title;

const lessonList = document.getElementById("lesson-list");

course.lessons.forEach((lesson, index) => {
  const li = document.createElement("li");
  li.textContent = lesson.title;
  li.onclick = () => loadLesson(index);
  lessonList.appendChild(li);
});

function loadLesson(index) {
  currentLesson = course.lessons[index];

  document.getElementById("lesson-title").textContent = currentLesson.title;
  document.getElementById("lesson-video").src = currentLesson.video;
  document.getElementById("lesson-text").innerHTML = currentLesson.content;

  document.getElementById("quiz-question").textContent =
    currentLesson.quiz.question;

  const options = document.getElementById("quiz-options");
  options.innerHTML = "";

  currentLesson.quiz.options.forEach((opt, i) => {
    options.innerHTML += `
      <label>
        <input type="radio" name="quiz" value="${i}"> ${opt}
      </label><br>
    `;
  });

  document.getElementById("quiz-result").textContent = "";
}

function checkQuiz() {
  const selected = document.querySelector('input[name="quiz"]:checked');
  if (!selected) return alert("Choose an answer");

  document.getElementById("quiz-result").textContent =
    selected.value == currentLesson.quiz.answer
      ? "✅ Correct!"
      : "❌ Try again";
}

loadLesson(0);

function updateCourseProgress(courseId, totalTopics) {
  const progress = getUserProgress();
  const course = progress?.courses[courseId];

  if (!course) return;

  const percent = Math.round(
    (course.completedTopics.length / totalTopics) * 100
  );

  document.getElementById("progress-fill").style.width = percent + "%";
  document.getElementById("progress-percent").textContent = percent + "%";
}
updateCourseProgress(courseKey, course.lessons.length);
