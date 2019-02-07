window.onload = function() {
  const buffer = document.createElement('canvas');
  const input = document.createElement('input');
  const context = buffer.getContext('2d');
  const WIDTH = buffer.width = 400;
  const HEIGHT = buffer.height = 400;
  const DEFAULT_COLOR = '#EEEEEE';
  let color = DEFAULT_COLOR;

  document.body.appendChild(buffer);
  document.body.appendChild(input);

  input.placeholder = 'Enter color...'

  const fillColor = function() {
    context.fillStyle = color;
    context.fillRect(0, 0, WIDTH, HEIGHT);
  };

  input.addEventListener('input', (e) => {
      color = e.target.value;
      context.fillStyle = '#' + color;

      if (!color) color = DEFAULT_COLOR;
      fillColor();
  });

  input.focus();
  input.placeholder = 'Enter color...'
  fillColor();
};
