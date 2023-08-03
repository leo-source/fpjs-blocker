import './style.css';
document.querySelector('#app').innerHTML = `
        <div class="checkbox-block">
        <input type="checkbox" id="myCheckbox">
        Block FPJS
      </div>
`;

document.addEventListener('DOMContentLoaded', () => {
  const checkbox = document.querySelector('#myCheckbox');
  if (checkbox) {
    const blockFPJS = localStorage.getItem('blockFPJS');
    const isBlocked = blockFPJS === 'true';
    checkbox.checked = isBlocked;

    if (isBlocked) {
      enableRule();
    }

    checkbox.addEventListener('change', handleCheckboxChange);
  }

  function handleCheckboxChange() {
    localStorage.setItem('blockFPJS', checkbox.checked);

    if (checkbox.checked) {
      enableRule();
    } else {
      disableRule();
    }
  }

  function disableRule() {
    chrome.declarativeNetRequest.updateEnabledRulesets(
      {
        disableRulesetIds: ['block_fpjs'],
      },
      () => {
        console.log('block_fpjs rule is disabled');
      },
    );
  }

  function enableRule() {
    chrome.declarativeNetRequest.updateEnabledRulesets(
      {
        enableRulesetIds: ['block_fpjs'],
      },
      () => {
        console.log('block_fpjs rule is enabled');
      },
    );
  }
});
