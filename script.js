document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  const typingArea = document.getElementById('typingArea');
  const slider = document.getElementById('fontSizeSlider');
  const fontSizeValue = document.getElementById('fontSizeValue');
  const lightThemeBtn = document.getElementById('lightThemeBtn');
  const darkThemeBtn = document.getElementById('darkThemeBtn');

  // 🌞 기본 라이트 테마 설정
  body.classList.remove('dark-mode');
  typingArea.style.color = '#000000';
  typingArea.style.backgroundColor = '#ffffff';
  typingArea.style.setProperty('background-color', 'transparent', 'important');
  slider.style.background = '#000000';

  // 📏 폰트 크기 조절 기능
  slider.addEventListener('input', () => {
    const size = slider.value;
    fontSizeValue.textContent = size;
    typingArea.style.fontSize = `${size}px`;
  });

  // 🎨 테마 변경 기능
  const switchTheme = (isDarkMode) => {
    if (isDarkMode) {
      body.classList.add('dark-mode');
      typingArea.style.setProperty('color', '#ffffff', 'important');
      typingArea.style.setProperty('background-color', 'transparent', 'important');

      body.style.backgroundColor = '#000000';
      slider.style.background = '#ffffff'; // 다크 테마 → 슬라이더 흰색
    } else {
      body.classList.remove('dark-mode');
      typingArea.style.setProperty('color', '#000000', 'important');
      typingArea.style.setProperty('background-color', 'transparent', 'important');

      body.style.backgroundColor = '#ffffff';
      slider.style.background = '#000000'; // 라이트 테마 → 슬라이더 검정색
    }
  };

  // 🌞 라이트 테마 버튼
  lightThemeBtn.addEventListener('click', () => switchTheme(false));

  // 🌙 다크 테마 버튼
  darkThemeBtn.addEventListener('click', () => switchTheme(true));
});


const typingArea = document.getElementById('typingArea');
const butterflies = [
  document.getElementById('butterfly1'),
  document.getElementById('butterfly2'),
  document.getElementById('butterfly3'),
  document.getElementById('butterfly4'),
  document.getElementById('butterfly5')
];

typingArea.addEventListener('input', () => {
  const charCount = typingArea.value.length;
  console.log("현재 글자 수:", charCount);

  if (charCount >= 105) {
    butterflies[0].classList.add('visible');
  } else {
    butterflies[0].classList.remove('visible');
  }

  if (charCount >= 130) {
    butterflies[1].classList.add('visible');
  } else {
    butterflies[1].classList.remove('visible');
  }
  if (charCount >= 140) {
    butterflies[2].classList.add('visible');
  } else {
    butterflies[2].classList.remove('visible');
  }

  if (charCount >= 160) {
    butterflies[3].classList.add('visible');
  } else {
    butterflies[3].classList.remove('visible');
  }
  if (charCount >= 180) {
    butterflies[4].classList.add('visible');
  } else {
    butterflies[4].classList.remove('visible');
  }
});


