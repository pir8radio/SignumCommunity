
  var containerId = "buzzsprout-player-9472114"
  var buzzsproutPlayerContainer = document.getElementById(containerId);

  function renderBuzzsproutPlayerHTML() {
    return unescape("\n\n<iframe src=\"https://www.buzzsprout.com/1762199/9472114-smart-contracts-alternatives-to-ethereum-part-2?client_source=small_player&amp;iframe=true&amp;referrer=https%3A%2F%2Fwww.buzzsprout.com%2F1762199%2F9472114-smart-contracts-alternatives-to-ethereum-part-2.js%3Fcontainer_id%3Dbuzzsprout-player-9472114%26player%3Dsmall\" loading=\"lazy\" width=\"100%\" height=\"200\" frameborder=\"0\" scrolling=\"no\" title=\"BPSAA Podcast, Smart Contracts: Alternatives to Ethereum Part 2\"><\/iframe>\n\n\n"); 
  }

  if (buzzsproutPlayerContainer) {
    buzzsproutPlayerContainer.innerHTML = renderBuzzsproutPlayerHTML();
  } else {
    document.write(renderBuzzsproutPlayerHTML());
  }

