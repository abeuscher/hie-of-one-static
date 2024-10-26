// diagram.js

import { dia, shapes } from "@joint/core";

import { layout } from "./diagram-layout";

const createDiagram = (elements) => {
  if (!elements || elements.length === 0) return;

  const container = elements[0];

  // Make container responsive
  container.style.width = "100%";
  container.style.overflow = "hidden";

  // Create namespace for the shapes
  const namespace = {
    standard: shapes.standard,
  };

  const graph = new dia.Graph({}, { cellNamespace: namespace });

  // Initial paper setup with placeholder dimensions
  const paper = new dia.Paper({
    el: container,
    model: graph,
    width: 1000, // This will be updated
    height: 800, // This will be updated
    gridSize: 10,
    drawGrid: true,
    background: {
      color: "white",
    },
    cellViewNamespace: namespace,
    interactive: {
      elementMove: true,
      addLinkFromMagnet: false,
    },
  });

  // Load the initial layout
  graph.fromJSON(layout);

  // Function to make diagram responsive
  const resizeDiagram = () => {
    const containerWidth = container.clientWidth;
    const originalWidth = 1000; // Original diagram width
    const originalHeight = 800; // Original diagram height

    // Calculate scale based on container width
    const scale = Math.min(1, containerWidth / originalWidth);

    // Update paper dimensions
    paper.setDimensions(containerWidth, originalHeight * scale);

    // Scale the diagram content
    paper.scale(scale, scale);

    // Center the content
    const tx = (containerWidth - originalWidth * scale) / 2;
    paper.translate(tx, 0);
  };

  // Initial resize
  resizeDiagram();

  // Add window resize listener
  const debouncedResize = debounce(() => {
    resizeDiagram();
  }, 250);

  window.addEventListener("resize", debouncedResize);

  // Debounce helper function
  function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  // Rest of your code (buttons, save functionality, etc.)
  const buttonContainer = document.createElement("div");
  buttonContainer.style.marginBottom = "10px";
  buttonContainer.style.width = "100%";
  buttonContainer.style.overflowX = "auto";
  buttonContainer.style.whiteSpace = "nowrap";

  // Make buttons container responsive
  const buttonsWrapper = document.createElement("div");
  buttonsWrapper.style.display = "flex";
  buttonsWrapper.style.gap = "8px";
  buttonsWrapper.style.flexWrap = "wrap";
  buttonContainer.appendChild(buttonsWrapper);

  const saveButton = document.createElement("button");
  saveButton.textContent = "Export Layout";
  saveButton.onclick = () => {
    const savedLayout = graph.toJSON();
    const dataStr = JSON.stringify(savedLayout, null, 2);
    const dataUri = "data:application/json;charset=utf-8," + encodeURIComponent(dataStr);

    const exportLink = document.createElement("a");
    exportLink.setAttribute("href", dataUri);
    exportLink.setAttribute("download", "diagram-layout.json");
    exportLink.click();
  };
  buttonsWrapper.appendChild(saveButton);

  const zoomInButton = document.createElement("button");
  zoomInButton.textContent = "Zoom In";
  zoomInButton.onclick = () => {
    const currentScale = paper.scale().sx;
    paper.scale(currentScale * 1.1);
  };
  buttonsWrapper.appendChild(zoomInButton);

  const zoomOutButton = document.createElement("button");
  zoomOutButton.textContent = "Zoom Out";
  zoomOutButton.onclick = () => {
    const currentScale = paper.scale().sx;
    paper.scale(currentScale / 1.1);
  };
  buttonsWrapper.appendChild(zoomOutButton);

  const resetButton = document.createElement("button");
  resetButton.textContent = "Reset View";
  resetButton.onclick = () => {
    resizeDiagram(); // Use the responsive resize function instead of fixed scale
  };
  buttonsWrapper.appendChild(resetButton);

  container.parentNode.insertBefore(buttonContainer, container);

  return {
    paper,
    graph,
    resizeDiagram, // Expose the resize function
  };
};

export default createDiagram;
