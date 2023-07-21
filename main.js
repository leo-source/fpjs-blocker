import './style.css'
document.querySelector('#app').innerHTML = `
        <div class="checkbox-block">
       
        <input type="checkbox" id="myCheckbox">
        Block FPJS
      </div>
`

document.addEventListener("DOMContentLoaded", () => {
    const checkbox = document.querySelector("#myCheckbox");
    if (checkbox) {
        const savedCheckboxValue = localStorage.getItem("myCheckboxValue");
        checkbox.checked = savedCheckboxValue === 'true';
        if (savedCheckboxValue === 'true'){
            enableRule()
        }

        checkbox.addEventListener("change", handleCheckboxChange);
    }

    function handleCheckboxChange() {
        localStorage.setItem("myCheckboxValue", checkbox.checked);

        if (checkbox.checked) {
            enableRule()

        } else {
            disableRule()
        }
    }

    function disableRule() {
        chrome.declarativeNetRequest.updateEnabledRulesets(
            {
                disableRulesetIds: ["ruleset_1"],
            },
            () => {}
        );
    }

    function enableRule() {
        chrome.declarativeNetRequest.updateEnabledRulesets(
            {
                enableRulesetIds: ["ruleset_1"],
            },
            () => {}
        );
    }
});