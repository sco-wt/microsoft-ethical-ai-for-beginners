function markQuiz(formId, answers) {
  const form = document.getElementById(formId);
  const feedback = form.querySelector(".feedback");
  const data = new FormData(form);
  let score = 0;

  Object.entries(answers).forEach(([name, answer]) => {
    if (data.get(name) === answer) score += 1;
  });

  if (score === Object.keys(answers).length) {
    feedback.textContent = "Correct. You can now use the reference sheet as a mini-audit.";
    feedback.classList.add("good");
    return;
  }

  feedback.textContent = `${score}/${Object.keys(answers).length}. Review the six principles, then try again.`;
  feedback.classList.remove("good");
}

function buildAudit() {
  const context = document.getElementById("context").value.trim();
  const affected = document.getElementById("affected").value.trim();
  const risk = document.getElementById("risk").value.trim();
  const guardrail = document.getElementById("guardrail").value.trim();
  const output = document.getElementById("audit-output");

  if (!context || !affected || !risk || !guardrail) {
    output.textContent = "Fill in the four fields to get a first audit sentence.";
    output.classList.remove("good");
    return;
  }

  output.textContent = `Audit sentence: In ${context}, the affected people are ${affected}. The priority risk is ${risk}. The initial safeguard is ${guardrail}.`;
  output.classList.add("good");
}
