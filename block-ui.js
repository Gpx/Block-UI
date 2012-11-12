;(function (window, document, undefined) {
  
  window.blockUI = {}; // Library namespace

  var openBlocks = 0,                                  // Counter fon open blocks
      blockDiv = document.createElement('div'),        // Blocking div
      messageElement = document.createElement('span'); // HTML element that displays a loading message
  
  // Set blocking div style
  blockDiv.style.height          = '100%';
  blockDiv.style.width           = '100%';
  blockDiv.style.position        = 'absolute';
  blockDiv.style.top             = '0';
  blockDiv.style.left            = '0';
  blockDiv.style.backgroundColor = 'rgba(255, 0, 0, .5)';
  blockDiv.style.display         = 'none';
  blockDiv.style.verticalAlign   = 'middle';
  blockDiv.style.textAlign       = 'right';
  
  // Set message element style
  messageElement.innerText = 'Loading...';
  messageElement.style.padding = '2px 15px';
  messageElement.style.backgroundColor = 'rgba(255, 0, 0, .5)';
  messageElement.style.borderBottomLeftRadius = '5px';
  
  blockDiv.appendChild(messageElement);
  document.body.appendChild(blockDiv);

  var showBlockDiv = function () {
    /** Display the blocking div */
    blockDiv.style.display = 'block';
  };

  var hideBlockDiv = function () {
    /** Hide the blocking div */
    blockDiv.style.display = 'none';
  };

  // Public methods

  window.blockUI.setBackground = function ( r, g, b, a ) {
    /** Set the background color */
    blockDiv.style.backgroundColor = 'rgba('+r+', '+g+', '+b+', '+a+')';
    messageElement.style.backgroundColor = 'rgba('+r+', '+g+', '+b+', 1)';
  };

  window.blockUI.block = function () {
    /** Add one block */
    if ( ++openBlocks === 1 ) {
      showBlockDiv();
    };
  };

  window.blockUI.unblock = function () {
    /** Remove one block */
    if ( --openBlocks < 0 ) {
      openBlocks = 0;
    };
    
    if ( openBlocks === 0 ) {
      hideBlockDiv();
    };
  };

  window.blockUI.unblockAll = function () {
    /** Unblock everything */
    openBlocks = 0;
    hideBlockDiv();
  };

})(window, window.document);