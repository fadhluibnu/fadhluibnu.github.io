var dataSpyList = [].slice.call(
  document.querySelectorAll('data-bs-spy="scroll"')
);
dataSpyList.forEach(function (dataSpyEl) {
  bootstrap.ScrollSpy.getInstance(dataSpyEl).refresh();
});
