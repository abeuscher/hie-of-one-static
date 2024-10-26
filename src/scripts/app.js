import createDiagram from "./diagram";

const siteSettings = {
  imagePath: "",
  videoPath: "",
  templates: {},
  breakpoints: {
    xs: 0,
    s: 641,
    m: 1025,
    l: 1321,
    xl: 1921,
  },
};

window.addEventListener("load", () => {
  for (const thisAction of siteActions) {
    if (document.querySelectorAll(thisAction.element).length > 0) {
      thisAction.action(
        document.querySelectorAll(thisAction.element),
        siteSettings.scrollController,
      );
    }
  }
});

const siteActions = [
  {
    element: "#diagram-container",
    action: createDiagram,
  },
  {
    element: 'img[src$=".gif"]',
    action: (elements) => {
      elements.forEach((img) => {
        // Add a "Show Screenshot" button before each image
        const button = document.createElement("button");
        button.textContent = `screenshot`;
        button.className = "toggle-screenshot";
        img.parentNode.insertBefore(button, img);

        button.addEventListener("click", () => {
          img.classList.toggle("show");
          button.textContent = img.classList.contains("show") ? `hide screenshot` : `screenshot`;
        });
      });
    },
  },
];
