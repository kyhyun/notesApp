'use strict';
const $ = (selector) => document.querySelector(selector);

function main() {
  changeTheme();
  createNote();
}

// 테마 기능 구현하기
function changeTheme() {
  const $headerTitle = $('.header-title');
  const $headerSubTitle = $('.header-sub-title');

  const $searchWrap = $('.search-wrapper');
  const $sortDropdownWrap = $('.sort-dropdown-wrapper');
  const $select = $('.select');

  const $noteContainer = $('.note-container');
  const $noteContents = $('.note-contents');
  const $noteTitle = $('.note-title');
  const $noteTimeStamp = $('.note-time-stamp');

  const $themeToggleBtn = $('.toggle-thumb');
  const $themeSlider = $('.theme-slider');
  const $moveFormButton = $('.move-form-button');

  $themeToggleBtn.addEventListener('click', () => {
    $headerTitle.classList.toggle('active');
    $headerSubTitle.classList.toggle('active');

    $searchWrap.classList.toggle('active');
    $sortDropdownWrap.classList.toggle('active');
    $select.classList.toggle('active');

    $noteContainer.classList.toggle('active');
    $noteContents.classList.toggle('active');
    $noteTitle.classList.toggle('active');
    $noteTimeStamp.classList.toggle('active');

    $themeToggleBtn.classList.toggle('active');
    $themeSlider.classList.toggle('active');
    $moveFormButton.classList.toggle('active');
  });
}

// 노트 컴포넌트 추가 / 수정 / 삭제
function createNote() {
  
}

main();
