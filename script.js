document.getElementById('next').onclick = function() {
  const taskList = document.querySelector('.task-list');
  const scrollAmount = taskList.offsetWidth;
  const currentScroll = taskList.scrollLeft;
  const maxScroll = taskList.scrollWidth - taskList.clientWidth;
  const newScroll = Math.min(currentScroll + scrollAmount, maxScroll);
  taskList.scrollTo({
    left: newScroll,
    behavior: 'smooth'
  });
};

document.getElementById('prev').onclick = function() {
  const taskList = document.querySelector('.task-list');
  const scrollAmount = taskList.offsetWidth;
  const currentScroll = taskList.scrollLeft;
  const newScroll = Math.max(currentScroll - scrollAmount, 0);
  taskList.scrollTo({
    left: newScroll,
    behavior: 'smooth'
  });
};
