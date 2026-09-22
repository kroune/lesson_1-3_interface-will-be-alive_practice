"use strict";

// Семинар 1-3. Идите по заданиям 01–10 из TASKS.md.
// Не вставляйте готовый код целиком: после каждого шага проверьте страницу.

const labStatus = document.querySelector("#lab-status");
const detailsTitle = document.querySelector("#details-title");
const detailsDescription = document.querySelector("#details-description");
const detailsTime = document.querySelector("#details-time");

const cards = document.querySelectorAll(".event-card");
const eventCount = document.querySelector("#event-count");
eventCount.textContent = cards.length;

const detailsPanel = document.querySelector("#event-details");

let selectedCard = null;

function showEvent(card) {
  detailsTitle.textContent = card.dataset.title;
  detailsDescription.textContent = card.dataset.description;
  detailsTime.textContent = card.dataset.time;

  if (selectedCard !== null) {
    selectedCard.classList.remove("event-card--selected");
  }
  card.classList.add("event-card--selected");
  selectedCard = card;

  detailsPanel.style.setProperty("--accent", card.dataset.accent);
}

cards.forEach((card) => {
  card.addEventListener("click", () => {
    labStatus.textContent = "Нажата карточка из программы";
    showEvent(card);
  });
});

const surpriseButton = document.querySelector("#surprise-button");

surpriseButton.addEventListener("click", () => {
  let randomCard;
  do {
    const randomIndex = Math.floor(Math.random() * cards.length);
    randomCard = cards[randomIndex];
  } while (cards.length > 1 && randomCard === selectedCard);

  labStatus.textContent = "Нажата карточка из программы";
  showEvent(randomCard);
});
