'use strict';
const main = () => {
  const $ = (selector) => document.querySelector(selector); // 단일 태그 선택자 유틸 함수
  const $$ = (selector) => document.querySelectorAll(selector); // 다중 태그 선택자 유틸 함수

  // 테마 기능 구현하기
  const changeTheme = () => {
    const $$noteContents = $$('.note-contents');

    const $noteContainer = $('.note-container');
    const [$headerTitle, $headerSubTitle] = $noteContainer.children[0].children[0].children;

    const $themeSlider = $('.theme-slider');
    const $themeToggleBtn = $('.toggle-thumb');

    const $searchWrap = $('.search-wrapper');
    const $searchInput = $searchWrap.children[1];

    const $sortDropdownWrap = $('.sort-dropdown-wrapper');
    const $select = $sortDropdownWrap.children[0];

    const $formTitleInput = $('.form-title-input');
    const $formContentsTextArea = $('.form-contents-textarea');

    const $moveFormButton = $('.move-form-button');
    const $addNoteButton = $('.add-note-button');
    const $moveBackButton = $('.move-back-button');

    // 테마 토글 버튼 이벤트 핸들링
    const themeHandler = () => {
      const activeToggle = (selector) => selector.classList.toggle('active');
      const themeList = [
        $noteContainer,
        $headerTitle,
        $headerSubTitle,
        $searchWrap,
        $searchInput,
        $sortDropdownWrap,
        $select,
        $themeSlider,
        $themeToggleBtn,
        $formTitleInput,
        $formContentsTextArea,
        $moveFormButton,
        $addNoteButton,
        $moveBackButton,
      ];

      themeList.forEach((list) => {
        if (list !== null) activeToggle(list);
      });

      $$noteContents.forEach((note) => {
        const [title, timeStamp] = note.children;
        const noteList = [note, title, timeStamp];
        noteList.forEach((element) => {
          activeToggle(element);
        });
      });
    };

    $themeToggleBtn.addEventListener('click', themeHandler);
  };

  // 노트 컴포넌트 추가 / 수정 / 삭제
  const createNote = () => {};

  changeTheme();
  createNote();
};

main();
