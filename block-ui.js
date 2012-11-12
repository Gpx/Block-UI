;(function (window, document, undefined) {
  
  window.blockUI = {}; // Library namespace

  var openBlocks = 0, // Counter fon open blocks
      blockDiv = document.createElement('div'); // Blocking div
  
  // Set blocking div style and append it to the <body>
  blockDiv.style.height          = '100%';
  blockDiv.style.width           = '100%';
  blockDiv.style.position        = 'absolute';
  blockDiv.style.top             = '0';
  blockDiv.style.left            = '0';
  blockDiv.style.backgroundColor = 'rgba(255, 0, 0, .5)';
  blockDiv.style.display         = 'none';

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
    blockDiv.style.backgroundColor = 'rgba('+r+', '+g+', '+b+', '+a+')';
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